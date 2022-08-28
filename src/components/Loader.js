import React, { useState, useEffect } from "react";

const Loader = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex z-10 flex-col p-6 justify-center text-white items-center bg-brand-darkGrey w-screen h-screen">
      <div className="font-lato-light text-5xl">Shradha</div>
      <div>progress</div>
    </div>
  );
};

export default Loader;
