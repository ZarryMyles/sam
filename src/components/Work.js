import React, { useState } from "react";
import { ChevronRight, ChevronLeft, ArrowRightCircle } from "react-feather";
import WorkVideoMob from "./WorkVideoMob";
const works = [
  {
    id: 1,
    title: "BillEasy",
    domain: "Research",
    bgColor: "#F7FCFF",
    description:
      "Creating an efficient accounting process for \n evolving businesses and enhanced work systems.",
    gif: false,
    mobGif: false,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1662181482/work_gifs/BillEasy-short_yhhk58.mp4",
    mobVideo:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1662181482/work_gifs/BillEasy-short_yhhk58.mp4",
    link: "/billeasy",
  },
  {
    id: 2,
    title: "BillEasy",
    domain: "Visual Design",
    bgColor: "#fasd",
    description:
      "Creating an efficient accounting process for \n evolving businesses and enhanced work systems.",
    gif: false,
    mobGif: true,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg",
    video:
      "https://res.cloudinary.com/ahum/video/upload/v1662232035/BillEasy_Visual_hzrwgo.mp4",
    mobVideo:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1662494455/work_gifs/Mob_BillEasy_Visual_v1xkni.gif",

    link: "/billeasy-visual-design",
  },
  {
    id: 3,
    title: "HappilyEver",
    domain: "Branding",
    bgColor: "#EB9B9B",
    description:
      "Designing brands to be more people \n Interactive : Adding value to future Brand \n Identities ",
    gif: true,
    mobGif: true,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/3.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/render_s6dzdu.gif",
    mobVideo:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/render_s6dzdu.gif",
    link: "/happilyever",
  },
  {
    id: 4,
    title: "Smart Vision",
    domain: "Case Study",
    bgColor: "#F7FCFF",
    description:
      "Making smartphones simpler for users with \n impaired vision : A step towards an inclusive and \n consumer-centric approach",
    gif: true,
    mobGif: true,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/2.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1662486989/work_gifs/smartvision_ewgu7t.gif",
    mobVideo:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/Comp_1_tdwzlp.gif",
    link: "/smartvision",
  },
];
const LandingSection = ({ imageEnter, largeEnter }) => {
  const [activeWork, setActiveWork] = useState(works[0]);

  const sideNav = () => (
    <div
      class="hidden md:flex flex-col absolute "
      style={{
        top: "30%",
        left: "0",
      }}
      onMouseEnter={imageEnter}
      onMouseLeave={imageEnter}
    >
      {works.map((work) => (
        <div
          onClick={() => setActiveWork(work)}
          style={{
            backgroundImage: `url(${work.image})`,
          }}
          class={`${
            work.id === activeWork.id
              ? "w-24"
              : activeWork.id + 1 === work.id || work.id + 1 === activeWork.id
              ? "w-10 brightness-50 hover:brightness-75"
              : "w-0 brightness-75"
          } cursor-pointer  hover:w-24 relative h-16 bg-cover bg-center bg-no-repeat my-2 transition-all duration-500 ease-in-out rounded-r-md`}
        >
          <div
            class={`${
              work.id !== activeWork.id && "opacity-0"
            } transition-all duration-500 text-lg absolute right-0 -top-4 work-side-nav-text font-bold tracking-wider`}
          >
            0{work.id}
          </div>
        </div>
      ))}
    </div>
  );
  const cards = () => (
    <div
      className="text-black relative font-lato  select-none   h-full overflow-hidden w-full    bg-cover bg-no-repeat bg-center   flex flex-col  md:justify-start md:pt-[127px]  top-0 left-0 px-5 md:px-48  "
      onMouseEnter={imageEnter}
    >
      <div
        style={{
          zIndex: "1",
        }}
      >
        <div class=" mt-16 w-full md:w-full">
          <div
            style={{
              letterSpacing: "6px",
            }}
            class=" block md:hidden text-stroke-white mb-16 font-lato-bold  "
          >
            0{activeWork.id}
          </div>
          <div class="flex items-center mb-8 md:mb-12 ">
            <div
              style={{
                width: "72px",
              }}
              class=" bg-brand-gray h-0.5 mr-3"
            />
            <div class="text-brand-gray uppercase text-sm tracking-2 md:tracking-3 md:text-xl font-lato ">
              {activeWork.domain}
            </div>
          </div>
          <div
            className=" text-5xl md:text-5xl font-bold w-max font-lato text-brand-white  flex items-center mb-4 md:my-12"
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
          >
            {activeWork.title}
          </div>
          <div class=" font-lato tracking-0.5 md:tracking-1 hidden md:block text-[14px] md:text-[22px] leading-[19px] md:leading-[32px]  md:mt-12 mb-6 pr-5 md:pr-0 w-9/10 md:w-7/12 text-brand-white">
            {activeWork.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
          <div class=" font-lato tracking-0.5 md:tracking-1 block md:hidden text-[14px] md:text-[22px] leading-[19px] md:leading-[32px]  md:mt-12 mb-6 pr-5 md:pr-0 w-9/10 md:w-7/12 text-brand-white">
            {activeWork.description.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
          <div className="">
            <a
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              href={activeWork.link}
              class=" py-4 duration-100 transition-all  w-max  flex items-center my-3 rounded-l-full rounded-r-full text-white  max-w-max tracking-wider             "
            >
              <ArrowRightCircle
                color="#fefefe"
                width={30}
                height={30}
                strokeWidth="1"
                class="  mr-4    "
              />
              <div
                class=" text-sm md:text-lg tracking-3  font-lato"
                style={{
                  letterSpacing: "3px",
                  color: "#fefefe",
                  fontSize: "16px",
                }}
              >
                VIEW CASE
              </div>
            </a>
          </div>
        </div>
        {/* the no. with text stroke */}
        <div class="hidden md:flex w-full md:w-auto absolute bottom-10  md:bottom-2  md:right-24   flex-col items-center ">
          <div class="  hidden md:flex items-center  ">
            <ChevronLeft
              color="#b5b5b5"
              width={30}
              height={30}
              strokeWidth="2"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              onClick={() =>
                works.indexOf(activeWork) > 0 &&
                setActiveWork(works[works.indexOf(activeWork) - 1])
              }
              class={
                works.indexOf(activeWork) === 0
                  ? `hidden`
                  : ` text-2xl md:text-5xl cursor-pointer mx-5  rounded-full text-white`
              }
            />
            <div
              style={{
                letterSpacing: "6px",
              }}
              class=" text-stroke-white mb-4 font-lato-bold  "
            >
              0{activeWork.id}
            </div>
            <ChevronRight
              color="#b5b5b5"
              width={30}
              strokeWidth="2"
              height={30}
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              onClick={() => {
                if (works.indexOf(activeWork) < works.length - 1)
                  setActiveWork(works[works.indexOf(activeWork) + 1]);
                else if (works.indexOf(activeWork) === works.length - 1)
                  setActiveWork(works[0]);
              }}
              style={{
                color: "#b5b5b5",
              }}
              // ${activeWork.id == 4 && "opacity-0 cursor-auto "}
              class={` p-0 md:p-0  text-2xl md:text-5xl   cursor-pointer mx-5  rounded-full text-white`}
            />
          </div>
          {/* pagination */}
          {/* <div class=" md:hidden  w-full  flex items-center justify-center ">
            {works.map((work, index) => (
              <div
                key={index}
                onClick={() => setActiveWork(work)}
                class="  transition-all rounded-full duration-100 mx-2  "
                style={{
                  background: activeWork.id === work.id ? "#D9D9D9" : "#4E4E4E",
                  width: "6px",
                  height: "6px",
                }}
              />
            ))}
          </div> */}
        </div>
        <div class="flex md:hidden w-full md:w-auto absolute bottom-10  md:bottom-2  md:right-24 left-0  flex-col items-center md:justify-end justify-center">
          {/* pagination */}
          <div class=" md:hidden  w-full  flex items-center justify-center ">
            {works.map((work, index) => (
              <div
                key={index}
                onClick={() => setActiveWork(work)}
                class="  transition-all rounded-full duration-100 mx-2  "
                style={{
                  background: activeWork.id === work.id ? "#D9D9D9" : "#4E4E4E",
                  width: "6px",
                  height: "6px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* bg gif */}
      <div class={`w-full object-cover h-full absolute left-0 top-0 z-0`}>
        {works.map((work) =>
          work.gif ? (
            <div
              class={`hidden md:block ${
                work.id < activeWork.id
                  ? "-translate-x-full  bg-center md:bg-left"
                  : work.id > activeWork.id
                  ? " translate-x-[100%]  bg-center md:bg-right"
                  : "bg-center scale-125 "
              }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700  h-screen    absolute
             w-100 md:w-screen   md:object-cover  bg-red-100  `}
            >
              <img
                alt="hi"
                className="w-full h-full object-cover bg-cover object-right"
                autoplay
                src={work.video}
                // alt="loading..."
              />
              <div class="absolute w-full h-full bg-black opacity-50 left-0 top-0"></div>
            </div>
          ) : (
            <div
              class={`hidden md:block ${
                work.id < activeWork.id
                  ? "-translate-x-full  bg-center md:bg-left"
                  : work.id > activeWork.id
                  ? " translate-x-[100%]  bg-center md:bg-right"
                  : "bg-center scale-125 "
              }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700    h-screen   absolute
               w-100 md:w-screen  md:opacity-100 opacity-100 md:object-cover   `}
            >
              <video
                className="w-full h-full object-cover  "
                loop
                autoPlay={activeWork.id === work.id ? true : false}
                muted
              >
                <source src={work.video} type="video/mp4" />
              </video>
              <div class="absolute w-full h-full bg-black opacity-50 left-0 top-0"></div>
            </div>
          )
        )}
      </div>
      {/* mob video */}
      {/* <div class={`w-full object-cover h-full absolute left-0 top-0 z-0`}>
        {works.map((work) =>
          work.mobGif ? (
            <div
              style={{
                background: `${work.bgColor}`,
              }}
              class={` md:hidden ${
                work.id < activeWork.id
                  ? "-translate-x-full  bg-center md:bg-left"
                  : work.id > activeWork.id
                  ? " translate-x-[100%]  bg-center md:bg-right"
                  : "bg-center  "
              }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700  h-screen    absolute
             w-100 md:w-screen   md:object-contain  
             
             `}
            >
              <img
                alt="hi"
                className="w-full h-full object-contain object-bottom"
                src={work.mobVideo}
              />
              <div class="absolute w-full h-full bg-black opacity-50 left-0 top-0"></div>
            </div>
          ) : (
            <div
              style={{
                background: `${work.bgColor}`,
              }}
              class={` md:hidden ${
                work.id < activeWork.id
                  ? "-translate-x-full  bg-center md:bg-left"
                  : work.id > activeWork.id
                  ? " translate-x-[100%]  bg-center md:bg-right"
                  : "bg-bottom  "
              }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700    h-screen   absolute
               w-100 md:w-screen  md:opacity-100 opacity-100 md:object-cover   `}
            >
              <video
                className="w-full h-full object-contain object-bottom "
                loop
                autoPlay={true}
                muted
              >
                <source src={work.mobVideo} type="video/mp4" />
              </video>
              <div class="absolute w-full h-full bg-black opacity-50 left-0 top-0"></div>
            </div>
          )
        )}
      </div> */}
      {/* gifs for mobiles */}
      {/* <div class="md:hidden w-full h-full absolute left-0 top-0 z-0">
        {works.map((work) => (
          <div
            class={` block md:hidden ${
              work.id < activeWork.id
                ? "-translate-x-full  bg-bottom md:bg-left"
                : work.id > activeWork.id
                ? " translate-x-[100%]  bg-bottom md:bg-right"
                : work.id == 4
                ? "bg-center"
                : "bg-center  "
            }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700  h-screen    absolute
             w-100 md:w-screen    object-center object-cover  bg-red-100  `}
          >
            <img
              alt="hi"
              className="w-full h-full object-bottom bg-bottom"
              src={work.video}
              
            />
            <div class="absolute w-full h-full bg-black opacity-50 left-0 top-0"></div>
          </div>
        ))}
      </div> */}
    </div>
  );

  //
  return (
    <div
      id="work"
      className="h-screen overflow-y-hidden  flex  w-full relative"
    >
      <div class="w-full h-full hidden md:block">{cards()}</div>
      <div class="w-full h-full md:hidden">
        <WorkVideoMob largeEnter={largeEnter} imageEnter={imageEnter} />{" "}
      </div>
      {/* {sideNav()} */}
    </div>
  );
};

export default LandingSection;
