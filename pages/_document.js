import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#000000"/>
          <meta name="theme-color" content="#000000"/>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

        </Head>
        <body className="relative w-full bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
