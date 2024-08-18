import React from 'react';
import '@styles/globals.css';
import { ThemeProvider } from 'next-themes';

// Include the CSS for react-slick slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }) {
  return (
    // ThemeProvider will be used for dark mode light mode configurations
    // It also stores the user's prefered mode in local storage
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
