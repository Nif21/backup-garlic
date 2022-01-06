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
      <div className="shadow bg-base-200 drawer">
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
          <div className="flex-grow ">
            {/* About Garlic */}
            <div className="p-4 mb-16">
              <div className="mx-16 mt-16 mb-8 text-2xl font-bold ">
                Apa itu INA Agro-GARLIC
              </div>
              <div className="flex flex-wrap">
                <div className="mx-16 w-8/12 sm:7/12 md:7/12 text-lg text-justify">
                  INA Agro-GARLIC (Agroecological Assessment of Land Suitability
                  for Garlic) adalah Sistem Informasi Geografis Kesesuaian
                  Agroekologi untuk Bawang Putih pada kawasan prioritas
                  pengembangan lahan bawang putih di Indonesia. Struktur
                  klasifikasi kesesuaian lahan mengikuti kerangka FAO (1976)
                  yaitu
                  <br />
                  <br />
                  <b>Kelas S1, Sangat Sesuai</b>: Lahan tidak mempunyai faktor
                  pembatas yang berarti atau nyata terhadap penggunaan secara
                  berkelanjutan, atau faktor pembatas yang bersifat minor dan
                  tidak akan mereduksi produktivitas lahan secara nyata
                  <br />
                  <br />
                  <b>Kelas S2, Cukup Sesuai</b>: Lahan mempunyai faktor
                  pembatas, dan faktor pembatas ini akan berpengaruh terhadap
                  produktivitasnya, memerlukan tambahan masukan (input).
                  Pembatas tersebut biasanya dapat diatasi oleh petani sendiri.
                  <br />
                  <br />
                  <b>Kelas S3, Sesuai Marginal</b>: Lahan mempunyai faktor
                  pembatas yang berat, dan faktor pembatas ini akan berpengaruh
                  terhadap produktivitasnya, memerlukan tambahan masukan yang
                  lebih banyak daripada lahan yang tergolong S2. Untuk mengatasi
                  faktor pembatas pada S3 memerlukan modal tinggi, sehingga
                  perlu adanya bantuan atau campur tangan (intervensi)
                  pemerintah atau pihak swasta. Tanpa bantuan tersebut petani
                  tidak mampu mengatasinya
                  <br />
                  <br />
                  <b>Kelas N, Tidak Sesuai</b>: Lahan yang tidak sesuai (N)
                  karena mempunyai faktor pembatas yang sangat berat dan/atau
                  sulit diatasi.
                </div>
                <img src="circle.png" className="w-32 h-32 mx-auto" />
              </div>
            </div>
            <div className="p-4 mb-16">
              <div className="mx-16 mt-16 mb-8 text-2xl font-bold ">
                Syarat tumbuh bawang putih
              </div>
              <div className="flex flex-wrap">
                <div className="mx-16 w-8/12 sm:7/12 md:7/12 text-lg text-justify">
                  Syarat tumbuh bawang putih yang dianalisis dikelompokan ke
                  dalam tiga kategori yaitu: <br />
                  1. Faktor yang dapat dikendalikan, yang terdiri dari <br />
                  a. Drainase <br />
                  b. Kapasitas Tukar Kation (cmol) <br />
                  c. Tekstur Tanah <br />
                  d. Kemasaman Tanah (pH) <br /> <br />
                  2. Faktor yang efeknya dapat dikoreksi, yang terdiri dari{" "}
                  <br />
                  a. Kejenuhan Basa (%) <br />
                  b. Kedalaman Mineral Tanah (cm) <br /> <br />
                  3. Faktor yang tidak dapat dikendalikan dan dikoreksi yaitu
                  faktor cuaca, yang terdiri dari <br />
                  a. Temperatur (c), rata-rata (per bulan) <br />
                  b. Curah Hujan (mm), (total per bulan) <br />
                  c. Lama Penyinaran (jam per hari), (rata-rata bulanan)
                </div>
                <img src="circle.png" className="w-32 h-32 mx-auto" />
              </div>
            </div>

            {/* Profil Pengembang */}
            <div className="bg-primary-dark py-4 px-4">
              <div className="mx-16 mt-16 mb-8 text-2xl font-bold text-white">
                Profil Pengembang
              </div>
              <div>
                <div className="pb-16">
                  <div className="md:flex md:justify-center md:space-x-32 md:px-14">
                    <Pengembang />
                    <Pengembang />
                    <Pengembang />
                  </div>
                  <div className="md:flex md:justify-center md:space-x-32 md:px-14">
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
