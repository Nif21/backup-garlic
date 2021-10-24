import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ContentRight from "../../components/ContentRight";
import ContentLeft from "../../components/ContentLeft";
import Header from "../../components/Header";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import Carousel from "../../components/Carousel";
import Link from "next/link";
import Footer from "../../components/Footer";
import Pengembang from "../../components/ProfiePengembang";

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
          <div class="mt-5 md:mt-0 md:col-span-2 flex-grow " >
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <p class="mt-2 text-xl text-gray-500">
                Upload File SPT anda disini.
              </p>

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Nama Daerah
              </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Kota Anda"></textarea>
              </div>
            
            </div>

    
            <div>
              <label class="block text-sm font-medium text-gray-700">
                File SPT 
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-coco-normal hover:text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                 
                </div>
              </div>
              <p class="pl-1 mt-4">File dalam bentuk excel,shp,shx,dbf</p>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-coco-normal hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>


          <Footer />
        </div>
      </div>
    </>
    )
}

export default index
