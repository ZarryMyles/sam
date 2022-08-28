import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import HeroImage from "../assets/landingpage/Rectangle.png";
const LandingSection = ({ textEnter, imageEnter, textLeave, largeEnter }) => {
  return (
    <div
      id="landing-section"
      className="px-5 md:px-32 h-screen w-full text-white from-brand-footerGrey  to-black to: bg-gradient-to-r  top-0 left-0 "
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
    >
      <div class="flex flex-col z-20 relative  h-full  md:py-36 w-9/10  md:w-3/4 ">
        <div
          class="text-3xl md:text-5xl font-thin  w-full md:mt-20  font-lato-light-italic landing-page-text  "
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          style={{
            color: "#FEFEFE",
            lineHeight: "1.4",
          }}
        >
          Hello I’m <span className="font-lora-italic ml-1">Shradha</span>
          <br />I work with designs driven by purpose that reaches{" "}
          <span class=" font-lora-italic mr-1">beyond</span> modernity.
        </div>
        <div class="flex flex-col md:flex-row md:items-center w-full">
          <a
            href="/"
            class=" py-2 md:py-4 flex justify-center items-center mt-8 md:mt-0 rounded-l-full rounded-r-full text-white  max-w-max tracking-wider"
          >
            <BsArrowRightShort
              style={{
                border: "1px solid white",
                borderColor: "#FFC7D1",
                color: "#FFC7D1",
              }}
              class=" text-3xl p-1  mr-4  rounded-full  border-white "
            />
            <div
              style={{
                letterSpacing: "0.2em",
                color: "#FFC7D1",
              }}
              class=" md:text-lg uppercase font-lato   "
            >
              Work with me
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          width: "650px",
          height: "380px",
          backgroundImage: `url(${HeroImage})`,
          // left: "746px",
          // top: "321px",
        }}
        class="absolute z-10 bg-gray-500  right-40 bottom-24 bg-cover bg-center bg-no-repeat"
      ></div>
    </div>
  );
};

export default LandingSection;
