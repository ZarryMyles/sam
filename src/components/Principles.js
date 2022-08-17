import React from "react";
// icons
import { BsDot } from "react-icons/bs";
// import { SiMinds } from "react-icons/si";
import { GiArcheryTarget, GiHiveMind } from "react-icons/gi";
import { TbPerspective } from "react-icons/tb";
const Principles = ({ textEnter, imageEnter, textLeave }) => {
  return (
    <div
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
      className="min-h-screen my-10 md:my-0 px-5 md:px-44 flex flex-col justify-center "
    >
      <div class=" text-xl  flex items-center -ml-1 md:ml-16  text-gray-500">
        <BsDot className="text-2xl text-black" />
        <div
          style={{
            height: "1px",
          }}
          class="  mr-1  w-20 bg-gray-400"
        />
        <div className=" tracking-wider text-lg uppercase">Services</div>
      </div>
      <div
        onMouseEnter={textEnter}
        onMouseLeave={imageEnter}
        class="text-5xl font-bold"
      >
        Principles I abide by
      </div>
      <div class="w-full flex flex-col md:flex-row items-center justify-between my-16">
        <div class="w-full md:w-1/3 flex flex-col items-center px-5 md:px-10 py-5 md:py-14 md:shadow-none shadow-md my-5">
          <GiHiveMind
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            className="text-6xl text-black my-4"
          />
          <div class="text-2xl font-bold my-4">Understand</div>
          <div class="text-center leading-loose text-gray-500">
            The process of design is to <b>understand minds.</b>
          </div>
        </div>
        <div class="w-full md:w-1/3 flex flex-col items-center px-5 md:px-10 py-5 md:py-14 md:shadow-none shadow-md my-5 bg-brand-lightGrey">
          <GiArcheryTarget
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            className="text-6xl text-black my-4"
          />
          <div class="text-2xl font-bold my-4">Vision</div>
          <div class="text-center leading-loose text-gray-500">
            A <b>clear vision</b> and <b>purpose</b> is a driving force for any
            product.
          </div>
        </div>
        <div class="w-full md:w-1/3 flex flex-col items-center px-5 md:px-10 py-5 md:py-14 md:shadow-none shadow-md my-5 ">
          <TbPerspective
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            className="text-6xl text-black my-4"
          />
          <div class="text-2xl font-bold my-4">Perspective</div>
          <div class="text-center leading-loose text-gray-500">
            <b>Diverse perspectives</b> and <b>common goals</b> are the recipes
            for fantastic teams.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
