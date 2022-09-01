import React from "react";

const Hero = ({ work, next }) => {
  return (
    <div className="h-screen grid grid-cols-12  ">
      <div class="col-span-3 z-20 relative bg-brand-black h-full flex flex-col justify-center w-full items-center px-5 md:px-48">
        <div
          class="flex  h-full top-0   flex-col w-full justify-center pt-20  "
          style={
            {
              // right: "-100%",
              // right: "-2%",
            }
          }
        >
          <div class="flex items-center mb-12">
            <div
              style={{
                height: "1px",
                width: "72px",
              }}
              class="bg-brand-gray  mr-4"
            />
            <div
              style={{ letterSpacing: "2px" }}
              class=" font-lato-med text-brand-gray uppercase  tracking-widest "
            >
              {work.domain}
            </div>
          </div>
          <div
            style={{
              fontSize: "64px",
            }}
            class="  font-semibold tracking-3   font-lato text-white md:w-max"
          >
            {work.title}
          </div>
          {next && (
            <a
              href={work.link}
              class="text-xl w-max md:text-3xl font-lato my-12 text-white tracking-1.5"
            >
              Next Project
            </a>
          )}
        </div>
      </div>
      <div
        class="col-span-9  z-10 bg-cover bg-center bg-no-repeat brightness-50 bg-brand-black"
        style={{
          backgroundImage: `url(${work.image})`,
        }}
      ></div>
      {/* line animation */}
    </div>
  );
};

export default Hero;
