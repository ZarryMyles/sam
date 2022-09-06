import React from "react";
// icons

import { WorkHeading } from ".";

import { prin1, prin2, prin3 } from "../assets/emojis";
const Principles = ({ textEnter, imageEnter }) => {
  return (
    <div
      onMouseEnter={imageEnter}
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
      <div class="w-full flex flex-col md:flex-row items-center justify-between mt-8 md:my-16">
        <div class="w-full  md:w-1/3 md:px-8 leading-[24px] ">
          <div class="w-full h-[275px] md:h-[365px] md:pt-[72px] py-[48px] md:pb-0  flex flex-col items-center px-10 md:px-10   md:shadow-none bg-brand-darkGrey2 md:bg-brand-black ">
            <img src={prin1} alt="" className=" w-16 h-16" />
            <div class="  text-2xl  mt-7 md:mt-12 mb-3">Understand</div>
            <div class="text-center leading-6 text-base ">
              The process of design is to{" "}
              <span className="text-brand-pink">understand minds.</span>
            </div>
          </div>
        </div>
        <div class="w-full  md:w-1/3 md:px-8 md:my-0 my-4  ">
          <div class="w-full h-[275px] md:h-[365px] md:pt-[72px] py-[48px] md:pb-0  flex flex-col items-center px-10 md:px-10   md:shadow-non bg-brand-darkGrey2">
            <img src={prin2} alt="" className=" w-16 h-16" />
            <div class="  text-2xl  mt-7 md:mt-12 mb-3">Vision</div>
            <div class="text-center leading-6 text-base ">
              A <span className="text-brand-pink">clear vision</span> and{" "}
              <span className="text-brand-pink">purpose</span> is a driving
              force for any product.
            </div>
          </div>
        </div>
        <div class="w-full  md:w-1/3 md:px-8 ">
          <div class="w-full h-[275px] md:h-[365px] md:pt-[72px] py-[48px] md:pb-0  flex flex-col items-center px-5 md:px-10   md:shadow-non bg-brand-darkGrey2 md:bg-brand-black">
            <img src={prin3} alt="" className=" w-16 h-16" />
            <div class="  text-2xl  mt-7 md:mt-12 mb-3">Perspective</div>
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
