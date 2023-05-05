import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Bullets from "@/components/atoms/Paging/Bullets";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import SaasSyncCard from "@/components/molecules/SaasSyncCard.tsx/SaasSyncCard";

const DataSyncPage = () => {
  const saasList = useSelector((state: RootState) => state.saas.saasList);
  const [loaderPercentage, setLoaderPercentage] = useState(0);
  
  useEffect(() => {}, []);

  return (
    <main className="flex w-full m-auto min-h-screen flex-col items-center min-w-xl pt-16 h-full">
      <div className="min-w-xl">
        <div className="grid grid-cols-1 gap-x-10 gap-y-5 mt-8 max-h-80 overflow-y-auto px-10 scrollbar-thin scrollbar-thumb-emerald scrollbar-track-alto">
          {saasList.map((item, i) => (
            <SaasSyncCard
              logo={item.logo}
              key={`${item.title}-${i}`}
              title={item.title}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-12">
          <button className="bg-alto hover:bg-emperor rounded-xl px-5 py-2 text-white text-lg">
            Back
          </button>
          <div className="text-emperor">Your data is being synced</div>
          <button
            className={`bg-emerald hover:bg-hippiegreen rounded-xl px-5 py-2 text-white text-lg`}
          >
            Next
          </button>
        </div>
        <div className="bg-alto my-5 relative h-2 w-full rounded-2xl">
          <div
            className={`bg-hippiegreen absolute top-0 left-0 h-full w-[${loaderPercentage}%] rounded-2xl`}
          ></div>
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

export default DataSyncPage;
