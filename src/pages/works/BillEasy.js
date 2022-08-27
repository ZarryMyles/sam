import React from "react";
import { WorkHero, WorkVideos } from "../../components";
import { ReactComponent as Quote } from "../../assets/icons/quotestart.svg";
import insightsImg from "../../assets/works/billEasy/billEasyInsights.png";
import usability1 from "../../assets/works/billEasy/billEasyUsabilityTesting1.png";
import usability2 from "../../assets/works/billEasy/billEasyUsabilityTesting2.png";
import usability3 from "../../assets/works/billEasy/billEasyUsabilityTesting3.png";
import usability4 from "../../assets/works/billEasy/billEasyUsabilityTesting4.png";
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
      <WorkHero work={work} />
      <WorkVideos work={work} />
      {/* project brief */}
      <div class=" p-5 md:p-24 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
        <div>
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👨‍👩‍👦 Project Type
          </div>
          <div className="font-lato-light font-bold">In-house, Fin-Tech</div>
        </div>
        <div>
          <div class="text-xl font-bold font-lato-bold flex items-center">
            ⏱️ Timeline
          </div>
          <div className="font-lato-light font-bold">3 months</div>
        </div>
        <div>
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👩‍💻 My Role
          </div>
          <div className="font-lato-light font-bold">UX & UI Design Intern</div>
        </div>
        <div>
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👥 Design Team
          </div>
          <div className="font-lato-light font-bold">Myself</div>
        </div>
      </div>
      {/* project concept */}
      <div class=" p-5 md:p-24 grid grid-cols-12 md:gap-28 h-full">
        <div class="col-span-12 md:col-span-7 h-full  ">
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
            <div class="  text-4xl tracking-widest font-lato-light font-bold ">
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
        <div class="col-span-12 md:col-span-5 h-full flex flex-col items-center justify-center">
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
            Concept
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
        <div class="grid grid-cols-12 md:gap-10 items-center">
          <div class="col-span-12 md:col-span-7 relative">
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
      <div class=" p-5 md:p-24 grid grid-cols-12 md:gap-28 h-full">
        <div class="col-span-12 md:col-span-7 h-full  ">
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
            <div class="  text-4xl tracking-1.5 font-lato-light font-bold ">
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
        <div class="grid grid-cols-12 md:gap-28">
          <div class="col-span-12 md:col-span-7">
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
          <div class="col-span-12 md:col-span-5 flex items-center justify-center">
            <img className="w-full object-center" src={insightsImg} alt="" />
          </div>
        </div>
      </div>
      {/* usability testing */}
      <div class="p-5 md:p-24 font-lato bg-black ">
        <div className="grid-cols-12 grid md:gap-28">
          <div class="col-span-12 md:col-span-7 h-full ">
            <div className=" text-white text-4xl my-5 md:my-8">
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
        <div className="grid-cols-12 grid md:gap-28">
          <div class="col-span-12 md:col-span-7 h-full flex items-center ">
            <img src={usability2} className="w-full   object-center" alt="" />
          </div>
          <div className="col-span-12 md:col-span-5 h-full">
            <img
              src={usability3}
              className="w-full col-span-12 md:col-span-5 my-3   object-center"
              alt=""
            />
            <img
              src={usability4}
              className="w-full col-span-12 md:col-span-5 my-3   object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillEasy;
