import React, { StrictMode } from "react";
// This line imports React and StrictMode from the "react" library.

import { createRoot } from "react-dom/client";
// This line imports the createRoot function from the client module of the "react-dom" library.

import "./styles.css";
// This line imports a CSS file named "styles.css" to apply styles to the components.

import App from "./App";
// This line imports the main component of the application from the "App.js" file.

const root = createRoot(document.getElementById("root"));
// This line creates a root element for rendering React components, typically associated with an HTML element with the id "root".

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// This section renders the main component of the application within a <StrictMode> component.
// StrictMode is a tool for highlighting potential problems in the application's code during development.
// The <App /> component is rendered within StrictMode.
