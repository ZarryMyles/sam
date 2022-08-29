import React from "react";
import { WorkHero, Navbar } from "../../components";
import { BsArrowRightShort } from "react-icons/bs";
// assets
import invoiceGen from "../../assets/works/billEasyVisual/Page.png";
import invoiceDis from "../../assets/works/billEasyVisual/Share.png";
import invoiceStor from "../../assets/works/billEasyVisual/Cloud.png";
import reportTrack from "../../assets/works/billEasyVisual/Chart.png";
import moodBoard from "../../assets/works/billEasyVisual/Moodboard.svg";
import visual from "../../assets/works/billEasyVisual/VisualDesign.svg";
import invoiceG1 from "../../assets/works/billEasyVisual/InvoiceGen1.png";
import invoiceG2 from "../../assets/works/billEasyVisual/InvoiceGen2.svg";
import invDist from "../../assets/works/billEasyVisual/Distribution.svg";
import report from "../../assets/works/billEasyVisual/Report.svg";
import buttons from "../../assets/works/billEasyVisual/Buttons.svg";
import matrix from "../../assets/works/billEasyVisual/Matrix.svg";

const BillEasyVisual = () => {
  const work = {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1660394170/work_gifs/C01_yqtldj.mp4",
    title: "BillEasy",
    domain: "Visual Design",
    subtitle: "A web app for managing your bills",
    description: "A web app for managing your bills",
    link: "https://billeasy.com",
    linkText: "Visit BillEasy",
  };
  return (
    <div className="overflow-hidden">
      <Navbar defaultColor={"white"} />
      <WorkHero work={work} />
      {/* Process */}
      <div class="font-lato pt-20 px-5 md:pt-24 md:pb-5 md:px-24 w-full md:col-span-6 h-full">
        <div class="flex items-center">
          <div
            style={{
              height: "1px",
            }}
            class="bg-brand-gray md:w-28 w-14 mr-4"
          />
          <div class=" text-brand-gray uppercase text-xl tracking-widest ">
            Process
          </div>
        </div>
      </div>
      {/* Design Principles */}
      <div class="font-lato h-full flex w-full flex-col md:px-24 px-5 pt-10">
        <div class=" text-2xl md:text-4xl my-8 tracking-1.5 font-lato-light font-bold ">
          🪄 Design principles
        </div>
        <ul className="text-lg">
          <li>
            <span className="text-lg">•</span> We created four design principles
            that served as a core value of our UI design related to user pain
            points.
          </li>
        </ul>
        <div className="p-5 flex flex-wrap md:text-base text-sm justify-between items-center">
          <div className="p-3 m-2 bg-gray-200 w-1/3 md:w-2/12 rounded">
            1. Intuitive
          </div>
          <div className="p-3 m-2 bg-gray-200 w-1/2 md:w-2/12 rounded">
            2. Time Efficient
          </div>
          <div className="p-3 m-2 bg-gray-200 w-1/3 md:w-2/12 rounded">
            3. Empathy
          </div>
          <div className="p-3 m-2 bg-gray-200 w-1/2 md:w-2/12 rounded">
            4. Safe
          </div>
        </div>
      </div>
      {/* Use Cases */}
      <div class="font-lato h-full flex w-full flex-col md:px-24 px-5 pt-10">
        <div class=" text-2xl md:text-4xl my-4 tracking-1.5 font-lato-light font-bold ">
          🧑‍💻 Use cases
        </div>
        <div className="p-5  flex flex-wrap md:text-base text-sm justify-between items-center">
          <div className="p-3 m-2 flex justify-start items-center flex-row bg-gray-200 w-full md:w-2/12 rounded">
            <img src={invoiceGen} width="30px" alt="page" className="mr-2" />{" "}
            Invoice Generation
          </div>
          <div className="p-3 m-2 flex justify-start items-center flex-row bg-gray-200 w-full md:w-2/12 rounded">
            <img src={invoiceDis} width="30px" alt="page" className="mr-2" />{" "}
            Invoice Distribution
          </div>
          <div className="p-3 m-2 flex justify-start items-center flex-row bg-gray-200 w-full md:w-2/12 rounded">
            <div
              style={{ backgroundColor: "#5CCBFF", width: "30px" }}
              className="rounded-3xl mr-2 p-0.5"
            >
              <img src={invoiceStor} width="30px" alt="page" />
            </div>
            Invoice Storage
          </div>
          <div className="p-3 m-2 flex justify-start items-center flex-row bg-gray-200 w-full md:w-2/12 rounded">
            <img src={reportTrack} width="30px" alt="page" className="mr-2" />{" "}
            Report Tracking
          </div>{" "}
        </div>
      </div>
      {/* Ideas to life */}
      <div class="font-lato h-full flex w-full flex-col md:px-24 px-5 pt-10">
        <div class=" text-2xl md:text-4xl my-4 tracking-1.5 font-lato-light font-bold ">
          🖼️ Bringing Ideas To Life
        </div>
        <img
          src={moodBoard}
          width="100%"
          alt="moodboard"
          className="md:hidden"
        />
        <img
          src={moodBoard}
          width="85%"
          alt="moodboard"
          className="hidden md:block"
        />
      </div>
      {/* Visual Design */}
      <div class="font-lato h-full flex w-screen flex-col  pt-10">
        <div class=" text-2xl md:text-4xl md:px-24 px-5 my-4 tracking-1.5 font-lato-light font-bold ">
          👀 Visual Design
        </div>
        <div>
          <div className="text-base my-5 text-justify md:px-24 px-5">
            <span className="text-lg">•</span> Due to{" "}
            <span className="font-lato-bold ">limited time frame</span>, I moved
            right into creating rough paper wireframes. During this phase of
            prototyping, We{" "}
            <span className="font-lato-bold ">closely collaborated</span> with
            the{" "}
            <span className="font-lato-bold ">
              development and accounts team
            </span>
            , and after{" "}
            <span className="font-lato-bold ">2-3 rounds of iteration</span>, we
            were able to finalize the UI Designs.
          </div>
          <div className="text-lg my-5 text-justify md:px-24 px-5">
            <span className="text-lg">•</span>{" "}
            <span className="font-lato-bold ">Features</span>:
          </div>
          {/* Invoice Storage */}
          <div className="flex md:flex-row md:px-24 px-5 flex-col">
            <div className="md:w-3/5 md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
              <div className="font-lato-bold md:py-5">1. Invoice Storage</div>
              <div className="font-lato md:py-5 py-3">
                a. Providing{" "}
                <span className="font-lato-bold ">cloud storage</span> to access
                invoices from{" "}
                <span className="font-lato-bold ">anywhere at any time</span>.
              </div>{" "}
              <div className="font-lato md:py-5 py-3">
                b. <span className="font-lato-bold ">Independency</span> from
                worrying about hardware storage that leads to data loss.
              </div>{" "}
              <div className="font-lato md:py-5 py-3">
                c. <span className="font-lato-bold ">Search</span> invoices{" "}
                <span className="font-lato-bold ">effectively</span>.
              </div>{" "}
              <div className="font-lato md:py-5 py-3">
                d. Avoid switching between multiple software and{" "}
                <span className="font-lato-bold ">save time</span>.
              </div>
            </div>
            <img src={visual} width="100%" alt="visual" />
          </div>
          {/* Invoice Generation */}
          <div className="flex flex-col">
            <div className="pt-10 font-lato-bold md:pb-0 pb-3 md:px-24 px-5 text-lg md:py-5">
              2. Invoice Generation
            </div>
            <div className="flex md:flex-row w-full overflow-hidden md:mt-5 md:px-24 px-5 py-5 flex-col bg-gray-200 items-center justify-between">
              {" "}
              <div className="md:w-7/10 md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
                <div className="font-lato md:py-5 py-3">
                  ⭐ <span className="font-lato-bold ">Process</span> of
                  creating GST complaint invoices :
                </div>{" "}
                <div className="font-lato md:py-5 py-3 text-justify">
                  <span className="text-lg">•</span> We collected a bunch of
                  invoices (From NinjaasLabs as well as other sellers/service
                  providers) and prioritized its most important and relevant
                  sections to design an invoice page, creating more
                  GST-compliant return tax filing.
                </div>{" "}
              </div>
              <img src={invoiceG1} height="118px" width="208px" alt="visual" />
            </div>
            <div className="flex md:flex-row md:px-24 px-5 mt-10 flex-col items-start justify-between">
              {" "}
              <div className="md:w-7/10 md:pr-10 md:pb-0 text-justify pb-5 flex flex-col text-lg">
                <div className="font-lato-bold md:py-5 py-3">
                  2. Invoice Generation
                </div>{" "}
                <div className="font-lato py-3 text-justify">
                  a. Simple way to create{" "}
                  <span className="font-lato-bold ">
                    GST compliant invoices
                  </span>
                  .
                </div>
                <div className="font-lato  py-3 text-justify">
                  b.{" "}
                  <span className="font-lato-bold ">Free from recalling</span>{" "}
                  complicated Excel sheet short-cuts.
                </div>
                <div className="font-lato  py-3 text-justify">
                  c. Create an invoice in a{" "}
                  <span className="font-lato-bold ">few clicks</span> without
                  worrying about disrupting the invoice layout.
                </div>
                <div className="font-lato py-3 text-justify">
                  d.{" "}
                  <span className="font-lato-bold ">
                    Switch easily between businesses
                  </span>
                  ; no more unorganized bill books and confusion! Each company
                  has its own interface with{" "}
                  <span className="font-lato-bold ">
                    meticulously organized invoices
                  </span>
                  .
                </div>
              </div>
              <img src={invoiceG2} alt="visual" />
            </div>
          </div>
          {/* Invoice Distribution and Report Tracking */}
          <div className="flex flex-col md:p-24 p-5 mt-10 text-justify bg-brand-darkGrey text-white">
            <div className="flex md:flex-row flex-col md:mt-0 mt-10">
              <img src={invDist} width="100%" alt="visual" />
              <div className="md:w-1/2 md:ml-10 md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
                <div className="font-lato-bold md:py-5 md:pt-0 pt-5">
                  3. Invoice Distribution
                </div>
                <div className="font-lato md:py-5 py-3">
                  Share your invoices with your clients in{" "}
                  <span className="font-lato-bold ">single click!</span>
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden mt-10 flex-col">
              <img src={report} width="100%" alt="visual" />
              <div className="pb-5 flex flex-col text-lg pt-5">
                <div className="font-lato-bold ">4. Report Tracking</div>
                <div className="font-lato py-3">
                  a.{" "}
                  <span className="font-lato-bold ">
                    Instant generation of reports
                  </span>
                  .
                </div>
                <div className="font-lato py-3">
                  b. No more manual tracking, simply click for{" "}
                  <span className="font-lato-bold ">
                    weekly, monthly or annual results with ease of tracking
                    invoice status.
                  </span>
                </div>
                <div className="font-lato py-3">
                  c.{" "}
                  <span className="font-lato-bold ">Comparison made easy</span>.
                </div>
              </div>
            </div>
            {/* Desktop */}
            <div className="md:flex flex-row mt-20 hidden">
              <div className="w-1/2 ml-10 pr-10 ">
                <div className="font-lato-bold py-5">4. Report Tracking</div>
                <div className="font-lato py-5 ">
                  a. Instant generation of reports.
                </div>
                <div className="font-lato py-5 ">
                  b. No more manual tracking, simply click for weekly, monthly
                  or annual results with ease of tracking invoice status.
                </div>
                <div className="font-lato py-5 ">c. Comparison made easy.</div>
              </div>{" "}
              <img src={report} width="100%" alt="visual" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* Style Guide */}
      <div class="font-lato h-full flex w-screen flex-col pt-10">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div className=" text-2xl md:text-4xl my-8 tracking-1.5 font-lato-light font-bold ">
            🦮 Style guide
          </div>
          <ul className="text-lg">
            <li>
              <span className="text-lg">•</span> Meanwhile, we designed a
              component library to create a{" "}
              <span className="font-lato-bold ">coherent visual language</span>{" "}
              across the product that could help developers in{" "}
              <span className="font-lato-bold ">building consistent UI</span>{" "}
              and{" "}
              <span className="font-lato-bold ">
                reducing frequent design changes
              </span>
              .
            </li>
          </ul>
        </div>
        <img
          src={buttons}
          width="100%"
          alt="visual"
          className="md:border-none border"
        />
      </div>
      {/* Result Matrix */}
      <div class="font-lato h-full flex w-screen flex-col pt-10">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div className=" text-2xl md:text-4xl my-8 tracking-1.5 font-lato-light font-bold ">
            🥳 Result matrix
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="md:w-2/3 md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
              <div className="mb-5">
                After developing the product we estimated the following results:
              </div>
              <div className="py-3">
                1.{" "}
                <span className="font-lato-bold ">
                  70% Increased user satisfaction ✅
                </span>
              </div>
              <div className="py-3">2. Improved productivity</div>
              <div className="py-3">3. Increased transparency</div>
              <div className="py-3">4. Reduced development maintenance </div>
            </div>
            <img
              src={matrix}
              width="50%"
              alt="visual"
              className="hidden md:block"
            />
            <img src={matrix} width="100%" alt="visual" className="md:hidden" />
          </div>
          <div className="tracking-3 pt-10  flex items-center  uppercase font-lato-bold">
            <BsArrowRightShort
              style={{
                border: "2px solid black",
              }}
              class=" text-3xl p-1   mr-4  rounded-full  border-black  "
            />{" "}
            read full case study ☕
          </div>
        </div>
      </div>
      {/* Possibilities */}
      <div class="font-lato h-full flex w-screen flex-col pt-10">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div className=" text-2xl md:text-4xl my-8 tracking-1.5 font-lato-light font-bold ">
            🥂 Possibilities
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
              <div className="mb-5">
                The next step will be to push the{" "}
                <span className="font-lato-bold ">
                  designs into development
                </span>
                .
              </div>
              <div className="py-3">
                <span className="text-lg">•</span> Once the product is launched,
                observe the{" "}
                <span className="font-lato-bold ">
                  user behavior and collect their feedback
                </span>
                .
              </div>
              <div className="py-3">
                <span className="text-lg">•</span> Further, providing{" "}
                <span className="font-lato-bold ">payment flexibility</span> by
                integrating payment modes and QR codes,{" "}
                <span className="font-lato-bold ">Incorporating tools</span>{" "}
                like tax calculators and more.
              </div>
              <div className="py-3">
                <span className="text-lg">•</span>{" "}
                <span className="font-lato-bold ">Improving and iterating</span>{" "}
                over previous designs to deliver better solutions based on
                feedback.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Learnings and Retrospect */}
      <div class="font-lato h-full flex w-screen flex-col pt-10 mb-10">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div className=" text-2xl md:text-4xl my-8 tracking-1.5 font-lato-light font-bold ">
            🧘 Learnings and Retrospect
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
              <div className="py-3">
                <span className="text-lg">•</span> Realized the role of{" "}
                <span className="font-lato-bold ">engaging stakeholders</span>{" "}
                for feedback to be on the same page.
              </div>
              <div className="py-3">
                <span className="text-lg">•</span> The importance of keeping
                <span className="font-lato-bold ">users at the center</span> and
                conducting <span className="font-lato-bold ">user testing</span>{" "}
                to create
                <span className="font-lato-bold ">
                  designs relevant to the users
                </span>
                .
              </div>
              <div className="py-3">
                <span className="text-lg">•</span>{" "}
                <span className="font-lato-bold ">Prioritizing</span> research
                results to set useful and achievable goals is paramount.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end screen */}
      <WorkHero
        work={{
          domain: "Branding",
          title: "HappilyEver",
          // dog image from unsplash
          image:
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

          link: "/happilyever",
        }}
        next={true}
      />
    </div>
  );
};

export default BillEasyVisual;
