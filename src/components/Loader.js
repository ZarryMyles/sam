import React, { useState, useEffect } from "react";

const Loader = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex z-10 flex-col p-6 justify-center text-white items-center bg-brand-darkGrey w-screen h-screen">
      <div className="font-lato-light text-4xl mb-4">Shradha</div>
      <div className="w-full h-auto flex justify-center items-center">
        <div
          className="bg-gray-600"
          style={{ width: "25%", height: "0.5px", borderRadius: "1px" }}
        >
          <div
            className="bg-white loaderLine"
            style={{ height: "1.5px", borderRadius: "10px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
