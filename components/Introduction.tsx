import Image from "next/image";
import React, { Ref } from "react";
import Section from "./Section";

interface Props {
  sectionRef: Ref<HTMLDivElement>;
}

function Introduction({ sectionRef }: Props) {
  return (
    <Section sectionRef={sectionRef} sectionName="INTRODUCTION">
      <div className="p-4 font-semibold flex items-center">
        <div
          className="w-1/2 overflow-scroll flex flex-col items-center hidden-scrollbar"
          style={{ height: "calc(100vh - 10rem)" }}
        >
          <div>
            <Image
              className="rounded-lg"
              src="/8.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/9.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/10.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/1.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/2.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/3.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/4.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/5.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/6.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/7.jpeg"
              width={368}
              height={368}
            />
          </div>
        </div>
        <div
          className="w-1/2 p-4 font-introduction overflow-auto hidden-scrollbar break-all mobile:text-xs"
          style={{ height: "calc(100vh - 10rem)" }}
        >
          {`Hello, my name is Juyeol Cha. Originally from Korea, I am currently working as a software engineer in Japan, specializing in front-end development. I have a passion for retro styles and particularly enjoy sipping drinks at Japanese izakayas. Fluent in both Korean and Japanese, I am actively studying English, with a future goal of pursuing development work in Australia.

My hobbies are diverse, ranging from watching movies and animations to playing games. As a programmer, I find programming itself to be a hobby. I thrive on constant challenges and learning, aiming to produce better results in the ever-evolving field of front-end development.

I have a keen interest in various cultures and languages, enjoying travel to accumulate new experiences and relishing the growth that comes with it.

If you have any questions or opportunities for collaboration, please feel free to contact me via email. I look forward to the prospect of working together on exciting projects!`}
        </div>
      </div>
    </Section>
  );
}

export default Introduction;
