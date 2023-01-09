import '../styles/globals.css'
import Layout from "../src/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Гидрошпонки деформационных и рабочих швов</title>
        <meta name="keywords" content="Уплотнители, Уплотнители киев, Уплотнители Украина, резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия" />
        <meta name="description" content="Гидрошпонки деформационных и рабочих швов, Уплотнители, резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия"/>
        <base href="https://next-test-54ch.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-test-54ch.vercel.app/" />
        <meta property="og:site_name" content="Гидрошпонки деформационных и рабочих швов" />
        <meta property="og:title" content="Гидрошпонки деформационных и рабочих швов" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}
