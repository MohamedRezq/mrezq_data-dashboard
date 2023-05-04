import Image from "next/image";
import React, { useState } from "react";
import Switch from "react-switch";

interface SaasCardProps {
  logo: string;
  title: string;
  text: string;
  active: boolean;
  checked: boolean;
}

const SaasCard = (props: SaasCardProps) => {
  const [checked, setChecked] = useState(props.checked);
  return (
    <div className="w-52 h-36 rounded-3xl bg-wildsand relative">
      <div className="pl-4 pt-5 flex items-center">
        <div
          className={`w-7 rounded-md h-7 p-1 flex justify-center items-center ${
            checked ? "bg-hippiegreen" : "bg-silverchalice"
          }`}
        >
          <img src={props.logo} alt="Logo" className="" />
        </div>
        <div className="text-emperor text-md ml-3">{props.title}</div>
      </div>
      <div className="pl-4 pt-2 text-silverchalice text-xs">{props.text}</div>
      <div
        className={`w-full absolute flex justify-end items-center pr-5 bottom-0 h-9 rounded-br-3xl rounded-bl-3xl ${
          checked ? "bg-hippiegreen" : "bg-silverchalice"
        }`}
      >
        <Switch
          onChange={() => setChecked(!checked)}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          handleDiameter={18}
          offHandleColor="#545454"
          onColor="#eee"
          height={8}
          width={30}
          //onHandleColor='#509051'
          className=""
        />
      </div>
    </div>
  );
};

export default SaasCard;
