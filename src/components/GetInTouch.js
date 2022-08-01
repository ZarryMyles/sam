import React from "react";

const GetInTouch = ({ textEnter, textLeave, imageEnter }) => {
  return (
    <div
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
      className="w-full  bg-brand-lightGrey my-10"
    >
      <div class="px-5 md:px-48 w-full  ">
        <div className="flex items-center justify-between w-full md:py-40 ">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-4xl font-bold"
          >
            Get In Touch
          </div>
          <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
            To create more soulful stories and delightful experiences,{" "}
            <a href="/" class="font-bold">
              connect to me on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
