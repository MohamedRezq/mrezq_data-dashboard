import React, { useState, useEffect } from "react";
import Image from "next/image";
//-----> Actions <----------------------------------------------//

//-----> Utils <----------------------------------------------//
import { dateFormatter } from "@/src/utils/dateFormatter";
import httpServices from "@/src/utils/httpServices";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import { DashboardTemplate } from "@/src/components/templates";
import { CustomCheckboxDropMenu } from "@/src/components/atoms";
import Dropdown from "rc-dropdown";
//-----> Assets <----------------------------------------------//
import documentIcon from "@/public/assets/img/icons/document.svg";
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import { OppChart_1, OppChart_2, OppChart_3 } from "@/src/components/molecules";
import OppChart_4 from "@/src/components/molecules/ChartCard/Opp/OppChart_4";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const DashboardOpportunities = () => {
  //-------------------------------------------------------------------------//
  const date = dateFormatter();
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const user = useSelector((state: RootState) => state.user);
  const displayMiniSidebar = useSelector(
    (state: RootState) => state.dashboard.displayMiniSidebar
  );
  //-------------------------------------------------------------------------//
  const [fetchError, setFetchError] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  //-------------------------------------------------------------------------//
  // const fetchData = async () => {
  //   try {
  //     const res = await httpServices.post(
  //       `${App_Config.API_BASE_URL}/api/organization_applications/group-by-categories`,
  //       {
  //         user: user.info,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-auth-token": user.token,
  //         },
  //       }
  //     );
  //     console.log("apps by cat: ", res.data);
  //     return res.data;
  //   } catch (error: any | null) {
  //     // console.log(error);
  //     setFetchError(true);
  //     return undefined;
  //   }
  // };
  //-------------------------------------------------------------------------//
  // useEffect(() => {
  //   fetchData().then((apiData) => {
  //     if (apiData !== undefined) {
  //       dispatch(setSelectedAppsByCategories(apiData?.authAppsByCat));
  //       dispatch(setAllAppsByCategories(apiData?.authAppsByCat));
  //       dispatch(
  //         setSelectedCategories(
  //           apiData?.authAppsByCat.map((app: any) => {
  //             return app.category;
  //           })
  //         )
  //       );
  //       setAllCategories(
  //         apiData?.authAppsByCat.map((app: any) => {
  //           return app.category;
  //         })
  //       );
  //     }
  //   });
  // }, []);

  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  return (
    <DashboardTemplate headerTitle="Howdy, Budget Guru!" date={date}>
      <div className="flex flex-col gap-y-8 justify-center">
        <div className="flex gap-x-5 h-10">
          <div className="flex w-44 justify-around items-center gap-x-2 text-sm bg-bonjour rounded-[15px] px-5 py-2 text-mineshaft dark:text-white pr-6">
            <Image
              src={documentIcon}
              className=" w-[16px] h-[16px]"
              alt="calendar"
            />
            <div className="text-center font-medium text-sm w-40 text-mineshaft">
              Category
            </div>
            <Dropdown
              trigger={["click"]}
              overlay={
                <CustomCheckboxDropMenu
                  options={[]}
                  selectedOption={"Category"}
                  setterFunction={() => {}}
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
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="w-full my-3 text-xs flex items-center px-3">
            <div className="w-fit whitespace-nowrap text-mineshaft dark:text-white">
              Your SaaS Spend Health
            </div>
            <hr className="w-full border border-bottom-1 mx-5 border-gallery" />
          </div>
          <div className="flex flex-col gap-y-3 w-full items-center">
            <OppChart_1 />
            <div className="grid grid-cols-3 w-full gap-x-3">
              <OppChart_2 />
              <OppChart_3 />
            </div>
            <div className="grid grid-cols-3 w-full gap-x-3">
              <OppChart_4 />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default DashboardOpportunities;
