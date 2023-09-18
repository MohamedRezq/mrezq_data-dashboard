import React, { ReactElement } from "react";
import { useTheme } from "next-themes";
//-----> Components <-----------------------------------------//
import { DashboardHeader, MiniSideBar, Sidebar } from "../../organisms";
import AuthProvider from "@/src/utils/AuthProvider";
//-----> Redux <----------------------------------------------//
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
//------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//------------------------------------------------------------//

type DashboardTemplateProps = {
  children: ReactElement<any, any>;
  date: string;
  headerTitle: string;
};

const DashboardTemplate = (props: DashboardTemplateProps) => {
  //----------------------------------------------------------------------------------//
  const { theme, setTheme } = useTheme();
  //----------------------------------------------------------------------------------//
  const displayMiniSidebar = useSelector(
    (state: RootState) => state.dashboard.displayMiniSidebar
  );
  //----------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------//
  return (
    <AuthProvider>
      <main className="w-full dark:bg-[#141414] dark:text-white flex m-auto px-10 lg:px-4 py-3 bg-[#F8F8F8] font-medium">
        <div
          className={`hidden ${!displayMiniSidebar && "lg:block"} w-64 h-full`}
        >
          <Sidebar />
        </div>
        <div
          className={`hidden ${
            displayMiniSidebar && "lg:flex xl:items-center"
          } w-fit h-full`}
        >
          <MiniSideBar />
        </div>
        <div
          className={`flex flex-col max-w-6xl ${
            displayMiniSidebar && "ml-6"
          } w-full ${!displayMiniSidebar && "mx-auto"} h-fit lg:h-[96vh]`}
        >
          <div
            className={`w-full ${displayMiniSidebar && "pl-0"} ${
              !displayMiniSidebar && "px-[133px]"
            } mb-[25px]`}
          >
            <DashboardHeader
              headerTitle={props.headerTitle}
              date={props.date}
            />
          </div>
          <div
            className={`w-full ${displayMiniSidebar && "pl-0 pr-[200px]"} ${
              !displayMiniSidebar && "px-[133px]"
            } mb-[25px] flex flex-col gap-y-[25px] lg:overflow-y-auto`}
          >
            {props.children !== undefined ? props.children : <></>}
          </div>
        </div>
      </main>
    </AuthProvider>
  );
};

export default DashboardTemplate;
