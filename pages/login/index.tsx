import React, { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
//-----> Assets <----------------------------------------------//
import logo from "@/public/assets/img/AlphaS wordmark.svg";
//-----> Redux <----------------------------------------------//
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
//-----> Components <---------------------------------------------//
import AuthProvider from "@/src/utils/AuthProvider";
import { PageLoading } from "@/src/components/atoms";
import { FormLogin } from "@/src/components/molecules";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const LoginPage = () => {
  //----------------------------------------------------------------------------------//
  const { theme, setTheme } = useTheme();
  //----------------------------------------------------------------------------------//
  const { isLoading } = useSelector((state: RootState) => state.loading);
  //----------------------------------------------------------------------------------//
  useEffect(() => setTheme("light"), []);
  //----------------------------------------------------------------------------------//
  //----------------------------------------------------------------------------------//
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default LoginPage;
