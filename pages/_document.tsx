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

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />

          {/* Link manifest.json
          <link rel='manifest' href='/manifest.json' />

          Set color of URL bar
          <meta name='theme-color' content='#3490DE' /> */}

          {/* Twitter Card */}
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@omeiirr' />
          <meta name='twitter:title' content='Omeir Fawaz' />
          <meta name='twitter:description' content='Developer Portfolio' />
          <meta
            name='twitter:image'
            content='https://www.omeir.dev/android-chrome-192x192.png'
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
