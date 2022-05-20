import { useTheme } from "next-themes";
import React from "react";
import { BsMoonFill } from "react-icons/bs";
type Props = {};

function SideMenu({}: Props) {
  const { theme, setTheme } = useTheme();
  const onClick = () => {
    return setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex flex-col items-center w-16 h-auto shadow-md p-4 fixed right-4 top-36 z-50 bg-zinc-500 bg-opacity-50 rounded-lg">
      <div className="flex justify-end text-xl text-white">
        <div className="p-2 cursor-pointer" onClick={onClick}>
          <BsMoonFill />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
