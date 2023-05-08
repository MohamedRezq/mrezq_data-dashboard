import SearchInput from "@/components/atoms/Input/SearchInput";
import SaasCard from "@/components/molecules/SaasCard/SaasCard";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Bullets from "@/components/atoms/Paging/Bullets";
import saas from "../../public/assets/json/saas.json";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { searchByText } from "@/redux/features/saas/saasSlice";
import SaasAccordion from "@/components/molecules/Accordion/SaasAccordion";
import Link from "next/link";

const CustomizeAccessPage = () => {
  const selectedSaas = useSelector(
    (state: RootState) => state.saas.selectedList
  );
  const dispatch = useDispatch();

  return (
    <main className="flex w-full m-auto min-h-screen flex-col items-center pt-16 h-full">
      <div className="max-h-80 w-full px-10 sm:max-w-lg flex gap-y-5 flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-emerald scrollbar-track-alto">
        {selectedSaas.map((item, i) => (
          <SaasAccordion
            key={`${item.title}-${i}`}
            logo={item.logo}
            title={item.title}
            text={item.text}
          />
        ))}
        
      </div>
      <div className="flex sm:max-w-lg flex-col-reverse gap-y-3 sm:flex-row items-center justify-between w-full mt-12">
          <Link href='/welcome/select-saas'>
          <button
              className={`bg-emerald hover:bg-hippiegreen rounded-xl px-6 py-3 text-white text-[10px] font-semibold`}
            >
              Back
            </button>
          </Link>
          <div className="text-emperor text-[10px]">Customize your access</div>
          <Link href="/welcome/data-sync">
          <button
              className={`bg-emerald hover:bg-hippiegreen rounded-xl px-6 py-3 text-white text-[10px] font-semibold`}
            >
              Next
            </button>
          </Link>
        </div>
      <div className="w-full"></div>
      <div className="flex flex-col-reverse md:flex-row items-center relative w-full justify-center px-16 mt-10">
        <div className="block mt-5 sm:mt-0 sm:absolute sm:left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
        <Bullets count={3} active={2} />
      </div>
    </main>
  );
};

export default CustomizeAccessPage;
