import React from "react";
// import vid from "../../assets/work_gifs/CO1.mp4";

const Video = ({ work }) => {
  return (
    <video
      className="md:h-screen w-full object-contain md:object-cover  bg-cover bg-no-repeat bg-center"
      alt="loading..."
    >
      <source
        src={
          "https://res.cloudinary.com/genesiscloudimages/video/upload/v1660394170/work_gifs/C01_yqtldj.mp4"
        }
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
