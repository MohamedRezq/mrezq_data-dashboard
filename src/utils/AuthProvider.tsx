import { useEffect, ReactElement } from "react";
import { useRouter } from "next/router";
//-----> Redux <----------------------------------------------//
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

type AuthProviderProps = {
  children: ReactElement<any, any>;
  redirectUrl?: string;
};

const AuthProvider = ({ children, redirectUrl }: AuthProviderProps) => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  // console.log("router: ", router.pathname);
  useEffect(() => {
    if (!user.token) router.push("/login");
    if (user.token) {
      if (user.info.role === "member") {
        router.push("/dashboard");
      } else {
        if (user.info.applications.length === 0)
          router.push("/welcome/select-saas");
        else if (user.info.applications.length > 0) {
          const inactiveApplications = user.info.applications.filter(
            (application: any) =>
              application.integration_status !== "active" &&
              application.integration_status !== "disabled"
          );
          if (inactiveApplications.length > 0)
            router.push("/welcome/select-saas");
          else {
            router.pathname.includes("/login")
              ? router.push("/dashboard")
              : router.push(router.pathname);
          }
        }
      }
    }
  }, [user]);

  return <>{children}</>;
};

export default AuthProvider;
