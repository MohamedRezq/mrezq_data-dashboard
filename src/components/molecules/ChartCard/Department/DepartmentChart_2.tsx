import React, { useEffect } from "react";
import Image from "next/image";
//-----> Utils <----------------------------------------------//
import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import {
  setDepartmentChart_2,
  setDepartmentChart_2_Interval,
} from "@/src/store/slices/dashboard";
//-----> Components <----------------------------------------------//
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
import { ChartMenu, Tooltip } from "@/src/components/atoms";
import CustomDropMenu from "@/src/components/atoms/Menu/CustomDropMenu";
//-----> Assets <----------------------------------------------//
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//
const DepartmentChart_2 = () => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const chartData = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_2
  );
  const chartInterval = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_2_Interval
  );
  const department = useSelector(
    (state: RootState) => state.dashboard.department.selectedDepartment
  );
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-chart-2`,
        {
          organizationId: localStorage.getItem("organizationId"),
          department: department,
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
  //     if (apiData !== undefined) dispatch(setDepartmentChart_2(apiData));
  //   });
  // }, []);
  //-------------------------------------------------------------------------//
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) dispatch(setDepartmentChart_2(apiData));
    });
  }, [chartInterval]);
  //-------------------------------------------------------------------------//
  return (
    <div
      className="col-span-1 rounded-2xl h-[239px] text-lightMineShaft w-full font-semibold"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        Budget Vs Spent
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
        className={`h-[208px]  px-7 bg-wildsand dark:bg-darkMineShaft text-white flex flex-col justify-between gap-y-1 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div>
          <div className="mt-3 mb-4 flex justify-between items-end">
            <div className="flex flex-col gap-y-1 text-[10px]">
              <div className="text-mineshaft dark:text-white">Total Budget</div>
              <div className="text-[20px] font-bold text-[#2C2C2C] opacity-90 dark:text-white ">
                $
                {Math.round(chartData[0].budget || 0)
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
                    options={["All Time", "Month", "Quarter", "Year"]}
                    selectedOption={chartInterval}
                    setterFunction={setDepartmentChart_2_Interval}
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
          <div
            className={`bg-alto relative w-full flex items-start h-16 rounded-[10px]`}
          >
            <div
              className={`bg-[#2ACB48] h-16 rounded-l-[10px] z-50`}
              style={{
                width: `${(chartData[0].spent / chartData[0].budget) * 100}%`,
              }}
            >
              <div className={`w-full h-full`}>
                <div className="group relative w-full h-full">
                  {<div className="h-full w-full hoverable z-50"></div>}
                  <span className="pointer-events-none dark:bg-bonjour font-bold dark:text-darkMineShaft bg-mineshaft bg-opacity-80 dark:bg-opacity-90 px-2 rounded-md py-1 text-white text-[10px] absolute -top-4 left-2 w-max opacity-0 transition-opacity group-hover:opacity-100">
                    {`$ ${Math.round(chartData[0].spent || 0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                  </span>
                </div>
              </div>
            </div>
            <div className={`w-full h-full`}>
              <div className="group relative w-full h-full">
                {<div className="h-full w-full hoverable z-50"></div>}
                <span className="pointer-events-none dark:bg-bonjour font-bold dark:text-darkMineShaft bg-mineshaft bg-opacity-80 dark:bg-opacity-90 px-2 rounded-md py-1 text-white text-[10px] absolute -top-4 left-2 w-max opacity-0 transition-opacity group-hover:opacity-100">
                  {`$ ${Math.round(chartData[0].budget - chartData[0].spent)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-mineshaft dark:text-white gap-x-5 text-xxs items-center">
          <div className="flex gap-x-2 items-center">
            <div className=" rounded-full w-2 h-2 bg-[#5EBF60]"></div>
            <div>Utilised</div>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className=" rounded-full w-2 h-2 bg-silverchalice"></div>
            <div>Left</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChart_2;
