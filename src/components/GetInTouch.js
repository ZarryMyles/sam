import React from "react";

const GetInTouch = ({ imageEnter, largeEnter }) => {
  return (
    <div
      id="get-in-touch"
      className="  w-full overflow-clip    mt-10 relative  "
    >
      <div className="  text-brand-white px-5 md:px-48  pb-10 md:pb-20 pt-10 md:py-40  w-full   left-0 top-0  z-20  ">
        <div className="flex flex-col  md:flex-row md:items-center justify-between w-full">
          <div
            style={{
              letterSpacing: ".08em",
            }}
            className="text-left text-[24px] md:text-4xl  font-lato uppercase text-brand-white  tracking-wider mb-3 md:my-0"
          >
            Get In Touch
          </div>

          <div className="font-lato-light w-3/4 leading-6 md:w-auto text-left tracking-[0.01em] md:tracking-1  text-base md:text-[22px]  text-brand-white  ">
            Lets create more{" "}
            <a
              href="http://www.linkedin.com/in/shradha-b-k"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              style={{
                color: "#FFC7D1",
              }}
              className=" font-lora-italic "
            >
              soulful stories and delightful experiences
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
