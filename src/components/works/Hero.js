import React from "react";

const Hero = ({ work, next, largeEnter, imageEnter }) => {
  return (
    <div className="h-screen w-full overflow-clip flex  ">
      <div
        style={{
          width: "19.5%",
        }}
        class="     z-20 relative bg-brand-black h-full flex flex-col justify-center w-full items-center px-5 md:px-24"
      >
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
              class=" font-lato-med text-brand-gray uppercase   tracking-widest "
            >
              {work.domain}
            </div>
          </div>
          <div
            // onMouseEnter={largeEnter}
            // onMouseLeave={imageEnter}
            style={{
              fontSize: "64px",
            }}
            class="  font-semibold tracking-3   font-lato text-white md:w-max"
          >
            {work.title}
          </div>
          {/* line animation */}
          <div
            style={{
              width: "1.3px",
              height: "32px",
              backgroundColor: "#424242",
              bottom: "70px",
            }}
            class="work-hero-vertical-line absolute  "
          ></div>
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
        class=" md:hidden z-10 bg-cover bg-center bg-no-repeat brightness-50 bg-brand-black"
        style={{
          width: "80.5%",
          backgroundImage: `url(${work.image})`,
        }}
      ></div>
      <video
        style={{
          height: "100vh",
        }}
        className=" z-10 bg-cover hidden md:block bg-center bg-no-repeat brightness-50 bg-brand-black"
        alt="loading..."
        loop
        autoPlay
        muted
        disablePictureInPicture
      >
        <source src={work.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
