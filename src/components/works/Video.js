import React from "react";

const Video = ({ work }) => {
  return (
    <img
      className="md:h-screen w-full object-contain md:object-cover  bg-cover bg-no-repeat bg-center"
      src={
        "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/render_s6dzdu.gif"
      }
      alt="loading..."
    />
  );
};

export default Video;
