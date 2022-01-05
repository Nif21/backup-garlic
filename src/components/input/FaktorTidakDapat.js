import React from "react";
import { useState } from "react";

const FaktorTidakDapat = () => {
  // Di dokumen belom ada kelasnya
  // const [temperatur, setTemperatur] = useState("");
  // function checkTemperatur(temperatur) {
  //   var result = "";
  //   switch (temperatur) {
  //     case "Tinggi":
  //       result = "S1";
  //       break;
  //     case "Sedang":
  //       result = "S1";
  //       break;
  //     case "Rendah":
  //       result = "S2";
  //       break;
  //     case "Sangat Rendah":
  //       result = "S3";
  //       break;
  //   }
  //   return result;
  // }

  const [curahHujan, setCurahHujan] = useState("");
  function checkCurahHujan(curahHujan) {
    let result = "";
    switch (curahHujan) {
      case "Tinggi":
        result = "S1";
        break;
      case "Agak Tinggi":
        result = "S2";
        break;
      case "Agak Rendah":
        result = "S3";
        break;
      case "Rendah":
        result = "N";
        break;
    }
    return result;
  }

  const [lamaSinar, setLamaSinar] = useState("");
  function checkLamaSinar(lamaSinar) {
    let result = "";
    switch (lamaSinar) {
      case "Sangat Tinggi":
        result = "S1";
        break;
      case "Tinggi":
        result = "S1";
        break;
      case "Sedang":
        result = "S2";
        break;
      case "Agak Rendah":
        result = "S3";
        break;
      case "Rendah":
        result = "N";
        break;
    }
    return result;
  }

  function checkCuaca(curahHujan, lamaSinar) {
    let result = "";
    if (curahHujan != "" && lamaSinar != "") {
      if (curahHujan == "S3" || lamaSinar == "S3") result = "S3";
      else if (curahHujan == "S2" || lamaSinar == "S2") result = "S2";
      else if (curahHujan == "N" || lamaSinar == "N") result = "N";
      else result = "S1";
    }
    return result;
  }

  const [elevasi, setElevasi] = useState("");
  function checkElevasi(elevasi) {
    let result = "";
    switch (elevasi) {
      case "Sangat Tinggi":
        result = "S1";
        break;
      case "Tinggi":
        result = "S1";
        break;
      case "Agak Tinggi":
        result = "S2";
        break;
      case "Agak Rendah":
        result = "S3";
        break;
      case "Rendah":
        result = "N";
        break;
    }
    return result;
  }

  const [relief, setRelief] = useState("");
  function checkRelief(relief) {
    let result = "";
    switch (relief) {
      case "Datar":
        result = "S1";
        break;
      case "Agak Datar":
        result = "S1";
        break;
      case "Agak Landai":
        result = "S1";
        break;
      case "Landai":
        result = "S1";
        break;
      case "Agak Curam":
        result = "S2";
        break;
      case "Curam":
        result = "S3";
        break;
      case "Sangat Curam":
        result = "N";
        break;
    }
    return result;
  }

  function checkAllRelief(elevasi, relief) {
    let result = "";
    if (elevasi != "" && relief != "") {
      if (elevasi == "S3" || relief == "S3") result = "S3";
      else if (elevasi == "S2" || relief == "S2") result = "S2";
      else if (elevasi == "N" || relief == "N") result = "N";
      else result = "S1";
    }
    return result;
  }

  function checkFaktorTidakDapat(cuaca, relief) {
    let result = "";
    if (cuaca != "" && relief != "") {
      if (cuaca == "N" || relief == "N") result = "N";
      else if (cuaca == "S3" || relief == "S3") result = "S3";
      else if (cuaca == "S2" || relief == "S2") result = "S2";
      else result = "S1";
    }
    return result;
  }

  return (
    <>
      <div className="col-span-full flex space-x-4 text-lg	">
        <b>Faktor yang tidak dapat dikendalikan dan tidak dapat dikoreksi</b>
        <b>
          {checkFaktorTidakDapat(
            checkCuaca(checkCurahHujan(curahHujan), checkLamaSinar(lamaSinar)),
            checkAllRelief(checkElevasi(elevasi), checkRelief(relief))
          )}
        </b>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <p className="block text-sm font-medium text-gray-700 space-x-4">
          <b> Cuaca</b>
          <b>
            {checkCuaca(checkCurahHujan(curahHujan), checkLamaSinar(lamaSinar))}
          </b>
        </p>
      </div>
      <div></div>
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          Curah Hujan
        </label>
        <select
          value={curahHujan}
          onChange={(e) => {
            setCurahHujan(e.target.value);
          }}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Rendah</option>
          <option>Agak Rendah</option>
          <option>Agak Tinggi</option>
          <option>Tinggi</option>
        </select>
      </div>
      <div>
        <p> Kelas Kesesuaian Lahan </p>
        <p>{checkCurahHujan(curahHujan)} </p>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          Lama Penyinaran
        </label>
        <select
          value={lamaSinar}
          onChange={(e) => {
            setLamaSinar(e.target.value);
          }}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Rendah</option>
          <option>Agak Rendah</option>
          <option>Sedang</option>
          <option>Tinggi</option>
          <option>Sangat Tinggi</option>
        </select>
      </div>
      <div>
        <p> Kelas Kesesuaian Lahan </p>
        <p>{checkLamaSinar(lamaSinar)} </p>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <p className="block text-sm font-medium text-gray-700 space-x-4">
          <b> Relief</b>
          <b>{checkAllRelief(checkElevasi(elevasi), checkRelief(relief))}</b>
        </p>
      </div>
      <div></div>
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          Elevasi
        </label>
        <select
          value={elevasi}
          onChange={(e) => {
            setElevasi(e.target.value);
          }}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Rendah</option>
          <option>Agak Rendah</option>
          <option>Agak Tinggi</option>
          <option>Tinggi</option>
          <option>Sangat Tinggi</option>
        </select>
      </div>
      <div>
        <p> Kelas Kesesuaian Lahan </p>
        <p>{checkElevasi(elevasi)} </p>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          Relief
        </label>
        <select
          value={relief}
          onChange={(e) => {
            setRelief(e.target.value);
          }}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Datar</option>
          <option>Agak Datar</option>
          <option>Agak Landai</option>
          <option>Landai</option>
          <option>Agak Curam</option>
          <option>Curam</option>
          <option>Sangat Curam</option>
        </select>
      </div>
      <div>
        <p> Kelas Kesesuaian Lahan </p>
        <p>{checkRelief(relief)} </p>
      </div>
    </>
  );
};

export default FaktorTidakDapat;
