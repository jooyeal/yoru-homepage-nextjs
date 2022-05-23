import React, { Ref } from "react";
import { FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiSwagger,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import Section from "./Section";

interface Props {
  sectionRef: Ref<HTMLDivElement>;
}

function SkillTree({ sectionRef }: Props) {
  return (
    <Section sectionRef={sectionRef} sectionName="SKILL TREE">
      <div className="p-4 font-semibold text-6xl flex justify-center flex-wrap gap-6">
        <SiReact style={{ color: "#61DBFB" }} />
        <SiNextdotjs />
        <SiJavascript style={{ color: "#f0db4f " }} />
        <SiTypescript style={{ color: "#007acc" }} />
        <SiRedux style={{ color: "#764abc" }} />
        <SiHtml5 style={{ color: "#e34c26" }} />
        <SiCss3 style={{ color: "#264de4" }} />
        <SiStyledcomponents />
        <SiTailwindcss style={{ color: "#04ACCC" }} />
        <SiSwift style={{ color: "#F05138" }} />
        <FaNodeJs style={{ color: "#3c873a" }} />
        <SiLaravel style={{ color: "#F05340" }} />
        <SiVercel />
        <SiHeroku style={{ color: "#6762A6" }} />
        <SiGit style={{ color: "#F1502F" }} />
        <SiSwagger style={{ color: "#1cb7b6" }} />
        <SiMongodb style={{ color: "#3FA037" }} />
      </div>
    </Section>
  );
}

export default SkillTree;
