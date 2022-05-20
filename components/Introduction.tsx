import Image from "next/image";
import React, { Ref } from "react";

interface Props {
  sectionRef: Ref<HTMLDivElement>;
}

function Introduction({ sectionRef }: Props) {
  return (
    <div ref={sectionRef} className="w-screen h-screen p-4">
      <p className="text-3xl p-4 border-b-2 font-bold">INTRODUCTION</p>
      <div className="p-4 font-semibold flex">
        <div
          className="w-1/2 overflow-scroll flex flex-col items-center"
          style={{ height: "calc(100vh - 6rem)" }}
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
    </div>
  );
}

export default Introduction;
