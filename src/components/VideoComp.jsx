"use client";
import React from "react";
import ReactPlayer from "react-player";
const VideoComp = ({ source }) => {
  return (
    <ReactPlayer
      url={source}
      width="auto"
      height={700}
      suppressHydrationWarning
    />
  );
};

export default VideoComp;
