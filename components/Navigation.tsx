import React, { MutableRefObject, Ref, useState } from "react";

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
      {sections.map((section, index) => (
        <div key={index}>
          <span
            className={`transition-all cursor-pointer ${
              current === index ? "text-xl border-b-2" : ""
            }`}
            onClick={() => onClick(index)}
          >
            {section}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Navigation;
