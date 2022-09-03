import React, { useState } from "react";
import { ReactComponent as Quote } from "../assets/icons/quoteWhite.svg";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// feedback
const feedbacks = [
  {
    name: "Soumya",
    company: "UI Developer at NinjaasLabs",
    image: "/assets/feedback/soumya.jpg",
    feedback:
      "It’s rare that you come across a hardworking standout talent like Shradha. At NinjaasLabs, I had the opportunity of collaborating on several projects with her. I was particularly impressed by her ability to effectively collaborate between client and developer. fake:123 She has been a brilliant leader to work with, and I wholeheartedly endorse her as an invaluable team member! from scratch, which resulted in a rich user experience and helped advance our projects from a design and usability perspective.  She has been a brilliant leader to work with, and I wholeheartedly endorse her as an invaluable team member!",
  },
  {
    name: "Sanjana",
    company: "SDE at Amazon",
    image: "/assets/feedback/sanjana.jpg",

    feedback:
      "Shradha is one of the most creative designers that I’ve had the privilege of working with.  She managed to independently design, wireframe, and create the overall UI and UX for projects that we collaborated on. Her keen eye for details and strong work ethic added elegance and simplicity to all of our applications. She showed initiative in building the design architecture from scratch, which resulted in a rich user experience and helped advance our projects from a design and usability perspective.  She has been a brilliant leader to work with, and I wholeheartedly endorse her as an invaluable team member!",
  },
  {
    name: "Neeladri",
    company: "Product Designer at Descrypt",
    image: "/assets/feedback/neeladri.jpg",

    feedback:
      "Shradha is one of the colleagues who has immense dedication towards her work and art. Her knowledge in the field of design is impeccable. Shradha would be a great asset to any organization that she works with.fake:123  Her keen eye for details and strong work ethic added elegance and simplicity to all of our applications. She showed initiative in building the design architecture from scratch, which resulted in a rich user experience and helped advance our projects from a design and usability perspective.  She has been a brilliant leader to work with, and I wholeheartedly endorse her as an invaluable team member!",
  },
];
const SocialProof = ({ textEnter, textLeave, imageEnter, largeEnter }) => {
  const [feedback, setFeedback] = useState(feedbacks[0]);
  const [fade, setFade] = useState(false);

  return (
    <div className="w-full h-full mx-auto">
      <div
        id="social-proof"
        onMouseEnter={imageEnter}
        // onMouseLeave={textLeave}
        className="px-5 md:px-24 font-lato py-10 md:py-20 md:pt-0 flex items-center justify-center my-10 md:my-5 bg-white dark:bg-brand-black transition-all duration-500"
      >
        <div class=" bg-brand-lightGrey dark:bg-brand-darkGrey2 md:dark:bg-brand-darkGrey2 text-black dark:text-brand-gray w-full p-5 md:p-24  flex flex-col items-center justify-end relative">
          {/* <Parallax
            class="text-4xl md:text-5xl w-full md:w-1/3 absolute -top-10 px-4 md:px-0 md:-top-12 md:left-12 font-bold"
            translateY={[-50, 20]}
          >
            <div>Feedback from my clients.</div>
          </Parallax> */}
          <div class="text-black flex items-center dark:text-brand-gray w-full text-xl uppercase tracking-widest">
            <div
              className="font-lato tracking-3 text-base text-brand-gray"
              style={{
                color: "#b5b5b5",
              }}
            >
              Testimonials
            </div>
            <div
              style={{
                height: "2px",
                width: "85px",
              }}
              class="bg-brand-gray ml-6"
            ></div>
          </div>

          <div class=" text-brand-gray text-xs md:text-base  w-full  px-5 md:px-0 py-3 md:py-0 flex flex-col justify-center">
            <div
              className={`font-lato-light-italic2 my-5 md:my-14 letter-1.5 transition-opacity ease-linear duration-1000  leading-relaxed md:leading-8 tracking-wider text-justify  ${
                fade ? "opacity-0" : ""
              } `}
            >
              {feedback.feedback.split("fake:123")[0]}{" "}
              <span
                style={{
                  MozWindowDragging: "none",
                }}
                class={`text-transparent select-none    `}
              >
                {feedback.feedback.split("fake:123")[1]}
              </span>
            </div>
            <div
              class={`text-black font-lato-light flex items-center dark:text-white tracking-wider text-xl   ease-linear duration-1000 transition-opacity  ${
                fade ? "opacity-0" : ""
              } `}
            >
              <div
                class="w-10 md:w-14 h-10 md:h-14 rounded-full  bg-brand-gray bg-cover bg-center bg-no-repeat mr-5 "
                style={{
                  backgroundImage: `url(${feedback.image})`,
                }}
              />
              <div class="flex flex-col  md:flex-row">
                <div className="text-base md:text-xl">{feedback.name}, </div>
                <div className="text-sm md:text-xl md:pl-1">
                  {feedback.company}
                </div>
              </div>
            </div>
            {/* pagination */}
            <div class="flex justify-center items-center w-full">
              {feedbacks.map((item, index) => (
                <div
                  class="py-4 cursor-pointer"
                  onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                      setFeedback(item);
                      setFade(false);
                    }, 800);
                  }}
                >
                  <div
                    // onMouseEnter={textEnter}
                    // onMouseLeave={imageEnter}
                    style={{
                      height: "2px",
                      color: "#ffc7d1",
                    }}
                    class={` transition-all duration-200 rounded-l-full rounded-r-full ${
                      item.name === feedback.name
                        ? "bg-black dark:bg-brand-pink w-6 "
                        : " bg-gray-500 w-4"
                    }   mx-1 `}
                  />
                </div>
              ))}
            </div>
          </div>

          <Quote
            className="absolute -bottom-5 md:-bottom-6 right-10 w-18 md:w-14 h-10 md:h-14 fill-black dark:fill-white "
            stroke="none"
            style={{
              fill: "#ffc7d1",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
