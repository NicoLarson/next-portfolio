import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function hero() {
    return (
        <div className="container">
            <Head>
                <title>Mr.Yang Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Hero" />
            </main>

            <Footer />
        </div>
    )
}
