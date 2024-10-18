import ScrollToTop from "@/components/customUI/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Booksy | Zepto Book Shop</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
      <ScrollToTop />
    </>
  )
}
