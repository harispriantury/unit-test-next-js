/* eslint-disable react/no-unescaped-entities */

import Hero from "./components/home/hero";
import Fitur from "./components/home/Fitur";
import About from "./components/home/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Fitur />
      <About />
    </main>
  );
}
