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

export default function Home() {
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
          <div class="flex-grow ">
            {/* About Garlic */}
            <div class="p-4 mb-16">
              <div class="mx-16 mt-16 mb-8 text-2xl font-bold ">
                Apa itu INA Garlic
              </div>
              <div class="flex flex-wrap">
                <div class="mx-16 w-8/12 sm:7/12 md:7/12 text-lg text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <img src="circle.png" class="w-32 h-32 mx-auto" />
              </div>
            </div>
            <div class="p-4 mb-16">
              <div class="mx-16 mt-16 mb-8 text-2xl font-bold ">
                Apa itu INA Garlic
              </div>
              <div class="flex flex-wrap">
                <div class="mx-16 w-8/12 sm:7/12 md:7/12 text-lg text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <img src="circle.png" class="w-32 h-32 mx-auto" />
              </div>
            </div>

            {/* Profil Pengembang */}
            <div class="bg-primary-dark py-4 px-4">
              <div class="mx-16 mt-16 mb-8 text-2xl font-bold text-white">
                Profil Pengembang
              </div>
              <div>
                <div class="pb-16">
                  <div class="md:flex md:justify-center md:space-x-32 md:px-14">
                    <Pengembang />
                    <Pengembang />
                    <Pengembang />
                  </div>
                  <div class="md:flex md:justify-center md:space-x-32 md:px-14">
                    <Pengembang />
                    <Pengembang />
                    <Pengembang />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
