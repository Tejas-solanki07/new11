import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import logo from "../images/7.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Load user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Calyx Logo" />
      </div>

      <div className="nav-center">📍 Ahmedabad</div>

      <div className="nav-right">
        <span>🔍</span>

        {/* 🔥 CONDITIONAL BUTTON */}
        {user ? (
          <button className="login-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={() => setOpen(true)}>
            Login
          </button>
        )}
      </div>

      {/* MODAL */}
      {open && <LoginModal close={() => setOpen(false)} setUser={setUser} />}
    </div>
  );
}
