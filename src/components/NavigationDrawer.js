import Link from "next/link";
import Header from "./Header";
import { useState } from "react";
import { HiChevronDown,HiChevronUp } from "react-icons/hi";
import { useRouter } from 'next/router';

export default function NavigationDrawer({ handleClick, expand }) {
  
  const [isExpand, setExpand] = useState(expand ? expand : false)
  console.log(isExpand)
  const expanded = () => {
    setExpand(!isExpand);
  };
  const router = useRouter();

  const handlePassDataPages = () => {
      router.push({
        pathname: '/maps',
        query: {name: 'test'}
      })
  }
  return (
    <>
      <label for="my-drawer" class="drawer-overlay" />
      <div class="flex flex-col overflow-y-auto w-80 bg-black text-white">
        <label for="my-drawer" onClick={handleClick} class="p-4">
          <Header />
        </label>
        <div class="my-3 hover:text-gray-500 cursor-pointer px-4">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div class="my-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div class="my-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Peta Keseuaian Lahan</a>
          </Link>
        </div>
        <div class="my-3 hover:text-gray-500 cursor-pointer px-4 " onClick={expanded}>
          <div class="flex flex-row"> 
          <div>Peta Relief</div>
          <div class="flex-grow"></div>
          <div>
            {isExpand ? <HiChevronUp/> : <HiChevronDown/>}
          </div>
          </div>
        </div>
        <div class={` ${isExpand ? 'block':'hidden'}  px-4 `}  >
        <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 " onClick={handlePassDataPages}>
            <a>Peta Keseuaian Lahan</a>
        </div>
        <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 " onClick={handlePassDataPages}>
            <a>Peta Keseuaian Lahan</a>

        </div>   <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Peta Keseuaian Lahan</a>
          </Link>
        </div>   <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Peta Keseuaian Lahan</a>
          </Link>
        </div>   <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Peta Keseuaian Lahan</a>
          </Link>
        </div>   <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Peta Keseuaian Lahan</a>
          </Link>
        </div>
               </div>
        <div class="my-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/input">
            <a>Input Pengguna</a>
          </Link>
        </div>
        <div class="flex-grow"></div>
        <div class="py-4  mx-4 mb-4 hover:text-gray-500 cursor-pointer bg-coco-normal rounded-xl">
          <Link href="/login">
            <div class="text-center">Login</div>
          </Link>
        </div>
      </div>
    </>
  );
}
