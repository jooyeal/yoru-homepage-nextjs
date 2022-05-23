import { useTheme } from "next-themes";
import React, {
  Dispatch,
  MouseEvent,
  Ref,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
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

const Skill = ({
  text,
  click,
  setClick,
}: {
  text: string;
  click: string;
  setClick: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="text-4xl mobile:text-2xl">
      <span
        className=""
        onClick={() => {
          if (click == "") {
            setClick(text);
            console.log(text);
          }
        }}
      >
        {text}
      </span>
    </div>
  );
};
function SkillTree({ sectionRef }: Props) {
  const skills = [
    "REACT",
    "NEXTJS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REDUX",
    "HTML5",
    "CSS3",
    "STYLEDCOMPONENTS",
    "TAILWIND",
    "SWIFT",
    "NODEJS",
    "LARAVEL",
    "VERCEL",
    "HEROKU",
    "GIT",
    "SWAGGER",
    "MONGODB",
    "MYSQL",
  ];
  const [position, setPosition] = useState<any>(null);
  const [hidden, setHidden] = useState<boolean>(false);
  const [click, setClick] = useState<string>("");

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
        {!hidden && theme === "dark" && (
          <div
            className={`fixed w-10 h-10 rounded-full mix-blend-difference bg-white`}
            style={{
              left: `${position?.x - 20}px`,
              top: `${position?.y - 20}px`,
              transform: `translate(-50%, -50%)`,
            }}
          ></div>
        )}
        <div className={`p-4 font-semibold`}>
          {click !== "" && (
            <div className={`flex justify-between items-center text-3xl mb-2`}>
              {click}
              <div className="border-2 p-2 rounded-md text-xl">
                <button onClick={() => setClick("")}>BACK</button>
              </div>
            </div>
          )}
          <div
            className={`${
              click !== "" ? "h-96" : "h-0 border-0"
            } overflow-auto transition-all duration-1000 border-2 rounded-md hidden-scrollbar`}
          >
            description
          </div>
          <div
            className={`flex justify-center flex-wrap gap-6 transition-all duration-500 overflow-auto hidden-scrollbar ${
              click !== "" ? "h-0 " : "h-128"
            }`}
          >
            {skills.map((skill, index) => (
              <Skill
                key={index}
                text={skill}
                click={click}
                setClick={setClick}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SkillTree;
