import React from "react";
// icons
import { BsDot } from "react-icons/bs";
import { Work, WorkHeading } from ".";
import { GiArcheryTarget, GiHiveMind } from "react-icons/gi";
import { TbPerspective } from "react-icons/tb";
import { prin1, prin2, prin3 } from "../assets/emojis";
const Principles = ({ textEnter, imageEnter, textLeave }) => {
  return (
    <div
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
      className="min-h-screen my-10 md:my-0 px-5 md:px-48 flex flex-col justify-center "
    >
      <WorkHeading text={"values"} />
      <div
        onMouseEnter={textEnter}
        onMouseLeave={imageEnter}
        class="text-3xl md:text-4xl"
      >
        Principles I abide by
      </div>
      <div class="w-full flex flex-col md:flex-row items-center justify-between my-16">
        <div class="w-full md:w-1/3 px-8">
          <div
            style={{
              paddingTop: "72px",
              height: "365px",
            }}
            class="w-full  flex flex-col items-center px-5 md:px-10   md:shadow-none "
          >
            <img src={prin1} alt="" className=" w-16 h-16" />
            <div class=" text-xl md:text-2xl  mt-4 md:mt-12 mb-5">
              Understand
            </div>
            <div class="text-center leading-6 text-base ">
              The process of design is to{" "}
              <span className="text-brand-pink">understand minds.</span>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-8">
          <div
            style={{
              paddingTop: "72px",
              height: "365px",
            }}
            class="w-full  flex flex-col items-center px-5 md:px-10   md:shadow-non bg-brand-darkGrey2"
          >
            <img src={prin2} alt="" className=" w-16 h-16" />
            <div class=" text-xl md:text-2xl  mt-4 md:mt-12 mb-5">Vision</div>
            <div class="text-center leading-6 text-base ">
              A <span className="text-brand-pink">clear vision</span> and{" "}
              <span className="text-brand-pink">purpose</span> is a driving
              force for any product.
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-8">
          <div
            style={{
              paddingTop: "72px",
              height: "365px",
            }}
            class="w-full  flex flex-col items-center px-5 md:px-10   md:shadow-non "
          >
            <img src={prin3} alt="" className=" w-16 h-16" />
            <div class=" text-xl md:text-2xl  mt-4 md:mt-12 mb-5">
              Perspective
            </div>
            <div class="text-center leading-6 text-base ">
              <span className="text-brand-pink">Diverse perspectives</span> and{" "}
              <span className="text-brand-pink">common goals</span> are the
              recipes for fantastic teams.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
