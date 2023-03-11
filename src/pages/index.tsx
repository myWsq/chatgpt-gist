import { trpc } from "@/utils/trpc";
import { Button } from "@geist-ui/core";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const hello = trpc.sayHi.useQuery({
    name: "Bob",
  });

  console.log(session);

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  );
}
