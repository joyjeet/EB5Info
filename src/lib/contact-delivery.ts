import { google } from "googleapis";
import nodemailer from "nodemailer";

export type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  visaStatus: string;
  question: string;
  inquiryInterests: string[];
  consent: string;
  locale: string;
  submittedAt: string;
};

type DeliveryResult = {
  deliveredToEmail: boolean;
  appendedToSheets: boolean;
};

function hasRealValue(value: string | undefined) {
  if (!value) {
    return false;
  }

  const normalized = value.trim();

  if (!normalized) {
    return false;
  }

  return !normalized.includes("replace-with-") && !normalized.includes("example.com");
}

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

function hasEmailConfig() {
  return ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "CONTACT_TO_EMAIL"].every((name) => hasRealValue(process.env[name]));
}

function hasGoogleSheetsConfig() {
  return ["GOOGLE_SERVICE_ACCOUNT_EMAIL", "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY", "GOOGLE_SHEETS_SPREADSHEET_ID"].every((name) =>
    hasRealValue(process.env[name]),
  );
}

function formatSubmissionText(submission: ContactSubmission) {
  return [
    `Submitted at: ${submission.submittedAt}`,
    `Locale: ${submission.locale}`,
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone || "Not provided"}`,
    `Visa status: ${submission.visaStatus || "Not provided"}`,
    `Interests: ${submission.inquiryInterests.join(", ")}`,
    "",
    "Question:",
    submission.question,
  ].join("\n");
}

function formatSubmissionHtml(submission: ContactSubmission) {
  const interests = submission.inquiryInterests.map((entry) => `<li>${entry}</li>`).join("");

  return `
    <h2>New EB-5 contact submission</h2>
    <p><strong>Submitted at:</strong> ${submission.submittedAt}</p>
    <p><strong>Locale:</strong> ${submission.locale}</p>
    <p><strong>Name:</strong> ${submission.name}</p>
    <p><strong>Email:</strong> ${submission.email}</p>
    <p><strong>Phone:</strong> ${submission.phone || "Not provided"}</p>
    <p><strong>Visa status:</strong> ${submission.visaStatus || "Not provided"}</p>
    <p><strong>Interests:</strong></p>
    <ul>${interests}</ul>
    <p><strong>Question:</strong></p>
    <p>${submission.question.replace(/\n/g, "<br />")}</p>
  `;
}

async function sendInquiryEmail(submission: ContactSubmission) {
  const host = getRequiredEnv("SMTP_HOST");
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASS");
  const to = getRequiredEnv("CONTACT_TO_EMAIL");
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: submission.email,
    subject: `New EB-5 inquiry from ${submission.name}`,
    text: formatSubmissionText(submission),
    html: formatSubmissionHtml(submission),
  });
}

async function appendInquiryToSheet(submission: ContactSubmission) {
  const clientEmail = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY").replace(/\\n/g, "\n");
  const spreadsheetId = getRequiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
  const worksheetName = process.env.GOOGLE_SHEETS_WORKSHEET_NAME?.trim() || "Submissions";

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${worksheetName}!A:I`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          submission.submittedAt,
          submission.locale,
          submission.name,
          submission.email,
          submission.phone,
          submission.visaStatus,
          submission.inquiryInterests.join(", "),
          submission.question,
          submission.consent,
        ],
      ],
    },
  });
}

export async function deliverContactSubmission(submission: ContactSubmission): Promise<DeliveryResult> {
  const tasks: Array<Promise<"email" | "sheets">> = [];

  if (hasEmailConfig()) {
    tasks.push(sendInquiryEmail(submission).then(() => "email" as const));
  }

  if (hasGoogleSheetsConfig()) {
    tasks.push(appendInquiryToSheet(submission).then(() => "sheets" as const));
  }

  if (tasks.length === 0) {
    throw new Error("No contact delivery integrations are configured.");
  }

  const results = await Promise.allSettled(tasks);
  const deliveredToEmail = results.some((result) => result.status === "fulfilled" && result.value === "email");
  const appendedToSheets = results.some((result) => result.status === "fulfilled" && result.value === "sheets");

  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error("Contact submission delivery failed", result.reason);
    }
  });

  if (!deliveredToEmail && !appendedToSheets) {
    throw new Error("Contact submission could not be delivered to any configured destination.");
  }

  return {
    deliveredToEmail,
    appendedToSheets,
  };
}