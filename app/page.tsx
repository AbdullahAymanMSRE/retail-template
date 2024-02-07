import "@/styles/home.scss";
import Image from "next/image";
import Hero from "@/app/components/hero";
import Advantages from "./components/advantages";
import Locate from "./components/locate";
import Operations from "./components/operations";

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
      <Locate />
      <Operations />
    </main>
  );
}
