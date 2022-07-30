import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Error, About } from "./pages";
import NavTest from "./pages/NavTest";
import Scrollbar from "./components/Scrollbar";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Scrollbar
    className="min-h-screen"
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={500}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="nav" element={<NavTest />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </Scrollbar>
);
