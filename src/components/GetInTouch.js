import React from "react";

const GetInTouch = ({ textEnter, textLeave, imageEnter }) => {
  return (
    <div
      id="get-in-touch"
      className="  w-full overflow-clip    my-10 relative getintouch-root "
    >
      <div className=" text-black dark:text-white px-5 md:px-48  md:py-40  w-full   left-0 top-0  z-20  ">
        <div
          className="flex items-center justify-between w-full"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <div
            // onMouseEnter={textEnter}
            // onMouseLeave={imageEnter}
            className="text-5xl font-bold dark:text-white text-stroke-black tracking-wider"
          >
            Get In Touch
          </div>
          <div>
            To create more soulful stories and delightful experiences,
            <span className="font-bold"> connect to me on</span>{" "}
            <a
              href="/"
              class="font-bold underline"
              // onMouseEnter={textEnter}
              // onMouseLeave={imageEnter}
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
