import Link from "next/link";
import Header from "./HeaderDrawer";
import HeaderFilter from "./HeaderFilter";
import { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { clearAuth } from "../redux/actions/authAction";

export default function NavigationDrawer({ title, token, nama }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearAuth());
  };

  const AuthFeature = () => {
    return (
      <>
        <div className="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/download-file">
            <a>Downlaod File</a>
          </Link>
        </div>
      </>
    );
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
          <Link href="/peta-keseuaian-lahan">
            <a>Peta Keseuaian Lahan</a>
          </Link>
        </div>

        <div className="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/penilaian-kesesuaian-lahan">
            <a>Penilaian Kesesuaian Lahan </a>
          </Link>
        </div>
        {!(token === "" || token === undefined) && <AuthFeature />}
        {/* <div className="my-3 hover:text-black cursor-pointer px-4 ">
          <Link href="/input-file">
            <a>Input File</a>
          </Link>
        </div> */}
        <div className="flex-grow"></div>

        {token === "" || token === undefined ? (
          <div className="w-auto	 py-4  mx-4 mb-4 hover:text-gray-500 hover:bg-primary-darkcoco cursor-pointer bg-primary-coco rounded-xl">
            <Link href="/login">
              <div className="text-center">Login</div>
            </Link>
          </div>
        ) : (
          <div className="w-auto	 py-4  mx-4 mb-4 hover:text-gray-500 hover:bg-primary-darkcoco cursor-pointer bg-primary-coco rounded-xl">
            <button className="" onClick={handleClick}>
              <div className="flex mx-4 my-2">
                <HiUserCircle className="w-8 h-8" />
                <div className="text-center mx-4 mt-1">{nama}</div>
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
