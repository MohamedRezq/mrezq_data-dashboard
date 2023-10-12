import React, { useEffect, useState } from "react";
import Image from "next/image";
//-----> Actions <----------------------------------------------//

//-----> Utils <----------------------------------------------//
import { dateFormatter } from "@/src/utils/dateFormatter";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import { DashboardTemplate } from "@/src/components/templates";
import Dropdown from "rc-dropdown";
import { BsArrowLeft } from "react-icons/bs";
//-----> Assets <----------------------------------------------//
import monthIcon from "@/public/assets/img/icons/month.svg";
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import { useRouter } from "next/router";
import {
  DepartmentChart_5,
  DepartmentChart_2,
  DepartmentChart_4,
  DepartmentChart_6,
  DepartmentChart_1,
  StatsCard,
} from "@/src/components/molecules";
import { PageLoading } from "@/src/components/atoms";
import {
  setDepartmentMainInterval,
  setDepartmentStats,
  setSelectedDepartment,
} from "@/src/store/slices/dashboard";
import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
import CustomDropMenu from "@/src/components/atoms/Menu/CustomDropMenu";
import { GetServerSideProps, NextPageContext } from "next";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const DashboardDepartmentDetail = (props: any) => {
  const router = useRouter();
  //-------------------------------------------------------------------------//
  const [fetchError, setFetchError] = useState(false);
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  const user = useSelector((state: RootState) => state.user);
  const department = useSelector(
    (state: RootState) => state.dashboard.department.selectedDepartment
  );
  const loading = useSelector((state: RootState) => state.loading.isLoading);
  const statsData = useSelector(
    (state: RootState) => state.dashboard.department.departmentStats
  );
  const mainInterval = useSelector(
    (state: RootState) => state.dashboard.department.mainInterval
  );
  //-------------------------------------------------------------------------//
  const date = dateFormatter();
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-stats`,
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
      setFetchError(true);
      return undefined;
    }
  };
  //-------------------------------------------------------------------------//
  useEffect(() => {
    if (router.isReady) {
      // console.log("query: ", router.query.department);
      // if (router.query.department) {
      //   // Ensure that router.query.department is a string
      //   const departmentValue = Array.isArray(router.query.department)
      //     ? router.query.department[0]
      //     : router.query.department;
      //   dispatch(setSelectedDepartment(departmentValue));
      // }
      fetchData().then((apiData) => {
        if (apiData !== undefined)
          dispatch(setDepartmentStats([apiData[0], statsData[1]]));
      });
    }
  }, []);

  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  return (
    <DashboardTemplate
      headerTitle={`Good ${
        new Date().getHours() >= 12 ? "Evening" : "Morning"
      }, ${user.info.firstName}!`}
      date={date}
    >
      <div className="w-full xl:w-[885px] mx-auto flex flex-col gap-y-[15px]">
        <div className="flex w-[145px] justify-around items-center gap-x-2 text-sm bg-bonjour rounded-[15px] px-5 py-2 text-mineshaft dark:text-white pr-6">
          <Image src={monthIcon} alt="calendar" width={16} />
          <div className="text-center font-medium text-sm w-40 text-mineshaft">
            {mainInterval}
          </div>
          <Dropdown
            trigger={["click"]}
            overlay={
              <CustomDropMenu
                selectedOption={mainInterval}
                options={["All Time", "Month", "Quarter", "Year"]}
                setterFunction={setDepartmentMainInterval}
              />
            }
            animation="slide-up"
          >
            <Image
              src={dropDown}
              alt="Menu"
              width={10}
              className="w-[10px] h-[6px] cursor-pointer"
            />
          </Dropdown>
        </div>
        <div className="flex gap-x-3 mt-3 mb-5 items-center text-mineshaft dark:text-white">
          <div
            onClick={() => {
              router.push("/dashboard/department");
            }}
            className=" cursor-pointer text-cuttysark bg-mercury w-[37px] h-[28px] rounded-[10px] flex items-center justify-center"
          >
            <BsArrowLeft className=" w-[12px] h-[10px] font-bold" />
          </div>
          <div className="text-[15px] font-normal">{department}</div>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px]">
              <DepartmentChart_2 />
              <DepartmentChart_1 />
              <div className="flex flex-col gap-y-3 justify-between">
                {statsData?.map((item: any, i: number) => (
                  <StatsCard
                    key={`${item.title}-${item.value}-${i}`}
                    title={item.title}
                    value={
                      item.value >= 1000
                        ? `$${Math.round(item.value / 1000)}k`
                        : `$${Math.round(item.value)}`
                    }
                    valueType={item.valueType}
                    subValues={item.subValues}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[18px]">
              <DepartmentChart_4 />
              <DepartmentChart_6 department="all" />
              {/* <DepartmentChart_3 /> */}

              <DepartmentChart_5 />
            </div>
          </>
        )}
      </div>
    </DashboardTemplate>
  );
};

export default DashboardDepartmentDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  return { props: { query } };
};
