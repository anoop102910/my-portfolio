import React, { useEffect, Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import api from "./utils/api";
import "@fontsource/suse";
import "@fontsource/nunito";
import "@fontsource/spirax";
import "@fontsource/roboto";
import "@fontsource/playfair-display";
import "@fontsource/poppins";
const Main = lazy(() => import("./pages/home/Main"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loader } from "lucide-react";

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
        <Suspense fallback={<div className="flex justify-center items-center h-screen"><Loader className="animate-spin text-primary" /></div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
