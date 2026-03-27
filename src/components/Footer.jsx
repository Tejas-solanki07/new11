import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <p>© 2026 CALYX Hair Care. All rights reserved.</p>
      {/* ✅ WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/918780933566?text=Hi%20I%20want%20to%20book%20Kostya%20event"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
