import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JS from "./pages/JS";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<HTML />} />
      <Route path="/css" element={<CSS />} />
      <Route path="/js" element={<JS />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
