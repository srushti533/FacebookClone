import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../Components/Header";
import Login from "../Components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main></main>
    </div>
  );
}
export async function getServerSideProps(context) {
  //Get the user
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
