import { trpc } from "@/utils/trpc";
import { Spinner } from "@geist-ui/core";
import {
  PlusCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export const Prompts: React.FunctionComponent = () => {
  const { data: prompts } = trpc.listPrompt.useQuery();

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
        <p className="text-sm font-bold text-geist-accent-4/50">Prompts</p>
        <button className="p-2 text-geist-accent-4 hover:text-geist-link">
          <PlusCircleIcon className="w-5" />
        </button>
      </div>
      {/* Prompts */}
      <div className="px-4 divide-y">
        {prompts ? (
          prompts.map((prompt) => (
            <div key={prompt.id} className="py-3 space-y-2 cursor-pointer">
              <p className="font-medium">{prompt.title}</p>
              <p className="text-sm text-geist-accent-3">No Session</p>
            </div>
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
