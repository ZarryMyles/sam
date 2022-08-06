import React from "react";
import { TiDocumentText } from "react-icons/ti";
import { FaBehanceSquare, FaDribbbleSquare, FaLinkedin } from "react-icons/fa";
const Footer = ({ textEnter, textLeave, imageEnter }) => {
  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/",
      icon: <FaLinkedin />,
    },
    {
      name: "Behance",
      link: "https://www.behance.net/",
      icon: <FaBehanceSquare />,
    },
    {
      name: "Dribble",
      link: "https://dribbble.com/",
      icon: <FaDribbbleSquare />,
    },
    {
      name: "Resume",
      link: "/",
      icon: <TiDocumentText />,
    },
  ];
  return (
    <div
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
      id="footer-main"
      className="w-full flex flex-col"
    >
      <div className="bg-brand-darkGrey2 flex flex-col md:flex-row md:items-center px-5 md:px-48 py-10 md:py-20 ">
        <div className="flex text-gray-400 flex-col justify-center  md:w-2/6 mb-5 md:mb-0">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            className="text-2xl max-w-max"
          >
            Sharadda Kulkarni
          </div>
          <div
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            className=" text-sm tracking-widest max-w-max"
          >
            UI / UX Designer
          </div>
          <div
            style={{
              height: "1px",
            }}
            class="w-14 mt-2 bg-white  block md:hidden"
          />
        </div>
        <div class="flex flex-wrap md:flex-nowrap md:flex-row md:justify-between md:items-center md:w-4/6">
          {socials.map((social, index) => (
            <a
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              href={social.link}
              class="text-white  md:underline flex items-center  w-1/2 md:w-max  my-2 md:my-0"
            >
              <div class="mr-2 text-xl text-white">{social.icon}</div>
              {social.name}
            </a>
          ))}
        </div>
      </div>
      <div className=" bg-brand-footerGrey shadow-xl text-xs font-lato text-gray-400 flex items-center justify-center p-5 md:p-10">
        © {new Date().getFullYear()}. Shradha. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
