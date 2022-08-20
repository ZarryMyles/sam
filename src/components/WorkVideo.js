import React from "react";
import ReactPlayer from "react-player";
// So basically these gifs are not continuously looped, have short duration and won't be pleasing if we add it in the gif format.
// In this case,
// Can we just make these gifs play once? (Only gif 3 and 4)
const WorkVideo = ({ url, active }) => {
  return <ReactPlayer playing={active} url={url} />;
};

export default WorkVideo;
