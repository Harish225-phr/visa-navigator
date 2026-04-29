import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import "./styles.css";

// Create router with dehydrated state from SSR
const router = getRouter();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found");
}

// Get any dehydrated state from the window if available (for SSR hydration)
const dehydratedState = (window as any).__dehydratedState || undefined;

// Start the router with optional dehydrated state
router.hydrate(dehydratedState);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);