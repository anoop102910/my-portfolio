import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import api from "./utils/api";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import { motion } from "framer-motion";
import Parallax from "./pages/Parallex";
import Experience from "./pages/Experience";
import "@fontsource/suse";
import '@fontsource/nunito'
import '@fontsource/spirax'
import '@fontsource/roboto'
import '@fontsource/playfair-display'
import '@fontsource/poppins'

function App() {
  useEffect(() => {
    const login = async () => {
      try {
        const res = await api.post("/login", {
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
        });
        const token = res.data.data;
        localStorage.setItem("token", token);
      } catch (error) {
        console.error("Login failed", error);
      }
    };
    login();
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="max-sm:p-4 overflow-y-hidden bg-bg "
      >
        <div className="sm:px-10 lg:px-[10%]">
          <Navbar />
          <Home />
          <About />
          <Experience />
        </div>
        <Parallax />
        <div className="sm:px-10 lg:px-[10%]">
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
        <Footer />
      </motion.div>
      <Toaster />
    </div>
  );
}

export default App;
