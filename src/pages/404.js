import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTitle } from "../hooks/useTitle";

const Error = () => {
  useTitle("404");
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
      backgroundColor: "#d1d5db",
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
      bounce: 0,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setcursorVariant("text");
  const imageEnter = () => setcursorVariant("secondary");
  return (
    <>
      <div className=" h-screen w-full bg-brand-darkGrey text-white flex flex-col justify-center items-center">
        <div
          className="text-base md:text-8xl"
          onMouseLeave={imageEnter}
          onMouseEnter={textEnter}
        >
          404
        </div>
        <div
          className="text-xl my-4"
          onMouseLeave={imageEnter}
          onMouseEnter={textEnter}
        >
          Page Not Found. Go back to the{" "}
          <a
            href="/"
            className="rounded-md  mx-2 bg-white text-brand-darkGrey px-4 py-1"
          >
            Home
          </a>
        </div>
      </div>

      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default Error;
