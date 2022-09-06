import React, { useEffect, useState } from "react";
import { WorkHero, WorkHeading, Navbar, Loader } from "../../components";
import { ArrowRightCircle } from "react-feather";
import { motion } from "framer-motion";
// assets
import hero from "../../assets/works/billEasy/billEasyResearchpng.png";
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

// icons
import {
  MagicWand,
  SmallBlueDiamond,
  FramedPicture,
  Eyes,
  GuideDog,
  PartyingFace,
  Teacup,
  ClinkingGlasses,
  InLotusPosition,
} from "../../assets/icons/fluent";

const BillEasyVisual = () => {
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
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
    large: {
      height: 80,
      width: 80,
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
  };

  const imageEnter = () => setcursorVariant("secondary");
  const largeEnter = () => setcursorVariant("large");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  const work = {
    image: hero,
    video:
      "https://res.cloudinary.com/ahum/video/upload/v1662232035/BillEasy_Visual_hzrwgo.mp4",
    title: "BillEasy",
    domain: "Visual Design",
    subtitle: "A web app for managing your bills",
    description: "A web app for managing your bills",
    link: "https://billeasy.com",
    linkText: "Visit BillEasy",
  };
  return (
    <div className="overflow-hidden  bg-brand-black text-brand-white">
      {/* {loading && (
        <div class="fixed loaderDiv w-screen h-screen">
          {" "}
          <Loader />{" "}
        </div>
      )} */}
      <Navbar
        largeEnter={largeEnter}
        imageEnter={imageEnter}
        defaultColor={"white"}
      />
      <WorkHero work={work} largeEnter={largeEnter} imageEnter={imageEnter} />
      {/* Process */}
      <div class="font-lato px-7 pt-32  md:px-24 w-full h-full">
        <WorkHeading text={"Process"} />
      </div>
      {/* Design Principles */}
      <div class="font-lato h-full flex w-full flex-col md:px-24 px-7">
        <div
          style={{
            marginBottom: "30px",
          }}
          class="  text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato flex items-center"
        >
          <img src={MagicWand} className="mr-2 w-9 " alt="" /> Design principles
        </div>
        <ul
          style={{
            marginBottom: "30px",
          }}
          className="font-lato md:block hidden text-base ml-4 list-disc"
        >
          <li>
            We created four{" "}
            <span style={{ color: "#6AC296" }}>design principles</span> that
            served as a core value of our UI design related to{" "}
            <span style={{ color: "#6AC296" }}>user pain points.</span>
          </li>
        </ul>
        <div className="md:px-7 flex md:flex-row flex-col font-lato font-normal text-brand-black w-full md:auto md:text-base text-base justify-between md:items-center">
          <div className="px-5 py-6 md:py-5 md:m-2 my-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            1. Intuitive
          </div>
          <div className="px-5 py-6 md:py-5 md:m-2 my-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            2. Time Efficient
          </div>
          <div className="px-5 py-6 md:py-5 md:m-2 my-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            3. Empathy
          </div>
          <div className="px-5 py-6 md:py-5 md:m-2 mt-3 md:mt-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            4. Safe
          </div>
        </div>
      </div>
      {/* Use Cases */}
      <div class="font-lato h-full flex w-full flex-col md:px-24 px-7 pt-32">
        <div
          style={{
            marginBottom: "30px",
          }}
          class="  text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato flex items-center"
        >
          <img src={SmallBlueDiamond} className="mr-2 w-9 " alt="" /> Use Cases
        </div>
        <div className="md:px-7 flex md:flex-row flex-col font-lato font-normal text-brand-black w-full md:auto md:text-base text-base justify-between md:items-center">
          <div className="px-5 py-6 flex justify-start items-center md:py-5 md:m-2 my-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            <img src={invoiceGen} width="30px" alt="page" className="mr-2" />{" "}
            Invoice Generation
          </div>
          <div className="px-5 py-6 flex justify-start items-center md:py-5 md:m-2 my-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            <img src={invoiceDis} width="30px" alt="page" className="mr-2" />{" "}
            Invoice Distribution
          </div>
          <div className="px-5 py-6 flex justify-start items-center md:py-5 md:m-2 my-3 md:my-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            <div
              style={{ backgroundColor: "#5CCBFF", width: "30px" }}
              className="rounded-3xl mr-2 p-0.5"
            >
              <img src={invoiceStor} width="30px" alt="page" />
            </div>
            Invoice Storage
          </div>
          <div className="px-5 py-6 flex justify-start items-center md:py-5 md:m-2 mt-3 md:mt-0 bg-brand-darkGrey2 text-brand-white rounded-lg w-full md:w-2/12 ">
            <img src={reportTrack} width="30px" alt="page" className="mr-2" />{" "}
            Report Tracking
          </div>
        </div>
      </div>
      {/* Ideas to life */}
      <div class="font-lato h-full flex w-full flex-col md:px-24 px-5 pt-10 md:pt-32">
        <div
          style={{
            marginBottom: "30px",
          }}
          className="  text-2xl md:text-4xl md:my-0 my-8 tracking-widest font-lato-light font-bold flex items-center"
        >
          <img src={FramedPicture} className="mr-2 w-9 " alt="" /> Bringing
          Ideas To Life
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
      <div class="font-lato h-full flex w-screen flex-col pt-10 md:pt-36">
        <div
          style={{
            marginBottom: "30px",
          }}
          class="  text-2xl md:px-24 px-5 md:text-4xl md:my-0 my-8 tracking-1.5 font-lato   flex items-center"
        >
          <img src={Eyes} className="mr-2 w-9 " alt="" /> Visual Design
        </div>
        <div>
          <div className="text-base my-5 font-lato font-normal md:my-0 text-justify md:px-24 px-5">
            <span className="text-lg">•</span> Due to limited time frame, I
            moved right into creating rough paper wireframes. During this phase
            of prototyping, We closely{" "}
            <span style={{ color: "#6AC296" }}>
              collaborated with the development and accounts team
            </span>{" "}
            , and after{" "}
            <span style={{ color: "#6AC296" }}>2-3 rounds of iteration</span> ,
            we were able to finalize the UI Designs.
          </div>
          {/* Invoice Storage */}
          <div className="flex md:flex-row font-lato font-normal md:px-24 px-5 md:mt-24 flex-col">
            <div className="md:w-3/5 md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
              <div className=" md:py-5">
                1. Invoice Storage <br />
                <br /> a. Providing{" "}
                <span style={{ color: "#6AC296" }}>cloud storage</span> to
                access invoices from anywhere at any time.
                <br />
                <br /> b. <span style={{ color: "#6AC296" }}>
                  Independency
                </span>{" "}
                from worrying about hardware storage that leads to data loss.{" "}
                <br />
                <br />
                c.{" "}
                <span style={{ color: "#6AC296" }}>
                  Search invoices effectively.
                </span>
                <br />
                <br /> d. Avoid switching between multiple software and{" "}
                <span style={{ color: "#6AC296" }}>save time.</span>
              </div>
            </div>
            <img src={visual} width="100%" alt="visual" />
          </div>
          {/* Invoice Generation */}
          <div className="flex flex-col">
            <div className="pt-10 md:mt-32 font-lato font-normal md:pb-0 pb-3 md:px-24 px-5 text-lg md:py-5">
              2. Invoice Generation
            </div>
            <div className="flex md:flex-row w-full overflow-hidden md:mt-5 md:px-24 px-5 py-5 flex-col bg-brand-darkGrey2 items-center">
              {" "}
              <div className="md:w-7/10 md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
                <div className="font-lato md:py-5 py-3">
                  ⭐{" "}
                  <span
                    className="font-lato font-normal "
                    style={{ color: "#6AC296" }}
                  >
                    Process
                  </span>{" "}
                  of creating GST complaint invoices : <br /> <br />
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
                <div className="font-lato font-normal md:py-5 py-3">
                  2. Invoice Generation
                  <br />
                  <br /> a. Simple way to create{" "}
                  <span style={{ color: "#6AC296" }}>
                    GST compliant invoices.
                  </span>{" "}
                  <br />
                  <br />
                  b.{" "}
                  <span style={{ color: "#6AC296" }}>
                    Free from recalling
                  </span>{" "}
                  complicated Excel sheet short-cuts. <br />
                  <br />
                  c. Create an invoice in a{" "}
                  <span style={{ color: "#6AC296" }}>few clicks</span> without
                  worrying about disrupting the invoice layout. <br />
                  <br />
                  d.{" "}
                  <span style={{ color: "#6AC296" }}>
                    Switch easily between businesses;
                  </span>{" "}
                  no more unorganized bill books and confusion! Each company has
                  its own interface with meticulously organized invoices .
                </div>
              </div>
              <img src={invoiceG2} alt="visual" />
            </div>
          </div>
          {/* Invoice Distribution and Report Tracking */}
          <div className="flex flex-col md:px-24 p-5 mt-24 text-justify bg-brand-darkGrey text-white">
            <div className="flex md:flex-row flex-col md:mt-24 mt-10">
              <img src={invDist} width="100%" alt="visual" />
              <div className="md:w-1/2 md:ml-10 md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
                <div className="font-lato font-normal md:py-5 md:pt-0 pt-5">
                  3. Invoice Distribution
                  <br />
                  <br />
                  Share your invoices with your clients in{" "}
                  <span style={{ color: "#6AC296" }}>single click!</span>
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
                <div className="font-lato font-normal py-5">
                  4. Report Tracking <br />
                  <br />
                  a.{" "}
                  <span style={{ color: "#6AC296" }}>
                    Instant generation
                  </span>{" "}
                  of reports. <br />
                  <br />
                  b.{" "}
                  <span style={{ color: "#6AC296" }}>
                    No more manual tracking,
                  </span>{" "}
                  simply click for weekly, monthly or annual results with ease
                  of tracking invoice status. <br />
                  <br />
                  c.{" "}
                  <span style={{ color: "#6AC296" }}>
                    Comparison made easy.
                  </span>
                </div>
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
          <div
            style={{
              marginBottom: "30px",
            }}
            class=" text-2xl md:text-4xl md:my-0 my-8 tracking-widest font-lato font-normal flex items-center"
          >
            <img src={GuideDog} className="mr-2 w-9 " alt="" /> Style Guide
          </div>
          <ul className="font-lato font-normal">
            <li>
              <span className="font-lato font-normal">•</span> Meanwhile, we
              designed a{" "}
              <span style={{ color: "#6AC296" }}>component library</span> to
              create a{" "}
              <span style={{ color: "#6AC296" }}>coherent visual language</span>{" "}
              across the product that could help developers in building
              consistent UI and reducing frequent{" "}
              <span style={{ color: "#6AC296" }}>design changes.</span>
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
      <div class="font-lato h-full flex w-screen flex-col pt-10 md:pt-40">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div
            style={{
              marginBottom: "30px",
            }}
            class=" text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato font-normal flex items-center"
          >
            <img src={PartyingFace} className="mr-2 w-9 " alt="" /> Result
            Matrix
          </div>
          <div className="font-lato font-normal flex md:flex-row flex-col justify-between">
            <div className="md:w-1/3 md:pr-10 md:pb-0 pb-5 flex flex-col  text-lg">
              <div className="mb-5">
                After developing the product we estimated the following results:
                <br />
                <br />
                1.{" "}
                <span style={{ color: "#6AC296" }}>
                  70% Increased user satisfaction ✅
                </span>{" "}
                <br />
                <br />
                2. Improved productivity <br />
                <br />
                3. Increased transparency <br />
                <br />
                4. Reduced development maintenance
              </div>
            </div>
            <img
              src={matrix}
              width="67%"
              alt="visual"
              className="hidden md:block -mt-10"
            />
            <img src={matrix} width="100%" alt="visual" className="md:hidden" />
          </div>
          <a
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
            style={{ color: "#6AC296" }}
            target="_blank"
            rel="noreferrer"
            href="https://www.notion.so/Interface-design-b0ea7648c51243dd9ff5f3c6500742b8"
            className="tracking-3 md:mt-20 mb-10 md:mb-20 flex items-center text-sm md:text-base uppercase font-lato-bold"
          >
            <ArrowRightCircle
              width={30}
              height={30}
              color="#6AC296"
              strokeWidth={1.5}
              className="mr-4"
            />
            read full case study <img src={Teacup} alt="" class="w-9 ml-2" />
          </a>
        </div>
      </div>
      {/* Possibilities */}
      <div class="font-lato h-full flex w-screen flex-col pt-10">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div
            style={{
              marginBottom: "30px",
            }}
            class=" text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato font-normal flex items-center"
          >
            <img src={ClinkingGlasses} className="mr-2 w-9 " alt="" />{" "}
            Possibilities
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="md:pr-10 font-lato font-normal md:pb-0 pb-5 flex flex-col text-lg">
              <div className="mb-5">
                The next step will be to push the{" "}
                <span style={{ color: "#6AC296" }}>
                  designs into development.
                </span>
                <br />
                <br />
                <span className="text-lg">•</span> Once the product is launched,
                observe the{" "}
                <span style={{ color: "#6AC296" }}>
                  user behavior and collect their feedback.
                </span>
                <br />
                <br />
                <span className="text-lg">•</span> Further, providing{" "}
                <span style={{ color: "#6AC296" }}>payment flexibility</span> by
                integrating payment modes and QR codes, Incorporating tools like
                tax calculators and more.
                <br />
                <br />
                <span className="text-lg">•</span>{" "}
                <span style={{ color: "#6AC296" }}>
                  Improving and iterating
                </span>{" "}
                over previous designs to deliver better solutions based on
                feedback.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Learnings and Retrospect */}
      <div class="font-lato h-full flex w-screen flex-col pt-10 mb-10">
        <div className=" md:px-24 px-5 mb-10 text-justify">
          <div
            style={{
              marginBottom: "30px",
            }}
            class=" text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato font-normal flex items-center"
          >
            <img src={InLotusPosition} className="mr-2 w-9 " alt="" /> Learnings
            and Retrospect
          </div>
          <div className="flex font-lato font-normal md:flex-row flex-col">
            <div className="md:pr-10 md:pb-0 pb-5 flex flex-col text-lg">
              <div className="py-3">
                <span className="text-lg">•</span> Realized the role of{" "}
                <span style={{ color: "#6AC296" }}>engaging stakeholders</span>{" "}
                for feedback to be on the same page.
                <br />
                <br />
                <span className="text-lg">•</span> The importance of keeping{" "}
                <span style={{ color: "#6AC296" }}>users at the center</span>{" "}
                and conducting user testing to create
                <span style={{ color: "#6AC296" }}>
                  {" "}
                  designs relevant to the users
                </span>
                .<br /> <br />
                <span className="text-lg">•</span>{" "}
                <span style={{ color: "#6AC296" }}>Prioritizing</span> research
                results to set useful and achievable goals is paramount.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end screen */}
      <div className="leading-0">
        <WorkHero
          largeEnter={largeEnter}
          imageEnter={imageEnter}
          work={{
            // image: Hero,
            video:
              "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/Comp_1_tdwzlp.gif",
            title: "Smart Vision",
            gif: true,
            domain: "Case Study",
            subtitle: "A web app for managing your bills",
            description: "A web app for managing your bills",
            link: "/smart-vision",
            linkText: "Visit BillEasy",
          }}
          next={true}
        />
      </div>
      <motion.div
        className="cursor hidden md:flex"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default BillEasyVisual;
