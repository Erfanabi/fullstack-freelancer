import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import DarkModeContext from "./context/DarkModeContext.jsx";
import OpenSidebarContext from "./context/OpenSidebarContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <DarkModeContext>
        <OpenSidebarContext>
          <NextUIProvider>
            <QueryClientProvider client={queryClient}>
              <App />
              <Toaster />
            </QueryClientProvider>
          </NextUIProvider>
        </OpenSidebarContext>
      </DarkModeContext>
    </React.StrictMode>
  </BrowserRouter>
);
