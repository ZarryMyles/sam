import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import {
  Error,
  About,
  Works,
  WorkOverview,
  BillEasyPage,
  BillEasyVisual,
  HappilyEver,
  SmartVision,
} from "./pages";
// import Scrollbar from "./components/Scrollbar";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Scrollbar
  //   className="min-h-screen"
  //   autoHide
  //   autoHideTimeout={1000}
  //   autoHideDuration={500}
  // >
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      {/* <Route path="works" element={<Works />}>
        <Route path="billeasy" element={<BillEasyPage />} />
      </Route> */}
      {/* works */}
      <Route path="billeasy" element={<BillEasyPage />} />
      <Route path="billeasy-visual-design" element={<BillEasyVisual />} />
      <Route path="happilyever" element={<HappilyEver />} />
      <Route path="smartvision" element={<SmartVision />} />

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  // </Scrollbar>
);
