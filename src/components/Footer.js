import React from "react";
import { MapPin } from "react-feather";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = ({ imageEnter, largeEnter }) => {
  const resumeLink = process.env.Resume_URL;
  const socials = [
    {
      name: "Bengaluru",
      link: "https://goo.gl/maps/81bSbpJiwa8DrD219",
      icon: <MapPin strokeWidth={2} width={16} height={16} color="#7A2222" />,
    },
    {
      name: "Email",
      link: "mailto:shradhabkaba@gmail.com",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/shradha-b-k",
    },

    {
      name: "Resume",
      link: resumeLink,
    },
  ];
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div
      onMouseEnter={imageEnter}
      onMouseLeave={imageEnter}
      id="footer-main"
      className="w-full bg-brand-darkGrey2 flex flex-col"
    >
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={1}
      >
        <div className=" footerDiv flex flex-col md:flex-row md:items-end md:justify-between px-5 md:px-48 py-10 md:py-24 ">
          <div
            className="flex text-gray-400 flex-col justify-center  md:w-2/6 mb-5 md:mb-0"
            style={{
              color: "#FFC7D1",
            }}
          >
            <ul
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <li className=" " variants={item}>
                <>
                  <div className=" max-w-max text-base md:text-[32px] tracking-[0.04em] font-lora-italic">
                    Shradha
                  </div>
                  <div
                    className=" text-sm md:text-lg tracking-widest max-w-max font-lato   "
                    style={{
                      color: "#B5B5B5",
                      fontWeight: "300",
                    }}
                  >
                    Product Designer
                  </div>
                </>
              </li>
            </ul>
          </div>
          <div class="flex  flex-row justify-between tracking-[0.01em] items-center md:w-3/6 w-full ">
            {socials.map((social, index) => (
              <a
                onMouseEnter={largeEnter}
                onMouseLeave={imageEnter}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                class="text-brand-gray font-lato flex items-center  text-sm md:text-base     md:w-max  my-2 md:my-0"
              >
                {social.icon && (
                  <div
                    class=" mr-2 text-xl "
                    style={{
                      color: "#7A2222",
                    }}
                  >
                    {social.icon}
                  </div>
                )}
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            fontSize: "10px",
          }}
          className=" footerDiv2 shadow-xl text-sm md:text-base  font-lato text-brand-gray flex items-center justify-center p-5 md:p-10"
        >
          © {new Date().getFullYear()}. shradha.design . All Rights Reserved.
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Footer;
