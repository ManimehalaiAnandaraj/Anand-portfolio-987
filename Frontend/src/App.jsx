import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Summary from "./components/Summary.jsx";
import Ledger from "./components/Ledger.jsx";
import Expertise from "./components/Expertise.jsx";
import Recognition from "./components/Recognition.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Summary />
      <Ledger />
      <Expertise />
      <Recognition />
      <Contact />
      <Footer />
    </div>
  );
}
