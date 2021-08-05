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

export default function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div class=" shadow bg-base-200 drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side flex-none hidden lg:block">
          <NavigationDrawer handleClick={handleClick} />
        </div>
        <div class="flex flex-col drawer-content  h-screen w-screen">
          <HomeHeader active={active} handleClick={handleClick} />
          <div class="flex-grow mb-16">
            <div class="mx-16 mt-16 mb-8 text-2xl font-bold">
              SENTRA PRODUKSI BAWANG PUTIH
            </div>
            <div class="flex">
              <div class="mx-16 w-7/12 text-lg text-justify">
                Lokasi terget penanaman bawang Putih adalah ada di Sembalun
                Lombok Timur NTB, Temanggung Jawa Tengah, Magelang Jawa Tengah,
                Solok Sumatera Barat dan Tegal Jawa Tengah. Badan Penelitian dan
                Pengembangan Pertanian (Balitbangtan) telah menyiapkan lahan
                seluas 450.000 hektar di lima lokasi tersebut. Sentra bawang
                putih di Jawa Tengah umumnya tersebar di dataran tinggi (`{'>'}700 m
                dpl) seperti Tawangmangu (Karanganyar), Kaliangkrik (Magelang)
                dan Tuwel (Tegal). Beragam varietas telah banyak berkembang di
                lokasi tersebut, antara lain Lumbu Hijau, Lumbu Putih,
                Tawangmangu, Lumbu Kuning, Gombloh dan Sembalun. Perkembangan
                luas panen yang berada di beberapa sentra bawang putih di Jawa
                Tengah umumnya relatif kecil, dengan luasan antara 5 - 50 hektar
                per tahun. Sentra produksi bawang putih di Indonesia berada di
                10 provinsi berdasarkan luas panen dan produksinya yaitu Nusa
                Tenggara Barat, Jawa Tengah, Jawa Barat, Nusa Tenggra Timur, dan
                Jawa Timur. Berdasarkan data BPS 2016 luas areal tanam tertinggi
                berada di Provinsi Nusa Tenggara Barat. Tabel 1 adalah urutan 10
                provinsii berdasarkan luas panen tertinggi.
              </div>
            </div>
            <div class="mx-16 mt-16 mb-8 text-2xl font-bold">
              SENTRA PRODUKSI BAWANG PUTIH
            </div>
            <div class="flex">
              <div class="mx-16 w-7/12 text-lg text-justify">
                Lokasi terget penanaman bawang Putih adalah ada di Sembalun
                Lombok Timur NTB, Temanggung Jawa Tengah, Magelang Jawa Tengah,
                Solok Sumatera Barat dan Tegal Jawa Tengah. Badan Penelitian dan
                Pengembangan Pertanian (Balitbangtan) telah menyiapkan lahan
                seluas 450.000 hektar di lima lokasi tersebut. Sentra bawang
                putih di Jawa Tengah umumnya tersebar di dataran tinggi (`{'>'}700 m
                dpl) seperti Tawangmangu (Karanganyar), Kaliangkrik (Magelang)
                dan Tuwel (Tegal). Beragam varietas telah banyak berkembang di
                lokasi tersebut, antara lain Lumbu Hijau, Lumbu Putih,
                Tawangmangu, Lumbu Kuning, Gombloh dan Sembalun. Perkembangan
                luas panen yang berada di beberapa sentra bawang putih di Jawa
                Tengah umumnya relatif kecil, dengan luasan antara 5 - 50 hektar
                per tahun. Sentra produksi bawang putih di Indonesia berada di
                10 provinsi berdasarkan luas panen dan produksinya yaitu Nusa
                Tenggara Barat, Jawa Tengah, Jawa Barat, Nusa Tenggra Timur, dan
                Jawa Timur. Berdasarkan data BPS 2016 luas areal tanam tertinggi
                berada di Provinsi Nusa Tenggara Barat. Tabel 1 adalah urutan 10
                provinsii berdasarkan luas panen tertinggi.
              </div>
            </div>
            <div class="mx-16 mt-16 mb-8 text-2xl font-bold">
              SENTRA PRODUKSI BAWANG PUTIH
            </div>
            <div class="flex">
              <div class="mx-16 w-7/12 text-lg text-justify">
                Lokasi terget penanaman bawang Putih adalah ada di Sembalun
                Lombok Timur NTB, Temanggung Jawa Tengah, Magelang Jawa Tengah,
                Solok Sumatera Barat dan Tegal Jawa Tengah. Badan Penelitian dan
                Pengembangan Pertanian (Balitbangtan) telah menyiapkan lahan
                seluas 450.000 hektar di lima lokasi tersebut. Sentra bawang
                putih di Jawa Tengah umumnya tersebar di dataran tinggi (`{'>'}`700 m
                dpl) seperti Tawangmangu (Karanganyar), Kaliangkrik (Magelang)
                dan Tuwel (Tegal). Beragam varietas telah banyak berkembang di
                lokasi tersebut, antara lain Lumbu Hijau, Lumbu Putih,
                Tawangmangu, Lumbu Kuning, Gombloh dan Sembalun. Perkembangan
                luas panen yang berada di beberapa sentra bawang putih di Jawa
                Tengah umumnya relatif kecil, dengan luasan antara 5 - 50 hektar
                per tahun. Sentra produksi bawang putih di Indonesia berada di
                10 provinsi berdasarkan luas panen dan produksinya yaitu Nusa
                Tenggara Barat, Jawa Tengah, Jawa Barat, Nusa Tenggra Timur, dan
                Jawa Timur. Berdasarkan data BPS 2016 luas areal tanam tertinggi
                berada di Provinsi Nusa Tenggara Barat. Tabel 1 adalah urutan 10
                provinsii berdasarkan luas panen tertinggi.
              </div>
            </div>
          
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
