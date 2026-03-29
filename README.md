# EB5 Info

EB5 Info is a multilingual Next.js website focused on educational EB-5 visa processing content for investors already in the United States. It includes compliant marketing copy, language-specific landing pages, SEO metadata, and a contact form that can send submissions by email and append them to Google Sheets.

## Features

- Server-rendered multilingual pages for English, Spanish, and Chinese
- SEO-focused metadata, sitemap, robots file, and schema markup
- Compliant intake messaging with no outcome guarantees or legal-advice claims
- Contact and question form at `/api/contact`
- SMTP email delivery for contact submissions
- Google Sheets append support for contact submissions

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Environment

Set `NEXT_PUBLIC_SITE_URL` to your production domain to generate canonical URLs and sitemap links correctly.

Copy `.env.example` to `.env.local` and configure one or both submission destinations:

### SMTP email

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

### Google Sheets

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SHEETS_WORKSHEET_NAME`

For Google Sheets, share the target spreadsheet with the service account email and create the worksheet tab named in `GOOGLE_SHEETS_WORKSHEET_NAME`.

### Optional test route secret

- `CONTACT_TEST_SECRET`

If you set `CONTACT_TEST_SECRET`, include it in the `x-contact-test-secret` header when calling `POST /api/contact/test`. Without a secret, the test route only works outside production.

Recommended header row for the worksheet:

`submittedAt, locale, name, email, phone, visaStatus, inquiryInterests, question, consent`

## Notes

- The contact endpoint now requires at least one configured delivery destination: SMTP email, Google Sheets, or both.
- If both delivery destinations are configured, the API will attempt both and treat the submission as successful if at least one destination succeeds.
- This website is informational and should still be reviewed by qualified immigration counsel before production launch.
