import React, { PropsWithChildren, useEffect } from "react";
import { useTheme } from "next-themes";
//-----> Redux <----------------------------------------------//
import type { RootState } from "@/src/store";
import { useDispatch, useSelector } from "react-redux";
import { PageLoading } from "../../atoms";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const OnboardingTemplate = ({ children }: PropsWithChildren) => {
  //----------------------------------------------------------------------------------//
  const { theme, setTheme } = useTheme();
  //-------------------------------------------------------------------------//
  const isPageLoading = useSelector(
    (state: RootState) => state.loading.isLoading
  );
  useEffect(() => setTheme("light"), []);
  useEffect(() => {}, [isPageLoading]);
  //-------------------------------------------------------------------------//
  //-------------------------------------------------------------------------//
  return (
    <>
      {isPageLoading ? (
        <PageLoading />
      ) : (
        <main className="flex w-full bg-[#F8F8F8] relative h-[100vh] flex-col items-center justify-center md:py-[56px] md:px-[41px]">
          <div className="bg-white rounded-2xl w-full h-full max-w-[1179px] md:max-h-[608px] flex flex-col items-center py-10 justify-center">
            {children}
          </div>
        </main>
      )}
    </>
  );
};

export default OnboardingTemplate;
