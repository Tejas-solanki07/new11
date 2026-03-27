const express = require("express");
const router = express.Router();

const Cashfree = require("cashfree-pg").Cashfree;
const nodemailer = require("nodemailer");
require("dotenv").config();

/* 🔐 CASHFREE CONFIG */
Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
Cashfree.XEnvironment = process.env.CASHFREE_ENV || "sandbox";

/* 📧 EMAIL SETUP */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =========================
   ✅ CREATE ORDER
========================= */
router.post("/create-order", async (req, res) => {
  try {
    const { email } = req.body;

    const orderId = "order_" + Date.now();

    const request = {
      order_id: orderId,
      order_amount: 999,
      order_currency: "INR",
      customer_details: {
        customer_id: "cust_" + Date.now(),
        customer_email: email,
        customer_phone: "9999999999",
      },
      order_meta: {
        return_url: "http://localhost:3000/success?order_id={order_id}",
      },
    };

    const response = await Cashfree.PGCreateOrder("2023-08-01", request);

    res.json({
      orderId,
      paymentSessionId: response.data.payment_session_id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

/* =========================
   ✅ VERIFY PAYMENT
========================= */
router.post("/verify", async (req, res) => {
  try {
    const { orderId, email, name } = req.body;

    const response = await Cashfree.PGFetchOrder("2023-08-01", orderId);

    if (response.data.order_status !== "PAID") {
      return res.json({ status: "failed" });
    }

    const ticketId = "CALYX-" + Math.floor(10000 + Math.random() * 90000);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: `${email}, Info.prolongprofessional@gmail.com`,
      subject: "🎟️ Your Seat is Reserved - Kostya Live",
      html: `
        <h2>✂️ Your Seat is Reserved!</h2>
        <p>Hello ${name},</p>
        <p>Your registration is confirmed.</p>

        <h3>📅 Event Details</h3>
        <p>Date: 18 May 2026</p>
        <p>Time: 3:00 PM</p>
        <p>Venue: Jio Convention Centre, Mumbai</p>

        <h3>🎟️ Ticket ID: ${ticketId}</h3>
      `,
    });

    res.json({ status: "success", ticketId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Verification failed" });
  }
});

module.exports = router;
