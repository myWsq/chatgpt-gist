import { Layout } from "@/components/Layout";
import { NextPageWithLayout } from "./_app";

export const Page: NextPageWithLayout = () => {
  return <div>Hello</div>;
};

Page.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Page;
