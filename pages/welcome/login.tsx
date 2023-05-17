import FormLogin from "@/components/molecules/FormLogin/FormLogin";
import React from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Image from "next/image";
import WelcomeTemplate from "@/components/templates/WelcomeTemplate";

const LoginPage = () => {
  return (
    <WelcomeTemplate>
      <FormLogin />
      <div className="relative mt-24">
        <Image width={105} src={logo} alt="Alpha" />
      </div>
    </WelcomeTemplate>
  );
};

export default LoginPage;
