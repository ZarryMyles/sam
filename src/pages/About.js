import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GetInTouch, Principles, Navbar, Footer } from "../components";
import { ReactComponent as Quote } from "../assets/icons/quotestart.svg";
import { useTitle } from "../hooks/useTitle";
// import { WorkHeading } from "../components";
import HeroImage from "../assets/about/about.png";

const About = () => {
  useTitle("About");
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
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: "#FFEE8C",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
    large: {
      height: 80,
      width: 80,
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      backgroundColor: "#FFEE8C",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
  };

  const imageEnter = () => setcursorVariant("secondary");
  const largeEnter = () => setcursorVariant("large");
  return (
    <>
      <Navbar
        imageEnter={imageEnter}
        largeEnter={largeEnter}
        defaultColor={"black"}
      />

      <div
        onMouseEnter={imageEnter}
        onMouseLeave={imageEnter}
        className="w-full h-auto font-lato pt-10 bg-brand-black text-[#fefefe] "
      >
        {/* landing section */}
        <div class="h-screen relative  w-full md:px-48  md:pr-0 md:pl-48 pt-10 md:py-20 flex flex-col md:flex-row md:items-center md:justify-start">
          <div class="w-full md:w-4/7 z-20 pt-10 md:pt-0 px-7 flex flex-col justify-center items-start tracking-wide ">
            <div class="text-brand-white relative text-[26px] md:text-4xl  w-full ">
              <div onMouseEnter={largeEnter} onMouseLeave={imageEnter}>
                Hey there!
              </div>
            </div>
            <div
              style={{
                letterSpacing: "0.4px",
              }}
              class="text-lg leading-[30px] md:leading-9 text-[#fefefe] w-full my-8 md:my-10 md:text-justify "
            >
              I’m Shradha. <br />A UX Researcher who works with a purpose, I
              indulge myself in{" "}
              <span className="text-brand-gold">
                understanding and studying people’s patterns.
              </span>{" "}
              <br />
              From an early stage, I have believed that successful designs are
              people focused. <br />
              Hence, I am keen on working with projects having both{" "}
              <span className="text-brand-gold">
                technological and humanistic values.
              </span>
            </div>
          </div>
          <div
            style={{
              width: "580px",
              height: "435px",
              background: `url(${HeroImage})`,
              backgroundSize: "contain",
              borderRadius: "10px",
            }}
            className="md:absolute md:block hidden top-56 right-40 bg-red-300"
          ></div>
          {/* landing image for phone only */}
          <img src={HeroImage} alt="" class="w-full block md:hidden" />
        </div>
        {/* quote */}
        <div class="flex mt-[200px] mb-[200px] justify-center items-center px-5 ">
          <div
            class="  text-brand-gold text-xl relative text-justify md:text-center leading-[30px]"
            style={{
              letterSpacing: "0.4px",
            }}
          >
            <Quote
              className="absolute -top-12 md:-top-7 left-0 md:-left-8  w-7 md:w-7 h-6   "
              stroke="none"
            />
            Unhappy users are a source for learning, But the users who provide
            critique are those who help me gain knowledge
          </div>
        </div>

        {/* Values */}
        <Principles imageEnter={imageEnter} largeEnter={largeEnter} />
        <div className="mt-[130px] md:mt-0">
          <GetInTouch imageEnter={imageEnter} largeEnter={largeEnter} />
        </div>
        <Footer imageEnter={imageEnter} largeEnter={largeEnter} />
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
