import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Success from "./components/Success";
import Terms from "./components/Terms";

// ✅ Import the Ticket Selection Component
import TicketSelection from "./components/TicketSelection";

import "./App.css";

/* 👉 Home Page Layout */
function Home() {
  const handleTicketSelect = (ticket) => {
    console.log("Selected:", ticket);
    // You can later navigate to a booking form
  };

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      
      {/* Ticket Selection - Dark Premium Section */}
      <TicketSelection onSelect={handleTicketSelect} />

      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ MAIN PAGE */}
        <Route path="/" element={<Home />} />

        {/* ✅ SUCCESS PAGE */}
        <Route path="/success" element={<Success />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;