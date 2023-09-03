import React, { useState, useEffect } from "react";
import Image from "next/image";
//-----> Actions <----------------------------------------------//
//-----> Utils <----------------------------------------------//
import { dateFormatter } from "@/src/utils/dateFormatter";
import httpServices from "@/src/utils/httpServices";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import { DashboardTemplate } from "@/src/components/templates";
import {
  HomeChart_3,
  HomeChart_1,
  HomeChart_2,
  StatsCard,
} from "@/src/components/molecules";
import Dropdown from "rc-dropdown";
//-----> Assets <----------------------------------------------//
import monthIcon from "@/public/assets/img/icons/month.svg";
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import { PageLoading } from "@/src/components/atoms";
import { setHomeInterval, setHomeStats } from "@/src/store/slices/dashboard";
import { App_Config } from "@/config";
import CustomDropMenu from "@/src/components/atoms/Menu/CustomDropMenu";
import { syncUserData } from "@/src/actions";
import { roundNumbers } from "@/src/utils/roundNumbers";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const Home = () => {
  //-------------------------------------------------------------------------//
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading.isLoading);
  const statsData = useSelector(
    (state: RootState) => state.dashboard.home.homeStats
  );
  const homeInterval = useSelector(
    (state: RootState) => state.dashboard.home.mainInterval
  );
  //-------------------------------------------------------------------------//
  const date = dateFormatter();
  //-------------------------------------------------------------------------//
  const [fetchError, setFetchError] = useState(false);
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/home/get-home-stats`,
        {
          organizationId: localStorage.getItem("organizationId"),
          fromDate: new Date(
            new Date().getFullYear() - 1,
            new Date().getMonth(),
            new Date().getDate()
          ).toISOString(),
          toDate: new Date().toISOString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error: any | null) {
      // console.log(error);
      setFetchError(true);
      return undefined;
    }
  };
  //-------------------------------------------------------------------------//
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) dispatch(setHomeStats(apiData));
    });
  }, []);

  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  return (
    <DashboardTemplate
      headerTitle={`Good ${
        new Date().getHours() >= 12 ? "Evening" : "Morning"
      }, ${user.info.firstName}!`}
      date={date}
    >
      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex justify-between">
          <div className="flex w-44 justify-around items-center gap-x-2 text-sm bg-bonjour rounded-[15px] px-5 py-2 text-mineshaft dark:text-white pr-6">
            <Image src={monthIcon} alt="calendar" />
            <div className="text-center font-medium text-sm w-40 text-mineshaft">
              {homeInterval}
            </div>
            <Dropdown
              trigger={["click"]}
              overlay={
                <CustomDropMenu
                  selectedOption={homeInterval}
                  options={["Month", "Quarter", "Year"]}
                  setterFunction={setHomeInterval}
                />
              }
              animation="slide-up"
            >
              <Image
                src={dropDown}
                alt="Menu"
                className="w-[10px] h-[6px] cursor-pointer"
              />
            </Dropdown>
          </div>
          <div
            onClick={() => {
              const appIds = user?.info?.applications?.map(
                (app: any) => app.application_id
              );
              syncUserData(appIds);
            }}
            className=" cursor-pointer hover:underline"
          >
            Sync
          </div>
        </div>

        {fetchError && (
          <div className="w-full my-3 flex text-center items-center justify-center text-xs text-red-500">
            Error connecting to Alpha Saas. Please reload the page !
          </div>
        )}
        {loading ? (
          <PageLoading />
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {statsData.map((item: any, i: number) => (
                <StatsCard
                  key={`${item.title}-${item.value}-${i}`}
                  title={item.title}
                  value={
                    i === 2
                      ? item.value >= 1000
                        ? `$${roundNumbers(item?.value)}`
                        : `$${item.value}`
                      : item.value
                  }
                  valueType={item.valueType}
                  subValues={item.subValues}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3">
              <HomeChart_1 />
              <HomeChart_2 />
              <HomeChart_3 />
            </div>
          </>
        )}
      </div>
    </DashboardTemplate>
  );
};

export default Home;
