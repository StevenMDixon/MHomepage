import '../styles/sass/index.scss';
import Head from "next/head"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
        <meta name="description" content="Mollies Business WebSite"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Grand+Hotel|Lato" rel="stylesheet"></link>
        <title>Mollie Dixon</title>
  </Head>
  <Component {...pageProps} />
  </>
  )
}