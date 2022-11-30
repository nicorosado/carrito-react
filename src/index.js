import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA47n5QIFYswIymiBTM7jJ4o5dja3uCWNM",
  authDomain: "carritospa-react.firebaseapp.com",
  projectId: "carritospa-react",
  storageBucket: "carritospa-react.appspot.com",
  messagingSenderId: "603399426000",
  appId: "1:603399426000:web:31f685bdcf4d1dce3b33d5",
};

initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
