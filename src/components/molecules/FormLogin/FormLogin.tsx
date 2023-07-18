import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
//-----> Actions <----------------------------------------------//
import { userLogin } from "@/src/actions";
//-----> Redux <----------------------------------------------//
import { useDispatch, useSelector } from "react-redux";
import { setPageLoading } from "@/src/store/slices/loading";
import { setIsWrongCred, setUser } from "@/src/store/slices/user";
import { RootState } from "@/src/store";
//-----> Components <----------------------------------------------//
import { TbLogout } from "react-icons/tb";
import { TextInput } from "../../atoms";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const FormLogin = () => {
  const [email, setEmail] = useState("");
  //--------------------------------------------------------------//
  const [password, setPassword] = useState("");
  //--------------------------------------------------------------//
  const router = useRouter();
  //--------------------------------------------------------------//
  const dispatch = useDispatch();
  const isWrongCred = useSelector((state: RootState) => state.user.isWrongCred);
  //--------------------------------------------------------------//
  const handleLogin = async (e: any) => {
    dispatch(setPageLoading(true));
    e.preventDefault();
    dispatch(setIsWrongCred(false));
    const user = {
      email,
      password,
    };
    const response = await userLogin(user);
    if (response && response.status === 200) {
      const token = response.data.token;
      const decoded: any = jwt.decode(token);
      if (decoded) {
        if (decoded.role !== "member") {
          // admin && superadmin will need organization_id in quickbook auth
          localStorage.setItem("organizationId", decoded.organizationId);
          localStorage.setItem("userId", decoded.id);
        }
        localStorage.setItem("userId",decoded.id)
        dispatch(setUser({ info: decoded, token: token }));
      } else dispatch(setIsWrongCred(true));
    } else if (response && response.status === 400) {
      dispatch(setIsWrongCred(true));
    }
    dispatch(setPageLoading(false));
  };
  //--------------------------------------------------------------//
  return (
    <form className="flex flex-col">
      <TextInput id="email" type="email" label="Email Id" onChange={setEmail} />
      <TextInput
        id="password"
        type="password"
        label="Password"
        onChange={setPassword}
      />

      <Link
        href="#"
        className="underline text-xs text-dustygray hover:text-emperor cursor-pointer pr-5 self-end mt-2"
      >
        Forgot Password?
      </Link>
      {isWrongCred ? (
        <div className="h-4 text-center mt-3 text-xs text-red-600">
          Wrong username or password !
        </div>
      ) : (
        <div className="h-4 mt-3"></div>
      )}
      <button
        onClick={handleLogin}
        className="w-full relative mt-5 text-sm pl-3 text-white bg-hippiegreen rounded-2xl py-2 flex justify-center items-center gap-x-4 bg-opacity-100"
      >
        <TbLogout className="absolute self-center left-24 w-4 h-4" />
        Sign In
      </button>
    </form>
  );
};

export default FormLogin;
