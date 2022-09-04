import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GetInTouch, Principles, Navbar } from "../components";
import { ReactComponent as Quote } from "../assets/icons/quotestart.svg";
import { useTitle } from "../hooks/useTitle";
import { WorkHeading } from "../components";
const About = () => {
  useTitle("About");
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setcursorVariant] = useState("default");

  useEffect(() => {
    // scroll to top
    // window.scrollTo(0, 0);
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
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      bounce: 0,
    },
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      bounce: 0,
    },
    large: {
      height: 80,
      width: 80,
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      backgroundColor: "#ffc7d1",
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
        largeEnter={largeEnter}
        defaultColor={"black"}
      />

      <div
        onMouseEnter={imageEnter}
        onMouseLeave={imageEnter}
        className="w-full h-auto font-lato pt-10 bg-brand-black text-brand-white "
      >
        {/* landing section */}
        <div class=" h-screen  w-full  px-5 md:pr-0 md:pl-48 py-10 md:py-20 flex flex-col md:flex-row md:items-center md:justify-center">
          <div class="w-full md:w-5/10 h-full flex flex-col justify-center items-start tracking-wide ">
            <div class="text-brand-white relative text-4xl  w-full ">
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
              class="  text-lg md:leading-9  w-full md:w-3/4  my-10 "
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
              class="text-brand-darkGrey3 text-xl  flex items-center "
            >
              <div>Shradha</div>
              <div
                style={{
                  height: "1px",
                  width: "72px",
                }}
                class="  ml-4 mr-1  w-20 bg-brand-darkGrey3"
              />
            </div>
            <div class="text-lg  ">Product Designer</div>
          </div>
          <div class=" md:w-5/10 h-92 md:h-full bg-brand-darkGrey2 rounded-lg flex justify-center items-center md:p-20">
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1610398000003-1b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`,
                // height: "120px",
              }}
              class="bg-center  bg-no-repeat bg-cover bg-black    h-full  w-full"
            />
          </div>
        </div>
        <div class="bg-brand-darkGrey2 md:pt-16 md:mt-40 pt-10 px-5 md:px-48  ">
          <WorkHeading text={"about"} />
          <div class="text-4xl md:mb-8 mb-4">Principles I abide by</div>
          <div
            style={{
              letterSpacing: "0.4px",
            }}
            class="flex flex-col md:flex-row w-full text-lg md:leading-9 text-justify md:pb-20"
          >
            <div class="w-full md:w-1/2 md:pr-16 my-10 md:my-0">
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
            <div class="w-full md:w-1/2 md:pl-16 my-10 md:my-0">
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
        <div class="h-screen flex justify-center items-center px-5 ">
          <div
            class="  text-brand-pink text-xl relative text-center"
            style={{
              letterSpacing: "0.4px",
            }}
          >
            <Quote
              className="absolute -top-2 md:-top-7 -left-2 md:-left-8  w-4 md:w-7 h-4 md:h-6  "
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
        {/* <Skills
          textEnter={textEnter}
          textLeave={textLeave}
          imageEnter={imageEnter}
        /> */}
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
