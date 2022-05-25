import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

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
        <Link href="/menu">
          <a>menu</a>
        </Link>
      </main>

      <Footer />
    </div>
  )
}
