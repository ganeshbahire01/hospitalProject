import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
    </div>
  );
}
