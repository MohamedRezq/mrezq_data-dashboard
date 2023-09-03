import React, { ReactNode } from "react";
import Image from "next/image";
//-----> Components <-----------------------------------------//
import Menu, { Item as MenuItem } from "rc-menu";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const ChartMenu = () => {
  const menuItems = new Map([
    ["Pro Mode", "/assets/img/icons/edit.svg"],
    ["Edit", "/assets/img/icons/edit.svg"],
    ["Remove", "/assets/img/icons/delete.svg"],
  ]);
  return (
    <Menu
      className="px-6"
      onSelect={(e) => {
        //setSelectedMonth(e.key);
      }}
    >
      <hr className="absolute mt-[1px] top-0 left-5 w-5 border rounded-lg border-[#707070] border-opacity-50" />
      <MenuItem className="text-[10px] gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-white cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Pro Mode") || ""}
          alt="Pro Mode"
        />{" "}
        <>Pro Mode</>
      </MenuItem>
      <MenuItem className="text-[10px] gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-white cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Edit") || ""}
          alt="Pro Mode"
        />{" "}
        <>Edit</>
      </MenuItem>
      <MenuItem className="text-[10px] gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-white cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Remove") || ""}
          alt="Pro Mode"
        />{" "}
        <>Remove</>
      </MenuItem>
    </Menu>
  );
};

export default ChartMenu;
