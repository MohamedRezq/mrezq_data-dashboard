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
import { BubbleChart, ChartMenu } from "@/src/components/atoms";
import CustomDropMenu from "@/src/components/atoms/Menu/CustomDropMenu";
//-----> Assets <----------------------------------------------//
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import SimpleBubbleChart from "@/src/components/atoms/Charts/BubbleChart";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const OppChart_3 = () => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  // const chartData = useSelector(
  //   (state: RootState) => state.dashboard.department.departmentChart_2
  // );
  const chartInterval = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_2_Interval
  );
  //-------------------------------------------------------------------------//
  // const fetchData = async () => {
  //   try {
  //     const res = await httpServices.post(
  //       `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-chart-2`,
  //       {
  //         organizationId: localStorage.getItem("organizationId"),
  //         fromDate: new Date(
  //           new Date().getFullYear() - 1,
  //           new Date().getMonth(),
  //           new Date().getDate()
  //         ).toISOString(),
  //         toDate: new Date().toISOString(),
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     return res.data;
  //   } catch (error: any | null) {
  //     // console.log(error);
  //     return undefined;
  //   }
  // };
  //-------------------------------------------------------------------------//
  // useEffect(() => {
  //   fetchData().then((apiData) => {
  //     if (apiData !== undefined) dispatch(setDepartmentChart_2(apiData));
  //   });
  // }, []);
  //-------------------------------------------------------------------------//
  // useEffect(() => {
  //   fetchData().then((apiData) => {
  //     if (apiData !== undefined) dispatch(setDepartmentChart_2(apiData));
  //   });
  // }, [chartInterval]);
  //-------------------------------------------------------------------------//
  return (
    <div
      className="col-span-1 h-full rounded-2xl text-lightMineShaft w-full font-semibold"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        Savings Potential
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
        className={`h-[268px]  px-7 bg-wildsand dark:bg-darkMineShaft text-white flex flex-col justify-between gap-y-1 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div>
          <div className="mb-4 flex justify-between items-end">
            <div className="flex flex-col gap-y-1 text-[10px]">
              <div className="text-mineshaft dark:text-white">
                Total Savings
              </div>
              <div className="text-[20px] font-bold text-[#2C2C2C] opacity-90 dark:text-white ">
                $3956
                {/* {Math.round(chartData.value || 0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                <span className="text-[#509051] text-[8px]">Apx.</span>
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
                    options={[
                      "Organisation 1",
                      "Organisation 2",
                      "Organisation 3",
                    ]}
                    selectedOption={"Organisation"}
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
          <SimpleBubbleChart
            height={117}
            width={270}
            bubbles={[
              {
                label: "Unused",
                color: "#ED3131",
                xPos: 0.5,
                yPos: 0.75,
                radius: 1.5,
              },
              {
                label: "Inactive",
                color: "#B4B4B4",
                xPos: 6,
                yPos: 4.75,
                radius: 0.75,
              },
              {
                label: "Low Usage",
                color: "#E0D33E",
                xPos: 7,
                yPos: 1.15,
                radius: 0.9,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default OppChart_3;
