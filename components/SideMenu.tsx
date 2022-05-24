import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsSunFill } from "react-icons/bs";
import { GiAstronautHelmet } from "react-icons/gi";
import { IoMdHome, IoMdMoon } from "react-icons/io";
interface Props {}

function SideMenu({}: Props) {
  const { theme, setTheme } = useTheme();
  const onClick = () => {
    return setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col items-center w-16 h-auto shadow-md p-4 fixed right-4 top-36 z-50 bg-zinc-500 bg-opacity-50 rounded-lg">
      <div className="flex flex-col items-center justify-end text-xl text-white gap-4">
        <div className="p-2 cursor-pointer" onClick={onClick}>
          {theme === "light" ? <IoMdMoon /> : <BsSunFill />}
        </div>
        <div className="p-2 cursor-pointer">
          <Link href="/">
            <a>
              <IoMdHome />
            </a>
          </Link>
        </div>
        <div className="p-2 cursor-pointer">
          <Link href="https://www.instagram.com/yoru_cha/">
            <a>
              <BsInstagram />
            </a>
          </Link>
        </div>
        <div className="p-2 cursor-pointer">
          <Link href="https://github.com/jooyeal">
            <a>
              <BsGithub />
            </a>
          </Link>
        </div>
        <div className="p-2 cursor-pointer">
          <Link href="/astro">
            <a>
              <GiAstronautHelmet />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
