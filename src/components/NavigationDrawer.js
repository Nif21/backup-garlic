import Link from "next/link";
import Header from "./Header";

export default function NavigationDrawer({ handleClick }) {
  return (
    <>
      <label for="my-drawer" class="drawer-overlay" />
      <div class="flex flex-col overflow-y-auto w-80 bg-black text-white">
        <label for="my-drawer" onClick={handleClick} class="p-4">
          <Header />
        </label>
        <div class="my-5 hover:text-gray-500 cursor-pointer p-4">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div class="my-5 hover:text-gray-500 cursor-pointer p-4">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div class="my-5 hover:text-gray-500 cursor-pointer p-4">
          <Link href="/maps">
            <a>Peta Bawang Putih</a>
          </Link>
        </div>
        <div class="my-5 hover:text-gray-500 cursor-pointer p-4">
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
