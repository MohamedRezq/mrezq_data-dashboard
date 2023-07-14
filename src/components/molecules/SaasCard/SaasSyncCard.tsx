import React, { useState } from "react";
//-----> Components <-----------------------------------------//
import { IoCloseSharp } from "react-icons/io5";
import { SpinnerLoader } from "@/src/components/atoms";
//-----> Redux <----------------------------------------------//
import { useDispatch } from "react-redux";
import { updateSelectedList } from "@/src/store/slices/saas";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

type SaasCardProps = {
  logo: string;
  title: string;
  text?: string;
  active?: boolean;
  connected?: boolean;
  app_id?: string;
};

const SaasSyncCard = (props: SaasCardProps) => {
  const [removed, setRemoved] = useState(false);
  const dispatch = useDispatch();
  const removeSaas = async () => {
    dispatch(
      updateSelectedList({
        ...props,
        active: false,
      })
    );
    setRemoved(true);
  };
  return (
    <div
      className={`${
        removed ? "hidden" : "block"
      } px-8 py-[26px] rounded-2xl max-w-[335px] bg-wildsand flex items-center justify-between text-sm font-medium w-full whitespace-nowrap`}
    >
      <div className="flex items-center">
        <div
          className={`w-6 h-6 rounded-md p-1 flex justify-center items-center bg-hippiegreen`}
        >
          <img src={props.logo} alt="Logo" className="" />
        </div>
        <div className="text-emperor text-sm font-bold ml-3">{props.title}</div>
      </div>
      <div className="flex items-center gap-x-3">
        <SpinnerLoader height="20" width="40" />
        <IoCloseSharp
          onClick={removeSaas}
          className="text-[#A4BABA] cursor-pointer"
          size={20}
        />
      </div>
    </div>
  );
};

export default SaasSyncCard;
