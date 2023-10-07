import React from "react";
import Tilt from "react-parallax-tilt";
import HikeBG from "../assets/newwork/hikebg.jpeg";
import OtherBG1 from "../assets/newwork/otherbg1.jpg";
import OtherBG2 from "../assets/newwork/otherbg2.jpeg";

const WorkItem = ({ key, item }) => {
  return (
    <a
      href={item.link}
      rel="noreferrer"
      target="_blank"
      key={key}
      className="flex flex-col gap-6"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.9}
        glareColor="lightblue"
        glarePosition="all"
        tiltReverse={true}
        scale={1.1}
        style={{ borderRadius: "10px" }}
      >
        <div
          className="rounded-[10px]"
          style={{
            width: "664px",
            height: "440px",
            background: `url(${item.background})`,
          }}
        >
          <div
            style={{
              backdropFilter: "blur(13px)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
            }}
            className="w-full h-full flex flex-col justify-center items-start md:px-11 rounded-[10px]"
          >
            <p className="uppercase font-lato text-xl font-extrabold tracking-[2.6]">
              {item.company}
            </p>
            <p className="font-lora-italic text-[#fefefe] text-[34px] tracking-[0.51px]">
              {item.title}
            </p>
          </div>
        </div>
      </Tilt>
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
        className="rounded-[10px]"
        style={{
          width: "100%",
          minHeight: "231px",
          background: `url(${item.background})`,
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backdropFilter: "blur(13px)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
            minHeight: "231px",
          }}
          className="w-full h-full flex flex-col justify-center items-start pl-[22px] pr-[40px] py-8"
        >
          <p className="uppercase font-lato text-sm font-extrabold tracking-[1.82px] mb-5">
            {item.company}
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
      title: "Revamping Onboarding Journey to Increase User Engagement",
      subTitle: "Rush By Hike, A Real Money Gaming App",
      background: HikeBG,
      link: "https://www.google.com",
    },
    {
      company: "hike 2?",
      title: "Revamping Onboarding Journey to Increase User Engagement",
      subTitle: "Rush By Hike, A Real Money Gaming App",
      background: HikeBG,
      link: "https://www.google.com",
    },
  ];

  const otherWorkInfo = [
    {
      company: "billeasy",
      title: "Revamping Onboarding Journey to Increase User Engagement",
      subTitle: "BillEasy, In-house Invoicing Software",
      background: OtherBG1,
      link: "https://www.google.com",
    },
    {
      company: "freelance",
      title: "Revamping Onboarding Journey to Increase User Engagement",
      subTitle: "Web Design, Portfolio Website",
      background: OtherBG2,
      link: "https://www.google.com",
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
