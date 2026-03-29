import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <div className="not-found-card">
        <p className="section-kicker">Page not found</p>
        <h1>The page you requested is not available.</h1>
        <p>Return to the English landing page to continue reviewing EB-5 information.</p>
        <Link className="primary-button" href="/en">
          Go to EB5 Info
        </Link>
      </div>
    </main>
  );
}