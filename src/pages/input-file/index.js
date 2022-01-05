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
      <div className=" shadow bg-base-200 drawer">
        <Head>
          <title>INA Garlic</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side flex-none hidden lg:block">
          <NavigationDrawer handleClick={handleClick} />
        </div>
        <div className="flex flex-col drawer-content  h-screen w-screen">
          <HomeHeader active={active} handleClick={handleClick} />
          <div className="mt-5 md:mt-0 md:col-span-2 flex-grow bg-white ">
            <div className="container mx-auto">
              <div className="mx-64">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
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
