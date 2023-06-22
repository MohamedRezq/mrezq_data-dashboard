import FormLogin from "@/components/molecules/FormLogin/FormLogin";
import React from "react";
import logo from "../../public/assets/img/AlphaS wordmark.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { PageLoading } from "@/components/atoms/Loader";

const LoginPage = () => {
  const { isLoading } = useSelector((state: RootState) => state.loading);
  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <main className="flex w-full bg-[#F8F8F8] relative h-[100vh] flex-col items-center justify-center md:py-[56px] md:px-[41px]">
          <div className="bg-white rounded-2xl w-full h-full max-w-[1179px] md:max-h-[608px] flex flex-col items-center py-10 justify-center">
            <FormLogin />
            <div className="relative mt-24">
              <Image width={105} src={logo} alt="AlphaSaas" />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default LoginPage;
