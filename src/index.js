import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// import fonts

import "./assets/fonts/FiraSans/FiraSans-Regular.ttf";
import "./assets/fonts/FiraSans/FiraSans-Light.ttf";
import "./assets/fonts/Oswald/Oswald-Regular.ttf";
import "./assets/fonts/Oswald/Oswald-Bold.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/softryzen-test-task">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
