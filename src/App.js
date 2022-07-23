import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

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
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
      bounce: 0,
    },
  };

  const textEnter = () => setcursorVariant("text");
  const imageEnter = () => setcursorVariant("secondary");
  const textLeave = () => setcursorVariant("default");

  return (
    <>
      <div className="bg-gray-300 h-screen flex items-center justify-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-black text-9xl"
        >
          Sam Port
        </h1>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
      <div className="bg-gray-300 h-screen flex items-center justify-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-black text-9xl"
        >
          Sam Port
        </h1>
        <div
          onMouseEnter={imageEnter}
          onMouseLeave={textLeave}
          class="w-full h-96 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")`,
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
