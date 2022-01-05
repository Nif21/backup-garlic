import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import Footer from "../../components/Footer";
import { Formik } from "formik";
import FormikUploadFile from "../../components/inputFile/FormikUploadFile";
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
            <div class="container mx-auto">
              <div class="mx-64">
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Upload File SPT anda disini
              </h2>
              <FormikUploadFile />           
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default index;
