import React, { useRef, useState, useEffect } from "react";
// import vid from "../../assets/work_gifs/CO1.mp4";
import { PlayCircle } from "react-feather";
const Video = ({ work, largeEnter, imageEnter, setLoading }) => {
  const video = useRef(null);
  const [videoswitch, setvideo] = useState(false);
  const handleVideo = () => {
    if (videoswitch) {
      video.current.pause();
      setvideo(false);
    } else {
      video.current.play();
      setvideo(true);
    }
  };
  return (
    <div className="w-full h-full relative">
      <video
        // onLoad={() => {
        //   console.log("loaded");
        //   setLoading(false);
        // }}
        className="md:h-screen relative w-full object-contain md:object-cover  bg-cover bg-no-repeat bg-center"
        alt="loading..."
        loop
        ref={video}
        onClick={(e) => e.target.play()}
      >
        <source
          onLoad={() => console.log("l")}
          src={work.video}
          type="video/mp4"
        />
      </video>
      <div
        class={`absolute bg-black  transition-opacity duration-300 w-full h-full top-0 left-0 ${
          videoswitch ? "opacity-0" : "opacity-50"
        }`}
      >
        <PlayCircle
          color="#FEFEFE"
          strokeWidth={1}
          onMouseEnter={largeEnter}
          onMouseLeave={imageEnter}
          onClick={handleVideo}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl  ${
            videoswitch && "hidden"
          } `}
          size={50}
        />
      </div>
    </div>

    // <img
    //   className="md:h-screen w-full object-contain md:object-cover  bg-cover bg-no-repeat bg-center"
    //   src={work.video}
    //   alt=""
    // />
  );
};

export default Video;
