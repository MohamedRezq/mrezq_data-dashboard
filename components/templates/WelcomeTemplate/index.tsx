import React, { PropsWithChildren } from "react";

const WelcomeTemplate = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex relative h-[100vh] flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default WelcomeTemplate;
