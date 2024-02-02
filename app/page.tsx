import Image from "next/image";
import Encryption from "./components/Encryption";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./globals.css";

export default function Home() {
  return (
    <main className="h-full w-full max-w-fit flex items-center justify-between relative">
      <div className="h-full w-full flex flex-col gap-10 ">
        <HeroSection />
        <Skills />
        <Encryption />
        <Projects />
      </div>
      <div className="absolute z-40 opacity-30 top-[23rem] flex items-center free">
        <Image
          src="/ohhh.jpg"
          height={600}
          width={600}
          className="object-contain z-40 top-[14rem] object-center w-full h-full"
          alt="object"
        />
      </div>
    </main>
  );
}
