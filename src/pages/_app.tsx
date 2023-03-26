import "../assets/global.css";
import { AppProps } from "next/app";
import { trpc } from "@/utils/trpc";
import { PaletteInject } from "@/components/PaletteInject";
import Head from "next/head";
import { ModalRenderer } from "@/utils/create-modal";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // Use the layout defined at the page level, if available

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://font.sec.miui.com/font/css?family=MiSans:300,450,500,650:Chinese_Simplify,Latin&display=swap"
        ></link>
      </Head>
      <ModalRenderer></ModalRenderer>
      <PaletteInject></PaletteInject>
      <Component {...pageProps} />
    </>
  );
}

export default trpc.withTRPC(MyApp);
