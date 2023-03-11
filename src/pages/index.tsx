import { GetServerSideProps } from "next";


export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: "/chats",
      permanent: true,
    },
  };
};

const Page = () => {
  return null;
};

export default Page;
