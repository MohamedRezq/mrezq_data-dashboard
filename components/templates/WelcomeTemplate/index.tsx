import React, { PropsWithChildren } from "react";

const WelcomeTemplate = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex w-full bg-[#F8F8F8] relative h-[100vh] flex-col items-center justify-center md:py-[56px] md:px-[41px]">
      <div className="bg-white rounded-2xl w-full h-full max-w-[1179px] md:max-h-[608px] flex flex-col items-center py-10 justify-center">
        {children}
      </div>
    </main>
  );
};

export default WelcomeTemplate;
