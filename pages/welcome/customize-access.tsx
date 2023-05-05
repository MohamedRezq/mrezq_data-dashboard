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

const CustomizeAccessPage = () => {
  const saas = useSelector((state: RootState) => state.saas);
  const dispatch = useDispatch();

  return (
    <main className="flex w-full m-auto min-h-screen flex-col items-center pt-16 h-full">
      <div className="max-h-80 w-full px-10 sm:max-w-lg flex gap-y-5 flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-emerald scrollbar-track-alto">
        <SaasAccordion
          logo="/assets/img/FreshBooks_logo_(2020).svg"
          title="Fresh Books"
          text="It is a web-based software as a service model, that can be
              accessed through a desktop or mobile device."
        />
        <SaasAccordion
          logo="/assets/img/Intuit_QuickBooks_logo.svg"
          title="Quick Books"
          text="It is a web-based software as a service model, that can be
              accessed through a desktop or mobile device."
        />
        <SaasAccordion
          logo="/assets/img/zoho-books.png"
          title="Zoho Books"
          text="It is a web-based software as a service model, that can be
              accessed through a desktop or mobile device."
        />
      </div>

      <div className="w-full">
        <div className="flex flex-col-reverse gap-y-3 sm:flex-row items-center justify-around mt-12">
          <button className="bg-alto hover:bg-emperor rounded-xl px-5 py-2 text-white text-lg">
            Back
          </button>
          <div className="text-emperor mx-10">Customize your access</div>
          <button
            className={`bg-emerald hover:bg-hippiegreen rounded-xl px-5 py-2 text-white text-lg`}
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center relative w-full justify-center px-16 mt-10">
        <div className="block mt-5 sm:mt-0 sm:absolute sm:left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
        <Bullets count={3} active={1} />
      </div>
    </main>
  );
};

export default CustomizeAccessPage;
