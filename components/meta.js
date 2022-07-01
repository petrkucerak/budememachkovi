import Head from "next/head";

export default function Meta() {
  const fontSource =
    "https://fonts.googleapis.com/css2?family=Neucha&family=Parisienne&display=swap";
  return (
    <Head>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link href={fontSource} rel="preload" as="style" />
      <link
        href={fontSource}
        rel="stylesheet"
        media="print"
        onLoad="this.media='all'"
      />
      <noscript>
        <link href={fontSource} rel="stylesheet" />
      </noscript> */}
      <title>Budeme Machkovi</title>
    </Head>
  );
}
