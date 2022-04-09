import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import Home from "./components/home/Index";
import Menu from "./components/menu/Index";
import About from "./components/about/Index";
import Work from "./components/work/Index";
import Resume from "./components/resume/Index";
import Contact from "./components/contact/Index";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
