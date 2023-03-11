import { Avatar, Tabs } from "@geist-ui/core";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Logo } from "./Logo";

const RouterTab: React.FunctionComponent = () => {
  const router = useRouter();
  const value = router.asPath.split("/")[1];

  return (
    <Tabs
      hideDivider
      hideBorder
      className="[&_.content]:hidden [&_.active]:!text-blue-500 [&_.active]:!font-normal"
      value={value}
      onChange={(value) => router.push(`/${value}`)}
    >
      <Tabs.Item label="Chats" value="chats"></Tabs.Item>
      <Tabs.Item label="Prompts" value="prompts"></Tabs.Item>
      <Tabs.Item label="Settings" value="settings"></Tabs.Item>
    </Tabs>
  );
};

export const LayoutNavbar: React.FunctionComponent = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <nav className="flex items-center h-12 md:h-14 border-b px-4 sm:px-8">
      <Logo></Logo>
      <div className="flex-grow"></div>
      <RouterTab></RouterTab>
      <div className="hidden md:block ml-4">
        {user?.image && <Avatar src={user.image}></Avatar>}
      </div>
    </nav>
  );
};
