import { RootState } from "@/src/store";
import { setPopupOpen } from "@/src/store/slices/popup";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//
type PopupDivProps = {
  title: string;
  text: string;
};
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
const PopupDiv = (props: PopupDivProps) => {
  //----------------------------------------------------------------------------------//
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.popup.isPopupOpen);
  //----------------------------------------------------------------------------------//
  return (
    <div className="text-center">
      <Modal
        center
        closeOnEsc
        closeOnOverlayClick
        open={isOpen}
        onClose={() => dispatch(setPopupOpen(false))}
        styles={{
          overlay: {
            backgroundColor: "rgba(196, 193, 193, 0.9);",
          },
        }}
      >
        <h2 className=" font-bold">Need Admin Support</h2>
        <p>
          Please contact admin{" "}
          <span className=" text-hippiegreen underline">
            <Link href="/">support</Link>
          </span>{" "}
          of AlphaSaas to disable integration of any app.
        </p>
      </Modal>
    </div>
  );
};

export default PopupDiv;
