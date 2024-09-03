import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import api from "./utils/api";
import "@fontsource/suse";
import "@fontsource/nunito";
import "@fontsource/spirax";
import "@fontsource/roboto";
import "@fontsource/playfair-display";
import "@fontsource/poppins";
import Main from "./pages/home/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const referrer = searchParams.get("refer");

    const login = async () => {
      try {
        const res = await api.post("/login", {
          referrer: referrer,
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          createdAt: new Date(),
        });
        const token = res.data.data;
        if (token) {
          localStorage.setItem("token", token);
        }
      } catch (error) {
        console.error("Login failed", error);
      }
    };
    const endSession = e => {
      e.preventDefault();
      navigator.sendBeacon("/end-session");
    };

    window.addEventListener("unload", endSession);

    login();

    return () => {
      window.removeEventListener("unload", endSession);
    };
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
