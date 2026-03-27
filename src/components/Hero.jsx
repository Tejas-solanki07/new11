import React from "react";
import axios from "axios";
import img2 from "../images/about4.JPG";
import video1 from "../images/video.mp4";
import img3 from "../images/about1.JPG";

export default function Hero() {
  const handlePayment = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        alert("Please login first");
        return;
      }

      const user = JSON.parse(storedUser);

      // ✅ Create order
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { email: user.email },
      );

      // 🔥 CASHFREE CHECKOUT
      const cashfree = new window.Cashfree({
        mode: "sandbox",
      });

      await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: "_modal",
      });

      // ✅ VERIFY AFTER PAYMENT
      const res = await axios.post("http://localhost:5000/api/payment/verify", {
        orderId: data.orderId,
        email: user.email,
        name: user.name,
      });

      if (res.data.status === "success") {
        alert("🎉 Payment Successful! Email Sent");
      } else {
        alert("Payment Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Payment error");
    }
  };

  return (
    <div className="hero">
      {/* LEFT IMAGES */}
      <div className="image-grid">
        {/* 🎥 VIDEO (replaces first big image) */}
        <video
          src={video1}
          className="img big videoset"
          autoPlay
          loop
          muted
          playsInline
        />

        <img src={img2} className="img" alt="" />
        <img src={img3} className="img" alt="" />
      </div>

      {/* RIGHT CARD */}
      <div className="event-card">
        <h2>
          Be The Master Of <br />
          Volume - Konstantin <br />
          Borchininov Kostya
        </h2>

        <div className="info">
          <p>📅 Event starts at 3 PM</p>
          <p>
            <a
              href="https://maps.app.goo.gl/..."
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              📍 Jio Convention Centre, Mumbai
              <span style={{ marginLeft: "5px" }}>🔗</span>
            </a>
          </p>
          <p>⏳ 4 Hours</p>
          <p>🌐 Hindi, English</p>
        </div>

        <div className="price-section">
          <span>₹ 999 onwards</span>
          <button onClick={handlePayment}>Book Tickets</button>
        </div>
      </div>
      
    </div>
  );
}
