import React, { useState } from "react";
import axios from "axios";

export default function LoginModal({ close, setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    newPassword: "",
  });

  /* ================= LOGIN / REGISTER ================= */
  const handleSubmit = async () => {
    try {
      let payload = {};

      if (isLogin) {
        payload = {
          email: form.email || null,
          phone: form.phone || null,
          password: form.password,
        };
      } else {
        payload = form;
      }

      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const res = await axios.post(url, payload);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      setUser(res.data.user);

      alert("✅ Success!");
      close();

    } catch (err) {
      alert(err.response?.data?.error || "Error");
    }
  };

  /* ================= VERIFY USER ================= */
  const handleVerifyUser = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        {
          email: form.email,
          phone: form.phone,
        }
      );

      alert("✅ User verified");
      setStep(2);

    } catch (err) {
      alert("User not found");
    }
  };

  /* ================= RESET PASSWORD ================= */
  const handleResetPassword = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/reset-password",
        {
          email: form.email,
          phone: form.phone,
          newPassword: form.newPassword,
        }
      );

      alert("🎉 Password updated");

      setIsForgot(false);
      setStep(1);

    } catch (err) {
      alert("Reset failed");
    }
  };

  return (
    <div className="modal" onClick={close}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <span className="close-btn" onClick={close}>✕</span>

        <h2>
          {isForgot
            ? step === 1 ? "Verify Account" : "Reset Password"
            : isLogin ? "Login" : "Register"}
        </h2>

        {/* 🔐 FORGOT PASSWORD */}
        {isForgot ? (
          <>
            {step === 1 ? (
              <>
                <input
                  placeholder="Email"
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
                <input
                  placeholder="Phone"
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
                <button onClick={handleVerifyUser}>Verify</button>
              </>
            ) : (
              <>
                <input
                  placeholder="New Password"
                  type="password"
                  onChange={(e) =>
                    setForm({ ...form, newPassword: e.target.value })
                  }
                />
                <button onClick={handleResetPassword}>
                  Reset Password
                </button>
              </>
            )}

            <p onClick={() => setIsForgot(false)}>Back to Login</p>
          </>
        ) : (
          <>
            {!isLogin && (
              <input
                placeholder="Name"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            )}

            <input
              placeholder="Email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            {!isLogin && (
              <input
                placeholder="Phone"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            )}

            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button onClick={handleSubmit}>
              {isLogin ? "Login" : "Register"}
            </button>

            {isLogin && (
              <p onClick={() => setIsForgot(true)}>
                Forgot Password?
              </p>
            )}

            <p onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create account" : "Already have account?"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}