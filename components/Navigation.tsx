import React, { MutableRefObject, Ref, useState } from "react";
import Marquee from "react-fast-marquee";

interface Props {
  sections: Array<string>;
  refs: Array<Ref<HTMLDivElement>>;
}

function Navigation({ sections, refs }: Props) {
  const [current, setCurrent] = useState<number | null>(null);
  const onClick = (index: number) => {
    setCurrent(index);
    if (refs[index])
      (
        refs[index] as MutableRefObject<HTMLDivElement>
      )?.current?.scrollIntoView();
  };
  return (
    <div className="fixed flex bottom-16 w-full z-40 font-bold justify-around items-center text-sm">
      <Marquee speed={100} gradientColor={[255, 255, 255]} gradientWidth={0}>
        {sections.map((section, index) => (
          <div key={index}>
            <span
              className={`pl-3 pr-3 transition-all cursor-pointer ${
                current === index ? "text-xl border-b-2" : ""
              }`}
              onClick={() => onClick(index)}
            >
              {section}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Navigation;
