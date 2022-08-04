import React from "react";
import LinkedIn from "../assets/icons/linkedin.png";
import { BsLinkedin } from "react-icons/bs";

import { FiChevronRight } from "react-icons/fi";

const LandingSection = ({ textEnter, imageEnter, textLeave, largeEnter }) => {
  return (
    <div
      id="landing-section"
      className="px-5 md:px-32 h-screen w-full text-white bg-brand-footerGrey"
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
    >
      <div class="flex flex-col  h-full justify-center w-3/5 ">
        <div
          class="text-6xl font-bold w-max "
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
        >
          Hello <br /> I'm Shradha
        </div>
        <div class="my-6 ">
          I work with Designs driven by a <b>purpose</b> that reaches{" "}
          <b>beyond modernity</b>
        </div>
        <div class="flex items-center">
          <a
            href="/"
            class="px-6 py-4 flex items-center my-3 rounded-l-full rounded-r-full text-white border-gray-500 border-2 max-w-max tracking-wider"
          >
            <FiChevronRight class=" text-3xl p-1  mr-4 bg-white rounded-full text-black " />
            <div
              style={{
                letterSpacing: "0.2em",
              }}
              class=" text-lg uppercase"
            >
              Work with me
            </div>
          </a>
          <a
            href="/"
            class="px-6 ml-8 py-4 tracking-widest flex items-center my-3 rounded-l-full rounded-r-full text-white border-gray-500 border-2 max-w-max "
          >
            <div
              style={
                {
                  // letterSpacing: "0.2em",
                }
              }
              class=" text-lg uppercase"
            >
              LinkedIn
            </div>
            <a href="/">
              <BsLinkedin className="ml-4 text-xl text-blue-400 " />
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
