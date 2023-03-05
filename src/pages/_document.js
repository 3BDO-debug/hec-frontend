import * as React from 'react';
// next
import Document, { Html, Head, Main, NextScript } from 'next/document';
// emotion
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
// theme
import palette from '../theme/palette';
import { useTheme } from '@mui/material';

// ----------------------------------------------------------------------

function createEmotionCache() {
  return createCache({ key: 'css' });
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/logo-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/logo-icon.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/logo-icon.png" />

          <meta name="theme-color" content={palette.light.primary.main} />
          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Change your life now with Informa" />
          <meta name="keywords" content="Informa" />
          <meta name="author" content="Based On Tech" />
          <title>Informa - Transforming mindset</title>
          <meta property="og:title" content="Informa - Powered by B.O.T" />
          <meta property="og:description" content="Change your life now with Informa" />
          <meta property="og:url" content="https://www.informa-180.com/" />
          <meta property="og:site_name" content="Informa - Powered by B.O.T" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/logo.png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <CacheProvider value={cache}>
            <App {...props} />
          </CacheProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};
