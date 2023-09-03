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
//-----> Assets <----------------------------------------------//
import monthIcon from "@/public/assets/img/icons/month.svg";
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import { DepartmentCard } from "@/src/components/molecules";
import { PageLoading } from "@/src/components/atoms";
import {
  setDepartmentMainInterval,
  setOrgDepartments,
} from "@/src/store/slices/dashboard";
import httpServices from "@/src/utils/httpServices";
import { App_Config } from "@/config";
import CustomDropMenu from "@/src/components/atoms/Menu/CustomDropMenu";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const DashboardDepartmentsHome = () => {
  //-------------------------------------------------------------------------//
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading.isLoading);
  const departmentMainInterval = useSelector(
    (state: RootState) => state.dashboard.department.mainInterval
  );
  const departments = useSelector(
    (state: RootState) => state.dashboard.orgDepartments
  );
  //-------------------------------------------------------------------------//
  const date = dateFormatter();
  //-------------------------------------------------------------------------//
  const [fetchError, setFetchError] = useState(false);
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      // const res = await httpServices.post(
      //   `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-stats`,
      //   {
      //     organizationId: localStorage.getItem("organizationId"),
      //     fromDate: new Date(
      //       new Date().getFullYear() - 1,
      //       new Date().getMonth(),
      //       new Date().getDate()
      //     ).toISOString(),
      //     toDate: new Date().toISOString(),
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      const res = await httpServices.get(
        `${
          App_Config.API_BASE_URL
        }/api/dashboard/department?organizationId=${localStorage.getItem(
          "organizationId"
        )}`,
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
    fetchData().then((departments) => {
      if (departments !== undefined) dispatch(setOrgDepartments(departments));
    });
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
      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex w-44 justify-around items-center gap-x-2 text-sm bg-bonjour rounded-[15px] px-5 py-2 text-mineshaft dark:text-white pr-6">
          <Image src={monthIcon} alt="calendar" />
          <div className="text-center font-medium text-sm w-40 text-mineshaft">
            {departmentMainInterval}
          </div>
          <Dropdown
            trigger={["click"]}
            overlay={
              <CustomDropMenu
                options={["Month", "Quarter", "Year"]}
                selectedOption={departmentMainInterval}
                setterFunction={setDepartmentMainInterval}
              />
            }
            animation="slide-up"
          >
            <Image
              src={dropDown}
              alt="Menu"
              className="w-[10px] h-[6px] cursor-pointer"
            />
          </Dropdown>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3">
              <DepartmentCard />
              {departments.map((dept: any) => (
                <DepartmentCard
                  key={`dept-card-${dept.department_id}`}
                  department={dept.name}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </DashboardTemplate>
  );
};

export default DashboardDepartmentsHome;
