import { trpc } from "@/utils/trpc";
import { Button, Input } from "@geist-ui/core";
import { useEffect, useState } from "react";
import { Card } from "./Card";

export const CardApiKey: React.FunctionComponent = () => {
  const { data: settings, refetch } = trpc.getSettings.useQuery();
  const { mutateAsync: updateSettings, isLoading: updateSettingsPending } =
    trpc.updateSettings.useMutation();

  const [input, setInput] = useState("");

  useEffect(() => {
    if (settings) {
      setInput(settings.apiKey);
    }
  }, [settings]);

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
        <Button
          auto
          type="secondary"
          scale={0.75}
          disabled={!settings}
          loading={updateSettingsPending}
          onClick={async () => {
            await updateSettings({ apiKey: input });
            await refetch();
          }}
        >
          Save
        </Button>
      }
    >
      <Input
        width="100%"
        className="max-w-md"
        placeholder={!settings ? "Loading..." : "sk-Huukiat......."}
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        disabled={!settings}
      ></Input>
    </Card>
  );
};
