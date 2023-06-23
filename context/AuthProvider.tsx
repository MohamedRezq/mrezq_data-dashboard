import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, ReactElement } from "react";
import { useRouter } from "next/router";

type AuthProviderProps = {
  children: ReactElement<any, any>;
  redirectUrl?: string;
};

const AuthProvider = ({ children, redirectUrl }: AuthProviderProps) => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  console.log("router: ", router.pathname);
  useEffect(() => {
    if (!user.token) router.push("/login");
    if (user.token && redirectUrl) router.push(redirectUrl);
    if (user.token && router.pathname === "/login") router.push("/dashboard");
  }, [user]);

  return <>{children}</>;
};

export default AuthProvider;
