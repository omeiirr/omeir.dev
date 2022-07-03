import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Omeir Fawaz - Developer Portfolio'
          />

          <link rel='icon' href='/vercel.svg' />

          {/* Link manifest.json
          <link rel='manifest' href='/manifest.json' />

          Set color of URL bar
          <meta name='theme-color' content='#3490DE' /> */}

          {/* Twitter Card */}
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@omeiirr' />
          <meta name='twitter:title' content='Omeir Fawaz' />
          <meta
            name='twitter:description'
            content='Omeir Fawaz - Developer Portfolio'
          />
          <meta
            name='twitter:image'
            content='https://www.schedd.xyz/logo-192x192.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
