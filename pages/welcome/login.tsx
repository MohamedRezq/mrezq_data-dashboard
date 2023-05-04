import FormLogin from "@/components/molecules/FormLogin/FormLogin";
import React from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Image from "next/image";

const LoginPage = () => {
  return (
    <main className="flex max-w-md relative m-auto min-h-screen flex-col items-center py-16">
      <Image src={logo} alt="Alpha" className="px-16 py-10" />
      <FormLogin />
    </main>
  );
};

export default LoginPage;
