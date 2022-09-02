import React, { useState, useEffect } from "react";
import {
  WorkHero,
  WorkVideos,
  Navbar,
  WorkHeading,
  Loader,
} from "../../components";
import { ReactComponent as Quote } from "../../assets/icons/quotestart.svg";
import { ArrowRightCircle } from "react-feather";
import { motion } from "framer-motion";

// images
import Hero from "../../assets/works/billEasy/billEasyResearchpng.png";
import collage from "../../assets/works/billEasy/billEasyCaseStudyCollage.png";
import insightsImg from "../../assets/works/billEasy/billEasyInsights.svg";
import usability1 from "../../assets/works/billEasy/billEasyUsabilityTesting1.svg";
import usability2 from "../../assets/works/billEasy/billEasyUsabilityTesting2.svg";
import usability3 from "../../assets/works/billEasy/billEasyUsabilityTesting3.svg";
import usability4 from "../../assets/works/billEasy/billEasyUsabilityTesting4.svg";
import usabilityMatrix from "../../assets/works/billEasy/billEasyUsabilityMatrix.svg";
import persona1 from "../../assets/works/billEasy/billEasyPersona1.svg";
import persona2 from "../../assets/works/billEasy/billEasyPersona2.svg";
import persona3 from "../../assets/works/billEasy/billEasyPersona3.svg";
import CaseStudy1 from "../../assets/works/billEasy/billEasybi1.svg";
import CaseStudy2 from "../../assets/works/billEasy/billEasybi2.svg";
import CaseStudy3 from "../../assets/works/billEasy/billEasybi3.svg";
import CaseStudy4 from "../../assets/works/billEasy/billEasybi4.svg";
import CaseStudy5 from "../../assets/works/billEasy/billEasybi5.svg";
import CaseStudy6 from "../../assets/works/billEasy/billEasybi6.svg";
import CaseStudy7 from "../../assets/works/billEasy/billEasybi7.svg";
import CaseStudy8 from "../../assets/works/billEasy/billEasybi8.svg";
import CaseStudy9 from "../../assets/works/billEasy/billEasybi9.svg";
import Challenges from "../../assets/works/billEasy/challenges.svg";
import HeatMap from "../../assets/works/billEasy/heatMap.svg";

