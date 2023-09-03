import { RootState } from "@/src/store";
import {
  setSelectedAppsByCategories,
  setSelectedCategories,
} from "@/src/store/slices/dashboard";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//

//-------------------------------------------------------------------------//
type HideChipProps = {
  text: string;
  // hideFunction: Function;
};
//-------------------------------------------------------------------------//

const HideChip = (props: HideChipProps) => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //-------------------------------------------------------------------------//
  const selectedCategories = useSelector(
    (state: RootState) => state.dashboard.integration.selectedCategories
  );
  const allAppsByCategories = useSelector(
    (state: RootState) => state.dashboard.integration.allAppsByCategories
  );
  //-------------------------------------------------------------------------//
  return (
    <div className="w-fit flex text-[10px] items-center gap-x-2 text-mineshaft bg-lightMercury dark:text-white dark:bg-midMineShaft h-[26px] rounded-[20px] pl-3 pr-4 py-2">
      <AiOutlineCloseCircle
        onClick={() => {
          dispatch(
            setSelectedCategories(
              selectedCategories.filter((cat: string) => cat != props.text)
            )
          );
          let filteredApps: any = [];
          selectedCategories
            .filter((cat: string) => cat != props.text)
            .map((category: string) => {
              allAppsByCategories.map((cat: any) => {
                if (category == cat.category) filteredApps.push(cat);
              });
            });
          console.log("filteredApps: ", filteredApps);
          dispatch(setSelectedAppsByCategories(filteredApps));
        }}
        className="w-[10px] h-[10px] cursor-pointer"
      />
      {props.text}
    </div>
  );
};

export default HideChip;
