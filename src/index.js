import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

import App from "./components/App";
import SalaryCaculator from "./components/pages/SalaryCalculator";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import "./index.css";
import "./sass/layout.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route exact index element={<SalaryCaculator />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
