import { useState } from "react";
import ContentRight from "../components/ContentRight";
import ContentLeft from "../components/ContentLeft";
import HomeHeader from "../components/HomeHeader";
import NavigationDrawer from "../components/NavigationDrawer";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className=" shadow bg-white drawer">
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
        <div className="flex-grow bg-white">
          {/* <Carousel /> */}
          <ContentRight
            title="About Garlic"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
            button="more info"
            background="bg-primary-dark"
          ></ContentRight>
          <ContentLeft
            title="About Garlic"
            content="Bawang putih (Allium sativum) merupakan tanaman yang memiliki banyak manfaat. Salah satunya untuk mengobati berbagai penyakit terutama penyakit yang disebabkan oleh infeksi bakteri. Bawang putih dapat menghambat bakteri patogen diantaranya bakteri Gram positif dan bakteri Gram negatif. Bawang putih sangat efektif menghambat dan membunuh bakteri yang disebabkan oleh diallydisulphide (DADS) dan diallytrisulphide (DATS) yang dihasilkan oleh allisin"
            button="more info"
          ></ContentLeft>
          <ContentRight
            title="About Garlic"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
            button="more info"
            background="bg-primary-dark"
          ></ContentRight>
        </div>
        <Footer />
      </div>
    </div>
  );
}
