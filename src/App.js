import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import "./vishal.css";
import {
  Work,
  WorkLogos,
  SocialProof,
  GetInTouch,
  Footer,
} from "./components/";
import Navbar from "./components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setcursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      bounce: 0,
    },
    text: {
      height: 50,
      width: 50,
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
      bounce: 0,
    },
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
      bounce: 0,
    },
  };

  const textEnter = () => setcursorVariant("text");
  const imageEnter = () => setcursorVariant("secondary");
  const textLeave = () => setcursorVariant("default");

  // setting dark or light theme
  const setTheme = (theme = "light") => {
    const html = document.querySelector("html").classList;
    html.remove("dark");
    html.remove("light");
    html.add(theme);
  };
  // observing active section
  const [activeSection, setActiveSection] = useState("home");
  let options = {
    root: document.querySelector("#sections"),
    rootMargin: "0px",
    threshold: 0.6, // percentage of the element that is visible for triggering the callback for nav
  };
  useEffect(() => {
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // console.log(entry.target.id);
        }
      });
    };
    // targets
    let observer = new IntersectionObserver(callback, options);
    let getInTouch = document.querySelector("#get-in-touch");
    let socialProof = document.querySelector("#social-proof");
    let work = document.querySelector("#work");

    observer.observe(socialProof);
    observer.observe(getInTouch);
    observer.observe(work);
    // observer.observe(keyFeatures);
    // observer.observe(services);
    // observer.observe(contact);
  }, []);
  useEffect(() => {
    console.log(activeSection);
    if (activeSection === "work") setTheme("light");
    else if (activeSection === "social-proof") setTheme("dark");
    else if (activeSection === "get-in-touch") setTheme("light");
    // else setTheme();
  }, [activeSection]);

  return (
    <div className="  dark:bg-black duration-500 transition-colors">
      <>
        <Navbar
          imageEnter={imageEnter}
          textLeave={textLeave}
          textEnter={textEnter}
        />
        <div
          id="sections"
          className="  flex flex-col items-center justify-center"
        >
          <Work
            imageEnter={imageEnter}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <WorkLogos
            imageEnter={imageEnter}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <SocialProof
            imageEnter={imageEnter}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <GetInTouch
            imageEnter={imageEnter}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <Footer
            imageEnter={imageEnter}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          {/* other sections */}

          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          />
        </div>
      </>
    </div>
  );
}

export default App;
