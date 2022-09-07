import Head from "next/head";

export default function Meta() {
  const fontSource =
    "https://fonts.googleapis.com/css2?family=Mali&family=Parisienne&display=swap";
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
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
      </noscript>
      <title>Budeme Machkovi</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
