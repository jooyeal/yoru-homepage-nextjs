import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextNprogress from "nextjs-progressbar";
import SideMenu from "../components/SideMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <NextNprogress
        color="#ab47bc"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <SideMenu />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
