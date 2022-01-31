import { useState } from "react";
import ContentRight from "../components/ContentRight";
import ContentLeft from "../components/ContentLeft";
import HomeHeader from "../components/HomeHeader";
import NavigationDrawer from "../components/NavigationDrawer";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className=" shadow bg-white drawer">
      <Head>
        <title>INA Agro-GARLIC</title>
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
          <div className={`bg-primary-dark`}>
            <div className="container mx-auto pb-40">
              <div className="flex flex-wrap pt-40">
                <div className="w-10/12 md:w-8/12 lg:w-8/12 text-justify ">
                  <div className="text-5xl m-5 font-semibold text-white">
                    {`About INA Agro-GARLIC`}
                  </div>
                  <div className="m-5 text-white">{`INA Agro-GARLIC (Agroecological Assessment of Land Suitability for Garlic) adalah Sistem Informasi Geografis Kesesuaian Agroekologi untuk Bawang Putih pada kawasan prioritas pengembangan lahan bawang putih di Indonesia.  
            Struktur klasifikasi kesesuaian lahan mengikuti kerangka FAO (1976)`}</div>
                  <div className="m-5 cursor-pointer py-5 w-40 bg-primary-coco text-center text-white rounded-xl hover:bg-primary-darkcoco hover:text-white">
                    <Link href="/about">{`more info`}</Link>
                  </div>
                </div>
                <img
                  src={`./circle_garlic.png`}
                  className="my-10 mx-10 h-72 w-72"
                  alt=""
                />
              </div>
            </div>
          </div>

          <ContentLeft
            title="About Bawang Putih"
            content="Bawang putih (Allium sativum L.) merupakan komoditas hortikultura yang penting bagi masyarakat Indonesia mengingat ragam dan jumlah pemanfaatannya. Selain dapat dimanfaatkan sebagai bahan penyedap makanan hampir di setiap masakan, komoditas ini juga berperan sebagai obat bagi beberapa jenis penyakit. Umbi bawang putih dapat digunakan untuk membantu menurunkan tekanan darah tinggi, mengobati gangguan pernafasan, sakit kepala, wasir, susah buang air besar, memar atau luka sayat, cacingan, insomnia, kolesterol, influenza, gangguan saluran kencing, dan lain-lain. Keadaan ini membawa dampak terhadap tingginya nilai ekonomis bawang putih di mata masyarakat Indonesia. Sumber: Panduan Budidaya Bawang Putih, Kementerian Pertanian Badan Penelitian dan Pengembangan Pertanian Balai Pengkajian Teknologi Pertanian Jawa Timur, Tahun 2018."
            button="more info"
          ></ContentLeft>
        </div>
        <Footer background="bg-primary-dark" textColor="text-white" />
      </div>
    </div>
  );
}
