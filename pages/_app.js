import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zepto Book Shop</title>
        <Component {...pageProps} />;
        <Toaster />
      </Head>
    </>
  )
}
