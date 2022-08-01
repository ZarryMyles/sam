import React from "react";

const Footer = ({ textEnter, textLeave, imageEnter }) => {
  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vishal-raj-1b1b3b1a3/",
    },
    {
      name: "Behance",
      link: "https://www.behance.net/vishalraj_1",
    },
    {
      name: "Dribble",
      link: "https://dribbble.com/vishalraj_1",
    },
    {
      name: "Resume",
      link: "/",
    },
  ];
  return (
    <div
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
      className="w-full flex flex-col"
    >
      <div className="bg-brand-darkGrey2 flex items-center md:px-48 py-20 ">
        <div className="flex text-gray-400 flex-col justify-center  md:w-2/6">
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
        </div>
        <div class="flex justify-between items-center md:w-4/6">
          {socials.map((social, index) => (
            <a
              onMouseEnter={textEnter}
              onMouseLeave={imageEnter}
              href={social.link}
              class="text-white underline "
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
      <div className=" bg-brand-footerGrey shadow-xl text-xs font-lato text-gray-400 flex items-center justify-center p-10">
        © 2022. Shradha. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
