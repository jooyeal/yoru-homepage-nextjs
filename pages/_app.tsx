import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { ThemeProvider } from "next-themes";
import SideMenu from "../components/SideMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SideMenu />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
