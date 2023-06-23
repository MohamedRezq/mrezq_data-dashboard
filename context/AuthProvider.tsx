import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, ReactElement, useState } from "react";
import SelectSaasPage from "@/pages/welcome/select-saas";
import LoginPage from "@/pages/login";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { setPageLoading } from "@/redux/features/loading/loadingSlice";

type AuthProviderProps = {
  children: ReactElement<any, any>;
};
const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageLoading(true));
    if (!user.token) router.push("/login");
    if (user.token) {
      if (user.info.role === "member") {
        router.push("/dashboard");
      } else {
        if (user.info.applications.length === 0)
          router.push("/welcome/select-saas");
        else if (user.info.applications.length > 0) {
          const inactiveApplications = user.info.applications.filter(
            (application: any) => application.integration_status !== "active"
          );
          if (inactiveApplications.length > 0)
            router.push("/welcome/customize-access");
          else router.push("/dashboard");
        }
      }
    }

    // if (user.token && pathname === "/login") router.push("/dashboard");
    dispatch(setPageLoading(false));
  }, [user]);

  return <>{children}</>;
};

export default AuthProvider;
