import React from "react";

const LandingSection = ({ textEnter, textLeave, imageEnter }) => {
  return (
    <h1
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      className="text-black text-9xl"
    >
      Sam Port
    </h1>
  );
};

export default LandingSection;
