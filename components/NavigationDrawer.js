import Link from 'next/link'
import Header from '../components/Header'

export default function NavigationDrawer({handleClick}){
    return (
      <>
        <label for="my-drawer" class="drawer-overlay" />
        <ul class="menu p-4 overflow-y-auto w-80 bg-black text-white ">
          <li>
            <label for="my-drawer" onClick={handleClick}>
              <Header />
            </label>
          </li>
          <li>
            <div class="my-5 hover:text-gray-500 cursor-pointer">Home</div>
          </li>
          <li>
            <div class="my-5 hover:text-gray-500 cursor-pointer">
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
          </li>
          <li>
            <div class="my-5 hover:text-gray-500 cursor-pointer">
              <Link href="/maps">
                <a>Peta Bawang Putih</a>
              </Link>
            </div>
          </li>
          <li>
            <div class="my-5 hover:text-gray-500 cursor-pointer">
              <Link href="/input">
                <a>Input Pengguna</a>
              </Link>
            </div>
          </li>
        </ul>
      </>
    );
}