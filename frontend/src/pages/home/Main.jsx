import React from 'react'
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import { motion } from "framer-motion";
import Parallax from "./Parallex";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

function Main() {
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
    </div>
  )
}

export default Main
