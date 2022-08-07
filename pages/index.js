import { useSession, getSession } from "next-auth/react";
import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import Player from "../components/Player";

export default function Home() {

  const { data: session } = useSession();

  if(!session) return <Login/>;

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotifier</title>
        <meta name="description" content="Spotify 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className="flex">
      <Sidebar />
      <Center />
     </main>

     <div className="sticky bottom-0">
      <Player />
     </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
