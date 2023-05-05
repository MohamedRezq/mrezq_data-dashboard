import React from "react";
import { ProgressBar } from "react-loader-spinner";

const ProgressLoader = () => {
  return (
    <ProgressBar
      height="80"
      width="96"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  );
};

export default ProgressLoader;
