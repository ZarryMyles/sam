import React from "react";
import Arrow from "../assets/icons/guidance-arrow.png";

const DesignCTA = ({ imageEnter, largeEnter }) => {
  return (
    <div className="text-white w-full px-6 pt-8 pb-[76px] md:px-24 md:pt-36 md:pb-36 ">
      <a href="/design" className="flex items-center gap-6 md:gap-[40px] w-max">
        <span
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          className="border-2 border-brand-fadedGold rounded-full px-4 md:px-8 py-3 text-brand-gold font-lora-italic tracking-[0.54px] text-base md:text-4xl"
        >
          Check out my designs ✨
        </span>
        <img
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          src={Arrow}
          alt="guidance arrow"
          className="w-12 md:w-auto md:h-auto "
        />
      </a>
    </div>
  );
};

export default DesignCTA;
