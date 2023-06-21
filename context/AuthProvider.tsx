import React, { createContext, useState } from "react";
import { useRouter } from "next/router";
import { PageLoading } from "@/components/atoms/Loader";
import { userLogin } from "@/actions/user";

function AuthProvider<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const {response, loading, error} = userLogin();
    const router = useRouter();

    if (loading) {
      return <PageLoading />;
    }

    if (error || !response) {
      router.push("/welcome/login");
    }

    return <Component {...props!} />;
  };
}

export default AuthProvider;