const BillEasy = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setcursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      bounce: 0,
    },
    text: {
      height: 50,
      width: 50,
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
      bounce: 0,
    },
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
      bounce: 0,
    },
    large: {
      height: 80,
      width: 80,
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      backgroundColor: "#d1d5db",
      mixBlendMode: "difference",
      bounce: 0,
    },
  };

  const textEnter = () => setcursorVariant("text");
  const imageEnter = () => setcursorVariant("secondary");
  const textLeave = () => setcursorVariant("default");
  const largeEnter = () => setcursorVariant("large");
  const work = {
    image: Hero,
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1660394170/work_gifs/C01_yqtldj.mp4",
    title: "BillEasy",
    domain: "Research",
    subtitle: "A web app for managing your bills",
    description: "A web app for managing your bills",
    link: "https://billeasy.com",
    linkText: "Visit BillEasy",
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="w-full overflow-clip">
      {loading && (
        <div class="fixed w-full h-full z-50">
          <Loader />
        </div>
      )}
      <div
        onMouseEnter={imageEnter}
        className="text-justify bg-brand-black text-brand-white"
      >
        <Navbar defaultColor={"white"} />
        <WorkHero
          work={work}
          largeEnter={largeEnter}
          textEnter={textEnter}
          textLeave={textLeave}
          imageEnter={imageEnter}
        />
        <WorkVideos
          setLoading={setLoading}
          textEnter={textEnter}
          textLeave={textLeave}
          largeEnter={largeEnter}
          imageEnter={imageEnter}
          work={work}
        />
        {/* project brief */}
        <div class=" px-5 py-10 md:px-24 md:my-20 flex flex-wrap justify-between  ">
          <div className="  my-5   ">
            <div class="text-xl font-bold font-lato-bold flex items-center -ml-1">
              👨‍👩‍👦 Project Type
            </div>
            <div className="font-lato-light font-bold mt-2">
              In-house, Fin-Tech
            </div>
          </div>
          <div className=" w-1/2 md:w-auto my-5  ">
            <div class="text-xl font-bold font-lato-bold flex items-center -ml-2">
              ⏱️ Timeline
            </div>
            <div className="font-lato-light font-bold mt-2">3 months</div>
          </div>
          <div className=" w-1/2 md:w-auto my-5  ">
            <div class="text-xl font-bold font-lato-bold flex items-center -ml-1">
              👩‍💻 My Role
            </div>
            <div className="font-lato-light font-bold mt-2">
              UX & UI Design Intern
            </div>
          </div>
          <div className=" w-1/2 md:w-auto my-5  ">
            <div class="text-xl font-bold font-lato-bold flex items-center -ml-1">
              👥 Design Team
            </div>
            <div className="font-lato-light font-bold mt-2">Myself</div>
          </div>
        </div>
        {/* project concept */}
        <div class=" px-5 py-10 md:px-24 md:mb-36 md:pr-0 grid grid-cols-12  h-full">
          <WorkHeading text={"concept"} />
          <div class="col-span-12 md:col-span-6 h-full flex flex-col    ">
            <div class="flex items-center">
              <div
                style={{
                  marginBottom: "30px",
                }}
                class="  text-2xl md:text-4xl  tracking-widest font-lato-light font-bold "
              >
                💡 BillEasy
              </div>
            </div>
            <div className="  leading-6 tracking-0.5   ">
              Introducing BillEasy. An Easy, Efficient and Convenient digital
              Invoicing experience. A solution designed to help accounting teams
              create, share, store, and track GST-compliant invoices in just a
              few clicks, from anywhere and at any time! <br /> <br /> No more
              manual entries, tedious work processes, data loss or struggle to
              recall complex Excel shortcuts. From fast-tracking and organizing
              data to streamlining your work processes to improve productivity,
              BillEasy has you covered 😎
            </div>
          </div>
          <div class="hidden md:block col-span-1"></div>

          <div class="col-span-12 md:col-span-5  flex flex-col items-center  justify-center md:pl-10 rounded-xl text-brand-white ">
            <div className="  px-4 md:pr-24 rounded-l-lg flex flex-col justify-center bg-brand-darkGrey2 md:pl-14 py-14  ">
              <div className=" mb-8">
                <div className=" mb-2">✅ Results</div>
                <div className=" leading-6 tracking-0.5">
                  70% Increased user satisfaction. Estimated to Optimize
                  productivity by 3x and Increased transparency.
                </div>
              </div>
              <div className=" ">
                <div className=" mb-2">💼 Contribution</div>
                <div className=" leading-6 tracking-0.5">
                  Interviews, Qualitative Research, Ethnographic Research,
                  Competitive Audit, Interface Designs, Testing.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* purpose */}
        <div className="px-5 py-10 md:px-24 md:mb-24">
          <WorkHeading text={"purpose"} />

          <div class="grid grid-cols-12 font-lato">
            <div class="col-span-12 md:col-span-4">
              <div class=" text-2xl  tracking-1.5 mb-8">🎯 Goals</div>
              <div className=" ">
                1. Optimize efficiency <br />
                2. Minimal learning curve <br />
                3. Save time
              </div>
            </div>
            <div class="col-span-12 md:col-span-8 ">
              <div class="text-2xl font-lato tracking-1.5 mb-8">
                👨‍👨‍👧‍👦 Target audience
              </div>
              <div class="flex flex-col md:flex-row   ">
                <div className="mr-16 ">
                  <div className="font-lato-bold mb-2">Direct users</div>
                  <div
                    className="mr-2 md:mr-3 px-1 py-1 md:px-6 md:py-3 text-brand-white"
                    style={{
                      background: "#111111",
                    }}
                  >
                    Accounts team
                  </div>
                </div>
                <div className="mr-16 mt-4 md:mt-0">
                  <div className="font-lato-bold mb-2">Indirect users</div>
                  <div className="flex w-full justify-between md:justify-start    ">
                    <div
                      className="mr-2 md:mr-3 px-1 py-1 md:px-6 md:py-3 text-brand-white"
                      style={{
                        background: "#111111",
                      }}
                    >
                      Stakeholders
                    </div>
                    <div
                      className="mr-2 md:mr-3 px-1 py-1 md:px-6 md:py-3 text-brand-white"
                      style={{
                        background: "#111111",
                      }}
                    >
                      Business Intelligence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* challenge */}
        <div class="bg-brand-darkGrey2 font-lato  p-5 md:px-24 md:py-32 py-10 ">
          <WorkHeading text={"challenge"} />

          <div class="grid grid-cols-12  items-center">
            <div class="col-span-12 md:col-span-6 relative ">
              <Quote
                className="absolute -top-4 md:-top-7  w-4 md:w-7 h-4 md:h-6  "
                stroke="none"
              />
              <div
                className="font-lato-light tracking-0.5  ml-4 md:ml-9"
                style={{
                  color: "#FEFEFE",
                }}
              >
                How might we design a B2B invoicing experience which is{" "}
                <b>intuitive</b> and helps our team to fasten up the process by
                completing tasks, resulting in{" "}
                <b>increased productivity and time savings</b> ?
              </div>
            </div>
            <div class="hidden md:block col-span-1"></div>

            <img
              src={Challenges}
              className="w-full h-full col-span-12 mt-4 md:mt-0 object-contain  object-center md:col-span-5 "
              alt=""
            />
          </div>
        </div>
        {/* problem identification */}
        <div
          style={{
            marginBottom: " 100px",
          }}
          class=" p-5 md:px-24 md:pt-36   grid grid-cols-12  h-full"
        >
          <WorkHeading text={"research"} />

          <div
            style={{
              marginBottom: "30px",
            }}
            class="col-span-12 md:col-span-6 h-full  "
          >
            <div class="flex items-center">
              <div class="  text-2xl md:text-4xl   md:-ml-2  tracking-1.5 font-lato-light font-bold ">
                🦮 Identifying the problem
              </div>
            </div>
            <ul className="my-8 list-disc ml-4 text-justify tracking-0.5 leading-6">
              <li className="my-3">
                Our initial priority was to design a solution for our company.
                To identify the core problems, I approached the core team
                responsible for managing invoices{" "}
                <b>The Accounts Department.</b>
              </li>
              <li className="my-3">
                I was able to interview <b>two of the teammates</b> with
                different levels of work experience.
              </li>{" "}
              <li className="my-3">
                Interview goals: To learn about their{" "}
                <b>work life, specific problems and motivations</b> and gain{" "}
                <b>behavioral understanding.</b>
              </li>
            </ul>
          </div>
          <div class="hidden md:block col-span-1"></div>
          <div class="col-span-12 md:col-span-5 h-full flex flex-col   items-center justify-center">
            <a
              herf="https://www.notion.so/Interview-questions-f44bac2a862146ec90e5aa9c18827e86"
              onMouseEnter={largeEnter}
              onMouseLeave={imageEnter}
              class="flex items-center"
            >
              <ArrowRightCircle
                width={30}
                height={30}
                color="#3D6BC5"
                strokeWidth={1}
                className="mr-4"
              />
              <div
                style={{
                  color: "#3D6BC5",
                  // letterSpacing: "3px",
                }}
                class="uppercase text-base font-lato-light font-bold tracking-3"
              >
                Interview questions
              </div>
            </a>
          </div>
        </div>
        {/* insights */}
        <div class="p-5 md:px-24 md:py-0 font-lato mb-130 ">
          <div
            className=" text-2xl "
            style={{
              marginBottom: "30px",
            }}
          >
            🗝️ Insights
          </div>
          <div class="text-sm md:text-base grid grid-cols-12 ">
            <div class="col-span-12 md:col-span-6">
              <ul className=" list-disc ml-5 tracking-0.5 md:leading-6">
                <li className="">
                  Ninjaaslabs holds two businesses, a consultancy and its
                  venture.
                  <ol className=" list-decimal ml-5">
                    <li className="my-4">
                      Ninjaaslabs operates on the B2B model, and generates{" "}
                      <b>B2B invoices</b> for services.
                    </li>{" "}
                    <li className="my-4">
                      Jumkey (venture) is a marketplace that generates{" "}
                      <b>B2C as well as B2B invoices</b> for goods and services.
                    </li>
                  </ol>
                </li>
                <li className="my-4">
                  {" "}
                  It was found that B2C invoices for Jumkey were automatically
                  generated through amazon seller central, but{" "}
                  <b>B2B invoices</b> for either of the businesses were{" "}
                  <b>prepared manually using sheets.</b>
                </li>
                <li className="my-4">
                  {" "}
                  One major pain-point was time-killing and manual process of
                  invoice creation and report preparation.
                </li>{" "}
                <li className="my-4">
                  Multiple steps to store the invoice. (From <b>Sheet’s</b> → To{" "}
                  <b>Internal System</b> → <b>Drive</b> (folders) → <b>Mail</b>{" "}
                  (share))
                </li>{" "}
                <li className="my-4">
                  An <b>experienced employee</b> required roughly{" "}
                  <b>15+ minutes</b> to prepare a manual invoice, but a fresher
                  took <b>more than 30 minutes</b> to make the same invoice.
                </li>
                <li>
                  {" "}
                  It took them anything from <b>1-5 days to finish a report.</b>
                </li>
              </ul>
            </div>
            <div class="hidden md:block col-span-1"></div>
            <div class="col-span-12 md:col-span-5 mt-4 md:mt-0 flex items-center justify-center">
              <img className="w-full object-center" src={insightsImg} alt="" />
            </div>
          </div>
        </div>
        {/* usability testing */}
        <div
          style={
            {
              // paddingTop: " 130px",
              // paddingBottom: " 130px",
            }
          }
          class="p-5 md:px-24 pb-130 pt-130 font-lato bg-brand-darkGrey2 w-full"
        >
          <div
            className="grid-cols-12 grid "
            style={{
              marginBottom: "88px",
              // marginBottom: "88px",
            }}
          >
            <div class="col-span-12 md:col-span-6 h-full ">
              <div
                className=" text-white text-2xl md:text-4xl   "
                style={{
                  marginBottom: "30px",
                }}
              >
                🧐 Usability testing
              </div>
              <ul class="text-brand-gray list-disc ml-4 text-justify ">
                <li className="my-4">
                  The purpose of usability testing was to determine whether
                  existing solutions in the market truly addresses the problem
                  better than the current manual approach,{" "}
                  <b class="text-white">meets users’ expectations</b> and help
                  us in making{" "}
                  <b class="text-white">fact- based design decisions.</b>
                </li>

                <li className="my-4">
                  We chose to run a test on{" "}
                  <b class="text-white">Clear one software</b> through our
                  competitors' study since it was close to our vision.
                </li>

                <li className="my-4">
                  After establishing usability matrix, we{" "}
                  <b class="text-white">compared Clear one</b> matrix to the
                  matrix obtained from <b class="text-white">excel sheets</b> (a
                  manual process).
                </li>
                <a
                  onMouseEnter={largeEnter}
                  onMouseLeave={imageEnter}
                  href="https://morning-jackrabbit-815.notion.site/UT-Detailed-Documentation-0c9b6fb704484844b6ebf1d113d81b53"
                  style={{
                    color: "#3D6BC5",
                    marginTop: "30px",
                  }}
                  class="uppercase text-base flex items-center font-lato-light font-bold tracking-3 my-10 md:my-5 "
                >
                  <ArrowRightCircle
                    width={30}
                    height={30}
                    color="#3D6BC5"
                    strokeWidth={1}
                    className="mr-4"
                  />
                  UT DOCUMENTATIOn
                </a>
              </ul>
            </div>
            <div class="hidden md:block col-span-1" />
            <div class="col-span-12 md:col-span-5 h-full flex flex-col justify-center">
              <img className="w-full object-center" src={usability1} alt="" />
            </div>
          </div>
          <div class=" text-brand-gray mb-5">🌡️ Heat-map</div>
          <div class="hidden md:block grid-cols-12">
            <img src={HeatMap} className="w-full" alt="" />
          </div>
          <div className="grid-cols-12 md:hidden grid ">
            <div class="col-span-12 md:col-span-6 h-full flex flex-col justify-start ">
              <img src={usability2} className="w-full   object-center" alt="" />
              <div class="my-3 text-brand-gray">Excel Sheet</div>
              <div class="hidden md:block col-span-1"></div>
            </div>

            <div class="hidden md:block col-span-1"></div>

            <div className="col-span-12 md:col-span-  h-full">
              <img
                src={usability3}
                className=" w-full col-span-12 md:col-span-5 my-3   object-center"
                alt=""
              />
              <img
                src={usability4}
                className=" w-full col-span-12 md:col-span-5 my-3   object-center"
                alt=""
              />
              <div class="my-3 text-brand-gray">Clear one Tax</div>
            </div>
          </div>
        </div>
        {/* usability matrix */}
        <div class=" pt-150 md:px-24 font-lato">
          <WorkHeading text={"outcome"} />

          <div
            class="text-2xl md:text-4xl  "
            style={{
              marginBottom: "30px",
            }}
          >
            📐 Usability matrix results
          </div>
          <div className=" mb-2">
            S1,S2 and S3 are the given scenarios to prepare invoices using Excel
            sheets and Clear one software.{" "}
          </div>
          <img src={usabilityMatrix} className="w-full" alt="" />
        </div>
        {/* crafting persona */}
        <div class="p-5 md:py-0 mt-150 md:px-24 font-lato">
          <div
            className="text-2xl md:text-4xl "
            style={{
              marginBottom: "30px",
            }}
          >
            🖌️ Crafting persona
          </div>
          <div class="grid grid-cols-12 leading-6">
            <div class="col-span-12 md:col-span-6 h-full flex flex-col justify-center ">
              <ul class="ml-4 list-disc">
                <li>
                  Based on the qualitative interview and usability testing
                  results, we observed that{" "}
                </li>
              </ul>
              <ol className="list-decimal ml-4">
                <li className=" my-6">
                  During the interview, Satish frequently mentioned that he's
                  satisfied with the ongoing process of managing reports and
                  invoices because he feels{" "}
                  <b> confident about honing the skill, </b>
                  despite the shortcomings of sheets. Which led him to exhibit
                  the status quo bias as he was unwilling to adapt a new process
                  to
                  <b> avoid stressful learning.</b>
                </li>
                <li className=" my-6">
                  However, Srinivas being a fresher was able to{" "}
                  <b> effectively communicate the pain-points </b> (some of
                  which were similar to Satish's).
                </li>
              </ol>
            </div>
            <div class="hidden md:block col-span-1"></div>
            <div class="col-span-12 md:col-span-5 h-full flex flex-col justify-center ">
              <div class="flex w-full justify-between items-center  md:my-3 bg-brand-darkGrey2 rounded-xl my py-3 px-4">
                <img
                  src={persona1}
                  className="w-10 md:w-14 h-10 md:h-14 mr-5"
                  alt=""
                />
                <div>
                  <div className="text-sm font-lato-italic ">
                    “ I’ve <b>no problem</b> with the process, I can perform
                    same tasks without external software 🙂 “
                  </div>
                  <div
                    style={{
                      marginTop: "6px",
                    }}
                    className="text-xs "
                  >
                    Sateesh Grande , Lead Accountant
                  </div>
                </div>
              </div>
              <div class="flex w-full justify- items-center  md:my-3 bg-brand-darkGrey2 rounded-xl my py-3 px-4">
                <img
                  src={persona2}
                  className="w-10 md:w-14 h-10 md:h-14 mr-5"
                  alt=""
                />
                <div>
                  <div className="text-sm font-lato-italic ">
                    “ Feels easy but I keep forgetting, I might’ve a{" "}
                    <b>bad memory Ha Ha Ha!</b> 🤷“
                  </div>
                  <div
                    style={{
                      marginTop: "6px",
                    }}
                    className="text-xs "
                  >
                    Srinivas , Accountant
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={persona3} className="w-full mt-12" alt="" />
        </div>
        {/* case studies */}
        <div
          style={
            {
              // paddingTop: " 130px",
              // paddingBottom: " 100px",
            }
          }
          class="pt-130 md:pb-24"
        >
          <a
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            href="https://www.notion.so/BillEasy-Research-eede878d31d8405dba2c5543dbb3da67"
            className="tracking-3 mb-10 md:mb-20 px-5 flex items-center md:px-24  uppercase font-lato-bold"
          >
            <ArrowRightCircle
              width={30}
              height={30}
              color="white"
              strokeWidth={1.5}
              className="mr-4"
            />
            read full case study ☕
          </a>
          <div class="px-5 hidden md:block">
            <img src={collage} className="w-full" alt="" />
          </div>
          {/* <div class=" hidden md:grid px-5    grid-cols-2 md:grid-cols-11 items-center ">
            <div class="col-span-2 md:col-span-3  ">
              <img src={CaseStudy2} className="" alt="" />
            </div>
            <div class="col-span-2 md:px-4 h-full flex flex-col justify-between">
              <img src={CaseStudy3} className="my-2" alt="" />
              <div class="md:px-2">
                <img src={CaseStudy1} className="w-full" alt="" />
              </div>
            </div>
            <div class="col-span-2  h-full flex flex-col justify-center items-center">
              <div class="md:px-4">
                <img src={CaseStudy8} className="my-2 " alt="" />
              </div>
              <img src={CaseStudy9} className="my-2 w-full" alt="" />
            </div>
            <div class="col-span-2 md:px-2 h-full flex flex-col justify-center items-center">
              <div class="md:px-4">
                <img src={CaseStudy5} className="my-2 w-full" alt="" />
              </div>
              <img src={CaseStudy7} className="my-2" alt="" />
            </div>
            <div class="col-span-2 md:pl-4 h-full flex flex-col justify-center items-center">
              <img
                // onLoad={() => console.log("loading")}
                src={CaseStudy6}
                className="my-2"
                alt=""
              />
              <img src={CaseStudy4} className="my-2" alt="" />
            </div>
          </div> */}
          <div class="md:hidden px-5 flex flex-col justify-center items-center">
            <img src={CaseStudy2} className="  " alt="" />
            <img src={CaseStudy3} className="my-2  " alt="" />{" "}
            <img src={CaseStudy8} className="my-2   " alt="" />{" "}
            <img src={CaseStudy9} className="my-2   w-full" alt="" />{" "}
            <img src={CaseStudy5} className="my-2   w-full" alt="" />
            <img src={CaseStudy7} className="my-2  " alt="" />
            <img src={CaseStudy6} className="my-2  " alt="" />
            <img src={CaseStudy4} className="my-2  " alt="" />
          </div>
        </div>
        {/* end screen */}
        <WorkHero
          largeEnter={largeEnter}
          next={true}
          imageEnter={imageEnter}
          work={{
            domain: "visual design",
            title: "BillEasy",
            // dog image from unsplash
            image:
              "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

            link: "/billeasy-visual-design",
          }}
        />
        <motion.div
          className="cursor hidden md:flex"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
    </div>
  );
};

export default BillEasy;
