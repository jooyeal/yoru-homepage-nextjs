import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import SideMenu from "../components/SideMenu";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const finish = () => {
      NProgress.done();
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", finish);
    Router.events.on("routeChangeError", finish);
    return () => {
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", finish);
      Router.events.on("routeChangeError", finish);
    };
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SideMenu />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
