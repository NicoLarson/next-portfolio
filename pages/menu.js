import Head from 'next/head'
import Footer from '@components/Footer'
import Link from 'next/link'


export default function menu() {
    return (
        <div className="container">
            <Head>
                <title>Mr.Yang Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/hero">
                    <a>Hero</a>
                </Link>

            </main>

            <Footer />
        </div>
    )
}
