import React from "react";
import { ParallaxHover } from "react-parallax-hover";

// Work Backgrounds Desktop
import HikeBG from "../assets/newwork/hikebg.png";
import HikeBG2 from "../assets/newwork/hikebg2.png";
import Ninjaslaab from "../assets/newwork/ninjaaslab.png";
import SmartVision from "../assets/newwork/smartvision.png";
// Work Backgrounds Mobile
import HikeBGmob from "../assets/newwork/hikebgmob.png";
import HikeBG2mob from "../assets/newwork/hikebg2mob.png";
import NinjaslaabMob from "../assets/newwork/ninjaaslabmob.png";
import SmartVisionMob from "../assets/newwork/smartvisionmob.png";

// Icons
import Lock from "../assets/icons/lock.png";
import Player from "../assets/newwork/player.png";

const WorkItem = ({ key, item, imageEnter, largeEnter }) => {
  return (
    <a
      href={item.link ? item.link : null}
      rel="noreferrer"
      target="_blank"
      key={key}
      className="flex flex-col gap-6"
      onMouseEnter={item.islocked ? imageEnter : largeEnter}
      onMouseLeave={imageEnter}
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
          className={`rounded-[10px] hovered`}
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
                  className="lock-icon"
                  width={24}
                  src={Lock}
                  alt="Lock Icon"
                />
              )}
            </p>
            <p className="font-lora-italic md:pt-3 text-[#fefefe] text-[34px] tracking-[0.51px]">
              {item.title}
            </p>
            {item.isVideo && (
              <a
                href={item.videoLink}
                className="md:mt-7 z-40"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Player} alt="Player icon" width={62} height={62} />
              </a>
            )}
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
          minWidth: "100vw",
          background: `url(${item.backgroundMob})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            // backdropFilter: "blur(13px)",
            // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
            minHeight: "231px",
          }}
          className="w-full h-full"
        >
          <div className="w-full h-full flex flex-col justify-center items-start pl-[22px] pr-[40px] py-8">
            <p className="uppercase font-lato text-sm font-extrabold tracking-[1.82px] mb-5 flex gap-1.5 items-center">
              {item.company}{" "}
              {item.islocked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.3332 6.00004V4.66671C11.3332 3.78265 10.982 2.93481 10.3569 2.30968C9.73174 1.68456 8.8839 1.33337 7.99984 1.33337C7.11578 1.33337 6.26794 1.68456 5.64282 2.30968C5.01769 2.93481 4.6665 3.78265 4.6665 4.66671V6.00004C4.13607 6.00004 3.62736 6.21075 3.25229 6.58582C2.87722 6.9609 2.6665 7.46961 2.6665 8.00004V12.6667C2.6665 13.1971 2.87722 13.7058 3.25229 14.0809C3.62736 14.456 4.13607 14.6667 4.6665 14.6667H11.3332C11.8636 14.6667 12.3723 14.456 12.7474 14.0809C13.1225 13.7058 13.3332 13.1971 13.3332 12.6667V8.00004C13.3332 7.46961 13.1225 6.9609 12.7474 6.58582C12.3723 6.21075 11.8636 6.00004 11.3332 6.00004ZM5.99984 4.66671C5.99984 4.13627 6.21055 3.62757 6.58563 3.25249C6.9607 2.87742 7.46941 2.66671 7.99984 2.66671C8.53027 2.66671 9.03898 2.87742 9.41405 3.25249C9.78913 3.62757 9.99984 4.13627 9.99984 4.66671V6.00004H5.99984V4.66671ZM11.9998 12.6667C11.9998 12.8435 11.9296 13.0131 11.8046 13.1381C11.6796 13.2631 11.51 13.3334 11.3332 13.3334H4.6665C4.48969 13.3334 4.32012 13.2631 4.1951 13.1381C4.07008 13.0131 3.99984 12.8435 3.99984 12.6667V8.00004C3.99984 7.82323 4.07008 7.65366 4.1951 7.52863C4.32012 7.40361 4.48969 7.33337 4.6665 7.33337H11.3332C11.51 7.33337 11.6796 7.40361 11.8046 7.52863C11.9296 7.65366 11.9998 7.82323 11.9998 8.00004V12.6667Z"
                    fill="white"
                  />
                </svg>
              )}
            </p>
            <div
              style={{ width: `${item.mobWidth ? item.mobWidth : "270"}px` }}
            >
              <p
                className={`font-lora-italic text-[#fefefe] text-[22px] font-medium leading-9 tracking-[0.33px]`}
              >
                {item.title}
              </p>
              {item.isVideo && (
                <a
                  href={item.videoLink}
                  className="z-40 mt-3 w-max flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Player} alt="Player icon" width={43} height={43} />
                </a>
              )}
            </div>
          </div>
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
      backgroundMob: HikeBGmob,
      mobWidth: 290,
      // islocked: true,
      link: "https://www.figma.com/proto/X6IFgiegAQerDSBe5RKBs3/Case-study-stack?page-id=1%3A2&type=design&node-id=1-8501&viewport=758%2C738%2C0.24&t=jbsnjihAGYGdgkII-1&scaling=contain&starting-point-node-id=1%3A8284&mode=design",
    },
    {
      company: "hike",
      title: "Concept Evaluation: Testing 'Tap to Choose' Feature in Ludo Game",
      subTitle: "Rush By Hike, A Real Money Gaming App",
      background: HikeBG2,
      backgroundMob: HikeBG2mob,
      link: "https://morning-jackrabbit-815.notion.site/Concept-Evaluation-Testing-Tap-to-Choose-Feature-in-Ludo-Game-74217ff086d04d7cbf8a56cb81d87b9f?pvs=4",
      // islocked: true,
    },
  ];

  const otherWorkInfo = [
    {
      company: "NINJAASLABS",
      title: "Streamlining Accounting Processes for Evolving Businesses",
      subTitle: "BillEasy, In-house Invoicing Software",
      background: Ninjaslaab,
      backgroundMob: NinjaslaabMob,
      link: "https://www.figma.com/proto/X6IFgiegAQerDSBe5RKBs3/Case-study-stack?page-id=0%3A1&type=design&node-id=1-2711&viewport=1570%2C1616%2C0.11&t=yfChFZCfkj0srHhB-1&scaling=scale-down&starting-point-node-id=1%3A2711&mode=design",
      isVideo: true,
      videoLink:
        "https://res.cloudinary.com/samydoo/video/upload/v1663016727/SamWebsite/Work/Desktop/C01_yqtldj_byvhkv.webm",
    },
    {
      company: "PROJECT",
      title: "Simplifying Smartphones for Users with Impaired Vision",
      subTitle: "Smart Vision, An Inclusive Messaging App",
      background: SmartVision,
      backgroundMob: SmartVisionMob,
      link: "",
      islocked: true,
    },
  ];

  return (
    <div
      id="work"
      className="min-h-screen pt-20 md:pt-[60px] md:px-24 md:py-5 flex flex-col text-white w-full md:gap-32"
    >
      <div className="flex flex-col md:gap-14">
        <h3 className="text-[#979797] font-lato-italic md:text-3xl px-[22px] md:px-0 pb-4 md:pb-0 text-lg font-medium track">
          Recent Work
        </h3>
        <div className="hidden md:flex md:justify-between gap-[18px]">
          {recentWorkInfo.map((item, index) => (
            <WorkItem
              key={index}
              item={item}
              imageEnter={imageEnter}
              largeEnter={largeEnter}
            />
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
        <div className="hidden md:flex md:justify-between gap-[18px]">
          {otherWorkInfo.map((item, index) => (
            <WorkItem
              key={index}
              item={item}
              imageEnter={imageEnter}
              largeEnter={largeEnter}
            />
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
