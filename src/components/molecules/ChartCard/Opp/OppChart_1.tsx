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
import { ChartMenu } from "@/src/components/atoms";
import CustomDropMenu from "@/src/components/atoms/Menu/CustomDropMenu";
//-----> Assets <----------------------------------------------//
import warning from "@/public/assets/img/icons/warning.svg";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const OppChart_1 = () => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const chartData = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_2
  );
  const chartInterval = useSelector(
    (state: RootState) => state.dashboard.department.departmentChart_2_Interval
  );
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-chart-2`,
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
      className="w-full rounded-2xl text-lightMineShaft font-bold"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <div
        className={`dark:text-white flex gap-y-1 whitespace-nowrap rounded-2xl`}
      >
        <div className="w-3/4 h-full rounded-bl-2xl rounded-tl-2xl bg-[#F4F4F4] dark:bg-darkMineShaft pt-3 pb-6 pl-3">
          <div
            className={`bg-alto flex items-start h-[51px] rounded-[10px] w-11/12`}
          >
            <div
              className={`bg-[#F14444] h-full rounded-l-[10px]`}
              style={{ width: `30%` }}
            ></div>
            <div
              className={`bg-[#E5DC72] h-full`}
              style={{ width: `25%` }}
            ></div>
          </div>
          <div className="flex pl-3 pt-5 text-mineshaft dark:text-white gap-x-5 text-xxs items-center">
            <div className="flex gap-x-2 items-center">
              <div className=" rounded-full w-2 h-2 bg-[#F04444]"></div>
              <div>Unused</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className=" rounded-full w-2 h-2 bg-[#E5DC72]"></div>
              <div>Low Usage</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className=" rounded-full w-2 h-2 bg-silverchalice"></div>
              <div>Inactive</div>
            </div>
          </div>
        </div>
        <div className="w-1/4 pt-3 px-4 bg-[#E3E3E3] flex flex-col items-center rounded-tr-2xl rounded-br-2xl">
          <div className="rounded-xl w-full flex gap-x-4 justify-center items-center bg-[#F80000] h-[53px] text-white">
            <Image src={warning} alt="warning" className=" w-6" />
            <div className=" text-sm">Finance Alert!</div>
          </div>
          <div className="text-mineshaft text-[8px] self-start px-2 pt-5">
            Your finance health needs a revisit
          </div>
        </div>
      </div>
    </div>
  );
};

export default OppChart_1;
