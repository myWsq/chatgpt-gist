import "../assets/global.css";
import "inter-ui/inter.css";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { trpc } from "@/utils/trpc";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default trpc.withTRPC(MyApp);
