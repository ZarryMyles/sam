import React from "react";
import Arrow from "../assets/icons/guidance-arrow.png";

const DesignCTA = ({ imageEnter, largeEnter }) => {
  return (
    <div className="text-white w-full md:px-24 md:py-36">
      <a
        href="/design"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-[40px] w-max"
      >
        <span
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          className="border-2 border-brand-fadedGold rounded-full px-8 py-3 text-brand-gold font-lora-italic tracking-[0.54px] text-4xl"
        >
          Check out my designs ✨
        </span>
        <img
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          src={Arrow}
          alt="guidance arrow"
        />
      </a>
    </div>
  );
};

export default DesignCTA;
