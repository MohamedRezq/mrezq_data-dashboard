import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
//-----> Components <-----------------------------------------//
import { OnboardingTemplate } from "@/src/components/templates";
import { Bullets, SearchInput } from "@/src/components/atoms";
import { SaasCard } from "@/src/components/molecules";
//-----> Redux <----------------------------------------------//
import type { RootState } from "@/src/store";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedList } from "@/src/store/slices/saas";
import { setPageLoading } from "@/src/store/slices/loading";
//-----> Assets <---------------------------------------------//
import logo from "@/public/assets/img/AlphaS wordmark.svg";
//------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//------------------------------------------------------------//

type SaasCardProps = {
  logo: string;
  title: string;
  text?: string;
  active?: boolean;
  connected?: boolean;
  app_id: string;
};

const SelectSaasPage = () => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  const saasIntegrationList = useSelector(
    (state: RootState) => state.saas.saasList
  );
  //-------------------------------------------------------------------------//
  useEffect(() => {
    dispatch(clearSelectedList());
    dispatch(setPageLoading(false));
  }, []);
  //-------------------------------------------------------------------------//
  return (
    <OnboardingTemplate>
      <SearchInput />
      <div className="w-[90%] md:h-1/2 mt-16 overflow-y-auto px-10">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {saasIntegrationList?.map((item: SaasCardProps, i: number) => (
              <SaasCard
                logo={item.logo}
                key={`${item.title}-${i}`}
                title={item.title}
                text={item.text}
                active={item.active}
                app_id={item.app_id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-y-2 mt-16 items-center w-full px-10 sm:w-[410px] lg:w-[615px] justify-between">
        <button
          disabled
          className="bg-alto rounded-xl px-6 py-3 text-white text-[10px] font-semibold"
        >
          Back
        </button>
        <div className="text-emperor text-[10px]">Select your Saas</div>
        <Link href="/welcome/customize-access">
          <button
            className={`bg-emerald hover:bg-hippiegreen rounded-xl px-6 py-3 text-white text-[10px] font-semibold`}
          >
            Next
          </button>
        </Link>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center relative w-full justify-center px-16 mt-10">
        <div className="block mt-5 sm:mt-0 sm:absolute sm:left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
        <Bullets count={3} active={1} />
      </div>
    </OnboardingTemplate>
  );
};

export default SelectSaasPage;
