import type { NextPage } from "next";
import Dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import SkillTree from "../components/SkillTree";
import TextAnimation from "../components/TextAnimation";
const ScrollContainer = Dynamic(import("../components/ScrollContainer"), {
  ssr: false,
});

const Home: NextPage = () => {
  const sections = [
    "INTRODUCTION",
    "SKILL TREE",
    "CONTACT",
    "CAREER&HISTORY",
    "PROJECTS",
  ];
  const introductionSectionRef = useRef<HTMLDivElement>(null);
  const skillTreeSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const careerSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Head>
        <title>YORU</title>
        <meta name="description" content="yoru's homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-screen h-screen">
        <Image src="/home.jpeg" layout="fill" />
        <div className="z-10 absolute left-10 top-4 -rotate-12">
          <Image
            src="/main_me2.jpeg"
            width={240}
            height={180}
            className="rounded-3xl"
          />
        </div>
        <div className="z-10 absolute right-10 bottom-6 rotate-6">
          <Image
            src="/main_me.jpeg"
            width={240}
            height={180}
            className="rounded-3xl"
          />
        </div>
        <div className="w-full h-full z-20 absolute flex flex-col justify-center items-center text-9xl mobile:text-7xl font-bold">
          <div className="w-2/3">
            <TextAnimation duration={3000}>HELLO</TextAnimation>
          </div>
          <div className="w-2/3">
            <TextAnimation duration={3500}>I AM YORU.</TextAnimation>
          </div>
        </div>
      </div>
      <ScrollContainer>
        <Introduction sectionRef={introductionSectionRef} />
      </ScrollContainer>
      <ScrollContainer>
        <SkillTree sectionRef={skillTreeSectionRef} />
      </ScrollContainer>
      <ScrollContainer>
        <Project sectionRef={projectSectionRef} />
      </ScrollContainer>
      <ScrollContainer>
        <Career sectionRef={careerSectionRef} />
      </ScrollContainer>
      <ScrollContainer>
        <Contact sectionRef={contactSectionRef} />
      </ScrollContainer>
      <Navigation
        sections={sections}
        refs={[
          introductionSectionRef,
          skillTreeSectionRef,
          contactSectionRef,
          careerSectionRef,
          projectSectionRef,
        ]}
      />
      <Footer />
    </div>
  );
};

export default Home;
