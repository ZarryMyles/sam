import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GetInTouch, Principles, Skills, Navbar } from "../components";
import { BsDot } from "react-icons/bs";
import { useTitle } from "../hooks/useTitle";

const About = () => {
  useTitle("About");
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setcursorVariant] = useState("default");

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
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
    large: {
      height: 80,
      width: 80,
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
      bounce: 0,
    },
  };

  const textEnter = () => setcursorVariant("text");
  const imageEnter = () => setcursorVariant("secondary");
  const textLeave = () => setcursorVariant("default");
  const largeEnter = () => setcursorVariant("large");
  return (
    <>
      <Navbar
        textEnter={textEnter}
        textLeave={textLeave}
        imageEnter={imageEnter}
        defaultColor={"black"}
      />

      <div className="w-full h-auto pt-10 ">
        {/* landing section */}
        <div
          onMouseEnter={imageEnter}
          onMouseLeave={textLeave}
          class="h-auto md:h-screen  w-full  px-5 md:pr-0 md:pl-44 py-10 md:py-20 flex flex-col md:flex-row md:items-center md:justify-center"
        >
          <div class="w-full md:w-5/10 h-full flex flex-col items-start tracking-wide ">
            <div class="font-bold relative text-5xl my-5 w-full md:text-right">
              <div
                onMouseEnter={textEnter}
                onMouseLeave={imageEnter}
                class="md:-mr-10 "
              >
                Hey there!
              </div>
            </div>
            <div class="  leading-loose text-lg w-full md:w-3/4 text-gray-500 my-10">
              I???m Shradha, a fresh graduate looking to make my mark in the world
              of product design. <br /> A Product designer who works with the
              purpose, I indulge myself in{" "}
              <span class="font-bold">
                understanding and studying people???s patterns.
              </span>{" "}
              From an early stage, I have believed that successful designs are
              people focused. Hence, I am keen on working with projects having
              both{" "}
              <span class="font-bold">
                technological and humanistic values.
              </span>
            </div>
            <div
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              class="font-bold text-xl  flex items-center "
            >
              <div>Shradha</div>
              <div
                style={{
                  height: "1px",
                }}
                class="  ml-4 mr-1  w-20 bg-black"
              />
              <BsDot className="text-2xl" />
            </div>
            <div class="text-lg text-gray-500">Digital Artist</div>
          </div>
          <div class=" md:w-5/10 h-92 md:h-full bg-brand-lightGrey flex justify-center items-center md:p-20">
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1610398000003-1b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`,
                // height: "120px",
              }}
              class="bg-center bg-red-200 bg-no-repeat bg-cover    h-full  w-full"
            />
          </div>
        </div>
        <Principles
          textEnter={textEnter}
          textLeave={textLeave}
          imageEnter={imageEnter}
        />
        <Skills
          textEnter={textEnter}
          textLeave={textLeave}
          imageEnter={imageEnter}
        />
        <GetInTouch
          textEnter={textEnter}
          textLeave={textLeave}
          imageEnter={imageEnter}
          largeEnter={largeEnter}
        />
        <motion.div
          className="cursor hidden md:flex"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
    </>
  );
};

export default About;
