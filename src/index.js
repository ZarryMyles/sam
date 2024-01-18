import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "animate.css/animate.min.css";
import App from "./App";
import {
  Error,
  About,
  Design,
  // BillEasyPage,
  // SmartVision,
  // BillEasyVisual,
  // HappilyEver,
} from "./pages";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="design" element={<Design />} />
      {/* works */}
      {/* <Route path="billeasy" element={<BillEasyPage />} />
      <Route path="smart-vision" element={<SmartVision />} />
      <Route path="billeasy-visual-design" element={<BillEasyVisual />} />
      <Route path="happilyever" element={<HappilyEver />} />
      <Route path="smartvision" element={<SmartVision />} /> */}

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
