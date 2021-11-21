import Head from "next/head";
import { useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import Footer from "../../components/Footer";
import FaktorDikendalikan from "../../components/input/FaktorDikendalikan";
import FaktorDikoreksi from "../../components/input/FaktorDikoreksi";
import FaktorTidakDapat from "../../components/input/FaktorTidakDapat";

function index() {
  const [active, setActive] = useState(false);

 
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div class=" shadow bg-base-200 drawer">
        <Head>
          <title>INA Garlic</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side flex-none hidden lg:block">
          <NavigationDrawer handleClick={handleClick} />
        </div>
        <div class="flex flex-col drawer-content  h-screen w-screen">
          <HomeHeader active={active} handleClick={handleClick} />
          <div class="mt-5 md:mt-0 md:col-span-2 flex-grow bg-white ">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Masukkan Variabel Kesesuaian Lahan Anda
            </h2>
            <div class="px-4 py-5  sm:p-6">
              <div class="grid grid-cols-6 gap-6 mx-auto">
              <FaktorDikendalikan/>
              <FaktorDikoreksi/>
              <FaktorTidakDapat/>
                {/*  */}
              </div>
              <button
                type="submit"
                class="w-full mt-8 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco "
              >
                Save
              </button>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default index;
