import React from "react";
import { WorkHero, Navbar } from "../../components";
import { BsArrowRightShort } from "react-icons/bs";
// assets
import one from "../../assets/works/happilyEver/1.png";
import two from "../../assets/works/happilyEver/2.png";
import three from "../../assets/works/happilyEver/3.png";
import four from "../../assets/works/happilyEver/4.svg";
import five from "../../assets/works/happilyEver/5.png";

const HappilyEver = () => {
  const work = {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1660394170/work_gifs/C01_yqtldj.mp4",
    title: "Happily Ever",
    domain: "Branding",
    subtitle: "",
    description:
      "Designing brands to be more people \n Interactive : Adding value to future Brand Identities ",
    link: "https://billeasy.com",
    linkText: "Visit BillEasy",
  };
  return (
    <div className="overflow-hidden">
      <Navbar defaultColor={"white"} />
      <WorkHero work={work} />
      <div class=" p-5 md:p-24 flex flex-wrap justify-between ">
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👨‍👩‍👦 Project Type
          </div>
          <div className="font-lato-light font-bold">Proof of concept</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            ⏱️ Timeline
          </div>
          <div className="font-lato-light font-bold">1 months</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👩‍💻 My Role
          </div>
          <div className="font-lato-light font-bold">Product Design Intern</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👥 Design Team
          </div>
          <div className="font-lato-light font-bold">Three</div>
        </div>
      </div>
      {/* project about */}
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
              About
            </div>
          </div>
          <div class="flex items-center">
            <div class="  text-2xl md:text-4xl my-8 tracking-widest font-lato-light font-bold ">
              😀 HappilyEver
            </div>
          </div>
          <div className="my-8    ">
            Happily Ever, aka HAE, is an Match-making service. It is strongly
            aimed at helping people in fostering deep and meaningful
            connections, potentially leading to the discovery of companions,
            bestfriends, or even a soulmate.
          </div>
        </div>
        <div class="hidden md:block col-span-1"></div>

        <div class="col-span-12 md:col-span-5 h-full flex flex-col items-center justify-center ">
          <div className="my-5">
            <div className="mb-3">✅ Results</div>
            <div>
              Strengthened brand direction, Estimated to Improve user
              engagement.
            </div>
          </div>
          <div className=" my-5">
            <div className="mb-3">💼 Contribution</div>
            <div>
              Interviews, Secondary research, Usability testing, Competitive
              analysis
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
        <div class="grid grid-cols-12 font-lato">
          <div class="col-span-12 md:col-span-4">
            <div class="text-2xl font-lato">🎯 Goals</div>
            <div className="my-5 ">
              1. Allow them to <b>connect with people Independently.</b>
              <br />
              2. Provide essential <b>Accessibility features.</b>
              <br />
              3. Make it easier to <b>share information.</b>
              <br />
              4. Protect <b>privacy and security</b>.
              <br />
              5. <b>Promote awareness</b>
            </div>
          </div>
        </div>
      </div>
      {/* Challenge */}
      <div className="p-5 bg-black text-brand-white md:p-20 md:pb-10">
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
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div>
            <svg
              width="24"
              className="absolute md:left-8 left-3 md:w-16 -mt-10 md:-mt-5 "
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.576 21.376C3.848 21.376 2.552 20.8 1.688 19.648C0.824 18.448 0.392 16.936 0.392 15.112C0.44 13.816 0.704 12.328 1.184 10.648C1.664 8.92 2.36 7.168 3.272 5.392C4.232 3.616 5.408 1.912 6.8 0.279996L8.888 1.936C8.168 2.8 7.496 3.88 6.872 5.176C6.248 6.424 5.72 7.768 5.288 9.208C4.904 10.648 4.688 12.04 4.64 13.384C4.928 13.288 5.216 13.216 5.504 13.168C5.792 13.12 6.08 13.096 6.368 13.096C7.424 13.096 8.312 13.456 9.032 14.176C9.752 14.848 10.088 15.76 10.04 16.912C10.04 18.256 9.608 19.336 8.744 20.152C7.88 20.968 6.824 21.376 5.576 21.376ZM18.536 21.376C16.856 21.376 15.56 20.8 14.648 19.648C13.784 18.448 13.376 16.936 13.424 15.112C13.472 13.816 13.712 12.328 14.144 10.648C14.624 8.92 15.344 7.168 16.304 5.392C17.264 3.616 18.44 1.912 19.832 0.279996L21.92 1.936C21.2 2.8 20.504 3.88 19.832 5.176C19.208 6.424 18.68 7.768 18.248 9.208C17.864 10.648 17.672 12.04 17.672 13.384C17.96 13.288 18.224 13.216 18.464 13.168C18.752 13.12 19.064 13.096 19.4 13.096C20.408 13.096 21.272 13.456 21.992 14.176C22.76 14.848 23.12 15.76 23.072 16.912C23.072 18.256 22.616 19.336 21.704 20.152C20.84 20.968 19.784 21.376 18.536 21.376Z"
                fill="#424242"
              />
            </svg>
            <div class="md:pr-10">
              <div className="py-3">
                1. The product's vision is to "fosters meaningful connections".
                However the current product provided matrimonial services. As a
                result, the primary users included young adults and singles,
                each with their own set of expectations and mental models.
              </div>
              <div className="py-3">
                2. In this situation, it was my advice to remain aligned with
                the core vision to avoid any complexities.
              </div>
              <div className="py-3">
                3. Communicating these changes itself was a challenge.
              </div>
            </div>
          </div>
          <img
            src={one}
            alt="logo"
            className="w-1/2 md:w-1/3 md:left-0 left-1/4"
          />
        </div>
      </div>
      {/* Research and Analyzing product */}
      <div className="p-5 md:p-20 ">
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
        {/* Analyzing */}
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div class="md:pr-10">
            <div class="text-3xl font-lato">🦮 Analyzing The Product</div>
            <div className="mt-10 font-lato-bold">Stakeholder Interview</div>
            <div className="py-3">
              1. The product's vision is to "fosters meaningful connections".
              However the current product provided matrimonial services. As a
              result, the primary users included young adults and singles, each
              with their own set of expectations and mental models.
            </div>
            <div className="py-3">
              2. In this situation, it was my advice to remain aligned with the
              core vision to avoid any complexities.
            </div>
            <div className="py-3">
              3. Communicating these changes itself was a challenge.
            </div>
          </div>
          <img
            src={two}
            alt="logo"
            className="w-1/2 md:mt-10 md:w-1/3 md:left-0 left-1/4"
          />
        </div>
        {/* Key Insights */}
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div class="md:pr-10">
            <div className="mt-5 font-lato-bold">Key Insights</div>
            <div className="py-3">
              1. The product's vision is to "fosters meaningful connections".
              However the current product provided matrimonial services. As a
              result, the primary users included young adults and singles, each
              with their own set of expectations and mental models.
            </div>
            <div className="py-3">
              2. In this situation, it was my advice to remain aligned with the
              core vision to avoid any complexities.
            </div>
            <div className="py-3">
              3. Communicating these changes itself was a challenge.
            </div>
          </div>
        </div>
      </div>
      {/* Competitive Analysis */}
      <div className="p-5 md:p-20">
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div>
            <div class="md:pr-10">
              <div class="text-3xl font-lato">🤓 Competitive analysis</div>
              <div className="py-3 mt-10">
                1. The product's vision is to "fosters meaningful connections".
                However the current product provided matrimonial services. As a
                result, the primary users included young adults and singles,
                each with their own set of expectations and mental models.
              </div>
              <div className="py-3">
                2. In this situation, it was my advice to remain aligned with
                the core vision to avoid any complexities.
              </div>
              <div className="py-3">
                3. Communicating these changes itself was a challenge.
              </div>
            </div>
          </div>
          <img
            src={three}
            alt="logo"
            className="w-1/2 md:w-1/3 md:left-0 left-1/4"
          />
        </div>
      </div>
      {/* Usability Testing */}
      <div className="p-5 md:p-20">
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div>
            <div class="md:pr-10">
              <div class="text-3xl font-lato">🪧 Usability testing</div>
              <div className="py-3 mt-10">
                1. The product's vision is to "fosters meaningful connections".
                However the current product provided matrimonial services. As a
                result, the primary users included young adults and singles,
                each with their own set of expectations and mental models.
              </div>
              <div className="py-3">
                2. In this situation, it was my advice to remain aligned with
                the core vision to avoid any complexities.
              </div>
              <div className="py-3">
                3. Communicating these changes itself was a challenge.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Approach */}
      <div className="p-5 md:p-20">
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div>
            <div class="md:pr-10">
              <div class="text-3xl font-lato">🪜 Approach</div>
              <div className="py-3 mt-10">
                1. The product's vision is to "fosters meaningful connections".
                However the current product provided matrimonial services. As a
                result, the primary users included young adults and singles,
                each with their own set of expectations and mental models.
              </div>
              <div className="py-3">
                2. In this situation, it was my advice to remain aligned with
                the core vision to avoid any complexities.
              </div>
              <div className="py-3">
                3. Communicating these changes itself was a challenge.
              </div>
            </div>
          </div>
          <img
            src={four}
            alt="logo"
            className="w-full md:w-1/2 md:left-0 left-1/4"
          />
        </div>
      </div>
      {/* Solutions */}
      <div className="p-5 md:p-20 ">
        <div class="flex items-center mb-12">
          <div
            style={{
              height: "1px",
            }}
            class="bg-brand-gray w-28 mr-4"
          />
          <div class=" text-brand-gray uppercase text-xl tracking-widest ">
            Solutions
          </div>
        </div>
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div className="md:pr-10">
            <div className="text-3xl font-lato">🥂 Solutions</div>
            <div className="mt-10 font-lato-bold">Stakeholder Interview</div>
            <div className="py-3">
              1. The product's vision is to "fosters meaningful connections".
              However the current product provided matrimonial services. As a
              result, the primary users included young adults and singles, each
              with their own set of expectations and mental models.
            </div>
            <div className="py-3">
              2. In this situation, it was my advice to remain aligned with the
              core vision to avoid any complexities.
            </div>
            <div className="py-3">
              3. Communicating these changes itself was a challenge.
            </div>
          </div>
          <img
            src={five}
            alt="logo"
            className="w-1/2 md:mt-10 md:w-1/3 md:left-0 left-1/4"
          />
        </div>
      </div>
      {/* end screen */}
      <WorkHero
        work={{
          domain: "Research",
          title: "BillEasy",
          // dog image from unsplash
          image:
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

          link: "/billeasy",
        }}
        next={true}
      />
    </div>
  );
};

export default HappilyEver;
