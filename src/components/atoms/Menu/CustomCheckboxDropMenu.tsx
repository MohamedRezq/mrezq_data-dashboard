import React from "react";
//-----> Components <-----------------------------------------//
import Menu, { Item as MenuItem } from "rc-menu";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import {
  setSelectedAppsByCategories,
  setSelectedCategories,
} from "@/src/store/slices/dashboard";
//-----> Assets <---------------------------------------------//

//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

type CustomCheckboxDropMenuProps = {
  options: string[];
  selectedOption: string;
  setterFunction: Function;
};
//----------------------------------------------------------------------------------//
const CustomCheckboxDropMenu = (props: CustomCheckboxDropMenuProps) => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const selectedCategories = useSelector(
    (state: RootState) => state.dashboard.integration.selectedCategories
  );
  const allAppsByCategories = useSelector(
    (state: RootState) => state.dashboard.integration.allAppsByCategories
  );
  //----------------------------------------------------------------------------------//
  return (
    <Menu
      className="p-5 w-[145px]"
      onSelect={(e) => {
        // dispatch(props.setterFunction(e.key));
      }}
    >
      {props.options.map((opt) => (
        <MenuItem
          key={`${opt}`}
          className="flex rounded-md items-center text-xs font-bold hover:bg-lightMercury dark:hover:bg-mineshaft dark:hover:text-white text-dovegray cursor-pointer"
        >
          <input
            type="checkbox"
            id={`${opt}`}
            name={`${opt}`}
            value={`${opt}`}
            checked={
              selectedCategories.find((cat: string) => cat == opt)
                ? true
                : false
            }
            className=" cursor-pointer accent-hippiegreen"
            onChange={(e) => {
              let filteredCategories: any = [];
              if (selectedCategories.find((cat: string) => cat == opt)) {
                filteredCategories = selectedCategories.filter(
                  (cat: string) => cat != opt
                );
                dispatch(
                  setSelectedCategories(
                    selectedCategories.filter((cat: string) => cat != opt)
                  )
                );
              } else {
                filteredCategories.push(...selectedCategories);
                console.log("filteredCategories: ", filteredCategories);
                console.log("opt: ", opt);
                filteredCategories.push(opt);
                console.log("filteredCategories updated: ", filteredCategories);
                dispatch(setSelectedCategories(filteredCategories));
              }
              let filteredApps: any = [];
              filteredCategories.map((category: string) => {
                allAppsByCategories.map((cat: any) => {
                  if (category == cat.category) filteredApps.push(cat);
                });
              });
              console.log("filteredApps: ", filteredApps);
              dispatch(setSelectedAppsByCategories(filteredApps));
            }}
          />
          <label htmlFor="html" className="px-4 cursor-pointer ">
            {opt}
          </label>
          <br></br>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomCheckboxDropMenu;
