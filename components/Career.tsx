import React, { Ref } from "react";
import Section from "./Section";

interface Props {
  sectionRef: Ref<HTMLDivElement>;
}

function Career({ sectionRef }: Props) {
  return (
    <Section sectionRef={sectionRef} sectionName={`CAREER & HISTORY`}>
      <div className="p-4 font-semibold flex justify-between w-full mobile:flex-col">
        <div className="w-1/2 mobile:w-full">
          <div className="w-full flex justify-start text-xl">HISTORY</div>
          <div className="p-6">
            <div className="text-sm pb-2 pt-2">
              <div className="pb-2 pt-2">
                <div className="text-lg">2021-01</div>
                START WORK AS WEBDEVELOPER IN JAPAN
              </div>
              <div className="text-sm pb-2 pt-2">
                <div className="text-lg">2020-03</div>
                START WORKING HOLIDAY IN JAPAN
              </div>
              <div className="text-sm pb-2 pt-2">
                <div className="text-lg">2020-03</div>
                BACHELOR OF COMPUTER SCIENCE IN UNIVERSERTY OF KANGWON
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mobile:w-full">
          <div className="w-full flex justify-start text-xl">CAREER</div>
        </div>
      </div>
    </Section>
  );
}

export default Career;
