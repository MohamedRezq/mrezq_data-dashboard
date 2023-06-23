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
<<<<<<< HEAD
    if (!user.token) router.push("/login");
    if (user.token && redirectUrl) router.push(redirectUrl);
    if (user.token && router.pathname === "/login") router.push("/dashboard");
=======
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
>>>>>>> 945cf23fa41a27644255769aaa39b7186dcdfb52
  }, [user]);

  return <>{children}</>;
};

export default AuthProvider;
