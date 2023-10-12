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
type DepartmentChart_6_Props = {
  department: string;
};
//----------------------------------------------------------------------------------//
const DepartmentChart_6 = (props: DepartmentChart_6_Props) => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const chartData = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_6
  );
  const chartInterval = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_6_Interval
  );
  const department = useSelector(
    (state: RootState) => state.dashboard.department.selectedDepartment
  );
  const totalBudget = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_2
  );
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-chart-6`,
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
      className="col-span-2 rounded-2xl h-fit lg:h-[239px] text-lightMineShaft w-full font-semibold"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        Spent
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
        className={`lg:h-[210px]  h-fit pl-[41px] pr-[53px] bg-wildsand dark:bg-darkMineShaft text-white flex flex-col justify-between gap-y-1 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className=" flex justify-between items-start">
          <div className="flex flex-col gap-y-1 text-[10px]">
            <div className=" text-mineshaft dark:text-white">Total Budget</div>
            <div className="text-[20px] font-bold text-mineshaft dark:text-white mt-1">
              $
              {Math.round(totalBudget[0].budget || 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
                    options={["All Time", "Month", "Quarter", "Year"]}
                    selectedOption={chartInterval}
                    setterFunction={setDepartmentChart_6_Interval}
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
        </div>

        <div className="dark:bg-midMineShaft text-mineshaft h-full w-full py-1 px-2 rounded-[15px] bg-white">
          <ColChart
            chartSeries={[{ name: department, data: chartData.chartSeries }]}
            xData={chartData.xData}
            height={110}
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentChart_6;
