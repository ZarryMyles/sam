import React from "react";
import { FaBehanceSquare, FaDribbbleSquare, FaLinkedin } from "react-icons/fa";
import { MapPin } from "react-feather";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Footer = ({ textEnter, textLeave, imageEnter }) => {
  const socials = [
    {
      name: "Bengaluru",
      link: "https://maps.google./maps?q=Bengaluru",
      icon: <MapPin strokeWidth={2} width={16} height={16} color="#7A2222" />,
    },
    {
      name: "Email",
      link: "https://dribbble.com/",
      // icon: <FaDribbbleSquare />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/",
      // icon: <FaLinkedin />,
    },

    {
      name: "Resume",
      link: "/",
      // icon: <TiDocumentText />,
    },
  ];
  return (
    <div
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
      id="footer-main"
      className="w-full bg-brand-darkGrey2 flex flex-col"
    >
      <div className=" flex flex-col md:flex-row md:items-end md:justify-between px-5 md:px-48 py-10 md:py-20 ">
        <div
          className="flex text-gray-400 flex-col justify-center  md:w-2/6 mb-5 md:mb-0"
          style={{
            color: "#FFC7D1",
          }}
        >
          <div
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            style={{
              fontSize: "32px",
            }}
            className=" max-w-max font-lora-italic"
          >
            Shradha
          </div>
          <div
            onMouseEnter={textEnter}
            onMouseLeave={imageEnter}
            className=" text-lg tracking-widest max-w-max font-lato-light   "
            style={{
              color: "#B5B5B5",
              fontWeight: "300",
            }}
          >
            Product Designer
          </div>
          {/* <div
            style={{
              height: "1px",
            }}
            class="w-14 mt-2 bg-white  block md:hidden"
          /> */}
        </div>
        <div class="flex flex-wrap md:flex-nowrap md:flex-row md:justify-between md:items-center md:w-3/6">
          {socials.map((social, index) => (
            <a
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              href={social.link}
              class="text-white   flex items-center  w-1/2 md:w-max  my-2 md:my-0"
            >
              {social.icon && (
                <div
                  class="hidden md:block mr-2 text-xl "
                  style={{
                    color: "#7A2222",
                  }}
                >
                  {social.icon}
                </div>
              )}
              {social.name}
              {social.icon && (
                <div
                  class="block md:hidden ml-1 text-xl "
                  style={{
                    color: "#7A2222",
                  }}
                >
                  {social.icon}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="  shadow-xl text-xs font-lato text-gray-400 flex items-center justify-center p-5 md:p-10">
        © {new Date().getFullYear()}. shradha.design . All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
