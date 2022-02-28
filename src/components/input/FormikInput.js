import React, { useEffect, useState } from "react";
import { useFormik, Formik } from "formik";
import CustomSelect from "./CustomSelect";
import * as Yup from "yup";

const FormikInput = () => {
  const [drainaseOptions, setDrainaseOptions] = useState([]);
  const [teksturTanahOptions, setTeksturTanahOptions] = useState([]);
  const [kapasitasTukarKationOptions, setKapasitasTukarKationOptions] =
    useState([]);
  const [kedalamanMineralTanahOptions, setKedalamanMineralTanahOptions] =
    useState([]);
  const [kejenuhanBasaOptions, setKejenuhanBasaOptions] = useState([]);
  const [kemasamanTanahOptions, setKemasamanTanahOptions] = useState([]);
  const [reliefOptions, setReliefOptions] = useState([]);
  const [syaratTumbuh, setSyaratTumbuh] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://garlic-backend.herokuapp.com/syaratTumbuh"
    );
    const data = await response.json();
    const drainase = [];
    data.drainase.map((d) => {
      drainase.push({
        label: d.jenis,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setDrainaseOptions(drainase);
    const teksturTanah = [];
    data.teksturTanah.map((d) => {
      teksturTanah.push({
        label: d.jenis,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setTeksturTanahOptions(teksturTanah);

    const kapasitasTukarKation = [];
    data.kapasitasTukarKation.map((d) => {
      kapasitasTukarKation.push({
        label: d.jenis,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setKapasitasTukarKationOptions(kapasitasTukarKation);

    const kedalamanMineralTanah = [];
    data.kedalamanMineralTanah.map((d) => {
      kedalamanMineralTanah.push({
        label: d.jenis,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setKedalamanMineralTanahOptions(kedalamanMineralTanah);

    const kejenuhanBasa = [];
    data.kejenuhanBasa.map((d) => {
      kejenuhanBasa.push({
        label: d.jenis,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setKejenuhanBasaOptions(kejenuhanBasa);

    const kemasamanTanah = [];
    data.kemasamanTanah.map((d) => {
      kemasamanTanah.push({
        label: d.jenis,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setKemasamanTanahOptions(kemasamanTanah);

    const relief = [];
    data.relief.map((d) => {
      relief.push({
        label: d.jenis,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });

    setReliefOptions(relief);
  }

  const formik = useFormik({
    initialValues: {
      provinsi: "",
      "kabupaten/kota": "",
      kecamatan: "",
      "kelurahan/desa": "",
      drainase: "",
      //mediaPerakaran: "",
      teksturTanah: "",
      //retensi: "",
      kapasitasTukarKation: "",
      kemasamanTanah: "",
      kedalamanMineralTanah: "",
      kejenuhanBasa: "",
      // faktorTidakDapat: "",
      // cuaca: "",
      // curahHujan: "",
      // lamaSinar: "",
      // faktorRelief: "",
      // evelasi: "",
      relief: "",
    },

    onSubmit: (values) => {
      let empty = true;
      for (const v in values) {
        if (values[v] != "") empty = false;
      }
      let result = {
        provinsi: "",
        "kabupaten/kota": "",
        kecamatan: "",
        "kelurahan/desa": "",
        drainase: values.drainase,
        //mediaPerakaran: values.mediaPerakaran,
        teksturTanah: values.teksturTanah,
        //retensi: values.retensi,
        kapasitasTukarKation: values.kapasitasTukarKation,
        kemasamanTanah: values.kemasamanTanah,
        kedalamanMineralTanah: values.kedalamanMineralTanah,
        kejenuhanBasa: values.kejenuhanBasa,
        // cuaca: values.cuaca,
        // curahHujan: curahHujanPopulate(values.curahHujan),
        // lamaSinar: lamaSinarPopulate(values.lamaSinar),
        // faktorRelief: values.faktorRelief,
        // evelasi: elevasiPopulate(values.evelasi),
        relief: values.relief,
      };

      if (!empty) {
        postData(result);
      } else {
        setTimeout(() => {
          alert("Kelas Tidak Boleh Kosong");
        }, 1000);
      }
    },
  });

  function postData(body) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("https://garlic-backend.herokuapp.com/inputPengguna", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setSyaratTumbuh(data);
        setShowModal(true);
      });
  }

  const getColor = (color) => {
    if (color == 999999 || color == 99) {
      return "bg-red-600";
    } else if (color == 3) {
      return "bg-yellow-600";
    } else if (color == 2) {
      return "bg-yellow-300";
    }
    return "bg-green-500";
  };

  const getKelas = (color) => {
    if (color == 999999 || color == 99) {
      return "N";
    } else if (color == 3) {
      return "S3";
    } else if (color == 2) {
      return "S2";
    }
    return "S1";
  };

  return (
    <div className="px-4 py-5  sm:p-6">
      <form onSubmit={formik.handleSubmit}>
        {/* Faktor Yang dapat dikendalikan */}
        <>
          <div className="col-span-full flex space-x-4 text-lg">
            <b>Faktor yang dapat dikendalikan</b>
          </div>
          <div className="col-span-6 sm:col-span-3 mb-8">
            <label
              htmlFor="drainase"
              className="block text-base font-medium text-gray-700 space-x-4"
            >
              <b>Drainase</b>
            </label>

            <CustomSelect
              onChange={(value) => {
                formik.setFieldValue("drainase", value.value);
              }}
              value={formik.values.drainase}
              options={drainaseOptions}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="drainase"
              className="block text-base font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Media Perakaran</b>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="teksturTanah"
              className="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Tekstur Tanah</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("teksturTanah", value.value)
              }
              value={formik.values.teksturTanah}
              options={teksturTanahOptions}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 mt-8">
            <label className="block text-base font-medium text-gray-700 space-x-4 my-2">
              <b>Retensi Hara</b>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="kapasitasTukarKation"
              className="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Kapasitas Tukar Kation</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("kapasitasTukarKation", value.value)
              }
              value={formik.values.kapasitasTukarKation}
              options={kapasitasTukarKationOptions}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="teksturTanah"
              className="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Kemasaman Tanah</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("kemasamanTanah", value.value)
              }
              value={formik.values.kemasamanTanah}
              options={kemasamanTanahOptions}
            />
          </div>
        </>
        {/* Faktor Yang dapat dikoreksi */}
        <>
          <div className="col-span-full flex space-x-4 text-lg mt-8">
            <b>Faktor yang dapat dikoreksi</b>
          </div>
          <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="kedalamanMineralTanah"
              className="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Kedalaman Mineral Tanah</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("kedalamanMineralTanah", value.value)
              }
              value={formik.values.kedalamanMineralTanah}
              options={kedalamanMineralTanahOptions}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="kejenuhanBasa"
              className="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Kejenuhan Basa</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("kejenuhanBasa", value.value)
              }
              value={formik.values.kejenuhanBasa}
              options={kejenuhanBasaOptions}
            />
          </div>
        </>
        {/* Faktor yang tidak dapat dikendalikan dan tidak dapat dikoreksi */}
        <div className="mb-16">
          <div className="col-span-full flex space-x-4 text-lg mt-8">
            <b>
              Faktor yang tidak dapat dikendalikan dan tidak dapat dikoreksi
            </b>
          </div>
          {/* <div className="col-span-6 sm:col-span-3 ">
            <label
              htmlFor="cuaca"
              className="block text-base font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Cuaca</b>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="curahHujan"
              className="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Curah Hujan</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("curahHujan", value.value)
              }
              value={formik.values.curahHujan}
              options={curahHujanOptions}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="lamaSinar"
              className="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Lama Penyinaran</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("lamaSinar", value.value)
              }
              value={formik.values.curahHujan}
              options={lamaSinarOptions}
            />
          </div> */}
          <div className="col-span-6 sm:col-span-3 mt-8">
            <label
              htmlFor="faktorRelief"
              className="block text-base font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Faktor Relief</b>
            </label>
          </div>
          {/* <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="evelasi"
              className="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Elevasi</b>
            </label>
            <CustomSelect
              onChange={(value) => formik.setFieldValue("evelasi", value.value)}
              value={formik.values.evelasi}
              options={elevasiOptions}
            />
          </div> */}
          <div className="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="relief"
              className="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Relief</b>
            </label>
            <CustomSelect
              onChange={(value) => formik.setFieldValue("relief", value.value)}
              value={formik.values.relief}
              options={reliefOptions}
            />
          </div>
        </div>
        <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <button
            type="submit"
            className="w-1/2 mt-8 justify-center place-items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco "
          >
            Submit
          </button>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div
                    className={`${getColor(
                      syaratTumbuh.karakteristikTanah.classified
                        .KelasSyaratTumbuh.kelas
                    )} flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t`}
                  >
                    <h3 className="text-3xl font-semibold text-white">
                      Hasil dari peniliain data syarat tumbuh anda adalah{" "}
                      {getKelas(
                        syaratTumbuh.karakteristikTanah.classified
                          .KelasSyaratTumbuh.kelas
                      )}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white  h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="p-4 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-8">
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.classified
                            .KelasFaktorYangDapatDikendalikan.kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden flex flex-col lg:h-48 lg:aspect-none`}
                      >
                        <p className="sm:text-sm lg:text-lg text-center	text-white">
                          Kelas Faktor Yang Dapat Dikendalikan
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-2xl font-bold	 lg:text-5xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.classified
                              .KelasFaktorYangDapatDikendalikan.kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.classified
                            .KelasFaktorYangEfeknyaDapatDikoreksi.kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden  flex flex-col   lg:h-48 lg:aspect-none`}
                      >
                        <p className="sm:text-sm lg:text-lg text-center	text-white">
                          Kelas Faktor Yang Efeknya Dapat Dikendalikan
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-2xl font-bold	 lg:text-5xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.classified
                              .KelasFaktorYangEfeknyaDapatDikoreksi.kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2  w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.classified
                            .KelasFaktorYangTidakDapatDikendalikanDanDikoreksi
                            .kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden  flex flex-col  lg:h-48 lg:aspect-none`}
                      >
                        <p className="sm:text-sm lg:text-lg text-center	text-white">
                          Kelas Faktor Yang Tidak Dapat Dikendalikan Dan
                          Dikoreksi
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-2xl font-bold	 lg:text-5xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.classified
                              .KelasFaktorYangTidakDapatDikendalikanDanDikoreksi
                              .kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.classified
                            .KelasFaktorRelief.kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden  flex flex-col   lg:h-48 lg:aspect-none`}
                      >
                        <p className="sm:text-sm lg:text-lg text-center	text-white">
                          Kelas Faktor Relief
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-2xl font-bold	 lg:text-5xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.classified
                              .KelasFaktorRelief.kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.classified
                            .KelasFaktorCuaca.kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden  flex flex-col   lg:h-48 lg:aspect-none`}
                      >
                        <p className="sm:text-sm lg:text-lg text-center	text-white">
                          Kelas Faktor Cuaca{" "}
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-2xl font-bold	 lg:text-5xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.classified
                              .KelasFaktorCuaca.kelas
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-6 lg:grid-cols-7 xl:gap-x-8">
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.kelasDrainse.kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden flex flex-col lg:h-32 lg:aspect-none`}
                      >
                        <p className="sm:text-xs lg:text-base text-center	text-white">
                          Drainase
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-lg font-bold	 lg:text-2xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.kelasDrainse.kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah
                            .kelasKapasitasTukarKation.kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden flex flex-col lg:h-32 lg:aspect-none`}
                      >
                        <p className="sm:text-xs lg:text-base text-center	text-white">
                          Kapasitas Tukar Kation
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-lg font-bold	 lg:text-2xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah
                              .kelasKapasitasTukarKation.kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.kelasTeksturTanah
                            .kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden flex flex-col lg:h-32 lg:aspect-none`}
                      >
                        <p className="sm:text-xs lg:text-base text-center	text-white">
                          Tekstur Tanah
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-lg font-bold	 lg:text-2xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.kelasTeksturTanah
                              .kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.kelasKemasamanTanah
                            .kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden flex flex-col lg:h-32 lg:aspect-none`}
                      >
                        <p className="sm:text-xs lg:text-base text-center	text-white">
                          Kemasaman Tanah
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-lg font-bold	 lg:text-2xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.kelasKemasamanTanah
                              .kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.kelasKejenuhanBasa
                            .kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden flex flex-col lg:h-32 lg:aspect-none`}
                      >
                        <p className="sm:text-xs lg:text-base text-center	text-white">
                          Kejenuhan Basa
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-lg font-bold	 lg:text-2xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.kelasKejenuhanBasa
                              .kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah
                            .kelasKedalamanMineralTanah.kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden flex flex-col lg:h-32 lg:aspect-none`}
                      >
                        <p className="sm:text-xs lg:text-base text-center	text-white">
                          Kedalaman Mineral Tanah
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-lg font-bold	 lg:text-2xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah
                              .kelasKedalamanMineralTanah.kelas
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div
                        className={`py-4 px-2 w-full min-h-80 ${getColor(
                          syaratTumbuh.karakteristikTanah.kelasRelief.kelas
                        )} aspect-w-1 aspect-h-1 rounded-md overflow-hidden flex flex-col lg:h-32 lg:aspect-none`}
                      >
                        <p className="sm:text-xs lg:text-base text-center	text-white">
                          Relief
                        </p>
                        <p className="flex-grow "></p>
                        <p className="text-center	sm:text-lg font-bold	 lg:text-2xl text-white">
                          {getKelas(
                            syaratTumbuh.karakteristikTanah.kelasRelief.kelas
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-6 flex-auto">
                    {console.log(syaratTumbuh.karakteristikTanah.kelasDrainase)}
                    {syaratTumbuh.karakteristikTanah.kelasDrainase == null ? (
                      ""
                    ) : syaratTumbuh.karakteristikTanah.kelasDrainse
                        .rekomendasi == null ? (
                      ""
                    ) : (
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {" Pada variabel Drainase membutuhkan rekomendasi " +
                          syaratTumbuh.karakteristikTanah.kelasDrainse
                            .rekomendasi}
                      </p>
                    )}
                    {syaratTumbuh.karakteristikTanah
                      .kelasKapasitasTukarKation == null ? (
                      ""
                    ) : syaratTumbuh.karakteristikTanah
                        .kelasKapasitasTukarKation.rekomendasi == null ? (
                      ""
                    ) : (
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {" Pada variabel Kapasitas Tukar Kation membutuhkan rekomendasi " +
                          syaratTumbuh.karakteristikTanah
                            .kelasKapasitasTukarKation.rekomendasi}
                      </p>
                    )}
                    {syaratTumbuh.karakteristikTanah.kelasTeksturTanah ==
                    null ? (
                      ""
                    ) : syaratTumbuh.karakteristikTanah.kelasTeksturTanah
                        .rekomendasi == null ? (
                      ""
                    ) : (
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {" Pada variabel Tekstur Tanah membutuhkan rekomendasi " +
                          syaratTumbuh.karakteristikTanah.kelasTeksturTanah
                            .rekomendasi}
                      </p>
                    )}
                    {syaratTumbuh.karakteristikTanah.kelasKemasamanTanah ==
                    null ? (
                      ""
                    ) : syaratTumbuh.karakteristikTanah.kelasKemasamanTanah
                        .rekomendasi == null ? (
                      ""
                    ) : (
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {" Pada variabel Kemasaman membutuhkan rekomendasi " +
                          syaratTumbuh.karakteristikTanah.kelasKemasamanTanah
                            .rekomendasi}
                      </p>
                    )}
                    {syaratTumbuh.karakteristikTanah.kelasKejenuhanBasa ==
                    null ? (
                      ""
                    ) : syaratTumbuh.karakteristikTanah.kelasKejenuhanBasa
                        .rekomendasi == null ? (
                      ""
                    ) : (
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {" Pada variabel Kejenuhan Basa membutuhkan rekomendasi " +
                          syaratTumbuh.karakteristikTanah.kelasKejenuhanBasa
                            .rekomendasi}
                      </p>
                    )}
                    {syaratTumbuh.karakteristikTanah
                      .kelasKedalamanMineralTanah == null ? (
                      ""
                    ) : syaratTumbuh.karakteristikTanah
                        .kelasKedalamanMineralTanah.rekomendasi == null ? (
                      ""
                    ) : (
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {" Pada variabel Kedalaman Mineral Tanah membutuhkan rekomendasi " +
                          syaratTumbuh.karakteristikTanah
                            .kelasKedalamanMineralTanah.rekomendasi}
                      </p>
                    )}
                    {syaratTumbuh.karakteristikTanah.kelasRelief == null ? (
                      ""
                    ) : syaratTumbuh.karakteristikTanah.kelasRelief
                        .rekomendasi == null ? (
                      ""
                    ) : (
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {" Pada variabel Relief membutuhkan rekomendasi " +
                          syaratTumbuh.karakteristikTanah.kelasRelief
                            .rekomendasi}
                      </p>
                    )}
                  </div>
                  {/*footer*/}
                  <div
                    className={`${getColor(
                      syaratTumbuh.karakteristikTanah.classified
                        .KelasSyaratTumbuh.kelas
                    )} flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b`}
                  >
                    <button
                      className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default FormikInput;
