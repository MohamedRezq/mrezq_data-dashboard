import React, { useEffect } from "react";

//-----> Actions <----------------------------------------------//

//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
//-----> Assets <----------------------------------------------//
import { BarChart, ChartMenu } from "@/src/components/atoms";
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import {
  setDepartmentChart_1,
  setDepartmentChart_1_Interval,
} from "@/src/store/slices/dashboard";
import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
import Image from "next/image";
import CustomDropMenu from "@/src/components/atoms/Menu/CustomDropMenu";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const DepartmentChart_1 = () => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const chartData = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_1
  );
  const chartInterval = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_1_Interval
  );
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-chart-1`,
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
      return undefined;
    }
  };
  //-------------------------------------------------------------------------//
  // useEffect(() => {
  //   fetchData().then((apiData) => {
  //     if (apiData !== undefined) dispatch(setDepartmentChart_1(apiData));
  //   });
  // }, []);
  //-------------------------------------------------------------------------//
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) dispatch(setDepartmentChart_1(apiData));
    });
  }, [chartInterval]);
  //-------------------------------------------------------------------------//
  return (
    <div
      className="col-span-1 rounded-2xl h-[239px] text-lightMineShaft font-bold w-full"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        License Wasted
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
        className={`h-[208px] px-7 bg-wildsand dark:bg-darkMineShaft text-white flex flex-col justify-between gap-y-1 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className="mt-3 mb-4 flex justify-between items-end">
          <div className="flex flex-col gap-y-1 text-[10px]">
            <div className="text-mineshaft dark:text-white">Total Wasted</div>
            <div className="text-[20px] font-bold text-[#2C2C2C] opacity-90 dark:text-white ">
              $
              {Math.round(chartData.value || 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <div className="flex w-24 justify-around items-center gap-x-2 text-xxs bg-bonjour rounded-[10px] px-5 py-[5px] text-mineshaft dark:text-white pr-6">
            <div className="text-center font-medium text-xxs w-16 dark:text-mineshaft">
              {chartInterval}
            </div>
            <Dropdown
              trigger={["click"]}
              overlay={
                <CustomDropMenu
                  options={["Month", "Quarter", "Year"]}
                  selectedOption={chartInterval}
                  setterFunction={setDepartmentChart_1_Interval}
                />
              }
              animation="slide-up"
            >
              <Image
                src={dropDown}
                alt="Menu"
                width={8}
                className="w-[8px] h-[4px] cursor-pointer"
              />
            </Dropdown>
          </div>
        </div>
        <BarChart
          chartSeries={chartData.chartSeries || []}
          xData={chartData.xData || []}
          barHeight={2}
        />
        <div className="flex text-mineshaft dark:text-white gap-x-5 mt-3 text-xxs items-center">
          <div className="flex gap-x-2 items-center">
            <div className=" rounded-full w-2 h-2 bg-[#5EBF60]"></div>
            <div>Utilised</div>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className=" rounded-full w-2 h-2 bg-silverchalice"></div>
            <div>Wasted</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChart_1;
