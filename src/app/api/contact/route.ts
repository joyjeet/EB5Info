import { NextResponse } from "next/server";

import { deliverContactSubmission } from "@/lib/contact-delivery";

export const runtime = "nodejs";

type InquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  visaStatus?: string;
  question?: string;
  inquiryInterests?: string[] | string;
  consent?: string;
  locale?: string;
};

function sanitize(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function sanitizeList(value: unknown, maxItems: number, maxLength: number) {
  if (!Array.isArray(value)) {
    return [] as string[];
  }

  return value
    .filter((entry): entry is string => typeof entry === "string")
    .map((entry) => entry.trim().slice(0, maxLength))
    .filter(Boolean)
    .slice(0, maxItems);
}

export async function POST(request: Request) {
  const body = (await request.json()) as InquiryPayload;

  const submission = {
    name: sanitize(body.name, 120),
    email: sanitize(body.email, 160),
    phone: sanitize(body.phone, 40),
    visaStatus: sanitize(body.visaStatus, 120),
    question: sanitize(body.question, 2000),
    inquiryInterests: sanitizeList(body.inquiryInterests, 8, 160),
    consent: sanitize(body.consent, 10),
    locale: sanitize(body.locale, 10) || "en",
    submittedAt: new Date().toISOString(),
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !submission.name ||
    !submission.email ||
    !emailPattern.test(submission.email) ||
    submission.question.length < 20 ||
    submission.inquiryInterests.length === 0 ||
    submission.consent !== "yes"
  ) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  try {
    const result = await deliverContactSubmission(submission);

    return NextResponse.json({ ok: true, delivery: result });
  } catch (error) {
    console.error("Contact submission failed", error);

    return NextResponse.json({ error: "Submission delivery failed" }, { status: 500 });
  }
}