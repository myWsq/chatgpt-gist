import "../assets/global.css";
import { AppProps } from "next/app";
import { trpc } from "@/utils/trpc";
import { ModalRenderer } from "@/utils/create-modal";
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // Use the layout defined at the page level, if available

  return (
    <ThemeProvider>
      <ModalRenderer></ModalRenderer>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default trpc.withTRPC(MyApp);
