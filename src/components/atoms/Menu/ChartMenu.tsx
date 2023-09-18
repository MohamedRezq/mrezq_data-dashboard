import React, { ReactNode } from "react";
import Image from "next/image";
//-----> Components <-----------------------------------------//
import Menu, { Item as MenuItem } from "rc-menu";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const ChartMenu = () => {
  const menuItems = new Map([
    ["Info", "/assets/img/icons/edit.svg"],
    ["Edit", "/assets/img/icons/edit.svg"],
    ["Remove", "/assets/img/icons/delete.svg"],
  ]);
  return (
    <Menu
      className="px-6"
      onSelect={(e) => {
        //setSelectedMonth(e.key);
      }}
      builtinPlacements={["bottomRight"]}
    >
      <hr className="absolute mt-[1px] top-0 left-5 w-5 border rounded-lg border-[#707070] border-opacity-50" />
      <MenuItem className="text-[10px] gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-mineshaft cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Info") || ""}
          alt="Info"
        />{" "}
        <>Info</>
      </MenuItem>
      <MenuItem className="text-[10px] gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-mineshaft cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Edit") || ""}
          alt="Info"
        />{" "}
        <>Edit</>
      </MenuItem>
      <MenuItem className="text-[10px] gap-x-2 py-1 rounded-[7px] h-[19px] w-[110px] flex items-center font-semibold hover:bg-[#EAEAEA] text-mineshaft dark:text-mineshaft cursor-pointer">
        <Image
          width={8}
          height={8}
          src={menuItems.get("Remove") || ""}
          alt="Info"
        />{" "}
        <>Remove</>
      </MenuItem>
    </Menu>
  );
};

export default ChartMenu;
