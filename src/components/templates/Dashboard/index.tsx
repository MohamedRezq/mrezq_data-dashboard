import React, { ReactElement } from "react";
import { useTheme } from "next-themes";
//-----> Components <-----------------------------------------//
import { DashboardHeader, Sidebar } from "../../organisms";
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
  //----------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------//
  return (
    <AuthProvider>
      <main className="w-full dark:bg-[#141414] dark:text-white flex gap-x-6 m-auto px-[15px] lg:px-4 py-3 bg-[#F8F8F8] font-medium">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div
          className={`w-full md:pr-3 lg:pr-6 flex flex-col gap-y-[25px] h-[96vh]`}
        >
          <DashboardHeader headerTitle={props.headerTitle} date={props.date} />
          <div className={`w-full pr-10 mb-[25px] overflow-y-auto`}>
            {props.children !== undefined ? props.children : <></>}
          </div>
        </div>
      </main>
    </AuthProvider>
  );
};

export default DashboardTemplate;
