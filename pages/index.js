import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import ContentRight from "../components/ContentRight";
import ContentLeft from "../components/ContentLeft";
import Header from "../components/Header";
import HomeHeader from "../components/HomeHeader";
import NavigationDrawer from "../components/NavigationDrawer";
import Carousel from "../components/Carousel";
import Link from "next/link";

export default function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div class=" shadow bg-base-200 drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side flex-none hidden lg:block">
        <NavigationDrawer handleClick={handleClick} />
      </div>
      <div class="flex flex-col drawer-content">
        <HomeHeader active={active} handleClick={handleClick} />
        <Carousel />
        <ContentLeft
          title="About Garlic"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
          button="more info"
        ></ContentLeft>
        <ContentRight
          title="About Garlic"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
          button="more info"
          background="bg-black"
        ></ContentRight>
        <div class="bg-white">
          <div class="container mx-auto pb-10">
            <div class="flex flex-wrap pt-20">
              <img src="/ipb.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
