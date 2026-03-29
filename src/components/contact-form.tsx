"use client";

import { FormEvent, useState } from "react";

import type { Locale } from "@/lib/i18n";
import type { SiteCopy } from "@/lib/site-content";

type ContactFormProps = {
  copy: SiteCopy["contact"];
  locale: Locale;
};

export function ContactForm({ copy, locale }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showInterestsError, setShowInterestsError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const inquiryInterests = formData
      .getAll("inquiryInterests")
      .filter((value): value is string => typeof value === "string")
      .map((value) => value.trim())
      .filter(Boolean);

    if (inquiryInterests.length === 0) {
      setShowInterestsError(true);
      setStatus("error");
      return;
    }

    setShowInterestsError(false);
    setStatus("submitting");

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      visaStatus: formData.get("visaStatus"),
      question: formData.get("question"),
      consent: formData.get("consent"),
      inquiryInterests,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload, locale }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      event.currentTarget.reset();
      setShowInterestsError(false);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          <span>{copy.placeholders.name}</span>
          <input name="name" type="text" required maxLength={120} placeholder={copy.placeholders.name} />
        </label>
        <label>
          <span>{copy.placeholders.email}</span>
          <input name="email" type="email" required maxLength={160} placeholder={copy.placeholders.email} />
        </label>
      </div>
      <div className="field-grid">
        <label>
          <span>{copy.placeholders.phone}</span>
          <input name="phone" type="tel" maxLength={40} placeholder={copy.placeholders.phone} />
        </label>
        <label>
          <span>{copy.placeholders.visaStatus}</span>
          <input
            name="visaStatus"
            type="text"
            maxLength={120}
            placeholder={copy.placeholders.visaStatus}
          />
        </label>
      </div>
      <label>
        <span>{copy.placeholders.question}</span>
        <textarea name="question" required minLength={20} maxLength={2000} placeholder={copy.placeholders.question} />
      </label>
      <fieldset className="interest-group">
        <legend>{copy.interestsLabel}</legend>
        <p className="field-hint">{copy.interestsHint}</p>
        <div className="interest-options">
          {copy.interestOptions.map((option) => (
            <label className="interest-option" key={option}>
              <input
                name="inquiryInterests"
                type="checkbox"
                value={option}
                onChange={() => setShowInterestsError(false)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {showInterestsError ? <p className="form-error">{copy.interestsRequired}</p> : null}
      </fieldset>
      <label className="checkbox-row">
        <input name="consent" type="checkbox" value="yes" required />
        <span>{copy.consent}</span>
      </label>
      <button className="primary-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? copy.sending : copy.submit}
      </button>
      <p className="form-note">{copy.notice}</p>
      {status === "success" ? <p className="form-success">{copy.success}</p> : null}
      {status === "error" ? <p className="form-error">{copy.error}</p> : null}
    </form>
  );
}