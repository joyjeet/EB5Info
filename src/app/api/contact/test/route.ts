import { NextResponse } from "next/server";

import { deliverContactSubmission } from "@/lib/contact-delivery";

export const runtime = "nodejs";

function isAuthorized(request: Request) {
  const expectedSecret = process.env.CONTACT_TEST_SECRET?.trim();

  if (!expectedSecret) {
    return process.env.NODE_ENV !== "production";
  }

  return request.headers.get("x-contact-test-secret") === expectedSecret;
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const timestamp = new Date().toISOString();
  const submission = {
    name: "Test Submission",
    email: "test@eb5infoguide.com",
    phone: "555-0100",
    visaStatus: "H-1B",
    question: `Connectivity test submitted at ${timestamp}`,
    inquiryInterests: ["Test delivery", "Google Sheets check"],
    consent: "yes",
    locale: "en",
    submittedAt: timestamp,
  };

  try {
    const delivery = await deliverContactSubmission(submission);

    return NextResponse.json({ ok: true, delivery, submission });
  } catch (error) {
    console.error("Contact test delivery failed", error);

    return NextResponse.json({ error: "Test delivery failed" }, { status: 500 });
  }
}