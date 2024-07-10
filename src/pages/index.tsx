import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import KeyUpload from "@/components/KeyUpload";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <KeyUpload />
    </main>
  );
}
