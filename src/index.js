import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";

import "./index.css";
import "./sass/layout.module.scss";

import App from "./components/App";
import SalaryCaculator from "./components/SalaryCalculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route exact index element={<SalaryCaculator />} />
          <Route exact path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
