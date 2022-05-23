import React, {
  FormEvent,
  ReactElement,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import { SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import Section from "./Section";
import emailjs from "emailjs-com";

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
  const formRef = useRef<any>(null);
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID ?? "",
        process.env.EMAIL_TEMPLATE_ID ?? "",
        formRef.current,
        process.env.EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setSent(true);
            setError(false);
          }
        },
        (error) => {
          setSent(true);
          setError(true);
        }
      );
  };
  return (
    <Section sectionRef={sectionRef} sectionName="CONTACT">
      <div className="flex justify-center items-center p-10">
        {sent ? (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <div>{!error ? "THANK YOU FOR MESSAGE!" : "SEND FAILD..."}</div>
            <button
              onClick={() => setSent(false)}
              className="border-2 p-2 rounded-md"
            >
              RETRY
            </button>
          </div>
        ) : (
          <form
            className="w-full flex flex-col items-center justify-center gap-2"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div className="w-full">
              <div>YOUR NAME</div>
              <input
                className="w-full bg-none border-2 outline-none rounded-md p-1"
                type="text"
                name="user_name"
              />
            </div>
            <div className="w-full">
              <div>YOUR EMAIL</div>
              <input
                className="w-full bg-none border-2 outline-none rounded-md p-1"
                type="email"
                name="user_email"
              />
            </div>
            <div className="w-full">
              <div>MESSAGE</div>
              <textarea
                className="w-full bg-none border-2 outline-none rounded-md p-1 resize-none"
                rows={5}
                name="message"
              />
            </div>
            <button className="border-2 p-2 rounded-md" type="submit">
              SEND
            </button>
          </form>
        )}
      </div>
      {/* <div className="p-6 h-4/6 flex flex-col justify-center items-center gap-8">
          <ContactInfo icon={<SiGmail />} content="jyol1234@gmail" />
          <ContactInfo icon={<SiInstagram />} content="yoru_cha" />
          <ContactInfo icon={<SiGithub />} content="jooyeal" />
        </div> */}
    </Section>
  );
}

export default Contact;
