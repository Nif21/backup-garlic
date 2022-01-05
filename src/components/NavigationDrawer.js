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
      <label for="my-drawer" className="drawer-overlay" />
      <div className="flex flex-col overflow-y-auto w-80 bg-primary-normal text-white">
        <label for="my-drawer" onClick={handleClick} className="p-4">
          {title != null ? <HeaderFilter /> : <Header />}
        </label>
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
          <Link href="/maps">
            <a>Peta Keseuaian Lahan</a>
          </Link>
        </div>
        <div
          className="my-3 hover:text-black cursor-pointer px-4 "
          onClick={expanded}
        >
          <div className="flex flex-row">
            <div>Peta Relief</div>
            <div className="flex-grow"></div>
            <div>{isExpand ? <HiChevronUp /> : <HiChevronDown />}</div>
          </div>
        </div>
        <div className={` ${!isExpand ? "block" : "hidden"}  px-4 `}>
          <div className="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
            <Link href={`/filter/drainase`}>
              {title == "Drainase" ? (
                <b className="underline"> Drainase </b>
              ) : (
                <a>Drainase </a>
              )}
            </Link>
          </div>
          <MediaPerakaran expand={isExpand} title={title} />
          <RetensiHara expand={isExpand} title={title} />
          {/* <div className="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/kedalaman-mineral-tanah`}>
            {(title == "Kedalaman Mineral Tanah") ? <b className="underline"> Kedalaman Mineral Tanah </b>  : <a>Kedalaman Mineral Tanah </a> }     
          </Link>
        </div>     
        
        <div className="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/tekstur-tanah`}>
            {(title == "Tekstur Tanah") ? <b className="underline"> Tekstur Tanah </b>  : <a>Tekstur Tanah </a> }     
          </Link>
        </div>  */}
          {/* <div className="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/kemasaman-tanah`}>
            {(title == "Kemasaman Tanah") ? <b className="underline"> Kemasaman Tanah </b>  : <a>Kemasaman Tanah </a> }     
          </Link>
        </div>
        <div className="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/kapasitas-tukar-kation`}>
            {(title == "Kapasitas Tukar Kation") ? <b className="underline"> Kapasitas Tukar Kation </b>  : <a>Kapasitas Tukar Kation </a> }     
          </Link>
        </div>   
        <div className="my-3  mx-3 hover:text-gray-500 cursor-pointer px-4 ">
          <Link href={`/filter/kejenuhan-basa`}>
            {(title == "Kejenuhan Basa") ? <b className="underline"> Kejenuhan Basa </b>  : <a>Kejenuhan Basa </a> }     
          </Link>
        </div>  */}
          <div className="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
            <Link href={`/filter/landform`}>
              {title == "Landform" ? (
                <b className="underline"> Landform </b>
              ) : (
                <a>Landform </a>
              )}
            </Link>
          </div>
          <div className="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
            <Link href={`/filter/bahan-induk`}>
              {title == "Bahan Induk" ? (
                <b className="underline"> Bahan Induk </b>
              ) : (
                <a>Bahan Induk </a>
              )}
            </Link>
          </div>

          <div className="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
            <Link href={`/filter/relief`}>
              {title == "Relief" ? (
                <b className="underline"> Relief </b>
              ) : (
                <a>Relief </a>
              )}
            </Link>
          </div>
          <div className="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
            <Link href={`/filter/luas`}>
              {title == "Luas" ? (
                <b className="underline"> Luas </b>
              ) : (
                <a>Luas </a>
              )}
            </Link>
          </div>
          <div className="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
            <Link href={`/filter/persentase-luas`}>
              {title == "Persentase Luas" ? (
                <b className="underline"> Persentase Luas </b>
              ) : (
                <a>Persentase Luas </a>
              )}
            </Link>
          </div>
        </div>
        <div className="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/input">
            <a>Input Pengguna</a>
          </Link>
        </div>
        <div className="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/input-file">
            <a>Input File</a>
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="py-4  mx-4 mb-4 hover:text-gray-500 hover:bg-primary-darkcoco cursor-pointer bg-primary-coco rounded-xl">
          <Link href="/login">
            <div className="text-center">Login</div>
          </Link>
        </div>
      </div>
    </>
  );
}
