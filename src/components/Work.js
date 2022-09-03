import React, { useState } from "react";
import { ChevronRight, ChevronLeft, ArrowRightCircle } from "react-feather";

const works = [
  {
    id: 1,
    title: "BillEasy",
    domain: "Research",
    description:
      "Creating an efficient accounting process for \n evolving businesses and enhanced work systems.",
    gif: false,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1662181482/work_gifs/BillEasy-short_yhhk58.mp4",
    // billEzVid,
    link: "/billeasy",
  },
  {
    id: 2,
    title: "BillEasy",
    domain: "Visual Design",
    description:
      "Creating an efficient accounting process for \n evolving businesses and enhanced work systems.",
    gif: false,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1662218697/work_gifs/BillEasy-Visual_t37pia.mp4",
    link: "/billeasy-visual-design",
  },
  {
    id: 3,
    title: "HappilyEver",
    domain: "Branding",
    description:
      "Designing brands to be more people \n Interactive : Adding value to future Brand Identities ",
    gif: true,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/3.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/render_s6dzdu.gif",
    link: "/happilyever",
  },
  {
    id: 4,
    title: "Smart Vision",
    domain: "Case Study",
    description:
      "Making smartphones simpler for users with \n impaired vision : A step towards an inclusive and \n consumer-centric approach",
    gif: true,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/2.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/Comp_1_tdwzlp.gif",
    link: "/smartvision",
  },
];
const LandingSection = ({ textEnter, textLeave, imageEnter, largeEnter }) => {
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
      className="text-black relative font-lato  select-none   h-full overflow-hidden w-full    bg-cover bg-no-repeat bg-center   flex flex-col justify-center  top-0 left-0 px-5 md:px-48  "
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
    >
      <div
        style={{
          zIndex: "1",
        }}
        // onMouseEnter={imageEnter}
        // onMouseLeave={textLeave}
      >
        <div class="w-full md:w-full">
          <div class="flex items-center my-12 ">
            <div
              style={{
                width: "72px",
              }}
              class=" bg-brand-gray h-0.5 mr-3"
            />
            <div
              // onMouseOver={() => setFlag((state) => !state)}
              // onMouseOut={() => setFlag((state) => !state)}
              style={{
                letterSpacing: "3px",
              }}
              class="text-brand-gray text-xl font-lato "
            >
              {activeWork.domain}
            </div>
          </div>
          <div
            className=" text-5xl md:text-5xl font-bold w-max font-lato text-brand-white  flex items-center my-12"
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
          >
            {activeWork.title}
            {/* <motion.div>
              {activeWork.title.split("").map((letter, index) => (
                <motion.span
                  animate={flag ? `delay${index + 1}` : "default"}
                  variants={trailVariants}
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div> */}
          </div>
          <div
            style={{
              letterSpacing: "1px",
              lineHeight: "32px",
              fontSize: "22px",
            }}
            class=" font-lato  mt-12 mb-6 pr-5 md:pr-0 md:w-7/12 text-brand-white"
          >
            {activeWork.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
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
                class=" text-lg  font-lato"
                style={{
                  letterSpacing: "3px",
                  color: "#fefefe",
                  color: "#Fefefe",
                  fontSize: "16px",
                }}
              >
                VIEW CASE
              </div>
            </a>
          </div>
        </div>
        {/* the no. with text stroke */}
        <div class="absolute bottom-10 md:bottom-2 right-2 md:right-24 flex flex-col items-center">
          <div class="  flex items-center  ">
            {/* <ChevronLeft
              color="#b5b5b5"
              width={30}
              height={30}
              strokeWidth="2"
              onClick={() =>
                works.indexOf(activeWork) > 0 &&
                setActiveWork(works[works.indexOf(activeWork) - 1])
              }
              class={` ${
                activeWork.id == 1 && "opacity-0 cursor-auto "
              }    text-2xl md:text-5xl cursor-pointer mx-5  rounded-full text-white`}
            /> */}
            <div
              style={{
                letterSpacing: "6px",
                // fontWeight: "500",
                // color: "#fefefe",
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
              onMouseEnter={textEnter}
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
              class={`
              p-0 md:p-0  text-2xl md:text-5xl   cursor-pointer mx-5  rounded-full text-white`}
            />
          </div>
        </div>
      </div>
      {/* bg image */}
      {/* {works.map((work) => (
        <div class="w-full h-full absolute    left-0 top-0 z-0">
          <div
            style={{
              backgroundImage: `url(${work.image})`,
            }}
            class={`${
              work.id < activeWork.id
                ? "-translate-x-full  bg-center md:bg-left"
                : work.id > activeWork.id
                ? " translate-x-[100%]  bg-center md:bg-right"
                : "bg-center scale-125 "
            }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700 brightness-50 h-full `}
          />
        </div>
      ))} */}
      {/* bg gif */}
      <div class={`w-full object-cover h-full absolute left-0 top-0 z-0`}>
        <div
          class="bg-black w-full h-full absolute top-0 left-0"
          style={
            {
              // background: rgba(13, 13, 13, 0.78),
            }
          }
        ></div>

        {works.map((work) =>
          work.gif ? (
            <img
              class={`${
                work.id < activeWork.id
                  ? "-translate-x-full  bg-center md:bg-left"
                  : work.id > activeWork.id
                  ? " translate-x-[100%]  bg-center md:bg-right"
                  : "bg-center scale-125 "
              }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700 brightness-20 h-screen  object-cover  absolute
             w-100 md:w-screen  md:opacity-100 opacity-100 md:object-cover  bg-red-100  `}
              src={work.video}
              // alt="loading..."
            />
          ) : (
            <video
              // className=""
              class={`${
                work.id < activeWork.id
                  ? "-translate-x-full  bg-center md:bg-left"
                  : work.id > activeWork.id
                  ? " translate-x-[100%]  bg-center md:bg-right"
                  : "bg-center scale-125 "
              }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700 brightness-50 h-screen  object-cover  absolute
               w-100 md:w-screen  md:opacity-100 opacity-100 md:object-cover  bg-red-100  `}
              loop
              autoPlay={activeWork.id == work.id ? true : false}
              muted
              // onLoadedData={toggleLoading}
            >
              <source
                // Changing source of video depending on size of the screen
                src={work.video}
                type="video/mp4"
              />
            </video>
            // <WorkVideo work={work.video} activeWork={activeWork} />
          )
        )}
      </div>
    </div>
  );

  return (
    <div
      id="work"
      className="h-screen overflow-y-hidden  flex bg-white w-full relative"
    >
      {cards()}
      {/* {sideNav()} */}
    </div>
  );
};

export default LandingSection;
