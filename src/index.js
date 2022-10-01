import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";
import "./components/style.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Counter />
  </StrictMode>
);
