import React, { useState } from "react";
import HeroImage from "../assets/landingpage/sam.png";
import IndiaFlag from "../assets/landingpage/🇮🇳.svg";

const LandingSection = ({ imageEnter, largeEnter }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      id="landing-section"
      className="px-7 md:px-48 min-h-screen w-full text-white bg-brand-black top-0 left-0 "
      onMouseEnter={imageEnter}
      onMouseLeave={imageEnter}
    >
      <div class="relative flex flex-col justify-center items-center md:block h-full mt-20 md:mt-0 md:py-52 w-full">
        <h1
          class="text-3xl z-20 md:text-5xl md:ml-4 font-thin mt-60 md:mt-16 w-9/10  md:w-8/10 font-lato-light-italic landing-page-text  "
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          style={{
            color: "#FEFEFE",
            lineHeight: "1.4",
            zIndex: 20,
            position: "inherit",
          }}
        >
          Hey I’m <span className="font-lora-italic ml-1">Shradha</span>
          <br />I work with products driven by{" "}
          <span className="font-lora-italic">purpose</span> <br />
          that reaches{" "}
          <span className="font-lora-italic mr-1">beyond modernity.</span>
        </h1>
        <div class="flex flex-col md:flex-row md:items-center w-full work-landing-text md:mb-0 md:mt-0">
          <a
            href="https://www.linkedin.com/in/shradha-b-k/"
            target="_blank"
            rel="noreferrer"
            className="py-2 md:py-4 flex justify-center items-center md:ml-4 mt-2 md:mt-0 rounded-l-full rounded-r-full text-white max-w-max tracking-wider"
          >
            <div
              style={{
                letterSpacing: "0.2em",
                color: "#FFEE8C",
                fontSize: "16px",
              }}
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              className="uppercase font-lato border-2 rounded-full py-[18px] pl-5 pr-4 border-[#A79F74]"
            >
              Work with me ✨
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          width: "324px",
          height: "432px",
          transform: "rotate(2.832deg) translateY(0)",
          borderRadius: "10px",
          position: "absolute",
          overflow: "hidden",
          zIndex: 10, // Ensure this div is on top of the content
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`hidden md:block absolute right-60 bottom-20 bg-cover bg-center bg-no-repeat`}
      >
        <img
          src={HeroImage}
          alt="Hero Pic"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {hovered && (
          <>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 11,
                // border: "2px dotted #FFF",
                background:
                  "lightgray 50% / cover no-repeat, linear-gradient(117deg, rgba(255, 255, 255, 0.25) 2.61%, rgba(255, 255, 255, 0.00) 87.34%)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
                backdropFilter: "blur(13px)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                zIndex: 12,
                whiteSpace: "nowrap",
              }}
            >
              <p
                style={{ color: "#fefefe", fontWeight: "bold" }}
                className="font-lora-italic text-4xl"
              >
                Van Gogh Art
              </p>
              <p className="pt-3 flex w-full justify-center align-baseline gap-3">
                Bengaluru{" "}
                <span>
                  <img src={IndiaFlag} alt="India Flag" />
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingSection;
