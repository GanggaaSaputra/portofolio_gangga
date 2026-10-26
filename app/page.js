"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Certifications from "./components/Certifications";
import Publication from "./components/Publication";
import Work from "./components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.theme;
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    window.requestAnimationFrame(() => {
      setIsDarkMode(savedTheme === "dark" || (!savedTheme && prefersDarkMode));
      setIsMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode, isMounted]); // Masukkan isMounted ke dependency array

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Certifications isDarkMode={isDarkMode} />
      <Publication />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
