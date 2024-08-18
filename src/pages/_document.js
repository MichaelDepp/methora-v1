import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      {/* Start Head Section */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="./assets/rocket-icon.png" />
        <link rel="apple-touch-icon" href="./assets/rocket-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Methora Theme" />
        <html lang="en"></html>
      </Head>
      {/* End Head Section */}

      {/* Start Body Section */}
      <body className="font-display">
        <Main />
        <NextScript />
      </body>
      {/* End Body Section */}
    </Html>
  );
}
