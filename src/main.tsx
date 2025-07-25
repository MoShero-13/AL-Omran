import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/i18n.tsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.ts";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
