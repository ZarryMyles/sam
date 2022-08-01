import React from "react";
import Marquee from "react-marquee-slider";
import { AiOutlineMinus } from "react-icons/ai";
import { GoDash } from "react-icons/go";
const WorkLogos = ({ textEnter, textLeave, imageEnter }) => {
  const clients = [
    {
      name: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      name: "Facebook",
      logo: "https://www.facebook.com/images/fb_icon_325x325.png",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    },
    {
      name: "Google DSC",
      logo: "https://developers.google.com/community/dsc/images/dsc_lockup.png",
    },
  ];

  return (
    <div
      // onMouseEnter={imageEnter}
      // onMouseLeave={textLeave}
      className="my-20 flex justify-center items-center w-full"
      id="work-logo-container   overflow-hidden "
    >
      <div class="w-full ">
        <Marquee velocity={25}>
          {clients.map((client, index) => (
            <div className="flex items-center">
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className=" my-5 mx-20 p-10 bg-no-repeat w-28 md:w-64 bg-contain bg-center "
                style={{
                  backgroundImage: `url(${client.logo})`,
                }}
              />
            </div>
          ))}
        </Marquee>
        <Marquee direction="left" velocity={25}>
          {clients.map((client, index) => (
            <div className="flex items-center">
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className=" my-5 mx-20 p-10 bg-no-repeat w-28 md:w-64 bg-contain bg-center "
                style={{
                  backgroundImage: `url(${client.logo})`,
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default WorkLogos;
