import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../Components/Header";
import Login from "../Components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { useSession } from "next-auth/client";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
      </main>
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
