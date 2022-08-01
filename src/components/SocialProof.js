import React, { useEffect, useState, useRef } from "react";
import BlackQuote from "../assets/icons/quote-black.png";
import WhiteQuote from "../assets/icons/quote-white.png";
import { GoDash } from "react-icons/go";
import { Parallax, useParallax, ParallaxProvider } from "react-scroll-parallax";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { motion, useViewportScroll, useTransform } from "framer-motion";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { EffectFade, Navigation, Pagination } from "swiper";

// feedback

const SocialProof = ({ textEnter, textLeave, imageEnter }) => {
  const toggleTheme = () => {
    const theme = document.querySelector("html").classList;
    if (theme.contains("dark")) {
      theme.remove("dark");
      theme.add("light");
    } else {
      theme.remove("light");
      theme.add("dark");
    }
  };
  return (
    <div className="w-full h-full mx-auto">
      <div
        onMouseEnter={imageEnter}
        onMouseLeave={textLeave}
        className="px-5 md:px-48 py-10 md:py-20 flex items-center justify-center my-10 md:my-5 bg-white dark:bg-black  "
      >
        <div
          // modules={[EffectFade, Navigation, Pagination]}
          class="bg-brand-darkGrey text-gray-400 w-full md:px-10 md:py-20 flex items-center justify-end relative"
        >
          <Parallax
            class="text-4xl md:text-5xl w-full md:w-1/3 absolute -top-10 px-4 md:px-0 md:-top-12 md:left-12 font-bold"
            translateY={[-100, 100]}
          >
            <div
            // ref={parallaxRef}
            // class="text-4xl md:text-5xl w-full md:w-1/3 absolute -top-10 px-4 md:px-0 md:-top-12 md:left-12 font-bold"
            >
              Feedback from my clients.
            </div>
          </Parallax>
          {/*  */}

          <div class="w-full md:w-2/3 px-10 md:px-0 py-16 md:py-0 flex flex-col justify-center">
            <div className="italic my-6">
              "I have worked with many developers in the past, but I have never
              met anyone as dedicated as him. He is a great developer and a
              great person. I would recommend him to anyone who is looking for a
              developer."
            </div>
            <div class="text-white tracking-wider text-xl  my-6">
              - John Doe, CEO of XYZ
            </div>
            <div class="flex justify-center items-center w-full">
              <GoDash class="text-2xl text-gray-400 cursor-pointer hover:text-white" />
              <GoDash class="text-2xl text-gray-400 cursor-pointer hover:text-white" />
              <GoDash class="text-2xl text-gray-400 cursor-pointer hover:text-white" />
            </div>
          </div>

          <img
            src={WhiteQuote}
            alt="quote"
            className="absolute -bottom-10 right-10 w-20"
            onClick={() => toggleTheme()}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
