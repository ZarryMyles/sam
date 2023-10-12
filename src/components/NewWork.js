import React, { useState } from "react";
import { ParallaxHover } from "react-parallax-hover";

// Work Backgrounds
import HikeBG from "../assets/newwork/hikebg.png";
import HikeBG2 from "../assets/newwork/hikebg2.png";
import Ninjaslaab from "../assets/newwork/ninjaaslab.png";
import SmartVision from "../assets/newwork/smartvision.png";

// Icons
import Lock from "../assets/icons/lock.png";

const WorkItem = ({ key, item }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a
      href={item.link ? item.link : null}
      rel="noreferrer"
      target="_blank"
      key={key}
      className="flex flex-col gap-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ParallaxHover
        borderRadius={10}
        height={440}
        rotation={2}
        scale={0}
        shadow={0}
        shine={1}
        width={664}
      >
        <div
          className={`rounded-[10px] ${hovered ? "hovered" : ""}`}
          style={{
            width: "664px",
            height: "440px",
            background: `url(${item.background})`,
          }}
        >
          <div
            style={
              {
                // backdropFilter: "blur(13px)",
                // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
              }
            }
            className="w-full h-full flex flex-col justify-start items-start md:px-11 md:pt-12 rounded-[10px]"
          >
            <p className="uppercase font-lato text-xl font-extrabold tracking-[2.6px] flex gap-2">
              {item.company}{" "}
              {item.islocked && (
                <img
                  className={`lock-icon ${hovered ? "visible" : ""}`}
                  width={24}
                  src={Lock}
                  alt="Lock Icon"
                />
              )}
            </p>
            <p className="font-lora-italic md:pt-3 text-[#fefefe] text-[34px] tracking-[0.51px]">
              {item.title}
            </p>
          </div>
        </div>
      </ParallaxHover>
      <p className="text-[#fefefe] text-[22px] tracking-[0.33px]">
        {item.subTitle}
      </p>
    </a>
  );
};

const WorkItemMobile = ({ key, item }) => {
  return (
    <a
      href={item.link}
      rel="noreferrer"
      target="_blank"
      key={key}
      className="flex flex-col gap-[10px] mb-8 w-full"
    >
      <div
        style={{
          width: "100%",
          minHeight: "231px",
          background: `url(${item.background})`,
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            // backdropFilter: "blur(13px)",
            // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
            minHeight: "231px",
          }}
          className="w-full h-full flex flex-col justify-center items-start pl-[22px] pr-[40px] py-8"
        >
          <p className="uppercase font-lato text-sm font-extrabold tracking-[1.82px] mb-5 flex gap-2">
            {item.company} {item.islocked && <img src={Lock} alt="Lock Icon" />}
          </p>
          <p className="font-lora-italic text-[#fefefe] text-[22px] font-medium leading-9 tracking-[0.33px]">
            {item.title}
          </p>
        </div>
      </div>
      <p className="text-[#fefefe] text-[16px] tracking-[0.24px] pl-[22px]">
        {item.subTitle}
      </p>
    </a>
  );
};

const NewWork = ({ imageEnter, largeEnter }) => {
  const recentWorkInfo = [
    {
      company: "hike",
      title:
        "Field Study : Diving into the Realm of Users through User Immersion",
      subTitle: "Rush By Hike, A Real Money Gaming App",
      background: HikeBG,
      link: "https://www.figma.com/proto/X6IFgiegAQerDSBe5RKBs3/Case-study-stack?page-id=1%3A2&type=design&node-id=1-8501&viewport=758%2C738%2C0.24&t=jbsnjihAGYGdgkII-1&scaling=contain&starting-point-node-id=1%3A8284&mode=design",
    },
    {
      company: "hike",
      title:
        "Revamping Onboarding Journey to Boost User Engagement & conversions",
      subTitle: "Rush By Hike, A Real Money Gaming App",
      background: HikeBG2,
      link: "",
      islocked: true,
    },
  ];

  const otherWorkInfo = [
    {
      company: "NINJAASLABS",
      title: "Streamlining Accounting Processes for Evolving Businesses",
      subTitle: "BillEasy, In-house Invoicing Software",
      background: Ninjaslaab,
      link: "https://www.figma.com/proto/X6IFgiegAQerDSBe5RKBs3/Case-study-stack?page-id=0%3A1&type=design&node-id=1-2711&viewport=1570%2C1616%2C0.11&t=yfChFZCfkj0srHhB-1&scaling=scale-down&starting-point-node-id=1%3A2711&mode=design",
      isVideo: true,
      videoLink: "",
    },
    {
      company: "PROJECT",
      title: "Simplifying Smartphones for Users with Impaired Vision",
      subTitle: "Smart Vision, An Inclusive Messaging App",
      background: SmartVision,
      link: "",
      islocked: true,
    },
  ];

  return (
    <div
      id="work"
      className="min-h-screen pt-20 md:pt-0 md:px-24 md:py-5 flex flex-col text-white w-full md:gap-32"
    >
      <div className="flex flex-col md:gap-14">
        <h3 className="text-[#979797] font-lato-italic md:text-3xl px-[22px] md:px-0 pb-4 md:pb-0 text-lg font-medium track">
          Recent Work
        </h3>
        <div className="hidden md:flex gap-[18px]">
          {recentWorkInfo.map((item, index) => (
            <WorkItem key={index} item={item} />
          ))}
        </div>
        <div className="md:hidden flex flex-col">
          {recentWorkInfo.map((item, index) => (
            <WorkItemMobile key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:gap-14 mt-8 md:mt-0">
        <h3 className="text-[#979797] font-lato-italic md:text-3xl px-[22px] md:px-0 pb-4 md:pb-0 text-lg font-medium track">
          Past Work
        </h3>
        <div className="hidden md:flex gap-[18px]">
          {otherWorkInfo.map((item, index) => (
            <WorkItem key={index} item={item} />
          ))}
        </div>
        <div className="md:hidden flex flex-col">
          {otherWorkInfo.map((item, index) => (
            <WorkItemMobile key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewWork;
