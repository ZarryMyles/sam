import React, { useState, useEffect } from "react";

const Loader = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex loaderDiv z-10 text-brand-white flex-col p-6 justify-center text- items-center bg-brand-darkGrey w-screen h-screen">
      <div className="font-lato-light text-4xl mb-8">Shradha</div>
      <div className="w-full h-auto flex justify-center items-center">
        <div
          className="bg-brand-loaderGray hidden md:block"
          style={{ width: "300px", height: "0.5px", borderRadius: "1px" }}
        >
          <div
            className="loaderLine bg-brand-gray"
            style={{
              height: "1.5px",
              borderRadius: "10px",
            }}
          ></div>
        </div>
        <div
          className="bg-gray-400 md:hidden"
          style={{ width: "200px", height: "0.5px", borderRadius: "1px" }}
        >
          <div
            className="loaderLine bg-brand-gray"
            style={{
              height: "1.5px",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
