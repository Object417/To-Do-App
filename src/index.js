import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App'
import Header from './components/Header';

const
  rootElement = document.querySelector("#root"),
  root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>
)
