import React, { useState } from "react";
// import gsap from "gsap";
import { motion } from "framer-motion";
import { BsChevronRight as Right, BsChevronLeft as Left } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
// import { useGesture } from "react-use-gesture";
// import { useSpring } from "@react-spring/web";

// const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
// const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

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
  // useEffect(() => {
  //   const preventDefault = (e) => e.preventDefault();
  //   document.addEventListener("gesturestart", preventDefault);
  //   document.addEventListener("gesturechange", preventDefault);

  //   return () => {
  //     document.removeEventListener("gesturestart", preventDefault);
  //     document.removeEventListener("gesturechange", preventDefault);
  //   };
  // }, []);
  // const domTarget = useRef(null);
  // const [
  //   { x, y, rotateX, rotateY, rotateZ, zoom, scale, translateY, translateX },
  //   api,
  // ] = useSpring(() => ({
  //   rotateX: 0,
  //   rotateY: 0,
  //   rotateZ: 0,
  //   translateY: 0,
  //   translateX: 0,

  //   scale: 1,
  //   zoom: 0,
  //   x: 0,
  //   y: 0,
  //   config: { mass: 5, tension: 350, friction: 40 },
  // }));
  // useGesture(
  //   {
  //     onMove: ({ xy: [px, py], dragging }) => {
  //       console.log(calcX(py, y.get()));
  //       return (
  // //         !dragging &&
  //         api({
  //           translateX: calcX(px, y.get()),
  //           translateY: calcY(py, x.get()),
  //           // scale: 1,
  //         })
  //       );
  //     },
  //   },
  //   { domTarget, eventOptions: { passive: false } }
  // );

  // * text trail effect
  const [flag, setFlag] = useState(false);
  const trailVariants = {
    default: { opacity: 0, y: -50, zIndex: -10 },
    hover: { opacity: 1, y: 0, zIndex: 10 },
    delay1: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.025 } },
    delay2: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.05 } },
    delay3: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.075 } },
    delay4: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.1 } },
    delay5: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.125 } },
    delay6: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.15 } },
    delay7: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.175 } },
    delay8: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.2 } },
    delay9: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.225 } },
    delay10: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.25 } },
  };
  const sideNav = () => (
    <div
      class="hidden md:flex flex-col absolute "
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
          <div
            class={`${
              work.id !== activeWork.id && "opacity-0"
            } transition-all duration-500 text-lg absolute right-0 -top-4 work-side-nav-text font-bold tracking-wider`}
          >
            0{work.id}
          </div>
        </div>
      ))}
    </div>
  );
  const cards = () => (
    <div
      className="text-black relative  select-none   h-full overflow-hidden w-full    bg-cover bg-no-repeat bg-center   flex flex-col justify-center  top-0 left-0 px-5 md:px-32  "
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
    >
      <div
        style={{
          zIndex: "1",
        }}
        // onMouseEnter={imageEnter}
        // onMouseLeave={textLeave}
      >
        <div class="w-full md:w-2/5">
          <div class="flex items-center my-5 ">
            <div class="w-32 bg-gray-500 h-0.5 mr-3" />
            <div
              // onMouseOver={() => setFlag((state) => !state)}
              // onMouseOut={() => setFlag((state) => !state)}
              class="text-white text-xl"
            >
              {activeWork.domain}
            </div>
          </div>
          <div
            className=" text-5xl md:text-7xl font-bold w-max font-lora text-white my-5 flex items-center"
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
          >
            {activeWork.title}
            {/* <motion.div>
              {activeWork.title.split("").map((letter, index) => (
                <motion.span
                  animate={flag ? `delay${index + 1}` : "default"}
                  variants={trailVariants}
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div> */}
          </div>
          <div class="text-base font-lato text-white my-10 pr-5 md:pr-0">
            {activeWork.description}
          </div>
          <a className="" href={activeWork.link}>
            <div
              href="/"
              // ref={domTarget}
              // style={{
              //   translateX: `${translateX.get()}px`,
              //   translateY: `${translateY.get()}px`,
              // }}
              class="px-6 py-4 duration-100 transition-all  w-max  flex items-center my-3 rounded-l-full rounded-r-full text-white border-gray-400 border-2 max-w-max tracking-wider             "
            >
              <FiChevronRight class=" text-3xl p-1  mr-4 bg-white rounded-full text-black " />
              <div
                class={` text-lg 
                   
                `}
                style={{
                  letterSpacing: "0.2em",
                }}
              >
                VIEW CASE
              </div>
            </div>
          </a>
        </div>
        {/* the no. with text stroke */}
        <div class="absolute bottom-10   md:bottom-10 right-2 md:right-20 flex flex-col items-center">
          <div class=" text-stroke-white">0{activeWork.id}</div>
          <div class="  flex items-center  ">
            <Left
              onClick={() =>
                works.indexOf(activeWork) > 0 &&
                setActiveWork(works[works.indexOf(activeWork) - 1])
              }
              class=" md:hover:border-2 border-0 md:border-black p-0 md:p-3  text-2xl md:text-5xl cursor-pointer mx-5  rounded-full text-white"
            />
            <Right
              onClick={() =>
                works.indexOf(activeWork) < works.length - 1 &&
                setActiveWork(works[works.indexOf(activeWork) + 1])
              }
              class=" md:hover:border-2 border-0 md:border-black p-0 md:p-3  text-2xl md:text-5xl cursor-pointer mx-5  rounded-full text-white"
            />
          </div>
        </div>
      </div>
      {/* bg image */}
      {works.map((work) => (
        <div class="w-full h-full absolute    left-0 top-0 z-0">
          <div
            style={{
              backgroundImage: `url(${work.image})`,
            }}
            class={`${
              work.id < activeWork.id
                ? "-translate-x-full  bg-center md:bg-left"
                : work.id > activeWork.id
                ? " translate-x-[100%]  bg-center md:bg-right"
                : "bg-center scale-125 "
            }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700 brightness-50 h-full `}
          />
        </div>
      ))}
      {/* trying changing width  */}
      {/* {works.map((work) => (
        <div class="w-full h-full left-0 top-0 absolute">
          <div
            style={{
              backgroundImage: `url(${work.image})`,
            }}
            class={`${
              work.id < activeWork.id
                ? "left-0 w-0"
                : work.id > activeWork.id
                ? " right-0 w-0"
                : "bg-center w-full "
            }   w-full bg-cover bg-no-repeat absolute top-0 z-0 ease-linear transition-all duration-700 brightness-50 h-full `}
          />
        </div>
      ))} */}
    </div>
  );

  return (
    <div
      id="work"
      className="h-screen overflow-y-hidden  flex bg-white w-full relative"
    >
      {cards()}
      {sideNav()}
    </div>
  );
};

export default LandingSection;
