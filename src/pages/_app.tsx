import "../assets/global.css";
import "inter-ui/inter.css";
import { AppProps } from "next/app";
import { trpc } from "@/utils/trpc";
import { NextPage } from "next";
import { PaletteInject } from "@/components/PaletteInject";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <PaletteInject></PaletteInject>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default trpc.withTRPC(MyApp);
