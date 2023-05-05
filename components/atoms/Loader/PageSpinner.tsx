import React from "react";
import { TailSpin } from "react-loader-spinner";

const PageSpinner = () => {
  return (
    <TailSpin
      height="25"
      width="25"
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
