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
import apps from "@/public/assets/json/saas.json";
import { ChartMenu, CustomDropMenu, Tooltip } from "@/src/components/atoms";
import {
  setDepartmentChart_4,
  setDepartmentChart_4_AppCategory,
} from "@/src/store/slices/dashboard";
import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
import Link from "next/link";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------//
type AppInfoType = {
  logo: string;
  title: string;
  url?: string;
};
//----------------------------------------------------------------------------------//

const DepartmentChart_4 = () => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const chartData = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_4
  );
  const appCategory = useSelector(
    (state: RootState) =>
      state.dashboard.department.departmentChart_4_AppCategory
  );
  const department = useSelector(
    (state: RootState) => state.dashboard.department.selectedDepartment
  );
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-chart-4`,
        {
          organizationId: localStorage.getItem("organizationId"),
          interval: "Month",
          appCategory: "Free",
          department: department,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("rx chart 4: ", res.data);
      return res.data;
    } catch (error: any | null) {
      // console.log(error);
      return undefined;
    }
  };
  //-------------------------------------------------------------------------//
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) dispatch(setDepartmentChart_4(apiData));
    });
  }, []);

  //-------------------------------------------------------------------------//
  return (
    <div
      className="col-span-1 rounded-2xl h-fit lg:h-[300px] dark:bg-darkMineShaft dark:text-white  mb-5 text-[#2B2B2B] font-semibold w-full"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        Total Apps
        <Dropdown
          trigger={["click"]}
          overlay={ChartMenu}
          animation="slide-up"
          placement="bottomRight"
        >
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </div>
      <div
        className={`lg:h-[270px]  h-fit px-7 bg-wildsand dark:bg-darkMineShaft dark:text-white  flex flex-col gap-y-1 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className=" flex justify-between items-start">
          <div className="flex flex-col gap-y-1 text-[10px]">
            <div>Apps</div>
            <div className="text-[18px] font-extrabold text-[#2C2C2C] opacity-90 dark:text-white  mt-1 mb-5">
              {chartData.value}
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="flex w-24 justify-around items-center gap-x-2 text-xxs bg-bonjour rounded-[10px] px-5 py-[5px] text-mineshaft dark:text-white pr-6">
              <div className="text-center font-medium text-xxs w-16 dark:text-mineshaft">
                {appCategory}
              </div>
              <Dropdown
                trigger={["click"]}
                overlay={
                  <CustomDropMenu
                    selectedOption={appCategory}
                    options={["Paid", "Free"]}
                    setterFunction={setDepartmentChart_4_AppCategory}
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
        <div className="w-full gap-y-3 flex gap-x-3 flex-wrap">
          <div className=" flex gap-2 flex-wrap">
            {chartData?.apps?.map((app: AppInfoType, i: number) => (
              <Tooltip
                key={`app-dept-total-apps-${app?.title}-${i}`}
                element={
                  <Link
                    href={app?.url || "/"}
                    target="_blank"
                    className={`w-7 h-7 rounded-md flex justify-center items-center`}
                  >
                    <img
                      src={app.logo}
                      alt={app.title}
                      className="rounded-sm w-inherit h-inherit"
                    />
                  </Link>
                }
                text={app.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChart_4;
