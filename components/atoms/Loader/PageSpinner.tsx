import React from "react";
import { TailSpin } from "react-loader-spinner";

const PageSpinner = () => {
  return (
    <TailSpin
      height="20"
      width="40px"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default PageSpinner;
