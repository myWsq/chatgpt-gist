import { Spinner } from "@geist-ui/core";
import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";
import { PanelLogin } from "./PanelLogin";

export const Layout: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-full">
        <Spinner></Spinner>
      </div>
    );
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }
  
  return <PanelLogin></PanelLogin>;
};
