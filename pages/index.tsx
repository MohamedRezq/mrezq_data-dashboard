import React from "react";
import AuthProvider from "@/src/utils/AuthProvider";

const HomePage = () => {
  return (
    <AuthProvider redirectUrl="/dashboard">
      <></>
    </AuthProvider>
  );
};

export default HomePage;
