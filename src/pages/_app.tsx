import "@/styles/globals.css";
import "@/styles/css/bootstrap.css";
import "@/styles/css/nice-select.min.css";
import "@/styles/css/font-awesome.min.css";
import "@/styles/css/style.css";
import "@/styles/css/responsive.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
