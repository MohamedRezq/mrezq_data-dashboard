import React from "react";
import { BallTriangle, ThreeDots } from "react-loader-spinner";

const PageLoading = () => {
  return (
    <div className="absolute top-0 left-0 bg-opacity-50 bg-slate-100 w-full h-full flex items-center justify-center">
      <ThreeDots
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default PageLoading;
