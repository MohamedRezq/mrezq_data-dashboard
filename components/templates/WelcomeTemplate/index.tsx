import { PageLoading } from "@/components/atoms/Loader";
import { setPageLoading } from "@/redux/features/loading/loadingSlice";
import { RootState } from "@/redux/store";
import React, { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";

const WelcomeTemplate = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(setPageLoading(true));
  // }, []);
  const isPageLoading = useSelector(
    (state: RootState) => state.loading.isPageLoading
  );

  return (
    <main className="flex w-full bg-[#F8F8F8] relative h-[100vh] flex-col items-center justify-center md:py-[56px] md:px-[41px]">
      <div className="bg-white rounded-2xl w-full h-full max-w-[1179px] md:max-h-[608px] flex flex-col items-center py-10 justify-center">
        {isPageLoading ? <PageLoading /> : children}
      </div>
    </main>
  );
};

export default WelcomeTemplate;
