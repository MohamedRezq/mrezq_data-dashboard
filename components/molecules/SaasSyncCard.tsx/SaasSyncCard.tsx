import PageSpinner from "@/components/atoms/Loader/PageSpinner";
import { updateSelectedList } from "@/redux/features/saas/saasSlice";
import { SaasCardProps } from "@/types/SaasCardProps.interface";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

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
        <PageSpinner />
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
