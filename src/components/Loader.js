import React from "react";

const Loader = () => {
  return (
    <div className="flex loaderDiv z-10 text-brand-white flex-col p-6 justify-center text- items-center bg-brand-darkGrey w-screen h-screen">
      <div className="font-lato-light font-light md:text-4xl text-2xl mb-6 md:mb-8">
        Shradha
      </div>
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
          style={{ width: "160px", height: "0.5px", borderRadius: "1px" }}
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
