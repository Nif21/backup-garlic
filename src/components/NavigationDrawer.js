import Link from "next/link";
import Header from "./HeaderDrawer";
import HeaderFilter from "./HeaderFilter";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import MediaPerakaran from "./MediaPerakaran";
import RetensiHara from "./RetensiHara";

export default function NavigationDrawer({ handleClick, expand, title }) {
  const [isExpand, setExpand] = useState(expand ? expand : false);
  const expanded = () => {
    setExpand(!isExpand);
  };

  return (
    <>
      <div className="flex flex-col  h-screen bg-primary-normal text-white">
        <div className="p-4">
          {title != null ? <HeaderFilter /> : <Header />}
        </div>
        <div className="my-3 hover:text-black cursor-pointer px-4">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/filter">
            <a>Peta Keseuaian Lahan</a>
          </Link>
        </div>

        <div className="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/input">
            <a>Penilaian Kesesuaian Lahan </a>
          </Link>
        </div>
        {/* <div className="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/input-file">
            <a>Input File</a>
          </Link>
        </div> */}
        <div className="flex-grow"></div>
        <div className="w-auto	 py-4  mx-4 mb-4 hover:text-gray-500 hover:bg-primary-darkcoco cursor-pointer bg-primary-coco rounded-xl">
          <Link href="/login">
            <div className="text-center">Login</div>
          </Link>
        </div>
      </div>
    </>
  );
}
