import Link from "next/link";
import Header from "./HeaderDrawer";
import HeaderFilter from "./HeaderFilter";
import { useState } from "react";
import { HiChevronDown,HiChevronUp } from "react-icons/hi";
import MediaPerakaran from "./MediaPerakaran";
import RetensiHara from "./RetensiHara";

export default function NavigationDrawer({ handleClick, expand , title }) {
  
  const [isExpand, setExpand] = useState(expand ? expand : false)
  const expanded = () => {
    setExpand(!isExpand);
  };
  

  return (
    <>
      <label for="my-drawer" class="drawer-overlay" />
      <div class="flex flex-col overflow-y-auto w-80 bg-primary-normal text-white">
        <label for="my-drawer" onClick={handleClick} class="p-4">
          {title != null ? <HeaderFilter/> : <Header />}
        </label>
        <div class="my-3 hover:text-black cursor-pointer px-4">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div class="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div class="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/maps">
            <a>Peta Keseuaian Lahan</a>
          </Link>
        </div>
        <div class="my-3 hover:text-black cursor-pointer px-4 " onClick={expanded}>
          <div class="flex flex-row"> 
          <div>Peta Relief</div>
          <div class="flex-grow"></div>
          <div>
            {isExpand ? <HiChevronUp/> : <HiChevronDown/>}
          </div>
          </div>
        </div>
        <div class={` ${!isExpand ? 'block':'hidden'}  px-4 `}  >
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/drainase`}>
            {(title == "Drainase") ? <b class="underline"> Drainase </b>  : <a>Drainase </a> }     
          </Link>
        </div> 
        <MediaPerakaran expand={isExpand} title={title}/>
        <RetensiHara expand={isExpand} title={title}/>
        {/* <div class="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/kedalaman-mineral-tanah`}>
            {(title == "Kedalaman Mineral Tanah") ? <b class="underline"> Kedalaman Mineral Tanah </b>  : <a>Kedalaman Mineral Tanah </a> }     
          </Link>
        </div>     
        
        <div class="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/tekstur-tanah`}>
            {(title == "Tekstur Tanah") ? <b class="underline"> Tekstur Tanah </b>  : <a>Tekstur Tanah </a> }     
          </Link>
        </div>  */}
        {/* <div class="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/kemasaman-tanah`}>
            {(title == "Kemasaman Tanah") ? <b class="underline"> Kemasaman Tanah </b>  : <a>Kemasaman Tanah </a> }     
          </Link>
        </div>
        <div class="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/kapasitas-tukar-kation`}>
            {(title == "Kapasitas Tukar Kation") ? <b class="underline"> Kapasitas Tukar Kation </b>  : <a>Kapasitas Tukar Kation </a> }     
          </Link>
        </div>   
        <div class="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/kejenuhan-basa`}>
            {(title == "Kejenuhan Basa") ? <b class="underline"> Kejenuhan Basa </b>  : <a>Kejenuhan Basa </a> }     
          </Link>
        </div>  */}
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/landform`}>
            {(title == "Landform") ? <b class="underline"> Landform </b>  : <a>Landform </a> }     

          </Link>
        </div> 
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/bahan-induk`}>
            {(title == "Bahan Induk") ? <b class="underline"> Bahan Induk </b>  : <a>Bahan Induk </a> }     

          </Link>
        </div> 
     
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/relief`}>
            {(title == "Relief") ? <b class="underline"> Relief </b>  : <a>Relief </a> }     
          </Link>
        </div> 
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/luas`}>
          {(title == "Luas") ? <b class="underline"> Luas </b>  : <a>Luas </a> }     
          </Link>
        </div> 
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/persentase-luas`}>
            {(title == "Persentase Luas") ? <b class="underline"> Persentase Luas </b>  : <a>Persentase Luas </a> }     
          </Link>
        </div>  
       
      </div>
        <div class="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/input">
            <a>Input Pengguna</a>
          </Link>
        </div>
        <div class="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/input-file">
            <a>Input File</a>
          </Link>
        </div>
        <div class="flex-grow"></div>
        <div class="py-4  mx-4 mb-4 hover:text-gray-500 hover:bg-primary-darkcoco cursor-pointer bg-primary-coco rounded-xl">
          <Link href="/login">
            <div class="text-center">Login</div>
          </Link>
        </div>
      </div>
    </>
  );
}
