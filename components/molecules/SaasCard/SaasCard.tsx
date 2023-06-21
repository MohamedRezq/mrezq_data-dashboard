import { updateSelectedList } from "@/redux/features/saas/saasSlice";
import { SaasCardProps } from "@/types/SaasCardProps.interface";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Switch from "react-switch";

const SaasCard = (props: SaasCardProps) => {
  const [checked, setChecked] = useState(props.active);
  const dispatch = useDispatch();

  return (
    <div className=" w-[200px] h-[118px] rounded-2xl bg-wildsand relative">
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
      <div className=" pl-5 pr-7 pt-1 text-silverchalice text-[9px] pb-2">{props.text}</div>
      <div
        className={`w-full absolute flex justify-end items-center pr-5 bottom-0 h-[30px] rounded-br-3xl rounded-bl-3xl ${
          checked ? "bg-hippiegreen" : "bg-mercury"
        }`}
      >
        <Switch
          onChange={() => {
            setChecked(!checked);
            dispatch(updateSelectedList({
              ...props,
              active: !checked,
            }));
          }}
          checked={(checked === undefined)?false:checked}
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
