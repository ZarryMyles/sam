import React from "react";
import { MapPin } from "react-feather";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Footer = ({ textEnter, imageEnter, largeEnter }) => {
  const socials = [
    {
      name: "Bengaluru",
      link: "https://maps.google./maps?q=Bengaluru",
      icon: <MapPin strokeWidth={2} width={16} height={16} color="#7A2222" />,
    },
    {
      name: "Email",
      link: "mailto:fake@mail.com",
      // icon: <FaDribbbleSquare />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/shradha-b-k",
      // icon: <FaLinkedin />,
    },

    {
      name: "Resume",
      link: "/",
      // icon: <TiDocumentText />,
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
      <div className=" footerDiv flex flex-col md:flex-row md:items-end md:justify-between px-5 md:px-48 py-10 md:py-24 ">
        <div
          className="flex text-gray-400 flex-col justify-center  md:w-2/6 mb-5 md:mb-0"
          style={{
            color: "#FFC7D1",
          }}
        >
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.li className=" " variants={item}>
              <>
                <div
                  // onMouseEnter={textEnter}
                  // onMouseLeave={imageEnter}
                  style={{
                    fontSize: "32px",
                  }}
                  className=" max-w-max font-lora-italic"
                >
                  Shradha
                </div>
                <div
                  // onMouseEnter={textEnter}
                  // onMouseLeave={imageEnter}
                  className=" text-lg tracking-widest max-w-max font-lato   "
                  style={{
                    color: "#B5B5B5",
                    fontWeight: "300",
                  }}
                >
                  Product Designer
                </div>
              </>
            </motion.li>
          </motion.ul>
        </div>
        <div class="flex flex-wrap md:flex-nowrap md:flex-row md:justify-between md:items-center md:w-3/6">
          {socials.map((social, index) => (
            <a
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              href={social.link}
              class="text-brand-gray font-lato flex items-center  w-1/2 md:w-max  my-2 md:my-0"
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
                  class="flock md:hidden ml-1 text-xl "
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
      <div
        style={{
          fontSize: "10px",
        }}
        className=" footerDiv2  shadow-xl  font-lato text-brand-gray flex items-center justify-center p-5 md:p-10"
      >
        © {new Date().getFullYear()}. shradha.design . All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
