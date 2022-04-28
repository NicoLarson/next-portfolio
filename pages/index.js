import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mr.Yang Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mr.Yang Blog" />
        <p className="description">
          Wait for it...
        </p>
      </main>

      <Footer />
    </div>
  )
}
