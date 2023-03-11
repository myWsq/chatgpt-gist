import { Button } from "@geist-ui/core";
import { signIn } from "next-auth/react";
import { LogoGithub } from "./LogoGithub";

export const PanelLogin: React.FunctionComponent = () => {
  return (
    <div>
      <h1>ChatGPT Gist requires login to store your data to Github Gist.</h1>
      <Button
        shadow
        type="secondary-light"
        auto
        icon={
          <div className="scale-150">
            <LogoGithub />
          </div>
        }
        onClick={() => signIn("github")}
      >
        Login with GitHub
      </Button>
    </div>
  );
};
