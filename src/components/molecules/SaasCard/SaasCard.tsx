import React, { useState } from "react";
//-----> Redux <----------------------------------------------//
import { updateSelectedList } from "@/src/store/slices/saas";
import { useDispatch } from "react-redux";
//-----> Components <---------------------------------------------//
import Switch from "react-switch";
import { setPopupOpen } from "@/src/store/slices/popup";
import { PopupDiv } from "../../atoms";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

type SaasCardProps = {
  logo: string;
  title: string;
  text?: string;
  active?: boolean;
  connected?: boolean;
  disableable?: boolean;
  app_id: string;
};

const SaasCard = (props: SaasCardProps) => {
  //----------------------------------------------------------------------------------//
  const [checked, setChecked] = useState(props.active);
  //----------------------------------------------------------------------------------//
  const dispatch = useDispatch();
  //----------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------//
  return (
    <div
      className=" w-[200px] h-[118px] rounded-2xl bg-wildsand relative"
      style={{ boxShadow: "0px 3px 5px #00000029" }}
    >
      <PopupDiv text="sdsd" title="dsd" />
      <div className="pl-4 pt-5 flex items-center">
        <div
          className={`w-7 rounded-md h-7 p-1 flex justify-center items-center ${
            checked ? "bg-hippiegreen" : "bg-grayish"
          }`}
        >
          <img src={props.logo} alt="Logo" className="" />
        </div>
        <div className="text-emperor text-sm font-bold ml-3">{props.title}</div>
      </div>
      <div className=" pl-5 pr-7 pt-1 text-silverchalice text-[9px] pb-2">
        {props.text}
      </div>
      <div
        className={`w-full absolute flex justify-end items-center pr-5 bottom-0 h-[30px] rounded-br-2xl rounded-bl-2xl ${
          checked ? "bg-hippiegreen" : "bg-mercury"
        }`}
      >
        <Switch
          onChange={() => {
            setChecked(!checked);
            dispatch(
              updateSelectedList({
                ...props,
                active: !checked,
              })
            );
          }}
          onClick={() => {}}
          //disabled={!props.disableable}
          checked={checked === undefined ? false : checked}
          uncheckedIcon={false}
          checkedIcon={false}
          handleDiameter={18}
          offHandleColor="#A5A5A5"
          onHandleColor="#eee"
          onColor="#B1B1B1"
          height={8}
          width={30}
          className=""
        />
      </div>
    </div>
  );
};

export default SaasCard;
