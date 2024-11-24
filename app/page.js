'use client'; // Add this at the top of the file if you're in the `app` directory.

import { useEffect } from "react";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";



export default async function Home() {
  useEffect(() => {
    // Ensure this code only runs on the client side
    if (typeof document !== "undefined") {
      const element = document.getElementById("example");
      console.log(element);
    }
  }, []);
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  )
};