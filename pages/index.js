import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotifier</title>
        <meta name="description" content="Spotify 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main>
      <Sidebar/>
      {/* Center */}
     </main>

     <div>{/* Player */}</div>
    </div>
  )
}
