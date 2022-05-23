import React, { ReactNode, Ref } from "react";

interface Props {
  sectionRef: Ref<HTMLDivElement>;
  sectionName: string;
  children: ReactNode;
}

function Section({ sectionRef, sectionName, children }: Props) {
  return (
    <div ref={sectionRef} className="w-screen h-screen p-4">
      <p className="text-3xl p-4 border-b-2 font-bold">{sectionName}</p>
      {children}
    </div>
  );
}

export default Section;
