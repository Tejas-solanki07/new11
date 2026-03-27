import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function FAQ() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // 👈 NEW

  const faqData = [
    {
      q: "What is the Kostya Live Event?",
      a: "Kostya Live is an exclusive in-person masterclass in Mumbai where you’ll learn advanced volume styling techniques, modern trends, and real-world client conversion strategies from an international expert."
    },
    {
      q: "Who should attend this event?",
      a: "Professional hairstylists, salon owners, hair educators, and serious learners looking to upgrade their skills."
    },
    {
      q: "What will I learn?",
      a: "Advanced volume styling, trending looks, speed & precision methods, and client pricing strategies."
    },
    {
      q: "Where is the event happening?",
      a: "The event will take place in Mumbai. Exact venue details will be shared after registration."
    },
    {
      q: "What is the duration?",
      a: "Approximately 4 hours including demonstrations."
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, all participants will receive a participation certificate."
    },
    {
      q: "Is this hands-on?",
      a: "No, this is a look & learn masterclass."
    },
    {
      q: "Are tickets transferable?",
      a: "Only with prior approval from the organizer."
    },
    {
      q: "Will I get recording?",
      a: "No, recordings are not provided."
    },
    {
      q: "How can I contact support?",
      a: "You can reach via WhatsApp or DM."
    }
  ];

  const termsData = [
    "Entry only with valid ticket. No refunds unless event is canceled.",
    "No refunds for no-shows. Event may be rescheduled.",
    "Organizer can change venue, timing, or schedule.",
    "Misconduct may lead to removal without refund.",
    "Photography allowed; you consent to media usage.",
    "Content is intellectual property. Recording prohibited.",
    "Organizer not responsible for personal loss.",
    "Event may be postponed due to force majeure."
  ];

 return (
    <div className="faq-section">

      {/* FAQ */}
      <div className="faq-toggle" onClick={() =>
        setActiveSection(activeSection === "faq" ? null : "faq")
      }>
        <span>💬 Frequently Asked Questions</span>
        <span>›</span>
      </div>

      {activeSection === "faq" && (
        <div className="faq-content">
          {faqData.map((item, i) => (
            <div key={i} className="faq-item">
              <div
                className="faq-question"
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
              >
                {item.q}
                <span>{activeIndex === i ? "−" : "+"}</span>
              </div>

              {activeIndex === i && (
                <div className="faq-answer">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TERMS */}
      <div className="faq-toggle" onClick={() =>
        setActiveSection(activeSection === "terms" ? null : "terms")
      }>
        <span>📄 Terms & Conditions</span>
        <span>›</span>
      </div>

      {activeSection === "terms" && (
        <div className="faq-content">
          {termsData.map((item, i) => (
            <div key={i} className="faq-item">
              • {item}
            </div>
          ))}

          {/* 🔥 SEE MORE BUTTON */}
          <button
            className="terms-btn"
            onClick={() => navigate("/terms")}
          >
            See Full Terms →
          </button>
        </div>
      )}
    </div>
  );
}