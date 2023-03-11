import { Spinner } from "@geist-ui/core";
import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";
import { LayoutNavbar } from "./LayoutNavbar";
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
    return (
      <main className="flex flex-col h-full">
        <LayoutNavbar></LayoutNavbar>
        <div className="flex-grow grid grid-cols-[1fr,minmax(auto,1240px),1fr] gap-x-4 sm:gap-x-8 [&>*]:col-start-2">
          {children}
        </div>
      </main>
    );
  }

  return <PanelLogin></PanelLogin>;
};
