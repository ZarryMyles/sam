import React, { useState } from "react";
// import { motion } from "framer-motion";

const Navbar = ({ textEnter, textLeave, imageEnter }) => {
  // const [hov, setHov] = useState(false);

  // const variants = {
  //   default: { opacity: 0, y: 50, zIndex: -10 },
  //   hover: { opacity: 1, y: 0, zIndex: 10 },
  //   delay1: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.025 } },
  //   delay2: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.05 } },
  //   delay3: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.075 } },
  //   delay4: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.1 } },
  //   delay5: { opacity: 1, y: 0, zIndex: 10, transition: { delay: 0.125 } },
  // };

  return (
    <div
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
      className="navContainer z- bg-brand-darkGrey w-screen fixed flex flex-row justify-between items-center md:px-10 md:py-5"
    >
      <div
        className="text-3xl font-normal text-white "
        style={{ fontFamily: "Arial" }}
        onMouseEnter={textEnter}
        onMouseLeave={imageEnter}
      >
        shradha
      </div>
      <div className="flex flex-row text-white gap-4 font-laro text-lg uppercase">
        <a href="/work" onMouseEnter={textEnter} onMouseLeave={imageEnter}>
          Work
        </a>
        <a href="/about" onMouseEnter={textEnter} onMouseLeave={imageEnter}>
          About
        </a>
        <a href="/" onMouseEnter={textEnter} onMouseLeave={imageEnter}>
          Resume
        </a>
      </div>
      {/* <motion.div
        className="font-lora text-5xl flex flex-row"
        onMouseOver={() => setHov((hov) => !hov)}
        onMouseOut={() => setHov((hov) => !hov)}
        onMouseEnter={textEnter}
        onMouseLeave={imageEnter}
      >
        S
        <motion.span
          animate={hov ? "hover" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          h
        </motion.span>
        <motion.span
          animate={hov ? "delay1" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          r
        </motion.span>
        <motion.span
          animate={hov ? "delay2" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          a
        </motion.span>
        <motion.span
          animate={hov ? "delay3" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          d
        </motion.span>
        <motion.span
          animate={hov ? "delay4" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          h
        </motion.span>
        <motion.span
          animate={hov ? "delay5" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          a
        </motion.span>
      </motion.div>
      <div
        className="font-lora text-4xl flex flex-row"
        onMouseOver={() => setHov((hov) => !hov)}
        onMouseOut={() => setHov((hov) => !hov)}
        onMouseEnter={textEnter}
        onMouseLeave={imageEnter}
      >
        M{" "}
        <motion.span
          animate={hov ? "delay1" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          e
        </motion.span>
        <motion.span
          animate={hov ? "delay2" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          n
        </motion.span>
        <motion.span
          animate={hov ? "delay3" : "default"}
          initial={{ opacity: 0, y: 50 }}
          variants={variants}
        >
          u
        </motion.span> */}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
