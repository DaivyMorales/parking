import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CompanyContextProvider } from "./Context/CompanyContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CompanyContextProvider>
      <App />
    </CompanyContextProvider>
  </React.StrictMode>
);
