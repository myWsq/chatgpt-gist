import { PropsWithChildren } from "react";

export const Layout: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <main className="flex flex-col h-full">
      <div className="flex-grow grid grid-cols-[1fr,minmax(auto,1240px),1fr] gap-x-4 sm:gap-x-8 [&>*]:col-start-2">
        {children}
      </div>
    </main>
  );
};
