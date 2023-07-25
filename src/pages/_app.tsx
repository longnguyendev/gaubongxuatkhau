import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";

import { theme } from "@/styles/theme";

import "@/styles/globals.css";
import { Layout } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
