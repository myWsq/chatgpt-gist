import { Dialogue } from "@/components/Dialogue";
import { Prompts } from "@/components/Prompts";
import { NextPage } from "next";

export const Page: NextPage = () => {
  return (
    <>
      {/* mobile */}
      <main className="h-full lg:hidden">
        <Prompts></Prompts>
      </main>
      {/* pc */}
      <div className="grid-cols-[320px,1fr] h-full hidden lg:grid">
        <aside className="h-full border-r dark:border-gray-800">
          <Prompts></Prompts>
        </aside>
        <main className="h-full">
          <Dialogue></Dialogue>
        </main>
      </div>
    </>
  );
};

export default Page;
