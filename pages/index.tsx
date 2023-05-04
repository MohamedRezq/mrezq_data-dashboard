import Link from "next/link";
import React, { useEffect } from "react";
//import {BsArrowRight} from 'react-icons/bs';
import { useRouter } from "next/navigation";

const HelloPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/welcome/login");
  }, []);

  return (
    <main className="flex max-w-md m-auto min-h-screen flex-col items-center justify-between py-16 h-full"></main>
  );
};

export default HelloPage;
