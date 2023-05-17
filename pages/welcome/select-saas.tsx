import SearchInput from "@/components/atoms/Input/SearchInput";
import SaasCard from "@/components/molecules/SaasCard/SaasCard";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Bullets from "@/components/atoms/Paging/Bullets";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import WelcomeTemplate from "@/components/templates/WelcomeTemplate";

const SelectSaasPage = () => {
  const saasList = useSelector((state: RootState) => state.saas.saasList);

  return (
    <WelcomeTemplate>
      <SearchInput />
      <div className="min-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mt-8 overflow-y-auto px-10 scrollbar-thin scrollbar-thumb-emerald scrollbar-track-alto">
          {saasList.map((item, i) => (
            <SaasCard
              logo={item.logo}
              key={`${item.title}-${i}`}
              title={item.title}
              text={item.text}
              active={item.active}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-12">
          <button
            disabled
            className="bg-alto rounded-xl px-6 py-3 text-white text-[10px] font-semibold"
          >
            Back
          </button>
          <div className="text-emperor">Select your Saas</div>
          <Link href="/welcome/customize-access">
            <button
              className={`bg-emerald hover:bg-hippiegreen rounded-xl px-6 py-3 text-white text-[10px] font-semibold`}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center relative w-full justify-center px-16 mt-10">
        <div className="block mt-5 sm:mt-0 sm:absolute sm:left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
        <Bullets count={3} active={1} />
      </div>
    </WelcomeTemplate>
  );
};

export default SelectSaasPage;
