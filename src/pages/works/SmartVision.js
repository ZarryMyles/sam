import React from "react";
import { WorkHero, Navbar } from "../../components";
import { ReactComponent as Quote } from "../../assets/icons/quotestart.svg";
import { ArrowRightCircle } from "react-feather";
import Problem from "../../assets/works/smartvision/smartVisionProblem.png";
import Problem2 from "../../assets/works/smartvision/smartVisionProblem2.png";
import Problem3 from "../../assets/works/smartvision/smartVisionProblem3.png";
import Phone1 from "../../assets/works/smartvision/smartVisionPhone1.png";
import Phone2 from "../../assets/works/smartvision/smartVisionPhone2.png";
import Phone3 from "../../assets/works/smartvision/smartVisionPhone3.png";
import Phone4 from "../../assets/works/smartvision/smartVisionPhone4.png";
import Phone5 from "../../assets/works/smartvision/smartVisionPhone5.png";
import Phone6 from "../../assets/works/smartvision/smartVisionPhone6.png";
import colorChecker from "../../assets/works/smartvision/smartVisionColorChecker.png";
import fonts from "../../assets/works/smartvision/smartVisionFonts.png";
import { BsArrowRightShort } from "react-icons/bs";

const SmartVision = () => {
  const work = {
    image: "../../assets/works/smartvision/smartVision.png",
    video:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/Comp_1_tdwzlp.gif",
    title: "Smart Vision",
    domain: "Case Study",
    subtitle: "A web app for managing your bills",
    description: "A web app for managing your bills",
    link: "https://billeasy.com",
    linkText: "Visit BillEasy",
  };
  return (
    <div>
      <Navbar defaultColor={"white"} />
      <WorkHero work={work} />
      {/* project brief */}
      <div class=" p-5 md:p-24 flex flex-wrap justify-between ">
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center">
            👨‍👩‍👦 Project Type
          </div>
          <div className="font-lato-light font-bold">Personal Project</div>
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
          <div className="font-lato-light font-bold">UX & UI Designer</div>
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
              💡 Smart Vision
            </div>
          </div>
          <div className="my-8    ">
            Smart Vision is an <b>Accessible, Independent and Secure</b>{" "}
            messaging App designed to make smartphones{" "}
            <b>more accessible for users with visual impairments.</b>
            <br />
            <br />
            Allows people to engage in hassle-free conversations, Provides the
            <b>finest accessibility features and secures privacy</b> to improve
            the quality of life.
          </div>
        </div>
        <div class="hidden md:block col-span-1"></div>

        <div class="col-span-12 md:col-span-5 h-full flex flex-col items-center justify-center ">
          <div className="my-5">
            <div className="mb-3">✅ Results</div>
            <div>
              Raised awareness, advanced accessibility features, Inclusive and
              easy to use space.
            </div>
          </div>
          <div className=" my-5">
            <div className="mb-3">💼 Contribution</div>
            <div>
              Secondary Research, Brainstorming Business goals, User Interviews,
              Journey Mapping, Ideation, Interface Design, Prototyping.
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
          <div class="col-span-12 md:col-span-8 hidden ">
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
      {/* user segmentation */}
      <div className="p-5 md:p-20 font-lato">
        <div className="text-2xl md:text-4xl mb-8 tracking-1.5">
          👨‍👨‍👧‍👦 User segmentation
        </div>
        <div class="ml-3">
          <div className=" text-base font-lato my-5">User Type</div>
          <div className="" style={{ letterSpacing: "0.5px" }}>
            <b>Legally blind</b>
            <ul className="list-disc">
              <li className="">
                A legally blind individual is considered sightless if contact
                lenses or <b>eyeglasses cannot correct their vision.</b>
              </li>
              <li className="my-5">
                The <b>normal vision is 20/20</b>. That means an object can be
                seen correctly 20 feet away. But the vision of a{" "}
                <b>legally blind</b> is
                <b>20/200 or less</b>. This means if an object is 200 feet away,
                they have to stand 20 feet away to see it evidently.
              </li>
            </ul>
          </div>
          {/* primary  */}
          <div className=" text-base font-lato my-5 font-bold mt-8">
            Primary User
          </div>
          <div className="" style={{ letterSpacing: "0.5px" }}>
            <ul className="list-disc">
              <li className="">
                These are the users who require messaging apps the most.
              </li>
              <li className="my-5">
                They mostly utilize the app to share work-related information,
                promote their business, share valuable data, and have a shared
                platform for professional discussions, meetings, and so on.
              </li>
              <li className="my-5">
                Examples : Teachers, Bloggers, Youtubers, Advocates etc.{" "}
              </li>
              <li className="my-5">Age : 23 - 60 </li>
            </ul>
          </div>
          {/* secondary  */}
          <div className=" text-base font-lato my-5 font-bold mt-8">
            Secondary User
          </div>
          <div className="" style={{ letterSpacing: "0.5px" }}>
            <ul className="list-disc">
              <li className="">People who use it for casual interactions.</li>
              <li className="my-5">
                Text messaging is the most common way for teenagers and young
                adults to communicate.
              </li>
              <li className="my-5">
                Examples : High school and College students.{" "}
              </li>
              <li class="my-5"> Age : 15+</li>
            </ul>
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
              How might we design a Messaging app which is <b>Inclusive</b> to
              people with impaired vision making their{" "}
              <b>communication experience hassle -free and economical.</b>
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
                <span className=" font-lato-bold mr-2 text-xl ">
                  2.2 Billion
                </span>
              </div>
              <div
                class="text-gray-500 "
                style={{
                  color: "#2B6043",
                }}
              >
                People are visually impaired globally
              </div>
            </div>
            <div class="w-full md:w-1/2 text-center md:text-left my-5 md:my-0">
              <div
                style={{
                  color: "#064925",
                }}
              >
                <span className=" font-lato-bold mr-2 text-xl ">
                  1.3 Million
                </span>
              </div>
              <div
                class="text-gray-500 "
                style={{
                  color: "#2B6043",
                }}
              >
                Americans are legally blind (highest)
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* problem identification */}
      <div class=" p-5 md:p-24   h-full">
        <div class="   ">
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
          <div class="  text-2xl md:text-4xl my-8 tracking-1.5 font-lato-light font-bold ">
            🦮 Identifying the problem
          </div>
          <ul className="my-8 list-disc ml-5">
            <li className="my-3">
              While searching for users to interview, I couldn't find any
              relevant people, thanks to the pandemic :') During which, I
              discovered that people in India are unfamiliar of legal blindness
            </li>
            <li className="my-3">
              I was able to interview two of the teammates with different levels
              of work experience.
            </li>{" "}
            <li className="my-3">
              As a result, I reached out to individuals on the internet and, to
              my surprise, I was able to connect with global audience fitting
              into the right category.
            </li>
            <li className="my-3">
              I interviewed around 8 participants in total through
              videoconferencing and Google forms.
            </li>
            <div class="px-0 md:px-5 w-full my-8">
              <img src={Problem} className="w-full" alt="" />
            </div>
            <li className="my-3">
              Next, I Grouped Insights based on similarity of cognitive patterns
              and characteristics for the segmented users to create personas.
            </li>
            <div class="px-0 md:px-5 w-full my-8">
              <img src={Problem2} className="w-full" alt="" />
            </div>{" "}
            <li className="my-3">
              Finally, I developed a Journey map for prospective scenarios to
              help me understand and analyze the problem in depth.
            </li>
            <div class="px-0 md:px-5 w-full my-8">
              <img src={Problem3} className="w-full" alt="" />
            </div>
          </ul>
        </div>
      </div>
      {/* key points */}
      <div class="p-5 md:p-24 h-full">
        <div class="  text-2xl md:text-4xl my-8 tracking-1.5 font-lato-light font-bold ">
          🗝️ Key pain-points
        </div>
        <div class="px-3 grid grid-cols-1 md:grid-cols-2 ">
          <div class="col-span-1 p-2 md:p-5">
            <div
              style={{
                background: "#FAFAFA",
                borderRadius: "4px",
              }}
              className="w-full p-5 rounded-md "
            >
              <div class="text-lg font-lato font-bold">Letters</div>
              <ul class="my-0 md:my-8 list-decimal">
                <li className="ml-4">Struggles while reading.</li>
                <li class="ml-4">
                  Prefers <b>bold and enlarged letters.</b>
                </li>
                <li class="ml-4">
                  <b>Keyboard letters are not legible enough.</b> Feels time
                  consuming with TTS unless you've mastered it.
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-1 p-2 md:p-5">
            <div
              style={{
                background: "#FAFAFA",
                borderRadius: "4px",
              }}
              className="w-full p-5 rounded-md "
            >
              <div class="text-lg font-lato font-bold">TTS</div>
              <ul class="my-0 md:my-8 list-decimal ml-4">
                <li>
                  <b>Cannot describe texts in images.</b>
                </li>
                <li>Over informative</li>
                <li>
                  It's a <b>pain texting in group chats since</b> most of the
                  times
                  <b>messages are read from the first</b> if a new external
                  message pops up.
                </li>
                <li>Searching messages from long back is difficult.</li>
              </ul>
            </div>
          </div>
          <div class="col-span-1 p-2 md:p-5 h-auto">
            <div
              style={{
                background: "#FAFAFA",
                borderRadius: "4px",
              }}
              className="w-full p-5 rounded-md "
            >
              <div class="text-lg font-lato font-bold">Images and Videos</div>
              <ul class="my-0 md:my-8 ">
                <li className="">
                  Emojis and images are difficult to perceive.
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-1 p-2 md:p-5 h-full">
            <div
              style={{
                background: "#FAFAFA",
                borderRadius: "4px",
              }}
              className="w-full p-5 rounded-md "
            >
              <div class="text-lg font-lato font-bold">Letters</div>
              <ul class="my-0 md:my-8 list-decimal ml-4">
                <li>Doesn't prefer people to hear their messages aloud.</li>
                <li>Requests someone else to read it for him</li>
                <li>
                  Colors are either very bright or too dull, and Light mode
                  strains eyes.
                </li>
                <li>Reads messages in the evening.</li>
                <li>Quick way to connect with people is needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* features */}
      <div class="bg-brand-black px-5 py-10 md:p-24 h-full">
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
        <div class="grid grid-cols-12 font-lato">
          {/* 1 */}
          <div class="col-span-12 md:col-span-7 flex  items-center justify-center text-white px-3 md:px-28 my-5">
            <div>
              <div className="my-8">1. Screen recorder</div>
              <ul class="list-disc ml-4">
                <li className="my-9">
                  Screen readers speak what is on the screen as the finger
                  explores. They are simple to understand and control.
                </li>
                <li className="my-9">
                  At any moment,{" "}
                  <b>double-tap the text to activate the screen</b>
                  reader.
                </li>
              </ul>
            </div>
          </div>
          <div class="md:col-span-5 col-span-12 hidden md:flex items-center justify-center">
            <img
              src={Phone1}
              className=""
              style={{
                width: "290px",
              }}
              alt=""
            />
          </div>
          <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
            <img src={Phone1} className="w-2/4" alt="" />
          </div>
          {/* 2 */}
          <div class="hidden md:flex md:col-span-5 col-span-12  items-center justify-center">
            <img
              src={Phone2}
              className=""
              style={{
                width: "290px",
              }}
              alt=""
            />
          </div>
          <div class="col-span-12 md:col-span-7 flex  items-center justify-center text-white px-3 md:px-28 my-5">
            <div>
              <div className="my-8">2. Image description</div>
              <ul class="list-disc ml-4">
                <li className="my-9">
                  Legally blind individuals can{" "}
                  <b>understand the texts better than images.</b> Screen readers
                  can't interpret images.
                </li>
                <li className="my-9">
                  Hence, Image descriptions are used to{" "}
                  <b>describe Information from images.</b> They can also
                  generate <b>alt text automatically</b>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
            <img src={Phone2} className="w-2/4" alt="" />
          </div>
          {/* 3 */}
          <div class="col-span-12 md:col-span-7 flex  items-center justify-center text-white px-3 md:px-28 my-5">
            <div>
              <div className="my-8">3. Speech Recognition</div>
              <ul class="list-disc ml-4">
                <li className="my-9">
                  It enables a program to{" "}
                  <b>process human speech to readable text.</b>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:col-span-5 col-span-12 hidden md:flex items-center justify-center">
            <img
              src={Phone3}
              className=""
              style={{
                width: "290px",
              }}
              alt=""
            />
          </div>
          <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
            <img src={Phone3} className="w-2/4" alt="" />
          </div>
          {/* 4 */}
          <div class="md:col-span-5 col-span-12 hidden md:flex items-center justify-center">
            <img
              src={Phone4}
              className=""
              style={{
                width: "290px",
              }}
              alt=""
            />
          </div>
          <div class="col-span-12 md:col-span-7 flex  items-center justify-center text-white px-3 md:px-28 my-5">
            <div>
              <div className="my-8">4. OCR</div>
              <ul class="list-disc ml-4">
                <li className="my-9">
                  <b>
                    Optical Character Recognition is the technology that detects
                    text inside digital pictures whether typed or handwritten
                  </b>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
            <img src={Phone4} className="w-2/4" alt="" />
          </div>
          {/* 5 */}
          <div class="col-span-12 md:col-span-7 flex  items-center justify-center text-white px-3 md:px-28 my-5">
            <div>
              <div className="my-8">5. Magnifier</div>
              <ul class="list-disc ml-4">
                <li className="my-9">
                  The user will not always be pleased with the screen readers
                  and their privacy may <b>be compromised</b>
                </li>
                <li className="my-9">
                  The magnifier allows the user to have a <b>closer look</b> at
                  the text or image while <b>respecting their privacy.</b>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:col-span-5 col-span-12 hidden md:flex items-center justify-center">
            <img
              src={Phone5}
              className=""
              style={{
                width: "290px",
              }}
              alt=""
            />
          </div>
          <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
            <img src={Phone5} className="w-2/4" alt="" />
          </div>
          {/* 6 */}
          <div class="md:col-span-5 col-span-12 hidden md:flex items-center justify-center">
            <img
              src={Phone6}
              className=""
              style={{
                height: "290px",
              }}
              alt=""
            />
          </div>
          <div class="col-span-12 md:col-span-7 flex  items-center justify-center text-white px-3 md:px-28 my-5">
            <div>
              <div className="my-8">6. Braille keyboard</div>
              <ul class="list-disc ml-4">
                <li className="my-9">
                  Braille keyboard that can be <b>calibrated to human touch.</b>{" "}
                  Private and Alternative option to speech recognition.
                </li>
                <li class="my-9">
                  Prerequisite : A person must be familiar with braille.
                </li>
              </ul>
            </div>
          </div>
          <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
            <img src={Phone6} className="w-4/5" alt="" />
          </div>
        </div>
      </div>
      {/* ui guide system */}
      <div class="p-5 md:p-24 h-full">
        <div class="  text-2xl md:text-4xl my-8 tracking-1.5 font-lato-light font-bold ">
          🦮 UI guide system
        </div>
        <ul class="ml-4 list-disc">
          <li className="my-4 md:my-8">
            The visual designs were made by considering the{" "}
            <b>WCAG accessibility guidelines.</b>
          </li>

          <li className="my-4 md:my-8">
            The goal was to use <b>contrasting yet relaxing hues</b> to help
            readers read the <b>strain-free content.</b>
          </li>

          <li className="my-4 md:my-8">
            Our users emphasized on having a <b>dark mode</b> to{" "}
            <b>achieve maximum contrast.</b> Because pure black caused eye
            strain, this was modified to
            <b>#121212 with a high contrast ratio.</b>
          </li>
        </ul>
        {/* color thingy */}
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="col-span-1 my-4  ">
            <div
              class=" text-2xl font-google-sans"
              style={{ color: "#72C3C4" }}
            >
              Color
            </div>
            <div class="flex items-center justify-center my-16">
              <div className="flex flex-col items-center">
                <div
                  class="  rounded-full mx-3 md:mx-8 border-4 "
                  style={{
                    width: "68px",
                    height: "68px",
                    background: "#0A0A0A",
                    boxShadow: "0px 2.08333px 2.60417px rgba(41, 41, 41, 0.32)",
                  }}
                />
                <div className="my-6">#0A0A0A</div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  class="  rounded-full mx-3 md:mx-8 border-4  "
                  style={{
                    width: "68px",
                    height: "68px",
                    background: "#FFFFFF",
                    boxShadow:
                      "0px 2.08333px 2.60417px rgba(41, 41, 41, 0.12) ",
                  }}
                />
                <div className="my-6">#FFFFFF</div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  class="  rounded-full mx-3 md:mx-8 border-4 "
                  style={{
                    width: "68px",
                    height: "68px",
                    background: "#7CCBCD",
                    boxShadow: "0px 2.08333px 2.60417px rgba(41, 41, 41, 0.12)",
                  }}
                />
                <div className="my-6">#7CCBCD</div>
              </div>
            </div>
          </div>
          <div class="col-span-1 my-4 ">
            <img src={colorChecker} alt="" />
          </div>
          <div class="col-span-1 my-4 ">
            <div
              class=" text-2xl font-google-sans"
              style={{ color: "#72C3C4" }}
            >
              Typography
            </div>

            <div class="md:pl-20 font-google-sans ">
              <div className="my-8">Google Sans</div>
              <div class="flex items-center   font-google-sans">
                <div className="mx-4 md:mr-24 font-bold">
                  <div style={{ color: "#7CCBCD" }} class=" text-xl ">
                    Aa
                  </div>
                  <div>Bold</div>
                </div>
                <div className="mx-4 md:mr-24 font-medium">
                  <div style={{ color: "#7CCBCD" }} class=" text-xl ">
                    Aa
                  </div>
                  <div>Medium</div>
                </div>
                <div className="mx-4 md:mx-0 font-normal">
                  <div style={{ color: "#7CCBCD" }} class=" text-xl ">
                    Aa
                  </div>
                  <div>Regular</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 my-4 md:py-20 ">
            <img src={fonts} alt="" />
          </div>
        </div>

        {/*  */}
        <a
          href="/"
          className="tracking-3 px-5 flex items-center md:px-24  uppercase font-lato-bold"
        >
          <ArrowRightCircle
            width={30}
            height={30}
            color="black"
            strokeWidth={1.5}
            className="mr-4"
          />
          read full case study ☕
        </a>
      </div>
      <WorkHero
        work={{
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
        }}
        next={true}
      />
    </div>
  );
};

export default SmartVision;
