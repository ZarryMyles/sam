import React from "react";
import { WorkHero, WorkVideos, Navbar } from "../../components";
import { BsArrowRightShort } from "react-icons/bs";
import { ReactComponent as Quote } from "../../assets/icons/quotestart.svg";
import insightsImg from "../../assets/works/billEasy/billEasyInsights.png";
import usability1 from "../../assets/works/billEasy/billEasyUsabilityTesting1.png";
import usability2 from "../../assets/works/billEasy/billEasyUsabilityTesting2.png";
import usability3 from "../../assets/works/billEasy/billEasyUsabilityTesting3.png";
import usability4 from "../../assets/works/billEasy/billEasyUsabilityTesting4.png";
import usabilityMatrix from "../../assets/works/billEasy/billEasyUsabilityMatrix.png";
import persona1 from "../../assets/works/billEasy/billEasyPersona1.png";
import persona2 from "../../assets/works/billEasy/billEasyPersona2.png";
import persona3 from "../../assets/works/billEasy/billEasyPersona3.png";
import CaseStudy1 from "../../assets/works/billEasy/billEasybi1.png";
import CaseStudy2 from "../../assets/works/billEasy/billEasybi2.png";
import CaseStudy3 from "../../assets/works/billEasy/billEasybi3.png";
import CaseStudy4 from "../../assets/works/billEasy/billEasybi4.png";
import CaseStudy5 from "../../assets/works/billEasy/billEasybi5.png";
import CaseStudy6 from "../../assets/works/billEasy/billEasybi6.png";
import CaseStudy7 from "../../assets/works/billEasy/billEasybi7.png";
import CaseStudy8 from "../../assets/works/billEasy/billEasybi8.png";
import CaseStudy9 from "../../assets/works/billEasy/billEasybi9.png";

