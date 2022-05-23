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
              src="/home.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/home.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/home.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/home.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/home.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/home.jpeg"
              width={368}
              height={368}
            />
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/home.jpeg"
              width={368}
              height={368}
            />
          </div>
        </div>
        <div className="p-4">hello</div>
      </div>
    </Section>
  );
}

export default Introduction;
