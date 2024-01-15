import React, { useEffect, useState } from "react";
import HeroImage from "../assets/landingpage/sam.jpg";
import { ParallaxHover } from "react-parallax-hover";

// Icons
import linkedin from "../assets/icons/socials/linkedin_landing.png";
import dribbble from "../assets/icons/socials/dribbble_landing.png";
import mail from "../assets/icons/socials/mail_landing.png";

const LandingSection = ({ imageEnter, largeEnter }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    console.log(hovered);
  }, [hovered]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      id="landing-section"
      className="px-7 md:px-0 md:min-h-screen md:min w-full text-white top-0 left-0"
      onMouseEnter={imageEnter}
      onMouseLeave={imageEnter}
    >
      <div className="relative w-full h-full md:m-auto md:max-w-7xl ">
        <div class="relative flex flex-col justify-center items-center md:block h-full md:mt-0 md:py-52 w-full">
          <h1
            class="text-3xl z-20 md:text-5xl md:ml-28 font-thin mt-60 md:mt-20 w-full mx-auto md:w-max font-lato-light-italic landing-page-text  "
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
          <div className="flex flex-row md:items-center w-full work-landing-text md:mb-0 md:mt-0 md:ml-28 gap-6">
            <a
              href="https://www.linkedin.com/in/shradha-b-k"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
            >
              <div className="p-[15px] border-2 rounded-[50%] bg-brand-gold border-brand-gold w-[56px] h-[56px] flex items-center justify-center">
                <img
                  src={linkedin}
                  alt="Linkedin Landing"
                  width={24}
                  height={24}
                />
              </div>
            </a>
            <a
              href="https://dribbble.com/Shradha_b_k"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
            >
              <div className="p-[15px] border-2 rounded-[50%] border-brand-fadedGold w-[56px] h-[56px] flex items-center justify-center">
                <img
                  src={dribbble}
                  alt="Linkedin Landing"
                  width={24}
                  height={24}
                />
              </div>
            </a>
            <a
              href="mailto:shradhakaba@gmail.com"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
            >
              <div className="p-[15px] border-2 rounded-[50%] border-brand-fadedGold w-[56px] h-[56px] flex items-center justify-center">
                <img src={mail} alt="Linkedin Landing" width={24} height={24} />
              </div>
            </a>
          </div>
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute right-32 bottom-20 hidden md:block"
          style={{
            transform: "rotate(2.832deg) translateY(0)",
            zIndex: hovered ? "40" : "10",
          }}
        >
          <ParallaxHover
            rotation={2}
            scale={0}
            shadow={0}
            shine={1}
            width={353}
            height={460}
            borderRadius={10}
          >
            <div
              className="hideen md:flex justify-center items-center bg-[#121212] w-full h-full"
              onMouseEnter={handleMouseEnter}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                onMouseEnter={handleMouseEnter}
                style={{
                  zIndex: hovered ? 40 : 10,
                  background: `url(${HeroImage})`,
                  backgroundSize: "contain",
                  width: "324px",
                  height: "432px",
                  borderRadius: "10px",
                }}
                className={`hidden md:flex justify-start items-end bg-cover bg-center bg-no-repeat}`}
              >
                <div
                  className="ml-4 leading-[35px] font-lora-italic font-semibold text-xs tracking-[0.18px]"
                  // style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                  Van Gogh Art - Bengaluru, India
                </div>
              </div>
            </div>
          </ParallaxHover>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
