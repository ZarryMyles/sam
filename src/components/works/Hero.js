import React from "react";

const Hero = ({ work, next }) => {
  return (
    <div className="h-screen grid grid-cols-12">
      <div class="col-span-3 z-20 relative bg-brand-black h-full flex flex-col justify-center w-full items-center ">
        <div
          class="flex absolute h-full top-0   flex-col w-full justify-center pt-20  "
          style={{
            // right: "-100%",
            right: "-25%",
          }}
        >
          <div class="flex items-center mb-12">
            <div
              style={{
                height: "1px",
              }}
              class="bg-brand-gray w-28 mr-4"
            />
            <div class=" text-brand-gray uppercase text-xl tracking-widest ">
              {work.domain}
            </div>
          </div>
          <div class="text-7xl md:text-8xl font-lato text-white md:w-max">
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
    </div>
  );
};

export default Hero;
