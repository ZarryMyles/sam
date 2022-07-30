import React from "react";
import BlackQuote from "../assets/icons/quote-black.png";
import WhiteQuote from "../assets/icons/quote-white.png";
import { GoDash } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

const SocialProof = ({ textEnter, textLeave, imageEnter }) => {
  return (
    <div
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
      className="px-5 md:px-32 py-10 md:py-20 flex items-center justify-center my-10 md:my-5 "
    >
      <div
        modules={[EffectFade, Navigation, Pagination]}
        class="bg-brand-darkGrey text-gray-400 w-full md:px-10 md:py-20 flex items-center justify-end relative"
      >
        <div class="text-4xl md:text-5xl w-full md:w-1/3 absolute -top-10 px-4 md:px-0 md:-top-12 md:left-12 font-bold">
          Feedback from my clients.
        </div>
        {/*  */}
        <Swiper
          //   spaceBetween={30}
          effect={"fade"}
          //   navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper w-full md:w-2/3 "
        >
          <div class="w-full md:w-2/3 px-10 md:px-0 py-16 md:py-0 flex flex-col justify-center">
            <div className="italic my-6">
              "I have worked with many developers in the past, but I have never
              met anyone as dedicated as him. He is a great developer and a
              great person. I would recommend him to anyone who is looking for a
              developer."
            </div>
            <div class="text-white tracking-wider text-xl  my-6">
              - John Doe, CEO of XYZ
            </div>
            <div class="flex justify-center items-center w-full">
              <GoDash class="text-2xl text-gray-400 cursor-pointer hover:text-white" />
              <GoDash class="text-2xl text-gray-400 cursor-pointer hover:text-white" />
              <GoDash class="text-2xl text-gray-400 cursor-pointer hover:text-white" />
            </div>
          </div>
        </Swiper>

        <img
          src={WhiteQuote}
          alt="quote"
          className="absolute -bottom-10 right-10 w-20"
        />
      </div>
    </div>
  );
};

export default SocialProof;
