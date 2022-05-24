import React, { Ref } from "react";
import Section from "./Section";

interface Props {
  sectionRef: Ref<HTMLDivElement>;
}

const List = ({ date, desc }: { date: string; desc: string }) => {
  return (
    <div className="text-sm pb-2 pt-2">
      <div className="text-lg">{date}</div>
      {desc}
    </div>
  );
};
function Career({ sectionRef }: Props) {
  return (
    <Section sectionRef={sectionRef} sectionName={`CAREER & HISTORY`}>
      <div className="p-4 font-semibold flex justify-between w-full mobile:flex-col">
        <div className="w-1/2 mobile:w-full">
          <div className="w-full flex justify-start text-xl">HISTORY</div>
          <div className="p-6">
            <List date="2021-01" desc="START WORK AS WEBDEVELOPER IN JAPAN" />
            <List date="2020-03" desc="START WORKING HOLIDAY IN JAPAN" />
            <List
              date="2020-03"
              desc="BACHELOR OF COMPUTER SCIENCE IN UNIVERSERTY OF KANGWON"
            />
          </div>
        </div>
        <div className="w-1/2 mobile:w-full">
          <div className="w-full flex justify-start text-xl">CAREER</div>
          <div className="p-6">
            <List
              date="2021-01"
              desc="WORKING COMPANY OF ASIA INFORMATION SYSTEM IN JAPAN"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Career;
