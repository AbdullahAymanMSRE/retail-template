import "@/styles/home.scss";
import Image from "next/image";
import Hero from "@/app/components/hero";
import Advantages from "./components/advantages";
import Locate from "./components/locate";
import Operations from "./components/operations";
import Companies from "./components/companies";
import Comments from "./components/comments";
import Elevate from "./components/elevate";

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
      <Locate />
      <Operations />
      <Companies />
      <Comments />
      <Elevate />
    </main>
  );
}
