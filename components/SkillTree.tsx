import { useTheme } from "next-themes";
import React, { MouseEvent, Ref, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Section from "./Section";
import { skills } from "../data/skills";
interface Props {
  sectionRef: Ref<HTMLDivElement>;
}

const Skill = ({ text }: { text: string }) => {
  return (
    <div className="text-4xl mobile:text-2xl">
      <span className="cursor-pointer">{text}</span>
    </div>
  );
};
function SkillTree({ sectionRef }: Props) {
  const [position, setPosition] = useState<any>(null);
  const [hidden, setHidden] = useState<boolean>(false);
  const [click, setClick] = useState<number | null>();
  const skillData = skills;
  const { theme } = useTheme();
  const mouseMove = (e: MouseEvent) => {
    setHidden(false);
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const mouseOut = () => {
    setHidden(true);
  };
  return (
    <Section sectionRef={sectionRef} sectionName="SKILL TREE">
      <div onMouseMove={mouseMove} onMouseOut={mouseOut}>
        {window.matchMedia("(min-width: 500px)").matches &&
          !hidden &&
          theme === "dark" && (
            <div
              className={`fixed w-20 h-20 rounded-full mix-blend-difference bg-white`}
              style={{
                left: `${position?.x - 40}px`,
                top: `${position?.y - 40}px`,
                transform: `translate(-50%, -50%)`,
              }}
            ></div>
          )}
        <div className={`p-4 font-semibold`}>
          {click !== null && click !== undefined && (
            <div className={`flex items-center text-3xl mb-2 mobile:text-xl`}>
              <button
                className="flex items-center justify-start border-2 p-2 rounded-md text-xl mr-4"
                onClick={() => setClick(null)}
              >
                <IoMdArrowBack />
              </button>
              <div>{skillData[click].title}</div>
            </div>
          )}
          <div
            className={`pl-3 pr-3 break-all font-introduction ${
              click !== null && click !== undefined ? "h-96" : "h-0 border-0"
            } overflow-auto transition-all duration-1000 border-2 rounded-md hidden-scrollbar break-all`}
          >
            {click !== null && click !== undefined && skillData[click].desc}
          </div>
          <div
            className={`flex justify-center flex-wrap gap-6 transition-all duration-500 overflow-auto hidden-scrollbar ${
              click !== null && click !== undefined ? "h-0 " : "h-128"
            }`}
          >
            {skillData.map((skill, index) => (
              <div key={index}>
                <span onClick={() => setClick(index)}>
                  <Skill text={skill.title} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SkillTree;
