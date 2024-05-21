import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Rating from "./components/Rating";
import Cursor from "./components/Cursor";
import Apply from "./components/Apply";
import Browser from "./components/Browser";
import Plugin from "./components/Plugin";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Rating />
      <Cursor />
      <Apply />
      <Browser />
      <Plugin />
      <Footer />
    </>
  );
}
