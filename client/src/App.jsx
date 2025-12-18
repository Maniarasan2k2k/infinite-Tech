import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HTML from "./pages/Html";
import CSS from "./pages/Css";
import JS from "./pages/js";
import About from "./pages/About";
import FAQ from "./pages/Faq";
import Stickyfooot from './pages/StickyFoot'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<HTML />} />
      <Route path="/css" element={<CSS />} />
      <Route path="/js" element={<JS />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/foot" element={<Stickyfooot/>} />
    </Routes>
  );
}

export default App;
