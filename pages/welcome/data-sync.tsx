import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Bullets from "@/components/atoms/Paging/Bullets";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import SaasSyncCard from "@/components/molecules/SaasSyncCard.tsx/SaasSyncCard";
import Link from "next/link";
import { useRouter } from "next/router";

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
    <main className="flex w-full m-auto min-h-screen flex-col items-center min-w-xl pt-16 h-full">
      <div className="min-w-xl">
        <div className="grid grid-cols-1 gap-x-10 gap-y-5 mt-8 max-h-80 overflow-y-auto px-10 scrollbar-thin scrollbar-thumb-emerald scrollbar-track-alto">
          {selectedSaas.map((item, i) => (
            <SaasSyncCard
              logo={item.logo}
              key={`${item.title}-${i}`}
              title={item.title}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-12">
          <Link href="/welcome/customize-access">
            <button className="bg-emerald hover:bg-hippiegreen rounded-xl px-6 py-3 text-white text-[10px] font-semibold`">
              Back
            </button>
          </Link>
          <div className="text-emperor text-[10px]">Your data is being synced</div>
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
        <div className="bg-alto my-5 relative h-2 w-full rounded-2xl">
          <div
            className={`bg-hippiegreen absolute top-0 left-0 h-full rounded-2xl`}
            style={{ width: `${loaderPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center relative w-full justify-center px-16 mt-10">
        <div className="block mt-5 sm:mt-0 sm:absolute sm:left-20">
          <Image src={logo} alt="Alpha" height={20} />
        </div>
        <Bullets count={3} active={3} />
      </div>
    </main>
  );
};

export default DataSyncPage;
