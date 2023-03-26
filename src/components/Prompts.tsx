import { trpc } from "@/utils/trpc";
import {
  PlusCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { Loader } from "lucide-react";
import { ModalCreatePrompt } from "./ModalCreatePrompt";
import { ToggleTheme } from "./ToggleTheme";

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
            "bg-slate-50 dark:bg-slate-800 ring-[1px] ring-gray-200 dark:ring-gray-800 border-r-2 border-gray-800 dark:border-gray-200"
        )}
      ></div>
      <div className="relative space-y-2">
        <p className="font-medium">{title}</p>
        <p className="text-xs text-slate-400">No Session</p>
      </div>
    </div>
  );
};

export const Prompts: React.FunctionComponent = () => {
  const { data: prompts } = trpc.listPrompt.useQuery();
  const setActivePromptId = useSetAtom(ActivePromptId);

  const { open: openCreatePromptModal } = ModalCreatePrompt.useHandler();

  return (
    <>
      <div className="h-6"></div>
      {/* Title */}
      <div className="flex justify-between px-4">
        <h1 className="text-2xl font-medium">ChatMaster</h1>
        <ToggleTheme></ToggleTheme>
      </div>
      <div className="h-5"></div>
      {/* Search Bar */}
      <div className="px-4">
        <div className="flex px-4 py-2.5 space-x-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-pointer select-none">
          <MagnifyingGlassIcon className="w-4"></MagnifyingGlassIcon>
          <span className="text-sm">Search prompts or messages...</span>
        </div>
      </div>
      <div className="h-4"></div>
      {/* Create Prompt */}
      <div className="flex items-center justify-between pl-4 pr-2">
        <p className="text-xs font-bold text-slate-400">Prompts</p>
        <button
          className="p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          onClick={() => openCreatePromptModal()}
        >
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
            <Loader className="w-4 h-4 animate-spin"></Loader>
          </div>
        )}
      </div>
    </>
  );
};
