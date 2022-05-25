import Image from "next/image";
import Link from "next/link";
import React, { Ref } from "react";
import { GiClick } from "react-icons/gi";
import Section from "./Section";

interface Props {
  sectionRef: Ref<HTMLDivElement>;
}

const ProjectInfo: React.FC<{
  link: string;
  image: string;
  direction: string;
  overview: string;
  detail: string;
}> = ({ link, image, direction, overview, detail }) => {
  return (
    <div className="p-6 font-introduction">
      {direction === "left" ? (
        <div className="flex gap-1">
          <div className="basis-2/5 relative h-80 mobile:basis-1/2 mobile:h-40">
            <GiClick className="absolute -bottom-3 -right-3 text-3xl animate-bounce text-green-400 z-30" />
            <Link href={link}>
              <a>
                <Image
                  className="rounded-lg"
                  src={image}
                  layout="fill"
                  objectFit="fill"
                />
              </a>
            </Link>
          </div>
          <div className="basis-3/5 h-80 mobile:basis-1/2 p-4 overflow-y-auto break-all mobile:h-40 hidden-scrollbar border-t border-b rounded-sm">
            <div className="text-2xl mobile:text-lg font-bold">OVERVIEW</div>
            <div className="mobile:text-xs">{overview}</div>
            <div className="text-xl mobile:text-base font-bold mt-4">
              DETAIL
            </div>
            <div className="mobile:text-xs">{detail}</div>
          </div>
        </div>
      ) : (
        <div className="flex gap-1">
          <div className="basis-3/5 h-80 mobile:basis-1/2 p-4 overflow-y-auto break-all mobile:h-40 hidden-scrollbar border-t border-b rounded-sm">
            <div className="text-2xl mobile:text-lg font-bold">OVERVIEW</div>
            <div className="mobile:text-xs">{overview}</div>
            <div className="text-xl mobile:text-base font-bold mt-4">
              DETAIL
            </div>
            <div className="mobile:text-xs">{detail}</div>
          </div>
          <div className="basis-2/5 relative h-80 mobile:basis-1/2 mobile:h-40">
            <GiClick className="absolute -bottom-3 -right-3 text-3xl animate-bounce text-green-400 z-30" />
            <Link href={link}>
              <a>
                <Image
                  className="rounded-lg"
                  src={image}
                  layout="fill"
                  objectFit="fill"
                />
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
const Project: React.FC<Props> = ({ sectionRef }) => {
  return (
    <Section sectionRef={sectionRef} sectionName={`MY PROJECTS`}>
      <div
        className="p-4 font-semibold w-full flex flex-col gap-12 mobile:flex-col overflow-auto hidden-scrollbar"
        style={{ height: "calc(100vh - 10rem)" }}
      >
        <ProjectInfo
          link="https://retro-sand.vercel.app/"
          image="/retro_project.png"
          direction="left"
          overview="a collection of retro gif image files."
          detail="this is implemented by nextjs. i like retro culture of japan, so i made it just for fun. you can see many gif images of giphy.com and see more information."
        />
        <ProjectInfo
          link="https://yoruchadesu.netlify.app/"
          image="/personal_hompage_project.png"
          direction="right"
          overview="my first personal homepage."
          detail="this is implemented by react, framework express for nodejs, and mongodb. you can see my profile, comment to my posts and post your opinion also."
        />
        <ProjectInfo
          link="https://poc-smartorder.life/"
          image="/smart_order_project.png"
          direction="left"
          overview="web order system for mobile device like uber eats."
          detail="this is implemented by react, redux, styledcomponents and laravel. this system can search your near super market, add product you want and buy at your credit card. also can use coupon or use premier service too."
        />
      </div>
    </Section>
  );
};

export default Project;
