import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProvider from "./context/AppContext";
import ItemProvider from "./context/itemContext";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
