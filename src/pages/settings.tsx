import { CardApiKey } from "@/components/CardApiKey";
import { Layout } from "@/components/Layout";
import { NextPageWithLayout } from "./_app";

export const Page: NextPageWithLayout = () => {
  return (
    <div>
      <div className="h-8 sm:h-12"></div>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-1 text-geist-accent-5">
        Change your settings and store to you gist.
      </p>
      <div className="h-8"></div>
      <CardApiKey></CardApiKey>
    </div>
  );
};

Page.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Page;
