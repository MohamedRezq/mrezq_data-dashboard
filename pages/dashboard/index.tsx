import React, { useState, useEffect } from "react";
import Image from "next/image";
//-----> Actions <----------------------------------------------//
import { getUserData, syncUserData } from "@/src/actions/user";
//-----> Utils <----------------------------------------------//
import { dateFormatter } from "@/src/utils/dateFormatter";
import { quickbooksDefault } from "@/public/assets/json/quickbooksDefault";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { setPageLoading } from "@/src/store/slices/loading";
import { RootState } from "@/src/store";
import { setDashboardPeriod } from "@/src/store/slices/dashboardPeriod";
//-----> Components <----------------------------------------------//
import { DashboardTemplate } from "@/src/components/templates";
import { ChartCard, StatsCard } from "@/src/components/molecules";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { FiRefreshCcw } from "react-icons/fi";
//-----> Assets <----------------------------------------------//
import monthIcon from "@/public/assets/img/icons/month.svg";
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import { PageLoading } from "@/src/components/atoms";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

type UserIntegratedAppType = {
  application_id: string;
  organization_id: string;
  integration_status: string;
};

const Home = () => {
  //-------------------------------------------------------------------------//
  const periodsData = [
    "Last Month",
    "Last 3 Months",
    "Last 6 Months",
    "Last Year",
    "Last 5 Years",
  ];
  //-------------------------------------------------------------------------//
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading.isLoading);
  //-------------------------------------------------------------------------//
  const date = dateFormatter();
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const [financialDashboardData, setFinancialDashboardData] = useState(
    quickbooksDefault()
  );
  const [selectedMonth, setSelectedMonth] = useState("Last Month");
  const [fetchError, setFetchError] = useState(false);
  const [syncTime, setSyncTime] = useState(null);
  //-------------------------------------------------------------------------//
  const periods = periodsData;
  //-------------------------------------------------------------------------//
  const currentDashboardPeriod = useSelector(
    (state: RootState) => state.dashboardPeriod.currentPeriod
  );
  //-------------------------------------------------------------------------//
  useEffect(() => {}, [loading]);

  useEffect(() => {
    dispatch(setPageLoading(true));
    const userIntegratedAppsIds = user.info.applications
      .filter(
        (app: UserIntegratedAppType) => app.integration_status === "active"
      )
      .map((app: UserIntegratedAppType) => app.application_id);
    getUserData(userIntegratedAppsIds).then((res: any) => {
      setSyncTime(res.syncTime);
      res.appData.forEach((appData: any, appId: number) => {
        if (appData) {
          switch (appId) {
            case 1:
              setFinancialDashboardData(appData);
              break;
            case 2:
              setFinancialDashboardData(appData);
              break;
            default:
              break;
          }
        }
      });
    });
    // .then((response) => {
    //   if (response && response.status === 200) setDashboardData(response.data);
    //   else setFetchError(true);
    // });
    dispatch(setPageLoading(false));
  }, []);
  //-------------------------------------------------------------------------//

  const handleSyncUserData = async () => {
    dispatch(setPageLoading(true));
    const userIntegratedAppsIds = user.info.applications
      .filter(
        (app: UserIntegratedAppType, i: number) =>
          app.integration_status === "active"
      )
      .map((app: UserIntegratedAppType) => app.application_id);
    syncUserData(userIntegratedAppsIds).then((res: any) => {
      setSyncTime(res.syncTime);
      res.appData.forEach((appData: any, appId: number) => {
        if (appData) {
          switch (appId) {
            case 1:
              setFinancialDashboardData(appData);
              break;
            case 2:
              setFinancialDashboardData(appData);
              break;
            default:
              break;
          }
        }
      });
    });
    dispatch(setPageLoading(false));
    // .then((response) => {
    //   if (response && response.status === 200) setDashboardData(response.data);
    //   else setFetchError(true);
    // });
  };

  const menu = (
    <Menu
      className=" p-5"
      onSelect={(e) => {
        setSelectedMonth(e.key);
        dispatch(
          setDashboardPeriod(
            periodsData.findIndex((period) => period === e.key)
          )
        );
      }}
    >
      {periodsData.map((item, i) => (
        <MenuItem
          key={`${item}`}
          className=" text-xs font-semibold hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer"
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );

  // 0 --> Last Month
  // 1 --> Last 3 Months
  // 2 --> Last 6 Months
  // 3 --> Last Year
  // 4 --> Last 5 Years
  return (
    <DashboardTemplate date={date} periods={periods}>
      <>
        <div className="flex items-center justify-between w-full">
          <div className="flex w-44 justify-around items-center gap-x-2 text-sm bg-bonjour rounded-[15px] px-5 py-2 text-mineshaft pr-6">
            <Image src={monthIcon} alt="calendar" />
            <div className="text-center font-medium text-sm w-40">
              {selectedMonth}
            </div>
            <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
              <Image
                src={dropDown}
                alt="Menu"
                className="w-[10px] h-[6px] cursor-pointer"
              />
            </Dropdown>
          </div>
          <div className="flex gap-x-2 items-end">
            <div className="text-xs text-gray-500">
              Last Synced: {`${dateFormatter(syncTime)}`}
            </div>
            <div
              onClick={handleSyncUserData}
              className="flex items-center justify-center bg-hippiegreen cursor-pointer text-white hover:bg-seagreen shadow-sm shadow-gray-500 p-2 rounded-lg"
            >
              <FiRefreshCcw size={10} />
            </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {financialDashboardData[currentDashboardPeriod].statsCards.map(
                (item: any, i: number) => (
                  <StatsCard
                    key={`${item.title}-${item.value}-${i}`}
                    title={item.title}
                    value={
                      i === 2
                        ? item.value >= 1000
                          ? `$${Math.round(item.value / 1000)}k`
                          : `$${item.value}`
                        : item.value
                    }
                    valueType={item.valueType}
                    subValues={item.subValues}
                  />
                )
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3">
              {financialDashboardData[currentDashboardPeriod].chartsData.map(
                (item: any, i: number) => (
                  <div
                    key={`${item.title}-${item.value}-${i}`}
                    className={`${
                      i % 2 === 0 ? "col-span-2" : "col-span-1"
                    } mb-10 w-full`}
                  >
                    <ChartCard
                      title={item.title}
                      subTitle={item.subTitle}
                      value={item.value}
                      subValues={item.subValues}
                      chartType={item.chartType}
                      chartSeries={item.chartSeries}
                      xData={item.xData}
                    />
                  </div>
                )
              )}
            </div>
          </>
        )}
      </>
    </DashboardTemplate>
  );
};

export default Home;
