import TextInput from "@/components/atoms/Input/TextInput";
import { TbLogout } from "react-icons/tb";
import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
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
    <form className="flex flex-col">
      <TextInput id="email" type="email" label="Email Id" onChange={setEmail} />
      <TextInput id="password" type="password" label="Password" onChange={setPassword} />
     
      <Link
        href="#"
        className="underline text-xs text-dustygray hover:text-emperor cursor-pointer pr-5 self-end mt-2"
      >
        Forgot Password?
      </Link>
      <button
        onClick={handleLogin}
        className="w-full relative mt-8 text-sm pl-3 text-white bg-hippiegreen rounded-2xl py-2 flex justify-center items-center gap-x-4 bg-opacity-100"
      >
        <TbLogout className="absolute self-center left-24 w-4 h-4" />
        Sign In
      </button>
    </form>
  );
};

export default FormLogin;
