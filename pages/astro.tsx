import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiLoaderAlt } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroller";

interface Props {
  astroInfo: Array<{ explanation: string; url: string; title: string }>;
}

const Card = ({
  explanation,
  title,
  url,
}: {
  explanation: string;
  title: string;
  url: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative h-auto">
      <Image
        className="rounded-lg"
        src={url}
        width={320}
        height={240}
        objectFit="cover"
      />
      <div
        className={`absolute bottom-0 w-full rounded-bl-lg rounded-br-lg ${
          open ? "h-full rounded-tl-lg rounded-br-tg" : "h-10"
        } bg-slate-300 bg-opacity-50`}
      >
        <div
          className="h-10 flex items-center justify-center w-full text-lg rounded-lg cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
        <div
          style={{ height: `${open ? "calc(100% - 4rem)" : "0px"} ` }}
          className={`${
            open ? "" : "hidden"
          } overflow-auto hidden-scrollbar transition-all duration-700 rounded-lg text-black p-2 break-all`}
        >
          <div className="font-bold text-lg rounded-lg">{title}</div>
          {explanation}
        </div>
      </div>
    </div>
  );
};
function Astro({ astroInfo }: Props) {
  const [info, setInfo] = useState(astroInfo);
  const load = async () => {
    const response = await axios.get(
      "https://yoru-homepage-nextjs.vercel.app/api/nasa"
    );
    setInfo([...info, ...response.data.info]);
  };
  return (
    <>
      <video
        loop
        autoPlay
        muted
        playsInline
        className="fixed w-screen h-screen object-fill"
      >
        <source src="/astro_background.mp4" type="video/mp4" />
      </video>
      <div className="fixed text-5xl font-bold pl-4 z-20 mobile:text-2xl">{`NASA'S INFORMATION`}</div>
      <InfiniteScroll
        pageStart={0}
        hasMore={true}
        loadMore={load}
        loader={
          <div
            className="w-full flex justify-center items-center animate-spin text-2xl"
            key="loader"
          >
            <BiLoaderAlt />
          </div>
        }
      >
        <div className="p-6 pt-14 flex flex-wrap justify-center items-center gap-6">
          {info.map((info, index) => (
            <Card
              key={index}
              url={info.url}
              explanation={info.explanation}
              title={info.title}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const astroInfo = await axios.get(
    "https://yoru-homepage-nextjs.vercel.app/api/nasa"
  );

  return {
    props: { astroInfo: astroInfo.data.info },
  };
};

export default Astro;