const BillEasy = () => {
  const work = {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1660394170/work_gifs/C01_yqtldj.mp4",
    title: "BillEasy",
    domain: "Research",
    subtitle: "A web app for managing your bills",
    description: "A web app for managing your bills",
    link: "https://billeasy.com",
    linkText: "Visit BillEasy",
  };
  return (
    <div>
      <Navbar />
      <WorkHero work={work} />
      <WorkVideos work={work} />
      {/* project brief */}
      <div class=" p-5 md:p-24 flex flex-wrap justify-between ">
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👨‍👩‍👦 Project Type
          </div>
          <div className="font-lato-light font-bold">In-house, Fin-Tech</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            ⏱️ Timeline
          </div>
          <div className="font-lato-light font-bold">3 months</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👩‍💻 My Role
          </div>
          <div className="font-lato-light font-bold">UX & UI Design Intern</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👥 Design Team
          </div>
          <div className="font-lato-light font-bold">Myself</div>
        </div>
      </div>
      {/* project concept */}
      <div class=" p-5 md:p-24 grid grid-cols-12  h-full">
        <div class="col-span-12 md:col-span-6 h-full  ">
          <div class="flex items-center mb-12">
            <div
              style={{
                height: "1px",
              }}
              class="bg-brand-gray w-28 mr-4"
            />
            <div class=" text-brand-gray uppercase text-xl tracking-widest ">
              Concept
            </div>
          </div>
          <div class="flex items-center">
            <div class="  text-2xl md:text-4xl my-8 tracking-widest font-lato-light font-bold ">
              💡 BillEasy
            </div>
          </div>
          <div className="my-8    ">
            Introducing BillEasy. An Easy, Efficient and Convenient digital
            Invoicing experience. A solution designed to help accounting teams
            create, share, store, and track GST-compliant invoices in just a few
            clicks, from anywhere and at any time! <br /> <br /> No more manual
            entries, tedious work processes, data loss or struggle to recall
            complex Excel shortcuts. From fast-tracking and organizing data to
            streamlining your work processes to improve productivity, BillEasy
            has you covered 😎
          </div>
        </div>
        <div class="hidden md:block col-span-1"></div>

        <div class="col-span-12 md:col-span-5 h-full flex flex-col items-center justify-center ">
          <div className="my-5">
            <div className="mb-3">✅ Results</div>
            <div>
              70% Increased user satisfaction. Estimated to Optimize
              productivity by 3x and Increased transparency.
            </div>
          </div>
          <div className=" my-5">
            <div className="mb-3">💼 Contribution</div>
            <div>
              Interviews, Qualitative Research, Ethnographic Research,
              Competitive Audit, Interface Designs, Testing.
            </div>
          </div>
        </div>
      </div>
      {/* purpose */}
      <div className="p-5 md:p-20">
        <div class="flex items-center mb-12">
          <div
            style={{
              height: "1px",
            }}
            class="bg-brand-gray w-28 mr-4"
          />
          <div class=" text-brand-gray uppercase text-xl tracking-widest ">
            Purpose
          </div>
        </div>
        <div class="grid grid-cols-12">
          <div class="col-span-12 md:col-span-4">
            <div class="text-2xl">🎯 Goals</div>
            <div className="my-5 ">
              1. Optimize efficiency <br />
              2. Minimal learning curve <br />
              3. Save time
            </div>
          </div>
          <div class="col-span-12 md:col-span-8 ">
            <div class="text-2xl font-lato ">👨‍👨‍👧‍👦 Target audience</div>
            <div class="flex  font-lato-bold  my-4">
              <div className="mr-16">Direct users</div>
              <div className="mr-16">Indirect users</div>
            </div>
            <div className="flex w-full justify-between md:justify-start my-4  pl-0 md:pl-14 ">
              <div className="mr-2 md:mr-16">Accounts team</div>
              <div className="mr-2 md:mr-16">Stakeholders</div>
              <div className="mr-2 md:mr-16">Business Intelligence</div>
            </div>
          </div>
        </div>
      </div>
      {/* challenge */}
      <div class="bg-brand-black  p-5 md:p-24 ">
        <div class="flex items-center mb-12">
          <div
            style={{
              height: "1px",
            }}
            class="bg-brand-gray w-28 mr-4"
          />
          <div class=" text-brand-gray uppercase text-xl tracking-widest ">
            Challenge
          </div>
        </div>
        <div class="grid grid-cols-12  items-center">
          <div class="col-span-12 md:col-span-6 relative ">
            <Quote
              className="absolute -top-4 md:-top-5 -left-4 md:-left-5 w-6 h-6  "
              stroke="none"
            />
            <div
              className="font-lato-light tracking-widest"
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
          <div
            class="col-span-12 md:col-span-5 my-2 md:my-0  text-black p-5 md:p-10 rounded-md flex md:flex-row flex-col "
            style={{
              backgroundColor: "#EFFCF5",
            }}
          >
            <div class="w-full md:w-1/2 text-center md:text-left my-5 md:my-0">
              <div
                style={{
                  color: "#064925",
                }}
              >
                <span className=" font-lato-bold mr-2 text-xl ">30+</span>
                minutes
              </div>
              <div
                class="text-gray-500 "
                style={{
                  color: "#2B6043",
                }}
              >
                To prep a signle manually
              </div>
            </div>
            <div class="w-full md:w-1/2 text-center md:text-left my-5 md:my-0">
              <div
                style={{
                  color: "#064925",
                }}
              >
                <span className=" font-lato-bold mr-2 text-xl ">30+</span>
                minutes
              </div>
              <div
                class="text-gray-500 "
                style={{
                  color: "#2B6043",
                }}
              >
                To prep a signle manually
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: icon */}
      {/* problem identification */}
      <div class=" p-5 md:p-24 grid grid-cols-12  h-full">
        <div class="col-span-12 md:col-span-6 h-full  ">
          <div class="flex items-center mb-12">
            <div
              style={{
                height: "1px",
              }}
              class="bg-brand-gray w-28 mr-4"
            />
            <div class=" text-brand-gray uppercase text-xl tracking-widest ">
              Research
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-5 h-5 bg-red-400 mr-5" />
            <div class="  text-2xl md:text-4xl my-8 tracking-1.5 font-lato-light font-bold ">
              🦮 Identifying the problem
            </div>
          </div>
          <ul className="my-8 list-disc">
            <li className="my-3">
              Our initial priority was to design a solution for our company. To
              identify the core problems, I approached the core team responsible
              for managing invoices The Accounts Department.
            </li>
            <li className="my-3">
              I was able to interview two of the teammates with different levels
              of work experience.
            </li>{" "}
            <li className="my-3">
              Interview goals: To learn about their work life, specific problems
              and motivations and gain behavioral understanding.
            </li>
          </ul>
        </div>
        <div class="hidden md:block col-span-1"></div>
        <div class="col-span-12 md:col-span-5 h-full flex flex-col items-center justify-center">
          <div class="flex items-center">
            <div></div>
            <div
              style={{
                color: "#3D6BC5",
                // letterSpacing: "3px",
              }}
              class="uppercase text-base font-lato-light font-bold tracking-3"
            >
              Interview questions
            </div>
          </div>
        </div>
      </div>
      {/* insights */}
      <div class="p-5 md:p-24 font-lato">
        <div className=" text-2xl">🗝️ Insights</div>
        <div class="grid grid-cols-12 ">
          <div class="col-span-12 md:col-span-6">
            <ul className=" list-disc ml-5">
              <li className="my-4">
                {" "}
                Ninjaaslabs holds two businesses, a consultancy and its venture.
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
                generated through amazon seller central, but <b>
                  B2B invoices
                </b>{" "}
                for either of the businesses were{" "}
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
          <div class="col-span-12 md:col-span-5 flex items-center justify-center">
            <img className="w-full object-center" src={insightsImg} alt="" />
          </div>
        </div>
      </div>
      {/* usability testing */}
      <div class="p-5 md:p-24 font-lato bg-black w-full">
        <div className="grid-cols-12 grid ">
          <div class="col-span-12 md:col-span-6 h-full ">
            <div className=" text-white text-2xl md:text-4xl my-8 ">
              🧐 Usability testing
            </div>
            <ul class="text-brand-gray list-disc ml-4 text-justify ">
              <li className="my-4">
                The purpose of usability testing was to determine whether
                existing solutions in the market truly addresses the problem
                better than the current manual approach,{" "}
                <b class="text-white">meets users’ expectations</b> and help us
                in making{" "}
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
            </ul>
          </div>
          <div class="hidden md:block col-span-1" />
          <div class="col-span-12 md:col-span-5 h-full flex flex-col justify-center">
            <img className="w-full object-center" src={usability1} alt="" />
            <div
              style={{
                color: "#3D6BC5",
                // letterSpacing: "3px",
              }}
              class="uppercase text-base font-lato-light font-bold tracking-3 my-5 "
            >
              UT DOCUMENTS
            </div>
          </div>
        </div>
        <div class=" text-brand-gray mt-10 mb-5">🌡️ Heat-map</div>
        <div className="grid-cols-12 grid ">
          <div class="col-span-12 md:col-span-6 h-full flex flex-col justify-center ">
            <img src={usability2} className="w-full   object-center" alt="" />
            <div class="my-3 text-brand-gray">Excel Sheet</div>
            <div class="hidden md:block col-span-1"></div>
          </div>
          <div class="hidden md:block col-span-1"></div>

          <div className="col-span-12 md:col-span-5 h-full">
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
      <div class="p-5 md:p-24 font-lato">
        <div class="flex items-center mb-12">
          <div
            style={{
              height: "1px",
            }}
            class="bg-brand-gray w-28 mr-4"
          />
          <div class=" text-brand-gray uppercase text-xl tracking-widest ">
            Research
          </div>
        </div>
        <div class="text-2xl md:text-4xl my-8  ">
          📐 Usability matrix results
        </div>
        <div>
          S1,S2 and S3 are the given scenarios to prepare invoices using Excel
          sheets and Clear one software.{" "}
        </div>
        <img src={usabilityMatrix} className="w-full" alt="" />
      </div>
      {/* crafting persona */}
      <div class="p-5 md:p-24 font-lato">
        <div className="text-2xl md:text-4xl mb-8">🖌️ Crafting persona</div>
        <div class="grid grid-cols-12">
          <div class="col-span-12 md:col-span-6 h-full flex flex-col justify-center ">
            <ul class="ml-4 list-disc">
              <li>
                Based on the qualitative interview and usability testing
                results, we observed that{" "}
              </li>
            </ul>
            <ol className="list-decimal ml-4">
              <li className="my-5">
                During the interview, Satish frequently mentioned that he's
                satisfied with the ongoing process of managing reports and
                invoices because he feels{" "}
                <b> confident about honing the skill, </b>
                despite the shortcomings of sheets. Which led him to exhibit the
                status quo bias as he was unwilling to adapt a new process to
                <b> avoid stressful learning.</b>
              </li>
              <li className="my-5">
                However, Srinivas being a fresher was able to{" "}
                <b> effectively communicate the pain-points </b> (some of which
                were similar to Satish's).
              </li>
            </ol>
          </div>
          <div class="hidden md:block col-span-1"></div>
          <div class="col-span-12 md:col-span-5 h-full flex flex-col justify-center ">
            <div class="flex w-full justify-between items-center my-5 md:my-10">
              <img
                src={persona1}
                className="w-10 md:w-14 h-10 md:h-14 mr-5"
                alt=""
              />
              <div>
                <div className="text-sm">
                  “ I’ve <b>no problem</b> with the process, I can perform same
                  tasks without external software 🙂 “
                </div>
                <div className="text-xs">Sateesh Grande , Lead Accountant</div>
              </div>
            </div>
            <div class="flex w-full justify-between items-center my-5 md:my-10">
              <img
                src={persona2}
                className="w-10 md:w-14 h-10 md:h-14 mr-5"
                alt=""
              />
              <div>
                <div className="text-sm">
                  “ Feels easy but I keep forgetting, I might’ve a{" "}
                  <b>bad memory Ha Ha Ha!</b> 🤷“
                </div>
                <div className="text-xs">Srinivas , Accountant</div>
              </div>
            </div>
          </div>
        </div>
        <img src={persona3} className="w-full" alt="" />
      </div>
      {/* case studies */}
      <div class="py-5 md:py-24 ">
        <div className="tracking-3 px-5 flex items-center md:px-24  uppercase font-lato-bold">
          <BsArrowRightShort
            style={{
              border: "2px solid black",
            }}
            class=" text-3xl p-1   mr-4  rounded-full  border-black  "
          />{" "}
          read full case study ☕
        </div>
        <div class="px-5 my-5 grid   grid-cols-2 md:grid-cols-11 items-center ">
          <div class="col-span-3  ">
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
            <img src={CaseStudy6} className="my-2" alt="" />
            <img src={CaseStudy4} className="my-2" alt="" />
          </div>
        </div>
      </div>
      {/* end screen */}
      <WorkHero
        work={{
          domain: "visual design",
          title: "BillEasy",
          // dog image from unsplash
          image:
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

          link: "/billeasy-visual-design",
        }}
        next={true}
      />
    </div>
  );
};

export default BillEasy;
