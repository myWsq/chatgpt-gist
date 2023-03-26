import { trpc } from "@/utils/trpc";
import { Spinner } from "@geist-ui/core";
import {
  PlusCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomFamily } from "jotai/utils";

export const ActivePromptId = atom<string | null>(null);

const ActivePromptFamily = atomFamily((id: string) =>
  atom((get) => get(ActivePromptId) === id)
);

const PromptItem: React.FunctionComponent<{
  id: string;
  title: string;
  onClick?: () => void;
}> = ({ id, title, onClick }) => {
  const isActive = useAtomValue(ActivePromptFamily(id));

  return (
    <div
      key={id}
      className={clsx("py-3 cursor-pointer relative")}
      onClick={onClick}
    >
      <div
        className={clsx(
          "absolute inset-y-0 transition-shadow -inset-x-4",
          isActive &&
            "bg-geist-accent-1 ring-[1px] ring-geist-border border-r-2 border-geist-accent-7"
        )}
      ></div>
      <div className="relative space-y-2">
        <p className="font-medium">{title}</p>
        <p className="text-xs text-geist-accent-3">No Session</p>
      </div>
    </div>
  );
};

export const Prompts: React.FunctionComponent = () => {
  const { data: prompts } = trpc.listPrompt.useQuery();
  const setActivePromptId = useSetAtom(ActivePromptId);

  return (
    <>
      <div className="h-6"></div>
      {/* Title */}
      <h1 className="px-4 text-2xl font-medium">ChatMaster</h1>
      <div className="h-5"></div>
      {/* Search Bar */}
      <div className="px-4">
        <div className="flex px-4 py-2.5 space-x-3 rounded-lg bg-geist-accent-2/50 text-geist-accent-3 cursor-pointer select-none">
          <MagnifyingGlassIcon className="w-4"></MagnifyingGlassIcon>
          <span className="text-sm">Search prompts or messages...</span>
        </div>
      </div>
      <div className="h-4"></div>
      {/* Create Prompt */}
      <div className="flex items-center justify-between pl-4 pr-2">
        <p className="text-xs font-bold text-geist-accent-4/50">Prompts</p>
        <button className="p-2 text-geist-accent-4 hover:text-geist-link">
          <PlusCircleIcon className="w-5" />
        </button>
      </div>
      {/* Prompts */}
      <div className="px-4 divide-y">
        {prompts ? (
          prompts.map((prompt) => (
            <PromptItem
              key={prompt.id}
              {...prompt}
              onClick={() => setActivePromptId(prompt.id)}
            ></PromptItem>
          ))
        ) : (
          <div className="flex justify-center py-14">
            <Spinner></Spinner>
          </div>
        )}
      </div>
    </>
  );
};
