import Link from "next/link";
import React, { ReactNode } from "react";

interface SidebarItemProps {
  icon: string | ReactNode;
  title?: string;
  active: boolean;
  link: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <Link
      href={props.link}
      className={`px-4 my-1 py-2 cursor-pointer ${
        props.active ? "bg-killarney" : "bg-transparent"
      } text-white rounded-xl flex items-center gap-x-5 hover:bg-killarney hover:bg-opacity-80`}
    >
      {typeof props.icon == "string" ? (
        <img src={props.icon} alt={props.title} className="w-4 h-4" />
      ) : (
        props.icon
      )}
      <div className="text-[14px]">{props.title}</div>
    </Link>
  );
};

export default SidebarItem;
