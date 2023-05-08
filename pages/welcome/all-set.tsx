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
import allSet from "../../public/assets/img/Loading_Animation.json";

const AllSetPage = () => {
  const saas = useSelector((state: RootState) => state.saas);
  const dispatch = useDispatch();

  return (
    <main className="flex w-full m-auto min-h-screen flex-col items-center pt-16 h-full bg-white">
      <div className="max-h-80 w-full px-10 sm:max-w-lg flex justify-center items-center gap-y-5 flex-col">
        <div>
          <img
            src="/assets/img/animation_500_lhaqq5rg.gif"
            alt="all set"
            className="w-60"
          />
          <div className="text-center text-mineshaft text-lg font-bold opacity-75">
            All Set! Hurray!
          </div>
        </div>
        <div className="flex flex-col-reverse gap-x-10 gap-y-3 sm:flex-row items-center justify-around mt-12">
          <Link href="/welcome/select-saas">
            <button className="bg-alto hover:bg-emperor rounded-xl px-8 py-3 text-emperor hover:text-white text-sm whitespace-nowrap font-medium">
              Add More Apps
            </button>
          </Link>
          <Link href="/dashboard">
            <button
              className={`bg-hippiegreen bg-opacity-95 hover:bg-opacity-100 rounded-xl px-8 py-3 text-white text-sm whitespace-nowrap font-medium`}
            >
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full"></div>
      <div className="flex flex-col-reverse md:flex-row items-center relative w-full justify-center px-16 mt-20">
        <div className="block mt-5 sm:mt-0 sm:absolute sm:left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
      </div>
    </main>
  );
};

export default AllSetPage;
