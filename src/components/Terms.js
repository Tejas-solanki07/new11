import React from "react";

export default function TermsPage() {
  return (
    <div className="terms-page">

      <h1>📜 Terms & Conditions</h1>

      <div className="terms-box">

        <h3>1. Registration & Entry</h3>
        <p>Entry is allowed only with valid ticket confirmation.</p>
        <p>Tickets are non-refundable unless event is canceled.</p>

        <h3>2. Cancellation Policy</h3>
        <p>No refunds for no-shows.</p>
        <p>Event may be rescheduled if required.</p>

        <h3>3. Event Changes</h3>
        <p>Organizer may change venue, timing, or schedule.</p>

        <h3>4. Code of Conduct</h3>
        <p>Professional behavior is expected.</p>

        <h3>5. Recording & Media</h3>
        <p>You consent to photography & video usage.</p>

        <h3>6. Intellectual Property</h3>
        <p>Recording or copying content is prohibited.</p>

        <h3>7. Liability</h3>
        <p>Organizer not responsible for personal loss.</p>

        <h3>8. Force Majeure</h3>
        <p>Event may be canceled due to unforeseen situations.</p>

        <div className="highlight-note">
          👉 Seats are limited and allocated on first-come, first-served basis.
        </div>

      </div>
    </div>
  );
}