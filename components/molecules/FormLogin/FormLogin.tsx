import BasicInput from "@/components/atoms/Input/TextInput";
import { TbLogout } from "react-icons/tb";
import React, { ReactNode } from "react";
import Link from "next/link";

interface FormLoginProps {}
const FormLogin = () => {
  return (
    <form className="flex flex-col gap-y-5">
      <BasicInput id="email" type="email" label="Email Id" />
      <BasicInput id="passowrd" type="password" label="Password" />
      <a
        href="#"
        className="hover:underline text-emperor cursor-pointer pr-5 self-end"
      >
        Forgot Password?
      </a>
      <Link href="/welcome/select-saas">
        <button className="w-full mt-5 text-white text-xl bg-hippiegreen rounded-3xl py-5 flex justify-center items-center gap-x-4 bg-opacity-90 hover:bg-opacity-100">
          <TbLogout />
          Sign In
        </button>
      </Link>
    </form>
  );
};

export default FormLogin;
