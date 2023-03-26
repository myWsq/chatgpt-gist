import { Layout } from "@/components/Layout";
import { trpc } from "@/utils/trpc";
import { NextPageWithLayout } from "./_app";

export const Page: NextPageWithLayout = () => {
  trpc.sayHi.useQuery({
    name: "Hi",
  });
  return <div>Hello</div>;
};

Page.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Page;
