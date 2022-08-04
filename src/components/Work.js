// TODO : darken the bg images separately

import React, { useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";

const works = [
  {
    id: 1,
    title: "Project 1",
    domain: "Architecture",
    description:
      "Cal was first. The first public university in the great state of california. They're the pioneers.",
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg",
    link: "/",
  },
  {
    id: 2,
    title: "Project 2",
    domain: "Design",
    description:
      "Cal was first. The first public university in the great state of california. They're the pioneers.",
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/2.jpg",
    link: "/",
  },
  {
    id: 3,
    title: "Project 3",
    domain: "fadsfdasf",
    description:
      "Cal was first. The first public university in the great state of california. They're the pioneers.",
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/3.jpg",
    link: "/",
  },
];
const LandingSection = ({ textEnter, textLeave, imageEnter, largeEnter }) => {
  const [activeWork, setActiveWork] = useState(works[0]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  class HoverButton {
    constructor(el) {
      this.el = el;
      this.hover = false;
      this.calculatePosition();
      this.attachEventsListener();
    }

    attachEventsListener() {
      window.addEventListener("mousemove", (e) => this.onMouseMove(e));
      window.addEventListener("resize", (e) => this.calculatePosition(e));
    }

    calculatePosition() {
      gsap.set(this.el, {
        x: 0,
        y: 0,
        scale: 1,
      });

      const box = this.el.getBoundingClientRect();
      this.x = box.left + box.width * 0.5;
      this.y = box.top + box.height * 0.5;
      this.width = box.width;
      this.height = box.height;
    }

    onMouseMove(e) {
      let hover = false;
      let hoverArea = this.hover ? 0.7 : 0.5;
      let x = e.clientX - this.x;
      let y = e.clientY - this.y;
      let distance = Math.sqrt(x * x + y * y);
      if (distance < this.width * hoverArea) {
        hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
      }

      if (!hover && this.hover) {
        this.onLeave();
        this.hover = false;
      }
    }

    onHover(x, y) {
      gsap.to(this.el, {
        x: (x - this.x) * 0.4,
        y: (y - this.y) * 0.4,
        scale: 1.15,
        ease: "power2.out",
        duration: 0.4,
      });

      this.el.style.zIndex = 10;
    }
    onLeave() {
      gsap.to(this.el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "elastic.out(1.2, 0.4)",
        duration: 0.7,
      });

      this.el.style.zIndex = 1;
    }
  }
  const button = document.querySelector(".view-button-lp");
  // new HoverButton(button);
  const sideNav = () => (
    <div
      class="flex flex-col absolute "
      style={{
        top: "30%",
        left: "0",
      }}
      onMouseEnter={imageEnter}
      onMouseLeave={imageEnter}
    >
      {works.map((work) => (
        <div
          onClick={() => setActiveWork(work)}
          style={{
            backgroundImage: `url(${work.image})`,
          }}
          class={`${
            work.id === activeWork.id
              ? "w-24"
              : activeWork.id + 1 === work.id || work.id + 1 === activeWork.id
              ? "w-10 brightness-50 hover:brightness-75"
              : "w-0 brightness-75"
          } cursor-pointer  hover:w-24 relative h-16 bg-cover bg-center bg-no-repeat my-2 transition-all duration-500 ease-in-out rounded-r-md`}
        >
          {work.id === activeWork.id && (
            <div class="text-lg absolute right-0 -top-4 work-side-nav-text font-bold tracking-wider">
              0{work.id}
            </div>
          )}
        </div>
      ))}
    </div>
  );
  const sample = () => (
    <div
      className="text-black relative  select-none   h-screen w-full overflow-x-hidden   bg-cover bg-no-repeat bg-center   flex flex-col justify-center  top-0 left-0 px-5 md:px-32  "
      // onMouseEnter={imageEnter}
      // onMouseLeave={textLeave}
    >
      <motion.ul
        className="container z-10"
        variants={container}
        initial="hidden"
        animate="visible"
        // onMouseEnter={imageEnter}
        // onMouseLeave={textLeave}
      >
        <div class="w-2/5">
          <motion.li class="flex items-center my-5 ">
            <div class="w-32 bg-gray-500 h-0.5 mr-3" />
            <div class="text-white text-xl">{activeWork.domain}</div>
          </motion.li>
          <motion.li
            className=" text-7xl font-bold w-max font-lora text-white my-5"
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
          >
            {activeWork.title}
          </motion.li>
          <motion.li class="text-base font-lato text-white my-10">
            {activeWork.description}
          </motion.li>
          <a className="view-button-lp" href={activeWork.link}>
            <motion.li
              href="/"
              // onMouseEnter={textEnter}
              // onMouseLeave={imageEnter}
              class="px-6 py-4 flex items-center my-3 rounded-l-full rounded-r-full text-white border-gray-500 border-2 max-w-max tracking-wider"
            >
              <FiChevronRight class=" text-3xl p-1  mr-4 bg-white rounded-full text-black " />
              <div
                style={{
                  letterSpacing: "0.2em",
                }}
                class=" text-lg "
              >
                VIEW CASE
              </div>
            </motion.li>
          </a>
        </div>
        <div class="absolute bottom-20 right-20 flex flex-col items-center">
          <div class=" text-stroke-white">0{activeWork.id}</div>
          <div class="  flex items-center  ">
            <BsChevronLeft
              onClick={() =>
                works.indexOf(activeWork) > 0 &&
                setActiveWork(works[works.indexOf(activeWork) - 1])
              }
              class=" hover:border-2 border-0 border-black p-3  text-5xl cursor-pointer mx-5  rounded-full text-white"
            />
            <BsChevronRight
              onClick={() =>
                works.indexOf(activeWork) < works.length - 1 &&
                setActiveWork(works[works.indexOf(activeWork) + 1])
              }
              class=" hover:border-2 border-0 border-black p-3  text-5xl cursor-pointer mx-5  rounded-full text-white"
            />
          </div>
        </div>
      </motion.ul>
      {works.map((work) => (
        <div class="w-full h-full absolute    left-0 top-0 z-0">
          <div
            style={{
              backgroundImage: `url(${work.image})`,
            }}
            class={`${
              work.id < activeWork.id
                ? "-translate-x-full  bg-left"
                : work.id > activeWork.id
                ? " translate-x-[100%]  bg-right"
                : "bg-center scale-125 "
            }  w-full bg-cover bg-no-repeat ease-linear transition-all duration-700 brightness-50 h-full `}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div
      id="work"
      style={
        {
          // width: "3",
        }
      }
      className="h-screen  flex bg-black w-full relative"
    >
      {sample()}
      {sideNav()}
    </div>
  );
};

export default LandingSection;
