import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import "./index.css";




// Smooth scroll restoration between pages/sections
function ScrollToTop() {
  React.useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", handleScroll);
    return () => window.removeEventListener("popstate", handleScroll);
  }, []);
  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
