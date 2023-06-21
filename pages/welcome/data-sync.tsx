import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Bullets from "@/components/atoms/Paging/Bullets";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import SaasSyncCard from "@/components/molecules/SaasSyncCard.tsx/SaasSyncCard";
import Link from "next/link";
import { useRouter } from "next/router";
import WelcomeTemplate from "@/components/templates/WelcomeTemplate";

const DataSyncPage = () => {
  const selectedSaas = useSelector(
    (state: RootState) => state.saas.selectedList
  );
  const [loaderPercentage, setLoaderPercentage] = useState(0);
  const [nextActive, setNextActive] = useState(false);
  const router = useRouter();
  useEffect(() => {

    const interval = setInterval(() => {
      if (loaderPercentage === 100) {
        setNextActive(true);
        return;
      }
      setLoaderPercentage(loaderPercentage + 1);
    }, 150);
    return () => clearInterval(interval);
  }, [loaderPercentage]);
  return (
    <WelcomeTemplate>
      <div className="w-[90%] md:h-1/2 mt-16 overflow-y-auto px-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3 w-full">
            {selectedSaas.map((item, i) => (
              <SaasSyncCard
                logo={item.logo}
                key={`${item.title}-${i}`}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-wildsand w-[90vw] md:w-[335px] mt-12 flex items-center h-4 rounded-2xl">
        <div
          className={`bg-[#5EBF60] h-2 rounded-2xl m-1`}
          style={{ width: `${loaderPercentage}%` }}
        ></div>
      </div>
      <div className="flex gap-y-2 mt-10 items-center w-full px-10 sm:w-[410px] lg:w-[615px] justify-between">
        <Link href="/welcome/customize-access">
          <button className="bg-emerald hover:bg-hippiegreen rounded-xl px-6 py-3 text-white text-[10px] font-semibold`">
            Back
          </button>
        </Link>
        <div className="text-emperor text-[10px]">
          Your data is being synced...
        </div>
        <button
          className={`${
            nextActive
              ? "bg-emerald hover:bg-hippiegreen cursor-pointer"
              : "bg-alto cursor-progress"
          } rounded-xl px-6 py-3 text-white text-[10px] font-semibold`}
          onClick={(e) => {
            e.preventDefault();
            if (nextActive) {
              router.push("/welcome/all-set");
            }
          }}
        >
          Next
        </button>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center relative w-full justify-center px-16 mt-10">
        <div className="block mt-5 sm:mt-0 sm:absolute sm:left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
        <Bullets count={3} active={3} />
      </div>
    </WelcomeTemplate>
  );
};

export default DataSyncPage;
