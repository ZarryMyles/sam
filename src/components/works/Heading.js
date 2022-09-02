import React from "react";

const Heading = ({ text }) => {
  return (
    <div class="flex items-center mb-10 col-span-12">
      <div
        style={{
          height: "1px",
          width: "72px",
        }}
        class="bg-brand-gray w-28 mr-4"
      />
      <div class="  tracking-2 text-brand-gray uppercase font-lato-med text-base ">
        {text}
      </div>
    </div>
  );
};

export default Heading;
