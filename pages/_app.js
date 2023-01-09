import '../styles/globals.css'
import Layout from "../src/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Гидрошпонки деформационных и рабочих швов</title>
        <meta
          name="description"
          content="Уплотнители, резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия"
        />
        <meta name="keywords" content="Уплотнители, резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия"/>
        <meta name="description" content="Уплотнители, резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия"/>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    )
}
