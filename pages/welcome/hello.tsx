import React from "react";
import {BsArrowRight} from 'react-icons/bs';

const HelloPage = () => {
  return (
    <main className="flex max-w-md m-auto min-h-screen flex-col items-center justify-between py-16 h-full">
      <div></div>
      <div className="text-7xl text-emperor">Hello !</div>
      <div className="text-lg text-silverchalice py-10">www.alphasaas.io</div>
      <a href='/auth/login' className="absolute bottom-40 bg-opacity-90 hover:bg-opacity-100 cursor-pointer right-40 bg-hippiegreen text-white text-xl hover:text-2xl rounded-full p-4"><BsArrowRight /></a>
    </main>
  );
};

export default HelloPage;
