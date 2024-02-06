import "@/styles/home.scss";
import Image from "next/image";
import Hero from "@/app/components/hero";
import Advantages from "./components/advantages";

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
    </main>
  );
}
