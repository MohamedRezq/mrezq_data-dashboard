import React from "react";
//-----> Components <-----------------------------------------//
import Menu, { Item as MenuItem } from "rc-menu";
//-----> Redux <----------------------------------------------//
import { useDispatch } from "react-redux";
//-----> Assets <---------------------------------------------//

//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

type CustomDropMenuProps = {
  options: string[];
  selectedOption: string;
  setterFunction: Function;
};
//----------------------------------------------------------------------------------//
const CustomDropMenu = (props: CustomDropMenuProps) => {
  //----------------------------------------------------------------------------------//
  const opts = ["Month", "Quarter", "Year"];
  //----------------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //----------------------------------------------------------------------------------//
  return (
    <Menu
      className="p-5 w-[145px]"
      onSelect={(e) => {
        dispatch(props.setterFunction(e.key));
      }}
      style={{ zIndex: 99999 }}
    >
      {props.options.map((opt) => (
        <MenuItem
          key={`${opt}`}
          className="flex rounded-md items-center text-xs font-bold hover:bg-lightMercury dark:hover:bg-mineshaft dark:hover:text-white text-dovegray cursor-pointer"
        >
          <input
            type="radio"
            id={`${opt}`}
            name={`${opt}`}
            value={`${opt}`}
            checked={props.selectedOption === opt ? true : false}
            className=" cursor-pointer accent-hippiegreen"
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

export default CustomDropMenu;
