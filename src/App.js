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
      x: mousePos.x - 14,
      y: mousePos.y - 14,
      bounce: 0,
    },
    text: {
      height: 80,
      width: 80,
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
      bounce: 0,
    },
    secondary: {
      x: mousePos.x - 14,
      y: mousePos.y - 14,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
      bounce: 0,
    },
  };

  const textEnter = () => setcursorVariant("text");
  const imageEnter = () => setcursorVariant("secondary");
  const textLeave = () => setcursorVariant("default");

  return (
    <div>
      <>
        <Navbar
          imageEnter={imageEnter}
          textLeave={textLeave}
          textEnter={textEnter}
        />
        <div className="  flex flex-col items-center justify-center">
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
