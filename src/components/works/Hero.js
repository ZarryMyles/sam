import React from "react";
const Hero = ({ work, next, largeEnter, imageEnter }) => {
  return (
    <div className="  h-screen w-full relative overflow-clip flex leading-0  ">
      <div class="  md:w-[19.5%]    z-20 relative md:bg-brand-black h-full hidden md:flex flex-col   px-5 md:px-24">
        <div class="flex  h-full    flex-col w-full justify-center pt-20  ">
          <div class="flex items-center mb-12 w-max">
            <div
              style={{
                height: "1px",
                width: "72px",
              }}
              class="bg-brand-gray  mr-4"
            />
            <div
              style={{ letterSpacing: "2px" }}
              class=" font-lato-med text-brand-gray uppercase   "
            >
              {work.domain}
            </div>
          </div>
          <div
            style={{
              fontSize: "64px",
            }}
            class="  font-semibold tracking-3   font-lato text-brand-white md:w-max"
          >
            {work.title}
          </div>
          {/* line animation */}
          {!next && (
            <div
              className="vertical-line-parent "
              style={{
                width: "1.3px",
                height: "32px",
                bottom: "73px",
              }}
            >
              <div class="work-hero-vertical-line "></div>
            </div>
          )}

          {next && (
            <a
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              style={{
                fontSize: "24px",
              }}
              href={work.link}
              class=" w-max md:text-3xl font-lato-med my-12 text-white tracking-1.5"
            >
              Next Project
            </a>
          )}
        </div>
      </div>
      <div
        class=" md:hidden z-10  h-full bg-cover  bg-center bg-no-repeat brightness-20 bg-brand-black"
        // style={{
        //   width: "80.5%",
        //   backgroundImage: `url(${work.image})`,
        // }}
      ></div>
      {!next && (
        <div class="block z-20 text-4xl md:hidden absolute px-5 left-0 top-0 pt-[230px]  text-brand-white w-full h-full">
          <div class="flex items-center  mb-6 col-span-12">
            <div
              style={{
                height: "1px",
                background: "#B5B5B5",
              }}
              class="  w-[40px] md:w-[72px] mr-4"
            />
            <div
              style={{
                color: "#B5B5B5",
              }}
              class="  tracking-2  uppercase font-lato-med text-sm "
            >
              {work.domain}
            </div>
          </div>
          <div className=" text-[32px] text-brand-white">{work.title}</div>
        </div>
      )}
      {next && (
        <div class="block z-20 text-4xl md:hidden absolute px-5 left-0 top-0 pt-[230px]  text-brand-white w-full h-full">
          <div class="flex items-center  mb-6 col-span-12">
            <div
              style={{
                height: "1px",
                background: "#B5B5B5",
              }}
              class="  w-[40px] md:w-[72px] mr-4"
            />
            <div
              style={{
                color: "#B5B5B5",
              }}
              class="  tracking-2  uppercase font-lato-med text-sm "
            >
              {work.domain}
            </div>
          </div>
          <div className=" text-[32px] text-brand-white my-[24px]">
            {work.title}
          </div>
          <a
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            href={work.link}
            class=" w-max text-[20px] font-lato-med   text-brand-white tracking-1"
          >
            Next Project
          </a>
        </div>
      )}
      {!work.gif ? (
        <video
          style={{
            // height: "100vh",
            width: "100vw",
          }}
          className=" z-10 bg-contain hidden md:block object-cover bg-center bg-no-repeat brightness-50 bg-brand-black"
          alt="loading..."
          loop
          autoPlay
          muted
          disablePictureInPicture
        >
          <source src={work.video} type="video/mp4" />
        </video>
      ) : (
        <img
          class=" hidden md:block z-10 object-cover object-center bg-no-repeat brightness-50 bg-brand-gray"
          style={{
            width: "80.5%",
          }}
          src={work.video}
          alt="hi"
        ></img>
      )}
      <img
        class=" block md:hidden z-10 w-full object-center  bg-no-repeat brightness-50 bg-brand-gray"
        src={work.mobVideo}
        alt="hi"
      ></img>
    </div>
  );
};

export default Hero;
