import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Praedium</title>
        <meta name="description" content="Salud y bienestar" />
        <link rel="icon" href="/praediumlogo.ico" />
        <meta name="robots" content="noindex" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
