import Head from "next/head";
import { useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import Footer from "../../components/Footer";
import FormikUploadFile from "../../components/inputFile/FormikUploadFile";
function Index() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div className=" shadow bg-base-200 drawer">
        <Head>
          <title>INA Agro-GARLIC</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side flex-none hidden lg:block">
          <NavigationDrawer handleClick={handleClick} />
        </div>
        <div className="flex flex-col drawer-content  h-screen w-screen bg-primary-dark">
          <HomeHeader active={active} handleClick={handleClick} />
          <div className="container mx-auto my-16">
            <div className=" md:mt-0 md:col-span-2 flex-grow bg-white  mx-40 p-8 rounded">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">
                Upload File SPT
              </h2>
              <FormikUploadFile />
            </div>
          </div>
          <Footer background="bg-white" textColor="text-black" />
        </div>
      </div>
    </>
  );
}

export default Index;
