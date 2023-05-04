import SearchInput from "@/components/atoms/Input/SearchInput";
import SaasCard from "@/components/molecules/SaasCard/SaasCard";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Bullets from "@/components/atoms/Paging/Bullets";
import saas from "../../public/assets/json/saas.json";
import type { RootState } from "@/app/store";
import { useSelector, useDispatch } from "react-redux";
import { searchByText } from "@/app/features/saas/saasSlice";

const SelectSaasPage = () => {
  const saasList = useSelector((state: RootState) => state.saas.saasList);
//  const dispatch = useDispatch();

  return (
    <main className="flex w-full m-auto min-h-screen flex-col items-center pt-16 h-full">
      <SearchInput onChange={() => searchByText("dcdc")} />
      <div className="min-w-xl">
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 mt-8">
          {saasList.map((item, i) => (
            <SaasCard
              logo={item.logo}
              key={`${item.title}-${i}`}
              title={item.title}
              text={item.text}
              active={item.active}
              checked={item.checked}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-12">
          <button className="bg-alto hover:bg-emperor rounded-xl px-5 py-2 text-white text-lg">
            Back
          </button>
          <div className="text-emperor">Select your Saas</div>
          <button
            className={`bg-emerald hover:bg-hippiegreen rounded-xl px-5 py-2 text-white text-lg`}
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex items-center relative w-full justify-center px-16 mt-10">
        <div className="absolute left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
        <Bullets count={3} active={1} />
      </div>
    </main>
  );
};

export default SelectSaasPage;
