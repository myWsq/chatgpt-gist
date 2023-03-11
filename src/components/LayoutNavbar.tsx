import { Avatar, Tabs } from "@geist-ui/core";
import { useSession } from "next-auth/react";
import { Logo } from "./Logo";

export const LayoutNavbar: React.FunctionComponent = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <nav className="flex items-center h-12 md:h-14 border-b px-4 sm:px-8">
      <Logo></Logo>
      <div className="flex-grow"></div>
      <Tabs hideDivider hideBorder className="[&_>_.content]:hidden !-mb-0.5">
        <Tabs.Item label="Chats" value="chats"></Tabs.Item>
        <Tabs.Item label="Prompts" value="prompts"></Tabs.Item>
        <Tabs.Item label="Settings" value="settings"></Tabs.Item>
      </Tabs>
      <div className="hidden md:block ml-4">
        {user?.image && <Avatar src={user.image}></Avatar>}
      </div>
    </nav>
  );
};
