import Link from "next/link";
import Header from "./Header";
import { useState } from "react";
import { HiChevronDown,HiChevronUp } from "react-icons/hi";
import { useRouter } from 'next/router';

export default function NavigationDrawer({ handleClick, expand , title }) {
  
  const [isExpand, setExpand] = useState(expand ? expand : false)
  console.log(isExpand)
  const expanded = () => {
    setExpand(!isExpand);
  };
  
  const router = useRouter();
  const handleKedalaman = () => {
      router.push({
        pathname: '/maps',
        query: {name: "Kedalaman Mineral Tanah"}
      })
    }
  const handleKapasitas = () => {
    router.push({
      pathname: '/maps',
      query: {name: "Kapasitas Tukar Kation"}
    })
}
const handleKejenuhan = () => {
  router.push({
    pathname: '/maps',
    query: {name: "Kejenuhan Basa"}
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
        <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 " onClick={handleKedalaman}>
            {(title == "Kedalaman Mineral Tanah") ? <b class="underline"> Kedalaman Mineral Tanah </b>  : <a> Kedalaman Mineral Tanah </a> }      
        </div>
        <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 " onClick={handleKapasitas}>
        {(title == "Kapasitas Tukar Kation") ? <b class="underline"> Kapasitas Tukar Kation </b>  : <a> Kapasitas Tukar Kation </a> }     
        </div>  
         <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 " onClick={handleKejenuhan}>
            <a>Kejenuhan Basa</a>            
        </div>   
        <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Landform</a>
          </Link>
        </div>   
        <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Bahan Induk</a>
          </Link>
        </div>   
        <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Relief</a>
          </Link>
        </div>
        <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Luas</a>
          </Link>
        </div>
        <div class="my-3 mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Persentase Luas</a>
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
