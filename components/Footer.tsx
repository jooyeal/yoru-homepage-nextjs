import React from "react";
import Marquee from "react-fast-marquee";
import { FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
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
import { GiAustralia, GiJapan, GiSouthKorea } from "react-icons/gi";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="fixed bottom-0 w-full z-50">
      <Marquee
        className="h-16"
        speed={50}
        gradientColor={[255, 255, 255]}
        gradientWidth={0}
      >
        <div className="flex gap-6 text-4xl">
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
          <SiMysql style={{ color: "#0075bf" }} />
          <GiJapan className="text-green-600" />
          <GiSouthKorea className="text-green-600" />
          <GiAustralia className="text-green-600" />
        </div>
      </Marquee>
    </div>
  );
}

export default Footer;
