import Navbar from "@/components/Navbar";
import { Web3Provider } from "@/components/Web3Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <Navbar />

      <Component {...pageProps} />
    </Web3Provider>
  );
}
