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

// ✅ Import the new Ticket Selection Component
import TicketSelection from "./components/TicketSelection";

import "./App.css";

/* 👉 Home Page Layout */
function Home() {
  const handleTicketSelect = (ticket) => {
    console.log("User selected ticket:", ticket);
    
    // You can later add navigation to booking form or store in state
    // For now, showing alert (you can improve this later)
    alert(`🎟️ You selected ${ticket.name} Ticket - ₹${ticket.price.toLocaleString('en-IN')}\n\nProceeding to booking...`);
    
    // Future improvement: Navigate to booking page with selected ticket
    // navigate('/booking', { state: { selectedTicket: ticket } });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      
      {/* ✅ NEW TICKET SELECTION SECTION */}
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
        {/* ✅ MAIN PAGE with Ticket Selection */}
        <Route path="/" element={<Home />} />

        {/* ✅ SUCCESS PAGE */}
        <Route path="/success" element={<Success />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;