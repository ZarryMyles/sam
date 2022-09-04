import React, { useEffect, useState } from "react";
import { WorkHero, WorkHeading, Navbar, Loader } from "../../components";
import { ArrowRightCircle } from "react-feather";
import { motion } from "framer-motion";
// assets
import one from "../../assets/works/happilyEver/1.png";
import two from "../../assets/works/happilyEver/2.png";
import three from "../../assets/works/happilyEver/3.png";
import four from "../../assets/works/happilyEver/4.svg";
import five from "../../assets/works/happilyEver/5.png";

// Icons
import {
  Clipboard,
  Calendar,
  TippingHand,
  Fist,
  GrinningFace,
  Check,
  BriefCase,
  GuideDog,
  Nerd,
  Placard,
  Pointer,
  Teacup,
  ClinkingGlasses,
  Ladder,
} from "../../assets/icons/fluent";

const HappilyEver = () => {
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
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      bounce: 0,
    },
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      bounce: 0,
    },
    large: {
      height: 80,
      width: 80,
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      bounce: 0,
    },
  };

  const textEnter = () => setcursorVariant("text");
  const imageEnter = () => setcursorVariant("secondary");
  const textLeave = () => setcursorVariant("default");
  const largeEnter = () => setcursorVariant("large");

  const work = {
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    video: "../assets/work_gifs/happilyEver.mp4",
    title: "Happily Ever",
    domain: "Branding",
    subtitle: "",
    description:
      "Designing brands to be more people \n Interactive : Adding value to future Brand Identities ",
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
    <div
      onMouseEnter={imageEnter}
      className="overflow-hidden font-lato font-normal text-justify bg-brand-black text-brand-white"
    >
      {loading && (
        <div class="fixed w-full h-full z-50">{/* <Loader /> */}</div>
      )}
      <Navbar
        largeEnter={largeEnter}
        imageEnter={imageEnter}
        defaultColor={"white"}
      />
      <WorkHero
        work={work}
        largeEnter={largeEnter}
        textEnter={textEnter}
        textLeave={textLeave}
        imageEnter={imageEnter}
      />
      {/* project brief */}
      <div class=" px-5 pt-10 md:px-24 md:mt-20 flex flex-wrap justify-between  ">
        <div className="my-5">
          <div class="text-xl  font-lato flex items-center -ml-1">
            <img src={Clipboard} className="mr-2 w-5 " alt="" /> Project Type
          </div>
          <div className="font-lato font mt-2">Proof of concept</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5   ">
          <div class="text-xl  font-lato flex items-center -ml-2">
            <img src={Calendar} className="mr-2 w-5 " alt="" /> Timeline
          </div>
          <div className="font-lato  mt-2">1 month</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5   ">
          <div class="text-xl  font-lato flex items-center -ml-1">
            <img src={TippingHand} className="mr-2 w-5 " alt="" /> My Role
          </div>
          <div className="font-lato  mt-2">Product Design Intern</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5   ">
          <div class="text-xl  font-lato flex items-center -ml-1">
            <img src={Fist} className="mr-2 w-5 " alt="" /> Design Team
          </div>
          <div className="font-lato mt-2">Three</div>
        </div>
      </div>
      {/* project about */}
      <div class=" px-5 py-10 md:px-24 md:mb-36 md:pr-0 grid grid-cols-12  h-full">
        <WorkHeading text={"About"} />
        <div class="col-span-12 md:col-span-6 h-full flex flex-col    ">
          <div class="flex items-center">
            <div
              style={{
                marginBottom: "30px",
              }}
              class="  text-2xl md:text-4xl  tracking-1.5 font-lato flex items-center"
            >
              <img src={GrinningFace} className="mr-2 w-9 " alt="" />{" "}
              HappilyEver
            </div>
          </div>
          <div className="  leading-6 tracking-0.5  font-lato ">
            Happily Ever, aka HAE, is an Match-making service. It is strongly
            aimed at helping people in{" "}
            <span style={{ color: "#ED9D9D" }}>
              fostering deep and meaningful connections,
            </span>{" "}
            potentially leading to the discovery of companions, bestfriends, or
            even a soulmate.
          </div>
        </div>
        <div class="hidden md:block col-span-1"></div>

        <div class="col-span-12 md:col-span-5  flex flex-col items-center  justify-center md:pl-10 rounded-xl text-brand-white ">
          <div className="  px-4 md:pr-24 rounded-l-lg flex flex-col justify-center bg-brand-darkGrey2 md:pl-14 py-14  ">
            <div className=" mb-8">
              <div className=" mb-2 flex items-center">
                <img src={Check} className="mr-2 w-5 " alt="" /> Results
              </div>
              <div className=" leading-6 tracking-0.5">
                Strengthened brand direction, Estimated to{" "}
                <span style={{ color: "#ED9D9D" }}>
                  Improve user engagement.
                </span>
              </div>
            </div>
            <div className=" ">
              <div className=" mb-2 flex items-center">
                <img src={BriefCase} className="mr-2 w-5 " alt="" />{" "}
                <div>Contribution</div>
              </div>
              <div className=" leading-6 tracking-0.5">
                Interviews, Secondary research, Usability testing, Competitive
                analysis
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* purpose */}
      <div className="p-5 md:p-0">
        <div className="md:px-24 px-5 w-full">
          <WorkHeading text={"purpose"} />
        </div>
        <div class=" font-lato md:pb-56">
          <div class=" w-max bg-brand-darkGrey2 md:pt-5 md:pb-16 md:pl-24 rounded-r-lg">
            <div class="text-2xl font-lato">🎯 Goals</div>
            <div className=" mt-8 text-left w-max pr-28">
              1. Strengthen brand direction.
              <br />
              2. Improve focus on purpose.
              <br />
              3. Identify alignment in user brand persuasion and <br /> brand
              vision.
            </div>
          </div>
        </div>
      </div>
      {/* Challenge */}
      <div className="px-5 bg-brand-black text-brand-white md:px-24 md:pb-10">
        <WorkHeading text={"Challenge"} />
        <div class="flex items-center md:items-center md:flex-row flex-col font-lato ">
          {/* <svg
            width="24"
            className=" absolute ml-10 md:left-8 left-3 md:w-16 -mt-10 md:-mt-5 "
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.576 21.376C3.848 21.376 2.552 20.8 1.688 19.648C0.824 18.448 0.392 16.936 0.392 15.112C0.44 13.816 0.704 12.328 1.184 10.648C1.664 8.92 2.36 7.168 3.272 5.392C4.232 3.616 5.408 1.912 6.8 0.279996L8.888 1.936C8.168 2.8 7.496 3.88 6.872 5.176C6.248 6.424 5.72 7.768 5.288 9.208C4.904 10.648 4.688 12.04 4.64 13.384C4.928 13.288 5.216 13.216 5.504 13.168C5.792 13.12 6.08 13.096 6.368 13.096C7.424 13.096 8.312 13.456 9.032 14.176C9.752 14.848 10.088 15.76 10.04 16.912C10.04 18.256 9.608 19.336 8.744 20.152C7.88 20.968 6.824 21.376 5.576 21.376ZM18.536 21.376C16.856 21.376 15.56 20.8 14.648 19.648C13.784 18.448 13.376 16.936 13.424 15.112C13.472 13.816 13.712 12.328 14.144 10.648C14.624 8.92 15.344 7.168 16.304 5.392C17.264 3.616 18.44 1.912 19.832 0.279996L21.92 1.936C21.2 2.8 20.504 3.88 19.832 5.176C19.208 6.424 18.68 7.768 18.248 9.208C17.864 10.648 17.672 12.04 17.672 13.384C17.96 13.288 18.224 13.216 18.464 13.168C18.752 13.12 19.064 13.096 19.4 13.096C20.408 13.096 21.272 13.456 21.992 14.176C22.76 14.848 23.12 15.76 23.072 16.912C23.072 18.256 22.616 19.336 21.704 20.152C20.84 20.968 19.784 21.376 18.536 21.376Z"
              fill="#424242"
            />
          </svg> */}
          <div className="md:w-6/10  ">
            <div class="md:pr-10 leading-6 ml-10 tracking-0.5 font-lato font-normal">
              <div className=" ">
                1. The product's vision is to "
                <span style={{ color: "#ED9D9D" }}>
                  fosters meaningful connections
                </span>
                ". However the current product <br /> provided matrimonial
                services. As a result, the primary users included young adults
                and singles,
                <br />
                each with their own set of expectations and mental models.
              </div>
              <div className="py-3">
                2. In this situation, it was my advice to remain{" "}
                <span style={{ color: "#ED9D9D" }}>
                  aligned with the core vision
                </span>{" "}
                to avoid any <br />
                complexities.
              </div>
              <div className="py-3">
                3.{" "}
                <span style={{ color: "#ED9D9D" }}>
                  Communicating these changes itself was a challenge.
                </span>
              </div>
            </div>
          </div>
          <img
            src={one}
            alt="logo"
            className="w-1/2 md:w-4/10 md:left-0 left-1/4 mt-9"
          />
        </div>
      </div>
      {/* Research and Analyzing product */}
      <div className="p-5 md:p-24 ">
        <WorkHeading text={"Research"} />
        {/* Analyzing */}
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div class="md:pr-10 w-6/10">
            <div
              style={{
                marginBottom: "30px",
              }}
              class="  text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato flex items-center"
            >
              <img src={GuideDog} className="mr-2 w-9 " alt="" /> Analyzing The
              Product
            </div>
            <div className="mt-10 md:mb-16 font-lato font-normal leading-6 tracking-1.5">
              Stakeholder Interview <br />
              <br />
              <span className="text-lg">•</span> The first step in{" "}
              <span style={{ color: "#ED9D9D" }}>
                {" "}
                understanding brand values
              </span>{" "}
              was to know the product's mission and motive. This interview
              helped the stakeholder in developing a{" "}
              <span style={{ color: "#ED9D9D" }}>clear vision.</span>
              <br />
              <br /> <span className="text-lg">•</span> He was asked a series of
              <span style={{ color: "#ED9D9D" }}>
                {" "}
                open-ended questions,
              </span>{" "}
              such as : <br />
              1. What inspired you to create this product? <br />
              2. Why should people use this product? <br />
              3. What are the objectives? <br />
              4. How do you visualize your brand? <br />
              and many more..
            </div>
          </div>
          <img
            src={two}
            alt="logo"
            className="w-1/2 md:mt-10 md:w-4/10 md:left-0 left-1/4"
          />
        </div>
        {/* Key Insights */}
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div class="md:pr-10 w-6/10">
            <div className="mt-10 md:mb-16 font-lato font-normal leading-5 tracking-1.5">
              Key Insights <br />
              <br />
              <br />
              <span className="text-lg">•</span> A platform where{" "}
              <span style={{ color: "#ED9D9D" }}>
                meaningful connections are fostered.
              </span>
              <br />
              <br />
              <span className="text-lg">•</span>{" "}
              <span style={{ color: "#ED9D9D" }}>
                Fine-tuning communication{" "}
              </span>
              encourages people to talk to others because, All relations start
              with a conversation. It is observed, people avoid confrontations
              due to fear of rejection.
              <br />
              <br /> <span className="text-lg">•</span> Building relationships,
              <span style={{ color: "#ED9D9D" }}> expressing empathy,</span> and
              having long-lasting conversations.
              <br />
              <br /> <span className="text-lg">•</span> Creating a connection
              must be a celebration.
              <br />
              <br />
              <span className="text-lg">•</span> Platform to explore based on
              <span style={{ color: "#ED9D9D" }}> matching interests</span>{" "}
              while <span style={{ color: "#ED9D9D" }}>staying authentic.</span>{" "}
              <br />
              <br />
              <span className="text-lg">•</span> Online, It is possible to put
              up a façade, meeting in person reveals true selves and true
              connections can only be made outdoors. <br />
              <br />
              <span className="text-lg">•</span>{" "}
              <span style={{ color: "#ED9D9D" }}>Stories</span> create
              meaningful connection & curiosity.
            </div>
          </div>
        </div>
      </div>
      {/* Competitive Analysis */}
      <div className="p-5 md:p-20 ">
        <div class="flex items-center md:items-center justify-between md:flex-row flex-col font-lato">
          <div className=" w-6/10 md:pr-4">
            <div class=" ">
              <div
                style={{
                  marginBottom: "30px",
                }}
                class="  text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato flex items-center"
              >
                <img src={Nerd} className="mr-2 w-9 " alt="" />
                Competitive Analysis
              </div>
              <div className="py-3 mt-10  font-lato font-normal leading-5 tracking-1.5">
                <span className="text-lg">•</span> The product being developed
                was a matrimonial service with a{" "}
                <span style={{ color: "#ED9D9D" }}>
                  completely different mental model
                </span>{" "}
                of the users altogether. The vision was partially aligned, and
                further, the team was planning to integrate other user bases as
                well, which was confusing!
              </div>
              <div className="py-3 font-lato font-normal leading-5 tracking-1.5">
                <span className="text-lg">•</span> But, before jumping onto
                conclusions, I conducted in-depth{" "}
                <span style={{ color: "#ED9D9D" }}>research</span> on similar
                products existing in market, Like{" "}
                <span style={{ color: "#ED9D9D" }}>
                  Shaadi, Bumble, Jeevansaathi and bharat matrimony.
                </span>
              </div>
            </div>
          </div>
          <img
            src={three}
            alt="logo"
            className="w-1/2 md:w-4/10 p-8  md:left-0 left-1/4"
          />
        </div>
      </div>
      {/* Usability Testing */}
      <div className="p-5 md:p-20">
        <div class="flex items-center md:items-start md:flex-row flex-col font-lato">
          <div>
            <div class="md:pr-10">
              <div
                style={{
                  marginBottom: "30px",
                }}
                class="  text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato flex items-center"
              >
                <img src={Placard} className="mr-2 w-9 " alt="" />
                Usability testing
              </div>
              <div className="py-3 mt-10 font-lato font-normal leading-5 tracking-1.5">
                <span className="text-lg">•</span> Users do not necessarily use
                and perceive our products the same way we wish them to.
              </div>
              <div className="py-3 font-lato font-normal leading-5 tracking-1.5">
                <span className="text-lg">•</span> Therefore, I ran a usability
                test to better understand{" "}
                <span style={{ color: "#ED9D9D" }}>
                  user needs and expectations.
                </span>
              </div>
              <div className="py-3 font-lato font-normal leading-5 tracking-1.5">
                <span className="text-lg">•</span> This greatly helped the
                stakeholders to know of the{" "}
                <span style={{ color: "#ED9D9D" }}>
                  gaps in their current methods.
                </span>
              </div>
              <div className="py-3 font-lato font-normal leading-5 tracking-1.5">
                <span className="text-lg">•</span> I was able to conduct the
                tests with{" "}
                <span style={{ color: "#ED9D9D" }}>5 users via Zoom.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Approach */}
      <div className="p-5 md:p-20">
        <div class="flex items-center md:items-center justify-between md:flex-row flex-col font-lato">
          <div className="md:w-6/10">
            <div class="md:pr-10">
              <div
                style={{
                  marginBottom: "30px",
                }}
                class="  text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato flex items-center"
              >
                <img src={Ladder} className="mr-2 w-9 " alt="" />
                Approach
              </div>
              <div className="py-3 mt-10 font-lato font-normal leading-5 tracking-1.5">
                <span className="text-lg">•</span> Through analysis of both
                competitive and usability tests results, I developed a{" "}
                <span style={{ color: "#ED9D9D" }}>Venn Diagram</span> to
                demonstrate difference between the{" "}
                <span style={{ color: "#ED9D9D" }}>product which he aimed</span>{" "}
                to develop <span style={{ color: "#ED9D9D" }}>vs</span> the one
                he is{" "}
                <span style={{ color: "#ED9D9D" }}>currently developing.</span>
              </div>
              <div className="py-3 font-lato font-normal leading-5 tracking-1.5">
                <span className="text-lg">•</span> As shown in the figure, The
                mental model of the users is completely different, thus having
                them both in a single platform would yield no positive outcomes,
                rather would lead to{" "}
                <span style={{ color: "#ED9D9D" }}>
                  complications in the match-making algorithm.
                </span>
              </div>
            </div>
          </div>
          <img src={four} alt="logo" className="w-1/2 md:w-4/10 mt-8 " />
        </div>
      </div>{" "}
      {/* Solutions */}
      <div className="p-5 md:p-24">
        <WorkHeading text={"Solutions"} />
        <div class="flex items-center md:items-center md:flex-row flex-col font-lato">
          <div className="md:w-6/10">
            <div class="md:pr-10">
              <div
                style={{
                  marginBottom: "30px",
                }}
                class="  text-2xl md:text-4xl md:my-0 my-8 tracking-1.5 font-lato flex items-center"
              >
                <img src={ClinkingGlasses} className="mr-2 w-9 " alt="" />
                Solutions
              </div>
              <div className="py-3 mt-10 font-lato font-normal leading-5 tracking-1.5">
                <span className="text-lg">•</span> Since HappilyEver was an
                <span style={{ color: "#ED9D9D" }}>
                  {" "}
                  early stage start-up
                </span>{" "}
                my aim was to create a{" "}
                <span style={{ color: "#ED9D9D" }}>clear roadmap</span> and help
                the team stay on similar target.
                <br />
                <span className="text-lg">•</span> What defines the brand is
                what it values the most,{" "}
                <span style={{ color: "#ED9D9D" }}>Giving logo a purpose.</span>
                <br />
                <br />
                <br />
                <br />{" "}
                <div className="flex flex-row items-center mb-2">
                  <img
                    src={Pointer}
                    alt="logo"
                    className="inline h-6 pr-3 mt-1"
                  />{" "}
                  Product
                </div>
                <span className="text-lg">•</span> Providing a general platform
                for all people to find meaningful connections based on their
                personal preferences. <br />
                <br />
                <br />
                <br />
                <div className="flex flex-row items-center mb-2">
                  <img
                    src={Pointer}
                    alt="logo"
                    className="inline h-6 pr-3 mt-1"
                  />{" "}
                  Purpose
                </div>
                <span className="text-lg">•</span>{" "}
                <span style={{ color: "#ED9D9D" }}>
                  What does Happilyever do?
                </span>{" "}
                <br />
                Fosters deep and meaningful connections.
                <br />
                <br /> <span className="text-lg">•</span> Challenging the
                vision,{" "}
                <span style={{ color: "#ED9D9D" }}>
                  "Why do we need deep connections?"
                </span>{" "}
                <br />
                In the world of "nobody knows me," people seek individuals who
                "understand them", people who are empathetic, supportive and
                loyal. <br />
                <br />
                <br />
                <br />
                <div className="flex flex-row items-center mb-2">
                  <img
                    src={Pointer}
                    alt="logo"
                    className="inline h-6 pr-3 mt-1"
                  />{" "}
                  Brand Recognition
                </div>
                <span className="text-lg">•</span>{" "}
                <span style={{ color: "#ED9D9D" }}>
                  Authenticity, personalized connections and joy.
                </span>
                <br /> <span className="text-lg">•</span> How is it different?
                <br /> <span className="text-lg">•</span> Encourages real
                <span style={{ color: "#ED9D9D" }}>
                  meet-ups, limits choice paralysis and icebreakers.
                </span>{" "}
                <br />
                <br />
                <br />
                <br />
                <div className="flex flex-row items-center mb-2">
                  <img
                    src={Pointer}
                    alt="logo"
                    className="inline h-6 pr-3 mt-1"
                  />{" "}
                  Defining audience
                </div>
                <span className="text-lg">•</span> Our primary users aged
                between <span style={{ color: "#ED9D9D" }}>20 to 35yrs</span>
                <br /> <span className="text-lg">•</span> Why?
                <br /> Since, this was the age group that began looking for{" "}
                <span style={{ color: "#ED9D9D" }}>
                  long term relationships.
                </span>{" "}
                <br />
                However, because our stakeholders were adamant about providing
                matrimonial matches, we all agreed that it would be better to
                have two separate services with the similar vision forming
                different target audiences.
              </div>
            </div>
          </div>
          <img
            src={five}
            alt="logo"
            className="w-1/2 md:w-1/3 md:left-0 left-1/4"
          />
        </div>
      </div>
      <a
        largeEnter={largeEnter}
        imageEnter={imageEnter}
        style={{ color: "#ED9D9D" }}
        href="https://www.notion.so/BillEasy-Research-eede878d31d8405dba2c5543dbb3da67"
        className="tracking-3 md:mt-20 md:px-24 mb-10 md:mb-40 flex items-center text-sm md:text-base uppercase font-lato-bold"
      >
        <ArrowRightCircle
          width={30}
          height={30}
          color="#ED9D9D"
          strokeWidth={1.5}
          className="mr-4"
        />
        read full case study <img src={Teacup} alt="" class="w-9 ml-2" />
      </a>
      {/* end screen */}
      <WorkHero
        largeEnter={largeEnter}
        imageEnter={imageEnter}
        work={{
          domain: "Research",
          title: "BillEasy",
          image:
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          video:
            "https://res.cloudinary.com/genesiscloudimages/video/upload/v1662181482/work_gifs/BillEasy-short_yhhk58.mp4",
          link: "/billeasy",
        }}
        next={true}
      />
      <motion.div
        className="cursor hidden md:flex"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default HappilyEver;
