import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GetInTouch, Principles, Navbar } from "../components";
import { ReactComponent as Quote } from "../assets/icons/quotestart.svg";
import { useTitle } from "../hooks/useTitle";
import { WorkHeading } from "../components";
import HeroImage from "../assets/landingpage/Rectangle.png";

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
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
    text: {
      height: 50,
      width: 50,
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: "#ffc7d1",
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
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
      },
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
        largeEnter={largeEnter}
        defaultColor={"black"}
      />

      <div
        onMouseEnter={imageEnter}
        onMouseLeave={imageEnter}
        className="w-full h-auto font-lato pt-10 bg-brand-black text-brand-white "
      >
        {/* landing section */}
        <div class=" h-screen  w-full  px-5 md:pr-0 md:pl-48 pt-10 md:py-20 flex flex-col md:flex-row md:items-center md:justify-center">
          <div class="w-full md:w-5/10 h-full flex flex-col justify-center items-start tracking-wide ">
            <div class="text-brand-white relative text-[26px] md:text-4xl  w-full ">
              <div
                onMouseEnter={largeEnter}
                onMouseLeave={imageEnter}
                // class="md:-mr-10 "
              >
                Hey there!
              </div>
            </div>
            <div
              style={{
                letterSpacing: "0.4px",
              }}
              class="  text-base md:text-lg leading-[28px] md:leading-9  w-full md:w-3/4  my-8 md:my-10 text-justify "
            >
              I’m Shradha, a fresh graduate looking to make my mark in the world
              of product design. <br /> A Product designer who works with the
              purpose, I indulge myself in{" "}
              <span class="text-brand-pink">
                understanding and studying people’s patterns.
              </span>{" "}
              From an early stage, I have believed that successful designs are
              people focused. Hence, I am keen on working with projects having
              both{" "}
              <span class="text-brand-pink">
                technological and humanistic values.
              </span>
            </div>
            <div
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              class="text-brand-darkGrey3 text-xl mb-1  flex items-center "
            >
              <div className="font-lora-italic">Shradha</div>
              <div
                style={{
                  height: "1px",
                  width: "40px",
                }}
                class="  ml-4 mr-1  w-20 bg-brand-darkGrey3"
              />
            </div>
            <div class="text-lg  ">Product Designer</div>
          </div>
          <div class=" md:w-5/10 h-92 md:h-full bg-brand-darkGrey2 rounded-lg hidden md:flex justify-center items-center md:p-20">
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1610398000003-1b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`,
              }}
              class="bg-center  bg-no-repeat bg-cover bg-black    h-full  w-full"
            />
          </div>
        </div>
        {/* landing image for phone only */}
        <img src={HeroImage} alt="" class="w-full block md:hidden mb-[178px]" />
        {/* principles abide */}
        <div class="bg-brand-darkGrey2 md:pt-16 md:mt-40 py-10 px-5 md:px-48  ">
          <WorkHeading text={"about"} />
          <div class=" text-2xl -mt-[14px] mb-8">Motivations</div>
          <div
            style={{
              letterSpacing: "0.4px",
            }}
            class="flex flex-col md:flex-row w-full text-lg leading-[28px] tracking-[0.4px] md:leading-9 text-justify md:pb-20"
          >
            <div class="w-full md:w-1/2 md:pr-16 mb-10 md:my-0 ">
              <div>Interests</div>
              <div>
                I enjoy gaining new experiences, my latest interest has been in
                learning to play the guitar. In my spare time, I like to put my
                artistic interest to use. On a regular basis, I am keen on going
                for <span class="text-brand-pink">nature walks</span> and{" "}
                <span class="text-brand-pink">
                  {" "}
                  meeting my four-legged furry friends 🐕‍🦺
                </span>
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pl-16  md:my-0">
              <div>Skills</div>
              <div>
                With strong insights in{" "}
                <span class="text-brand-pink">Research</span> and{" "}
                <span class="text-brand-pink">Analytical skills,</span> I <br />{" "}
                have been able to develop{" "}
                <span class="text-brand-pink">Interactive prototypes</span> and{" "}
                <br />{" "}
                <span class="text-brand-pink">Consumer-centric designs.</span>
                <ul class="ml-4 list-disc">
                  <li>UI & UX Design </li>
                  <li>Visual design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* quote */}
        <div class="md:h-screen flex mt-[200px] mb-[200px] md:mt-0 md:mb-0 justify-center items-center px-5 ">
          <div
            class="  text-brand-pink text-xl relative text-justify md:text-center leading-[30px]"
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

        <Principles
          textEnter={textEnter}
          // textLeave={textLeave}
          imageEnter={imageEnter}
        />
        <div className="mt-[130px] md:mt-0">
          <GetInTouch
            textEnter={textEnter}
            textLeave={textLeave}
            imageEnter={imageEnter}
            largeEnter={largeEnter}
          />
        </div>
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
