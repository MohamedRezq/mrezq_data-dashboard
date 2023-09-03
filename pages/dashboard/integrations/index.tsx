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
import { IoSettingsSharp } from "react-icons/io5";
import { DashboardTemplate } from "@/src/components/templates";
import { SaasCard } from "@/src/components/molecules";
import {
  CustomCheckboxDropMenu,
  HideChip,
  RoundedSearchInput,
  SearchInput,
} from "@/src/components/atoms";
import Dropdown from "rc-dropdown";
//-----> Assets <----------------------------------------------//
import documentIcon from "@/public/assets/img/icons/document.svg";
import dropDown from "@/public/assets/img/icons/arrow-down-sign-to-navigate.svg";
import Link from "next/link";
import { App_Config } from "@/config";
import {
  setAllAppsByCategories,
  setSelectedAppsByCategories,
  setSelectedCategories,
} from "@/src/store/slices/dashboard";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

// type UserIntegratedAppType = {
//   application_id: string;
//   organization_id: string;
//   integration_status: string;
// };

type SaasCardProps = {
  logo: string;
  title: string;
  text?: string;
  active?: boolean;
  connected?: boolean;
  disableable?: string;
  app_id: string;
  category?: string;
};

const DashboardIntegrations = () => {
  //-------------------------------------------------------------------------//
  const date = dateFormatter();
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const user = useSelector((state: RootState) => state.user);
  const displayMiniSidebar = useSelector(
    (state: RootState) => state.dashboard.displayMiniSidebar
  );
  const [allCategories, setAllCategories] = useState([]);
  const selectedCategories = useSelector(
    (state: RootState) => state.dashboard.integration.selectedCategories
  );
  const selectedAppsByCategories = useSelector(
    (state: RootState) => state.dashboard.integration.selectedAppsByCategories
  );
  //-------------------------------------------------------------------------//
  const [fetchError, setFetchError] = useState(false);
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/organization_applications/group-by-categories`,
        {
          user: user.info,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": user.token,
          },
        }
      );
      console.log("apps by cat: ", res.data);
      return res.data;
    } catch (error: any | null) {
      // console.log(error);
      setFetchError(true);
      return undefined;
    }
  };
  //-------------------------------------------------------------------------//
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) {
        dispatch(setSelectedAppsByCategories(apiData?.authAppsByCat));
        dispatch(setAllAppsByCategories(apiData?.authAppsByCat));
        dispatch(
          setSelectedCategories(
            apiData?.authAppsByCat.map((app: any) => {
              return app.category;
            })
          )
        );
        setAllCategories(
          apiData?.authAppsByCat.map((app: any) => {
            return app.category;
          })
        );
      }
    });
  }, []);

  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  return (
    <DashboardTemplate headerTitle="Sync your fav apps!" date={date}>
      <div className="flex flex-col gap-y-8 justify-center">
        <div className="flex gap-x-5 h-10">
          <RoundedSearchInput />
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
                  options={allCategories}
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
          <Link
            href=""
            className="flex w-[200px] justify-around items-center gap-x-2 text-sm bg-bonjour rounded-[15px] px-5 py-2 text-mineshaft dark:text-white pr-6"
          >
            <IoSettingsSharp className="text-[#578182] w-[20px] h-[20px] cursor-pointer" />
            <div className="text-center font-medium text-sm w-40 text-mineshaft">
              Integration Settings
            </div>
          </Link>
        </div>
        <div className="flex gap-x-2">
          {selectedCategories?.map((cat: any, i: number) => (
            <HideChip key={`cat-title-${cat}-${i}`} text={`${cat}`} />
          ))}
        </div>
        <div className="flex flex-col gap-y-9">
          {selectedAppsByCategories?.map((cat: any, i: number) => (
            <div key={`cat-${cat.category}-${i}`} className="w-fit">
              <div className="my-3 text-xs flex items-center px-3">
                <div className="text-mineshaft dark:text-white">
                  {cat.category}
                </div>
                <hr className="border border-bottom-0 w-full mx-5 border-gallery" />
              </div>
              <div className="flex w-fit items-center">
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
                    displayMiniSidebar ? "5" : "3"
                  } gap-3`}
                >
                  {cat.apps?.map((item: SaasCardProps, i: number) => (
                    <SaasCard
                      logo={item.logo}
                      key={`${item.title}-${i}`}
                      title={item.title}
                      text={item.text}
                      active={item.active}
                      app_id={item.app_id}
                      disableable={!item.active}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default DashboardIntegrations;
