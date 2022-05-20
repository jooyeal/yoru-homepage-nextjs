import type { NextPage } from "next";
import Dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import Introduction from "../components/Introduction";
import SkillTree from "../components/SkillTree";
import TextAnimation from "../components/TextAnimation";
const ScrollContainer = Dynamic(import("../components/ScrollContainer"), {
  ssr: false,
});

const Home: NextPage = () => {
  const sections = ["introduction", "skilltree"];
  const [nextSection, setNextSection] = useState<number>(0);
  const introductionSectionRef = useRef<HTMLDivElement>(null);
  const skillTreeSectionRef = useRef<HTMLDivElement>(null);
  const nextScroll = (index: number) => {
    if (introductionSectionRef.current && skillTreeSectionRef) {
      if (index === 0) {
        introductionSectionRef.current?.scrollIntoView();
      } else if (index === 1) {
        skillTreeSectionRef.current?.scrollIntoView();
      }
      setNextSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
    }
  };
  return (
    <div>
      <Head>
        <title>YORU</title>
        <meta name="description" content="yoru's homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-screen h-screen">
        <Image src="/home.jpeg" layout="fill" />
        <div className="z-10 absolute right-10 top-1/2 rotate-6">
          <Image
            src="/hushimiinari.jpeg"
            width={264}
            height={264}
            className="rounded-3xl"
          />
        </div>
        <div className="w-full h-full z-20 absolute flex flex-col justify-center items-center text-9xl mobile:text-7xl font-bold">
          <div className="w-2/3">
            <TextAnimation text="HELLO" />
          </div>
          <div className="w-2/3">
            <TextAnimation text="I AM YORU." />
          </div>
        </div>
      </div>
      <ScrollContainer>
        <Introduction sectionRef={introductionSectionRef} />
      </ScrollContainer>
      <ScrollContainer>
        <SkillTree sectionRef={skillTreeSectionRef} />
      </ScrollContainer>
      <div
        className="fixed bottom-4 left-1/3 w-1/3 bg-zinc-500 bg-opacity-50 rounded-lg p-4 text-white z-50 cursor-pointer flex flex-col items-center"
        onClick={() => nextScroll(nextSection)}
      >
        MORE
        <BsChevronDoubleDown />
      </div>
    </div>
  );
};

export default Home;
