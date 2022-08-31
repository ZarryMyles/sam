import React from "react";
// import vid from "../../assets/work_gifs/CO1.mp4";

const Video = ({ work }) => {
  return (
    <video
      className="md:h-screen w-full object-contain md:object-cover  bg-cover bg-no-repeat bg-center"
      alt="loading..."
      loop
      autoPlay
      muted
    >
      <source src={work.video} type="video/mp4" />
    </video>
    // <img
    //   className="md:h-screen w-full object-contain md:object-cover  bg-cover bg-no-repeat bg-center"
    //   src={work.video}
    //   alt=""
    // />
  );
};

export default Video;
