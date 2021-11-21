import React from "react";
import { useState } from "react";

const FaktorDikendalikan = () => {

const [ktk, setKtk] = useState("");
function checkKtk(ktk) {
  let result = "";
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

const [kemasaman, setKemasaman] = useState("");
function checkKemasaman(kemasaman) {
  let result = "";
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

const [drainase, setDrainase] = useState("");
function checkDrainase(drainase) {
  let result = "";
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


function checkMedia(tekstur) {
  let result = "";
  if(tekstur != ''){
    if (tekstur == "S3") result = "S3";
    else if (tekstur == "S2" ) result = "S2";
    else if (tekstur == "N" ) result = "N";
    else result = "S1";
  }
  return result;
}

const [tekstur, setTekstur] = useState("");
function checkTekstur(tekstur) {
  let result = "";
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

function checkRetensi(ktk,kemasaman) {
    let result = "";
    if(ktk != '' && kemasaman != '') {
        if (ktk == "S3"|| kemasaman == "S3") result = "S3";
        else if (ktk == "S2"|| kemasaman == "S2") result = "S2";
        else if (ktk == "N" || kemasaman == "N") result = "N";
        else result = "S1";
    }
    return result;
  }

  function checkFaktorDikendalikan(drainase,media,retensi) {
    let result = "";
    drainase = checkDrainase(drainase);
    if(drainase != '' && media != '' && retensi != '') {
        if (drainase == "N" || media == "N" || retensi == "N") result = "N";
        else if (drainase == "S3"|| media == "S3" || retensi == "S3") result = "S3";
        else if (drainase == "S2"|| media == "S2" || retensi == "S2") result = "S2";
        else result = "S1";
    }   
    return result;
  }


  return (
    <>
     <div class="col-span-full flex space-x-4 text-lg	">
        <b>Faktor yang dapat dikendalikan</b>
        <b>{checkFaktorDikendalikan(drainase,checkMedia(checkTekstur(tekstur)),checkRetensi(checkKtk(ktk),checkKemasaman(kemasaman)))}</b>
      </div>

      <div class="col-span-6 sm:col-span-3">
        <label class="block text-sm font-medium text-gray-700 space-x-4">
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
        <p class="block text-sm font-medium text-gray-700 space-x-4">
          <b> Media Perakaran</b>
          <b>{checkMedia(checkTekstur(tekstur))}</b>
        </p>
      </div>
      <div></div>
      <div class="col-span-6 sm:col-span-3">
        <label class="block text-sm font-medium text-gray-700">
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
      <div class="col-span-6 sm:col-span-3 ">
        <p class="block text-sm font-medium text-gray-700 space-x-4">
          <b> Retensi Hara</b>
          <b>{checkRetensi(checkKtk(ktk),checkKemasaman(kemasaman))}</b>
        </p>
      </div>
      <div></div>
      <div class="col-span-6 sm:col-span-3">
        <label class="block text-sm font-medium text-gray-700">
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
        <label class="block text-sm font-medium text-gray-700">
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
    </>
  );
};

export default FaktorDikendalikan;
