import { useEffect } from "react";
import axios from "axios";

export default function Success() {
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        const user = JSON.parse(storedUser);

        const orderId = new URLSearchParams(window.location.search).get("order_id");

        const res = await axios.post(
          "http://localhost:5000/api/payment/verify",
          {
            orderId,
            email: user.email,
            name: user.name,
          }
        );

        if (res.data.status === "success") {
          alert("🎉 Payment Successful!");
        } else {
          alert("❌ Payment Failed");
        }

      } catch (err) {
        console.error(err);
      }
    };

    verifyPayment();
  }, []);

  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h2>Processing Payment...</h2>
    </div>
  );
}