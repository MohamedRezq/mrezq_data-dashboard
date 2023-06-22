import Link from "next/link";
import React, { useEffect } from "react";
//import {BsArrowRight} from 'react-icons/bs';
import { useRouter } from "next/navigation";

const HelloPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return <></>;
};

export default HelloPage;
