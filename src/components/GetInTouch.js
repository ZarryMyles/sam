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
          <div>
            To create more soulful stories and delightful experiences,
            <span className="font-bold"> connect to me on</span>{" "}
            <a
              href="/"
              class="font-bold underline"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
