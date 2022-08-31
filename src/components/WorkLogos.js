import React from "react";
// import Ticker from "react-ticker";
import { AiOutlineMinus } from "react-icons/ai";
import { GoDash } from "react-icons/go";
import Marquee from "react-fast-marquee";
const WorkLogos = ({ textEnter, textLeave, imageEnter }) => {
  const clients = [
    {
      name: "Google Developers",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      name: "HappilyEver",
      logo: "https://www.facebook.com/images/fb_icon_325x325.png",
    },
    {
      name: "REVA HACK </>2020",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    },
    {
      name: "NinjaasLabs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    },
    {
      name: "Google Developers",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      name: "HappilyEver",
      logo: "https://www.facebook.com/images/fb_icon_325x325.png",
    },
    {
      name: "REVA HACK </>2020",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    },
    {
      name: "NinjaasLabs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    },
    {
      name: "Google Developers",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      name: "HappilyEver",
      logo: "https://www.facebook.com/images/fb_icon_325x325.png",
    },
    {
      name: "REVA HACK </>2020",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    },
    {
      name: "NinjaasLabs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    },
    {
      name: "Google Developers",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      name: "HappilyEver",
      logo: "https://www.facebook.com/images/fb_icon_325x325.png",
    },
    {
      name: "REVA HACK </>2020",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    },
    {
      name: "NinjaasLabs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    },
  ];

  return (
    <div
      className=" md:pt-48 md:pb-52 flex justify-center items-center w-full  dark:bg-brand-black"
      id="work-logo-container "
    >
      <div class="w-full ">
        <Marquee speed={60} direction="right">
          {clients.map((client, index) => (
            <div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              style={{
                fontWeight: "100",
              }}
              className="px-10 flex my-7 items-center text-xl md:text-4xl tracking-1.5  dark:text-brand-gray font-lato-light   md:mx-3"
            >
              {client.name}
            </div>
          ))}
        </Marquee>
        <Marquee speed={60} direction="left">
          {clients.map((client, index) => (
            <div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="px-10 flex mb-5 items-center  font-lora-italic  text-xl md:text-4xl tracking-1.5  dark:text-brand-gray md:mx-3"
            >
              {client.name}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default WorkLogos;
