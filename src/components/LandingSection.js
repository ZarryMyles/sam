import React from "react";

import { ArrowRightCircle } from "react-feather";
import HeroImage from "../assets/landingpage/Rectangle.png";
const LandingSection = ({ imageEnter, textLeave, largeEnter }) => {
  return (
    <div
      id="landing-section"
      className="px-5 md:px-48 min-h-screen w-full text-white bg-brand-black    top-0 left-0 "
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
    >
      <div class="  z-20 relative  md:h-full md:mt-0   md:py-52 w-full ">
        <div
          class="text-3xl md:text-5xl font-thin mt-60  md:mt-20 w-9/10  md:w-7/10 font-lato-light-italic landing-page-text  "
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          style={{
            color: "#FEFEFE",
            lineHeight: "1.4",
          }}
        >
          Hello I’m <span className="font-lora-italic ml-1">Shradha</span>
          <br />I work with designs driven by{" "}
          <span class="font-lora-italic">purpose</span> that reaches{" "}
          <span class=" font-lora-italic mr-1">beyond modernity.</span>
        </div>
        <div
          style={{
            // width: "520px",
            height: "260px",
            backgroundImage: `url(${HeroImage})`,
            // left: "746px",
            // top: "321px",
          }}
          class="block md:hidden  w-full z-10 bg-gray-500  -mt-28   bg-cover bg-center bg-no-repeat"
        />
        <div
          class="flex flex-col md:flex-row md:items-center w-full work-landing-text mt-8 md:-mt-7"
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
        >
          <a
            href="#get-in-touch"
            class=" py-2 md:py-4 flex justify-center items-center mt-2 md:mt-0 rounded-l-full rounded-r-full text-white  max-w-max tracking-wider"
          >
            <ArrowRightCircle
              color="#FFC7D1"
              width={30}
              height={30}
              strokeWidth={1}
              class=" text-3xl   mr-4  rounded-full   "
            />
            <div
              style={{
                letterSpacing: "0.2em",
                color: "#FFC7D1",
                fontSize: "16px",
              }}
              class="  uppercase font-lato    "
            >
              Work with me
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          width: "520px",
          height: "400px",
          backgroundImage: `url(${HeroImage})`,
          // left: "746px",
          // top: "321px",
        }}
        class="hidden md:block absolute z-10 bg-gray-500  right-52 bottom-10 bg-cover bg-center bg-no-repeat"
      />
    </div>
  );
};

export default LandingSection;
