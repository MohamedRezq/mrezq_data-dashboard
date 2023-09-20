import React, { useState, useEffect } from "react";
import Image from "next/image";
//-----> Actions <----------------------------------------------//
//-----> Utils <----------------------------------------------//
import { dateFormatter } from "@/src/utils/dateFormatter";
//-----> Redux <----------------------------------------------//
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import { DashboardTemplate } from "@/src/components/templates";
//-----> Assets <----------------------------------------------//
import icon_404 from "@/public/assets/img/404.png";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const Custom404 = () => {
  //-------------------------------------------------------------------------//
  const user = useSelector((state: RootState) => state.user);
  //-------------------------------------------------------------------------//
  const date = dateFormatter();
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  return (
    <DashboardTemplate headerTitle={`Oops`} date={date}>
      <div className="w-full h-full xl:w-[885px] mx-auto flex flex-col items-center justify-center gap-y-[15px]">
        <div className="flex flex-col items-center gap-y-[7px] text-mineshaft opacity-75">
          <Image src={icon_404} alt="Page Not Found" width={217} height={163} />
          <p className="text-[20px]">Are you lost, too?</p>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default Custom404;
