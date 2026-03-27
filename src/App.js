import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Success from "./components/Success"; // ✅ ADD THIS
import Terms from "./components/Terms"; // ✅ ADD THIS

import "./App.css";

/* 👉 Home Page Layout */
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Highlights />
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