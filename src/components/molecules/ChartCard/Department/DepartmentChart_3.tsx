import React, { useEffect, useState } from "react";
import Image from "next/image";
//-----> Actions <----------------------------------------------//

//-----> Utils <----------------------------------------------//
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import Dropdown from "rc-dropdown";
import { BsThreeDots } from "react-icons/bs";
//-----> Assets <----------------------------------------------//
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import editIcon from "@/public/assets/img/icons/edit.svg";
import { BarChart, ChartMenu } from "@/src/components/atoms";
import { setDepartmentChart_3 } from "@/src/store/slices/dashboard";
import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const DepartmentChart_3 = () => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const chartData = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_3
  );
  const budgetingInterval = useSelector(
    (state: RootState) => state.dashboard.department.budgetingInterval
  );
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-chart-3`,
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
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) dispatch(setDepartmentChart_3(apiData));
    });
  }, []);

  //-------------------------------------------------------------------------//
  return (
    <div
      className="col-span-2 rounded-2xl h-fit lg:h-[239px] mb-2 text-lightMineShaft w-full font-semibold"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        Budgeting
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
        className={`lg:h-[210px]  h-fit  px-7 bg-wildsand dark:bg-darkMineShaft text-white flex flex-col justify-between gap-y-1 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className=" flex justify-between items-start">
          <div className="flex flex-col gap-y-1 text-[10px]">
            <div>Total Budget:</div>
            <div className="text-[20px] font-bold text-mineshaft dark:text-white opacity-80 mt-1">
              $
              {Math.round(chartData.value || 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="flex w-20 cursor-pointer justify-around items-center gap-x-2 text-xxs bg-bonjour rounded-[15px] px-5 py-2 text-mineshaft dark:text-white pr-6">
              <Image
                src={editIcon}
                alt="Edit"
                className="w-[12px] h-[6px]"
                width={12}
              />
              <div className="text-center font-medium text-xxs w-16 dark:text-mineshaft">
                Edit Data
              </div>
            </div>
            <div className="flex w-20 justify-around items-center gap-x-2 text-xxs bg-bonjour rounded-[15px] px-5 py-2 text-mineshaft dark:text-white pr-6">
              <div className="text-center font-medium text-xxs w-16 dark:text-mineshaft">
                {budgetingInterval}
              </div>
              <Dropdown
                trigger={["click"]}
                overlay={<></>}
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
        </div>
        <BarChart
          chartSeries={chartData.chartSeries || []}
          xData={chartData.xData || []}
          barHeight={3}
        />
        <div className="flex gap-x-5 text-xxs items-center">
          <div className="flex gap-x-2 items-center">
            <div className=" rounded-full w-2 h-2 bg-[#5EBF60]"></div>
            <div>Utilised</div>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="rounded-full w-2 h-2 bg-silverchalice"></div>
            <div>Left</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChart_3;
