import BasicInput from "@/components/atoms/Input/TextInput";
import { TbLogout } from "react-icons/tb";
import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "@/redux/features/user/userSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isWrongCred, setIsWrongCred] = useState(false);

  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      router.push('/welcome/select-saas');
    } else {
      setIsWrongCred(true);
    }
  }
  
  return (
    <form className="flex flex-col gap-y-5">
      <BasicInput id="email" type="email" label="Email Id" onChange={setEmail} />
      <BasicInput id="password" type="password" label="Password" onChange={setPassword} />
      <div
        className={`text-center text-xs text-red-800 ${
          isWrongCred ? "opacity-100" : "opacity-0"
        }`}
      >
        Wrong email/password. Try again!
      </div>
      <Link
        href="#"
        className="hover:underline text-emperor cursor-pointer pr-5 self-end"
      >
        Forgot Password?
      </Link>
      <button
        onClick={handleLogin}
        className="w-full mt-5 text-white text-xl bg-hippiegreen rounded-3xl py-5 flex justify-center items-center gap-x-4 bg-opacity-90 hover:bg-opacity-100"
      >
        <TbLogout />
        Sign In
      </button>
    </form>
  );
};

export default FormLogin;
