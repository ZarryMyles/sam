import React, { useState } from "react";
import { ReactComponent as Quote } from "../assets/icons/quoteWhite.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

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
const SocialProof = ({ imageEnter, largeEnter }) => {
  const pagination = {
    clickable: true,
  };
  const [feedback, setFeedback] = useState(feedbacks[0]);
  const [fade, setFade] = useState(false);

  return (
    <div id="social-proof" className="w-full h-full mx-auto">
      <div
        onMouseEnter={imageEnter}
        className=" hidden px-5 md:px-24 font-lato py-10 md:py-20 md:pt-0 md:flex items-center justify-center my-10 md:my-5 bg-white dark:bg-brand-black transition-all duration-500"
      >
        <div class="  flex   bg-brand-darkGrey2  text-brand-gray w-full p-5 md:p-24   flex-col md:items-center justify-end relative">
          <div class=" flex items-center text-brand-gray w-full text-xl uppercase tracking-widest">
            <div
              className="font-lato tracking-2 md:tracking-3 text-xs md:text-base text-brand-gray"
              style={{
                color: "#b5b5b5",
              }}
            >
              Testimonials
            </div>
            <div
              style={{
                height: "2px",
              }}
              class="bg-brand-gray w-[40px] md:w-[85px] ml-4 rounded-l-full rounded-r-full md:ml-6"
            ></div>
          </div>

          <div class=" text-brand-gray text-base  w-full   md:px-0 py-3 md:py-0 flex flex-col justify-center">
            <div
              className={`font-lato-light-italic2 my-5 md:my-14 tracking-1 md:tracking-1.5 transition-opacity ease-linear duration-1000  leading-[30px] md:leading-8  text-justify  ${
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
            {/* name */}
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
              <div class="flex tracking-1 md:tracking-3 ">
                <div className="text-xs md:text-xl">{feedback.name}, </div>
                <div className="text-xs md:text-xl pl-1">
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
            className="absolute -bottom-5 md:-bottom-6 right-6 md:right-10 w-10 md:w-14 h-10 md:h-14 fill-black dark:fill-white "
            stroke="none"
            style={{
              fill: "#ffc7d1",
            }}
          />
        </div>
      </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        loop
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide className="md:hidden w-full h-full">
            <div className="px-5 md:px-24 font-lato py-10 md:py-20 md:pt-0 flex items-center justify-center my-10 md:my-5  bg-brand-black transition-all duration-500">
              <div class="  flex min-h-[700px]   bg-brand-darkGrey2 pt-10  text-brand-gray w-full px-5  pb-[125px] md:p-24   flex-col md:items-center justify-end relative">
                <div class=" flex items-center text-brand-gray w-full text-xl uppercase tracking-widest">
                  <div
                    className="font-lato tracking-2 md:tracking-3 text-xs md:text-base text-brand-gray"
                    style={{
                      color: "#b5b5b5",
                    }}
                  >
                    Testimonials
                  </div>
                  <div
                    style={{
                      height: "2px",
                    }}
                    class="bg-brand-gray w-[40px] md:w-[85px] ml-4 rounded-l-full rounded-r-full md:ml-6"
                  ></div>
                </div>

                <div class=" text-brand-gray text-base  w-full   md:px-0 py-3 md:py-0 flex flex-col justify-center">
                  <div
                    className={`font-lato-light-italic2 my-5 md:my-14 tracking-1 md:tracking-1.5 transition-opacity ease-linear duration-1000  leading-[30px] md:leading-8  text-justify  ${
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
                  {/* name */}
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
                    <div class="flex tracking-1 md:tracking-3 ">
                      <div className="text-xs md:text-xl">
                        {feedback.name},{" "}
                      </div>
                      <div className="text-xs md:text-xl pl-1">
                        {feedback.company}
                      </div>
                    </div>
                  </div>
                </div>
                <Quote
                  className="absolute -bottom-5 md:-bottom-6 right-6 md:right-10 w-10 md:w-14 h-10 md:h-14 fill-black dark:fill-white "
                  stroke="none"
                  style={{
                    fill: "#ffc7d1",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SocialProof;
