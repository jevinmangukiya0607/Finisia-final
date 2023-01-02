import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
// import  Favicon from '/favicon.svg'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
          href="/favicon.svg"
          rel="shortcut icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  )
}
