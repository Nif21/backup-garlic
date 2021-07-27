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
export default function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div class="flex flex-col drawer-content">
      <Carousel />  
      <Carousel />  
        <div
          class={` bg-black w-full cursor-pointer hover:bg-gray-900 hidden md:block lg:block fixed`}
          onClick={handleClick}
        >
                <HomeHeader active={active} handleClick={handleClick} />
        </div>
          
      </div>
    </>
  );
}
