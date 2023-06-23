import Link from "next/link";
import React, { useEffect } from "react";
//import {BsArrowRight} from 'react-icons/bs';
import { useRouter } from "next/navigation";
import AuthProvider from "@/context/AuthProvider";

const HelloPage = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push("/login");
  // }, []);

  return (
    <AuthProvider redirectUrl="/dashboard">
      <></>
    </AuthProvider>
  );
};

export default HelloPage;
