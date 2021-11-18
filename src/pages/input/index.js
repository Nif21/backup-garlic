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

function index() {
  const [active, setActive] = useState(false);

  const [drainase, setDrainase] = useState("");
  function checkDrainase(drainase) {
    var result = "";
    switch (drainase) {
      case "Baik":
        result = "S1";
        break;
      case "Agak Terhambat":
        result = "S1";
        break;
      case "Agak Cepat":
        result = "S2";
        break;
      case "Sedang":
        result = "S2";
        break;
      case "Terhambat":
        result = "S3";
        break;
      case "Sangat Terhambat":
        result = "N";
        break;
      case "Cepat":
        result = "N";
        break;
    }
    return result;
  }

  const [media, setMedia] = useState("");
  function checkMedia(tekstur, kedalaman) {
    var result = "";
    if (tekstur == "S3" || kedalaman == "S3") result = "S3";
    else if (tekstur == "S2" || kedalaman == "S2") result = "S2";
    else if (tekstur == "N" || kedalaman == "N") result = "N";
    else result = "S1";
    return result;
  }

  const [tekstur, setTekstur] = useState("");
  function checkTekstur(tekstur) {
    var result = "";
    switch (tekstur) {
      case "Halus":
        result = "S1";
        break;
      case "Agak Halus":
        result = "S1";
        break;
      case "Sedang":
        result = "S1";
        break;
      case "Agak Kasar":
        result = "S2";
        break;
      case "Kasar":
        result = "S3";
        break;
    }
    return result;
  }
  
  const [kedalaman,setKedalaman] = useState("");
  function checkKedalaman(kedalaman){
    var result = "";
    switch (kedalaman) {
      case "Sangat Dalam":
        result = "S1";
        break;
      case "Dalam":
        result = "S1";
        break;
      case "Sedang":
        result = "S1";
        break;
      case "Dangkal":
        result = "S2";
        break;
      case "Sangat Dangkal":
        result = "S3";
        break;
      case "Batuan":
        result = "N";
        break;
    }
    return result;
  }

  const [kejenuhan,setKejenuhan] = useState("");
  function checkKejenuhan(kejenuhan) {
    var result = "";
    switch (kejenuhan) {
      case "Sangat Tinggi":
        result = "S1";
        break;
      case "Tinggi":
        result = "S1";
        break;
      case "Sedang":
        result = "S2";
        break;
      case "Rendah":
        result = "S3";
        break;
      case "Sangat Rendah":
        result = "S3";
        break;
    }
    return result;
  }

  const [ktk,setKtk] = useState("");
  function checkKtk(ktk){
    var result = "";
    switch (ktk) {
      case "Tinggi":
        result = "S1";
        break;
      case "Sedang":
        result = "S1";
        break;
      case "Rendah":
        result = "S2";
        break;
      case "Sangat Rendah":
        result = "S3";
        break;
    }
    return result;
  }

  const [kemasaman,setKemasaman] = useState("");
  function checkKemasaman(kemasaman){
    var result = "";
    switch (kemasaman) {
      case "Agak Masam":
        result = "S1";
        break;
      case "Masam":
        result = "S2";
        break;
      case "Sangat Masam":
        result = "S3";
        break;
      case "Netral":
        result = "S2";
        break;
    }
    return result;
  }


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
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Masukkan Variabel Kesesuaian Lahan Anda
            </h2>
            <div class="px-4 py-5  sm:p-6">
              <div class="grid grid-cols-6 gap-6 mx-auto">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                  >
                    <b>Drainase</b>
                  </label>
                  <select
                    value={drainase}
                    onChange={(e) => {
                      setDrainase(e.target.value);
                    }}
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Baik</option>
                    <option>Agak Terhambat</option>
                    <option>Agak Cepat</option>
                    <option>Sedang</option>
                    <option>Terhambat</option>
                    <option>Sangat Terhambat</option>
                    <option>Cepat</option>
                  </select>
                </div>
                <div>
                  <p> Kelas Kesesuaian Lahan </p>
                  <p>{checkDrainase(drainase)} </p>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <p class="block text-sm font-medium text-gray-700">
                    <b> Media Perakaran</b>
                  </p>
                </div>
                <div></div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                  >
                    Tekstur Tanah
                  </label>
                  <select
                    value={tekstur}
                    onChange={(e) => {
                      setTekstur(e.target.value);
                    }}
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Halus</option>
                    <option>Agak Halus</option>
                    <option>Sedang</option>
                    <option>Agak Kasar</option>
                    <option>Kasar</option>
                  </select>
                </div>
                <div>
                  <p> Kelas Kesesuaian Lahan </p>
                  <p>{checkTekstur(tekstur)} </p>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                  >
                    Kedalaman Mineral Tanah
                  </label>
                  <select
                    value={kedalaman}
                    onChange={(e) => {
                      setKedalaman(e.target.value);
                    }}
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Sangat Dalam</option>
                    <option>Dalam</option>
                    <option>Sedang</option>
                    <option>Dangkal</option>
                    <option>Sangat Dangkal</option>
                    <option>Batuan</option>
                  </select>
                </div>
                <div>
                  <p> Kelas Kesesuaian Lahan </p>
                  <p>{checkKedalaman(kedalaman)} </p>
                </div>
                <div class="col-span-6 sm:col-span-3 ">
                  <p class="block text-sm font-medium text-gray-700">
                    <b> Retensi Hara</b>
                  </p>
                </div>
                <div></div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                  >
                    Kejenuhan Basa
                  </label>
                  <select
                    value={kejenuhan}
                    onChange={(e) => {
                      setKejenuhan(e.target.value);
                    }}
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Sangat Tinggi</option>
                    <option>Tinggi</option>
                    <option>Sedang</option>
                    <option>Rendah</option>
                    <option>Sangat Rendah</option>
                  </select>
                </div>
                <div>
                  <p> Kelas Kesesuaian Lahan </p>
                  <p>{checkKejenuhan(kejenuhan)} </p>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                  >
                    Kapasitas Tukar Kation
                  </label>
                  <select
                    value={ktk}
                    onChange={(e) => {
                      setKtk(e.target.value);
                    }}
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Tinggi</option>
                    <option>Sedang</option>
                    <option>Rendah</option>
                    <option>Sangat Rendah</option>
                  </select>
                </div>
                <div>
                  <p> Kelas Kesesuaian Lahan </p>
                  <p>{checkKtk(ktk)} </p>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    class="block text-sm font-medium text-gray-700"
                  >
                    Kemasaman Tanah
                  </label>
                  <select
                    value={kemasaman}
                    onChange={(e) => {
                      setKemasaman(e.target.value);
                    }}
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Sangat Masam</option>
                    <option>Masam</option>
                    <option>Agak Masam</option>
                    <option>Netral</option>
                  </select>
                </div>
                <div>
                  <p> Kelas Kesesuaian Lahan </p>
                  <p>{checkKemasaman(kemasaman)} </p>
                </div>
              </div>
              <button type="submit" class="w-full mt-8 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco ">
              Save
            </button>
          
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default index;
