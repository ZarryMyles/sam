import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Error, About } from "./pages";
import NavTest from "./pages/NavTest";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="nav" element={<NavTest />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
