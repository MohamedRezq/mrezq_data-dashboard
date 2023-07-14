import React, { useState, useEffect } from "react";
import Link from "next/link";
//-----> Actions <----------------------------------------------//

//-----> Utils <----------------------------------------------//
import { dateFormatter } from "@/src/utils/dateFormatter";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import { DashboardTemplate } from "@/src/components/templates";
import { SaasCard } from "@/src/components/molecules";
import { SearchInput } from "@/src/components/atoms";
//-----> Assets <----------------------------------------------//

//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

// type UserIntegratedAppType = {
//   application_id: string;
//   organization_id: string;
//   integration_status: string;
// };

type SaasCardProps = {
  logo: string;
  title: string;
  text?: string;
  active?: boolean;
  connected?: boolean;
  app_id: string;
};

const DashboardIntegrations = () => {
  //   //-------------------------------------------------------------------------//
  const periods = [
    "Last Month",
    "Last 3 Months",
    "Last 6 Months",
    "Last Year",
    "Last 5 Years",
  ];
  const user = useSelector((state: RootState) => state.user);
  const date = dateFormatter();

  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  const saasIntegrationList = useSelector(
    (state: RootState) => state.saas.saasList
  );
  return (
    <DashboardTemplate date={date} periods={periods}>
      <div className="flex flex-col justify-center items-center">
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
      </div>
    </DashboardTemplate>
  );
};

export default DashboardIntegrations;
