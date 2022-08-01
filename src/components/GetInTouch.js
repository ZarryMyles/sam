import React from "react";

const GetInTouch = ({ textEnter, textLeave, imageEnter }) => {
  return (
    <div className="w-screen overflow-clip  my-10 relative getintouch-root">
      <div
        // onMouseEnter={imageEnter}
        // onMouseLeave={textLeave}
        className="px-5 md:px-48 w-full   left-0 top-0  z-20 "
      >
        <div className="flex items-center justify-between w-full md:py-40 ">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            className="text-5xl font-bold  text-stroke-black tracking-wider"
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
              onMouseLeave={imageEnter}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="bg-brand-lightGrey w-full h-full absolute left-0 top-0 -z-10 getintouch-graybg" />
    </div>
  );
};

export default GetInTouch;
