import React from "react";
import { useState } from "react";

const FaktorDikoreksi = () => {
  const [kedalaman, setKedalaman] = useState("");
  function checkKedalaman(kedalaman) {
    let result = "";
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

  const [kejenuhan, setKejenuhan] = useState("");
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

  function checkFaktorDikoreksi(kedalaman, kejenuhan) {
    var result = "";
    if (kedalaman != "" && kejenuhan != "") {
      if (kedalaman == "N" || kejenuhan == "N") result = "N";
      else if (kedalaman == "S3" || kejenuhan == "S3") result = "S3";
      else if (kedalaman == "S2" || kejenuhan == "S2") result = "S2";
      else result = "S1";
    }
    return result;
  }

  return (
    <>
      <div className="col-span-full flex space-x-4 text-lg	">
        <b>Faktor yang dapat dikoreksi</b>
        <b>
          {checkFaktorDikoreksi(
            checkKedalaman(kedalaman),
            checkKejenuhan(kejenuhan)
          )}
        </b>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          Kedalaman Mineral Tanah
        </label>
        <select
          value={kedalaman}
          onChange={(e) => {
            setKedalaman(e.target.value);
          }}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          Kejenuhan Basa
        </label>
        <select
          value={kejenuhan}
          onChange={(e) => {
            setKejenuhan(e.target.value);
          }}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
    </>
  );
};

export default FaktorDikoreksi;
