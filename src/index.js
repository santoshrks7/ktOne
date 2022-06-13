import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ViewMore from "./components/ViewMore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<ViewMore />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
