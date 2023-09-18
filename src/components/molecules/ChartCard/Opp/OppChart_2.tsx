import React, { useEffect } from "react";
import Image from "next/image";
//-----> Utils <----------------------------------------------//
import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import {
  setDepartmentChart_6_Interval,
  setDepartmentChart_6,
} from "@/src/store/slices/dashboard";
//-----> Components <----------------------------------------------//
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
import { ChartMenu, ColChart } from "@/src/components/atoms";
import CustomDropMenu from "@/src/components/atoms/Menu/CustomDropMenu";
//-----> Assets <----------------------------------------------//
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------//
type OppChart_2_Props = {
  // department: string;
};
//----------------------------------------------------------------------------------//
const OppChart_2 = (props: OppChart_2_Props) => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const chartData = useSelector(
    (state: RootState) => state.dashboard.home.homeChart_3
  );
  const chartInterval = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_6_Interval
  );
  const department = useSelector(
    (state: RootState) => state.dashboard.department.selectedDepartment
  );
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-chart-6`,
        {
          organizationId: localStorage.getItem("organizationId"),
          department: department,
          interval: "Month",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("rx data chart 6: ", res.data);
      return res.data;
    } catch (error: any | null) {
      // console.log(error);
      return undefined;
    }
  };
  //-------------------------------------------------------------------------//
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) dispatch(setDepartmentChart_6(apiData));
    });
  }, []);
  //-------------------------------------------------------------------------//
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) dispatch(setDepartmentChart_6(apiData));
    });
  }, [chartInterval, department]);
  //-------------------------------------------------------------------------//
  return (
    <div
      className="col-span-2 rounded-2xl h-fit lg:h-[300px] text-[#2B2B2B] font-semibold w-full"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        Budget Vs. Spend
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
        className={`lg:h-[270px]  h-fit  px-7 bg-wildsand dark:bg-darkMineShaft dark:text-white flex flex-col justify-between gap-y-1 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className=" flex justify-between items-end">
          <div className="flex flex-col text-[10px]">
            <div className=" text-mineshaft dark:text-white">
              Total Spent - Monthly
            </div>
            <div className="text-[20px] font-extrabold text-[#2C2C2C] dark:text-white opacity-90">
              <span className="text-[#509051]">$10,000</span>/
              <span className="text-[#FF6C6C]">$12,000</span>
            </div>
          </div>
          <div className="flex gap-x-3">
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
                    setterFunction={setDepartmentChart_6_Interval}
                  />
                }
                animation="slide-up"
              >
                <Image
                  src={dropDown}
                  alt="Menu"
                  className="w-[8px] h-[4px] cursor-pointer"
                />
              </Dropdown>
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
                    setterFunction={setDepartmentChart_6_Interval}
                  />
                }
                animation="slide-up"
              >
                <Image
                  src={dropDown}
                  alt="Menu"
                  className="w-[8px] h-[4px] cursor-pointer"
                />
              </Dropdown>
            </div>
            <div className="flex w-24 justify-around items-center gap-x-2 text-xxs bg-bonjour rounded-[10px] px-5 py-[5px] text-mineshaft dark:text-white pr-6">
              <div className="text-center font-medium text-xxs w-16 dark:text-mineshaft">
                {chartInterval}
              </div>
              <Dropdown
                trigger={["click"]}
                overlay={
                  <CustomDropMenu
                    options={[
                      "Organisation 1",
                      "Organisation 2",
                      "Organisation 3",
                    ]}
                    selectedOption={"Organisation"}
                    setterFunction={setDepartmentChart_6_Interval}
                  />
                }
                animation="slide-up"
              >
                <Image
                  src={dropDown}
                  alt="Menu"
                  className="w-[8px] h-[4px] cursor-pointer"
                />
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="dark:bg-midMineShaft h-full w-full py-3 px-2 rounded-[15px]">
          <ColChart
            chartSeries={chartData.chartSeries}
            xData={chartData.xData}
            colors={["#AAAAFF", "#FF6C6C"]}
            showLegend={false}
          />
        </div>
      </div>
    </div>
  );
};

export default OppChart_2;
