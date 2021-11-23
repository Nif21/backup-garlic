import Head from "next/head";
import { useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import Footer from "../../components/Footer";
import FaktorDikendalikan from "../../components/input/FaktorDikendalikan";
import FaktorDikoreksi from "../../components/input/FaktorDikoreksi";
import FaktorTidakDapat from "../../components/input/FaktorTidakDapat";
import FormikInput from "../../components/input/FormikInput";

function index() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

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
            {/* <div class="px-4 py-5  sm:p-6">
              <div class="grid grid-cols-6 gap-6 mx-auto">
                <FaktorDikendalikan />
                <FaktorDikoreksi />
                <FaktorTidakDapat />
            
              </div>
              <button
                type="submit"
                class="w-full mt-8 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco "
                onClick={handleOpen}
              >
                Save
              </button>
            </div> */}
            <FormikInput/>
          </div>
      
          <Footer />
        </div>
      </div>
      <div
        class={`${
          open ? "hidden" : ""
        } fixed  bg-black bg-opacity-30 fixed inset-0 z-10 flex items-center justify-center overflow-auto w-full h-full`}
      >
        <div
          class="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">        
            <div class="inline-block w-1/2 mt-16 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="justify-center sm:flex sm:items-start">
           
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      class="text-xl font-bold leading-6 font-medium text-gray-900"
                      id="modal-title"
                      align="center"
                    >
                      Kesesuaian Lahan Kamu berada pada kelas S1
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleOpen}
                >
                  Selesai
                </button>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
