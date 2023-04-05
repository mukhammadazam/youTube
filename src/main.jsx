import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Myprovayder } from "./context/Context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Myprovayder>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Myprovayder>
  </React.StrictMode>
);
