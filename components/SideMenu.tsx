import { useTheme } from "next-themes";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  BsChevronDoubleDown,
  BsChevronDoubleUp,
  BsMoonFill,
} from "react-icons/bs";
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
          <BsMoonFill />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
