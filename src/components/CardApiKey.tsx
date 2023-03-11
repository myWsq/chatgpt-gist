import { Button, Input } from "@geist-ui/core";
import { Card } from "./Card";

export const CardApiKey: React.FunctionComponent = () => {
  return (
    <Card
      title="API Key"
      description={
        <>
          Refer to
          <a
            href="https://platform.openai.com/account/api-keys"
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-geist-link"
          >
            https://platform.openai.com/account/api-keys
          </a>
          to retrieve API key.
        </>
      }
      footer={
        <Button auto type="secondary" scale={0.75}>
          Save
        </Button>
      }
    >
      <Input
        width="100%"
        className="max-w-md"
        placeholder="sk-d2uvwFR..."
        htmlType="password"
      ></Input>
    </Card>
  );
};
