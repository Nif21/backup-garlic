import Image from "next/image";
import Link from "next/link";

export default function Header({ handleClick }) {
  return (
    <div className="flex">
      <div className="flex">
        <img
          src="logo_ipb.png"
          className="w-16 h-16 relative cursor-pointer"
          onClick={handleClick}
          alt=""
        />
        <div>
          <div className="text-2xl mx-5 mt-2  text-black">INA Agro-GARLIC</div>
          <div className="mx-5  text-black text-xs">
            Agroecological Assessment of Land Suitability for Garlic
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <nav className="hidden md:flex pt-5 pr-32">
          <div className="relative  mx-auto space-x-20 ">
            <button
              type="button"
              className="text-black text-lg hover:underline hover:text-primary-dark"
              aria-expanded="false"
            >
              <Link href="/">
                <span>Home</span>
              </Link>
            </button>

            <button
              type="button"
              className="text-black text-lg hover:underline hover:text-primary-dark"
              aria-expanded="false"
            >
              <Link href="/about">
                <span>About</span>
              </Link>
            </button>
            <button
              type="button"
              className="text-black text-lg hover:underline hover:text-primary-dark"
              aria-expanded="false"
            >
              <Link href="/maps">
                <span>Peta</span>
              </Link>
            </button>
            <button
              type="button"
              className="text-black text-lg hover:underline hover:text-primary-dark"
              aria-expanded="false"
            >
              <Link href="/filter">
                <span>Filter</span>
              </Link>
            </button>
            <button
              type="button"
              className="text-black text-lg hover:underline hover:text-primary-dark"
              aria-expanded="false"
            >
              <Link href="/input">
                <span>Penilaian Kesesuaian Lahan</span>
              </Link>
            </button>
            <button
              type="button"
              className="text-black text-lg hover:underline hover:text-primary-dark"
              aria-expanded="false"
            >
              <Link href="/input-file">
                <span>File Input</span>
              </Link>
            </button>
          </div>
        </nav>
      </div>
      <Link href="/login">
        <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-8  border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-coco hover:bg-primary-darkcoco">
          Login
        </a>
      </Link>
    </div>
  );
}
