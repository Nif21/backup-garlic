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
  }

  const formik = useFormik({
    initialValues: {
      drainase: "",
      mediaPerakaran: "",
      teksturTanah: "",
      retensi: "",
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
      // relief: "",
    },

    onSubmit: (values) => {
      let empty = true;
      for (const v in values) {
        if (values[v] != "") empty = false;
      }
      console.log(values);
      let result = {
        drainase: values.drainase,
        mediaPerakaran: values.mediaPerakaran,
        teksturTanah: values.teksturTanah,
        retensi: values.retensi,
        kapasitasTukarKation: values.kapasitasTukarKation,
        kemasamanTanah: values.kemasamanTanah,
        kedalamanMineralTanah: values.kedalamanMineralTanah,
        kejenuhanBasa: values.kejenuhanBasa,
        // cuaca: values.cuaca,
        // curahHujan: curahHujanPopulate(values.curahHujan),
        // lamaSinar: lamaSinarPopulate(values.lamaSinar),
        // faktorRelief: values.faktorRelief,
        // evelasi: elevasiPopulate(values.evelasi),
        // relief: reliefPopulate(values.relief),
      };

      if (!empty) {
        setTimeout(() => {
          alert(JSON.stringify(result, null, 2));
        }, 1000);
      } else {
        setTimeout(() => {
          alert("Kelas Tidak Boleh Kosong");
        }, 1000);
      }
    },
  });

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
            <label
              htmlFor="retensi"
              className="block text-base font-medium text-gray-700 space-x-4 my-2"
            >
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
        {/* <div className="mb-16">
          <div className="col-span-full flex space-x-4 text-lg mt-8">
            <b>
              Faktor yang tidak dapat dikendalikan dan tidak dapat dikoreksi
            </b>
          </div>
          <div className="col-span-6 sm:col-span-3 ">
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
          </div>
          <div className="col-span-6 sm:col-span-3 mt-8">
            <label
              htmlFor="faktorRelief"
              className="block text-base font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Faktor Relief</b>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-3 my-2">
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
          </div>
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
        </div> */}
        <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <button
            type="submit"
            className="w-1/2 mt-8 justify-center place-items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormikInput;
