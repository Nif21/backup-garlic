import "tailwindcss/tailwind.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://js.arcgis.com/4.14/esri/css/main.css"
        />
        <script src="https://js.arcgis.com/4.20/"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
