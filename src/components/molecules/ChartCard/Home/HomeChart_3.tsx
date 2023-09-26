import React, { useEffect, useState } from "react";
//-----> Actions <----------------------------------------------//

//-----> Utils <----------------------------------------------//
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
//-----> Assets <----------------------------------------------//
import { ChartMenu, ColChart } from "@/src/components/atoms";
import { setHomeChart_3 } from "@/src/store/slices/dashboard";
import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
import { roundNumbers } from "@/src/utils/roundNumbers";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const HomeChart_3 = () => {
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const chartData = useSelector(
    (state: RootState) => state.dashboard.home.homeChart_3
  );
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/home/get-home-chart-3`,
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
      console.log("chart 3: ", res.data);
      return res.data;
    } catch (error: any | null) {
      // console.log(error);
      return undefined;
    }
  };
  //-------------------------------------------------------------------------//
  // useEffect(() => {
  //   fetchData().then((apiData) => {
  //     if (apiData !== undefined) dispatch(setHomeChart_3(apiData));
  //   });
  // }, []);

  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  return (
    <div
      className="col-span-2 rounded-2xl h-fit lg:h-[239px] mb-5 text-lightMineShaft w-full font-semibold"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        License Summary
        <Dropdown
          trigger={["click"]}
          overlay={ChartMenu}
          animation="slide-up"
          placement="bottomLeft"
        >
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </div>
      <div
        className={`lg:h-[210px]  h-fit  px-7 gap-x-5 bg-wildsand dark:bg-darkMineShaft dark:text-white  flex flex-col md:flex-row gap-y-1 whitespace-nowrap pt-2 pb-3 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className="flex flex-col mt-5 text-[10px]">
          <div>Total Wasted Value</div>
          <div className="text-[20px] font-bold text-mineshaft dark:text-white opacity-80 mt-1 mb-5">
            $
            {Math.round(chartData.value || 0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          {chartData.subValues?.map((item: any, i: number) => (
            <div
              key={`${item.subValue}-${i}`}
              className="flex items-center gap-x-4 ml-1 text-[10px] font-medium"
            >
              <div className="font-bold w-7">
                ${roundNumbers(item?.subValue)}
              </div>
              <div className="text-grayish font-medium dark:text-white">
                {item?.subTitle?.length > 15
                  ? `${item.subTitle.slice(0, 15)}...`
                  : item.subTitle}
              </div>
            </div>
          ))}
        </div>
        <div className="dark:bg-midMineShaft h-full w-full py-3 px-2 rounded-[15px]">
          <ColChart
            chartSeries={chartData.chartSeries}
            xData={chartData.xData}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeChart_3;
