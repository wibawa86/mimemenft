import { ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Polygon}>
    <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
