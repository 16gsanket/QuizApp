import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { QuizContext } from "./contexts/QuizContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizContext>
      
  <App />
    </QuizContext>
  </React.StrictMode>
);
