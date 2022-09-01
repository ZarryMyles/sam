import React from "react";

const GetInTouch = ({ textEnter, textLeave, imageEnter, largeEnter }) => {
  return (
    <div
      id="get-in-touch"
      className="  w-full overflow-clip    my-10 relative getintouch-root "
    >
      <div className=" text-black dark:text-brand-white px-5 md:px-48  py-10 md:py-40  w-full   left-0 top-0  z-20  ">
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-between w-full"
          // onMouseEnter={imageEnter}
          // onMouseLeave={textLeave}
        >
          <div
            // onMouseEnter={textEnter}
            // onMouseLeave={imageEnter}
            // class name for text stroke : text-stroke-black
            style={{
              letterSpacing: ".08em",
            }}
            className="text-center md:text-left text-4xl md:text-4xl  font-lato uppercase dark:text-brand-white  tracking-wider my-10 md:my-0"
          >
            Get In Touch
          </div>
          {/* <div>
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
          </div> */}
          <a
            className="font-lato-light text-center md:text-left  text-brand-white  "
            style={{
              letterSpacing: "1px",
              fontSize: "22px",
            }}
            href="http://www.linkedin.com/in/shradha-b-k"
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
          >
            Lets create more{" "}
            <span
              style={{
                color: "#FFC7D1",
              }}
              className=" font-lora-italic "
            >
              soulful stories and delightful experiences
            </span>
          </a>
        </div>
      </div>
      <div className="bg-brand-lightGrey w-full h-full absolute left-0 top-0 -z-10 getintouch-graybg" />
    </div>
  );
};

export default GetInTouch;
