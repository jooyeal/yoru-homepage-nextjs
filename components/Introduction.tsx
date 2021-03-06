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
          {`Hello i'm Juyeol Cha. i'm working as web deveolpor in japan. though i
          lived in SouthKorea until i graduate from university, i came to Japan
          because i love japanese culture and food. especially i love japanese
          pub called IZAKAYA which can fill pretty old-fashion when SHOWA mood.
          i'm a bilingual now who can speak Korean and Japanese. i'm studying
          English also to become a trilingual. i love my job as deveoloper
          because i like to make things. i'll keep to make an effort to be a good developer.`}
        </div>
      </div>
    </Section>
  );
}

export default Introduction;
