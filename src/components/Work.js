// TODO : darken the bg images separately

import React from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";

const LandingSection = ({ textEnter, textLeave, imageEnter }) => {
  const imgUrl =
    "http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg";
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
  return (
    <div className="h-screen w-full ">
      <div
        className="text-black  h-screen w-full bg-cover bg-no-repeat bg-center   flex flex-col justify-center  top-0 left-0 px-5 md:px-32  "
        onMouseEnter={imageEnter}
        onMouseLeave={textLeave}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div class="w-2/5">
            <motion.li class="flex items-center my-5">
              <div class="w-32 bg-gray-700 h-0.5 mr-3" />
              <div class="text-white text-xl">ARCHITECTURE</div>
            </motion.li>
            <motion.li
              className=" text-7xl font-bold font-lora text-white my-5"
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
            >
              Novara Conic
            </motion.li>
            <motion.li class="text-base font-lato text-white my-5">
              Cal was first. The first public university in the great state of
              California. They are the pioneers.
            </motion.li>
            <a className="view-button-lp" href="/">
              <motion.li
                href="/"
                onMouseEnter={textEnter}
                onMouseLeave={imageEnter}
                class="px-3 py-2 flex items-center my-3 rounded-l-full rounded-r-full text-white border-gray-700 border-2 max-w-max"
              >
                {/* <div class="rounded-full p-3 bg-white"> */}
                <BsChevronRight class=" text-2xl p-1  mx-2 bg-white rounded-full text-gray-600" />
                {/* </div> */}
                VIEW CASE
              </motion.li>
            </a>
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default LandingSection;
