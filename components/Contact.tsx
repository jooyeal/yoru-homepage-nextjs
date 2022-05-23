import React, { ReactElement, Ref } from "react";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import Section from "./Section";
import TextAnimation from "./TextAnimation";

interface Props {
  sectionRef: Ref<HTMLDivElement>;
}

interface ContactInfoProps {
  icon: ReactElement;
  content: string;
}

const ContactInfo = ({ icon, content }: ContactInfoProps) => {
  return (
    <div className="flex gap-4">
      <p className="text-4xl">{icon}</p>
      <p className="flex items-center text-xl">{content}</p>
    </div>
  );
};
function Contact({ sectionRef }: Props) {
  return (
    <Section sectionRef={sectionRef} sectionName="CONTACT">
      <div className="p-6 h-4/6 flex flex-col justify-center items-center gap-8">
        <ContactInfo icon={<SiGmail />} content="jyol1234@gmail" />
        <ContactInfo icon={<SiInstagram />} content="yoru_cha" />
        <ContactInfo icon={<SiGithub />} content="jooyeal" />
      </div>
    </Section>
  );
}

export default Contact;
