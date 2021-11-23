import React from "react";
import { useFormik, Formik } from "formik";
import CustomSelect from "./CustomSelect";

const drainaseOptions = [
  { value: "Baik", label: "Baik" },
  { value: "Agak Terhambat", label: "Agak Terhambat" },
  { value: "Agak Cepat", label: "Agak Cepat" },
  { value: "Sedang", label: "Sedang" },
  { value: "Terhambat", label: "Terhambat" },
  { value: "Sangat Terhambat", label: "Sangat Terhambat" },
  { value: "Cepat", label: "Cepat" },
];

function drainasePopulate(drainase) {
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

const teksturTanahOptions = [
  { value: "Halus", label: "Halus" },
  { value: "Agak Halus", label: "Agak Halus" },
  { value: "Sedang", label: "Sedang" },
  { value: "Agak Kasar", label: "Agak Kasar" },
  { value: "Kasar", label: "Kasar" },
];

function teksturTanahPopulate(tekstur) {
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

const ktkOptions = [
  { value: "Tinggi", label: "Tinggi" },
  { value: "Sedang", label: "Sedang" },
  { value: "Rendah", label: "Rendah" },
  { value: "Sangat Rendah", label: "Sangat Rendah" },
];

function ktkPopulate(ktk) {
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

const kemasamanOptions = [
  { value: "Agak Masam", label: "Agak Masam" },
  { value: "Masam", label: "Masam" },
  { value: "Netral", label: "Netral" },
  { value: "Sangat Masam", label: "Sangat Masam" },
];

function kemasamanPopulate(kemasaman) {
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

const kedalamanOptions = [
  { value: "Sangat Dalam", label: "Sangat Dalam" },
  { value: "Dalam", label: "Dalam" },
  { value: "Sedang", label: "Sedang" },
  { value: "Dangkal", label: "Dangkal" },
  { value: "Sangat Dangkal", label: "Sangat Dangkal" },
  { value: "Batuan", label: "Batuan" },
];

function kedalamanPopulate(kedalaman) {
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

const kejenuhanOptions = [
  { value: "Sangat Tinggi", label: "Sangat Tinggi" },
  { value: "Tinggi", label: "Tinggi" },
  { value: "Sedang", label: "Sedang" },
  { value: "Rendah", label: "Rendah" },
  { value: "Sangat Rendah", label: "Sangat Rendah" },
];

function kejenuhanPopulate(kejenuhan) {
  let result = "";
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

const curahHujanOptions = [
  { value: "Tinggi", label: "Tinggi" },
  { value: "Agak Tinggi", label: "Agak Tinggi" },
  { value: "Agak Rendah", label: "Agak Rendah" },
  { value: "Rendah", label: "Rendah" },
];

function curahHujanPopulate(curahHujan) {
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

const lamaSinarOptions = [
  { value: "Sangat Tinggi", label: "Sangat Tinggi" },
  { value: "Tinggi", label: "Tinggi" },
  { value: "Sedang", label: "Sedang" },
  { value: "Agak Rendah", label: "Agak Rendah" },
  { value: "Rendah", label: "Rendah" },
];

function lamaSinarPopulate(lamaSinar) {
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

const elevasiOptions = [
  { value: "Sangat Tinggi", label: "Sangat Tinggi" },
  { value: "Tinggi", label: "Tinggi" },
  { value: "Agak Tinggi", label: "Agak Tinggi" },
  { value: "Agak Rendah", label: "Agak Rendah" },
  { value: "Rendah", label: "Rendah" },
];

function elevasiPopulate(elevasi) {
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

const reliefOptions = [
  { value: "Datar", label: "Datar" },
  { value: "Agak Datar", label: "Agak Datar" },
  { value: "Agak Landai", label: "Agak Landai" },
  { value: "Landai", label: "Landai" },
  { value: "Agak Curam", label: "Agak Curam" },
  { value: "Curam ", label: "Curam" },
  { value: "Sangat Curam", label: "Sangat Curam" },
];

function reliefPopulate(relief) {
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

function FormikInput() {
  const formik = useFormik({
    initialValues: {
      faktorYangDikendalikan: "",
      drainase: "",
      mediaPerakaran: "",
      teksturTanah: "",
      retensi: "",
      ktk: "",
      kemasaman: "",
      faktorYangDikoreksi: "",
      kedalaman: "",
      kejenuhan: "",
      faktorTidakDapat: "",
      cuaca: "",
      curahHujan: "",
      lamaSinar: "",
      faktorRelief: "",
      evelasi: "",
      relief: "",
    },
    onSubmit: (values) => {
      let result = {
        faktorYangDikendalikan: values.faktorYangDikendalikan,
        drainase: drainasePopulate(values.drainase),
        mediaPerakaran: values.mediaPerakaran,
        teksturTanah: teksturTanahPopulate(values.teksturTanah),
        retensi: values.retensi,
        ktk: ktkPopulate(values.ktk),
        kemasaman: kemasamanPopulate(values.kemasaman),
        faktorYangDikoreksi: values.faktorYangDikoreksi,
        kedalaman: kedalamanPopulate(values.kedalaman),
        kejenuhan: kejenuhanPopulate(values.kejenuhan),
        faktorTidakDapat: values.faktorTidakDapat,
        cuaca: values.cuaca,
        curahHujan: curahHujanPopulate(values.curahHujan),
        lamaSinar: lamaSinarPopulate(values.lamaSinar),
        faktorRelief: values.faktorRelief,
        evelasi: elevasiPopulate(values.evelasi),
        relief: reliefPopulate(values.relief),
      };

      setTimeout(() => {
        alert(JSON.stringify(result, null, 2));
      }, 1000);
    },
    validator: () => {},
  });

  function checkFaktorDikendalikan(drainase, media, retensi) {
    let result = "";
    if (drainase != "" && media != "" && retensi != "") {
      if (drainase == "N" || media == "N" || retensi == "N") result = "N";
      else if (drainase == "S3" || media == "S3" || retensi == "S3")
        result = "S3";
      else if (drainase == "S2" || media == "S2" || retensi == "S2")
        result = "S2";
      else result = "S1";
    }
    formik.values.faktorYangDikendalikan = result;
    return result;
  }

  function checkMedia(tekstur) {
    let result = "";
    if (tekstur != "") {
      if (tekstur == "S3") result = "S3";
      else if (tekstur == "S2") result = "S2";
      else if (tekstur == "N") result = "N";
      else result = "S1";
    }
    formik.values.mediaPerakaran = result;
    return result;
  }

  function checkRetensi(ktk, kemasaman) {
    let result = "";
    if (ktk != "" && kemasaman != "") {
      if (ktk == "S3" || kemasaman == "S3") result = "S3";
      else if (ktk == "S2" || kemasaman == "S2") result = "S2";
      else if (ktk == "N" || kemasaman == "N") result = "N";
      else result = "S1";
    }
    formik.values.retensi = result;

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
    formik.values.faktorYangDikoreksi = result;
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
    formik.values.cuaca = result;
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
    formik.values.faktorRelief = result;
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
    formik.values.faktorTidakDapat = result;
    return result;
  }

  return (
    <div class="px-4 py-5  sm:p-6">
      <form onSubmit={formik.handleSubmit}>
        {/* Faktor Yang dapat dikendalikan */}
        <>
          <div class="col-span-full flex space-x-4 text-lg">
            <b>Faktor yang dapat dikendalikan</b>
            <b>
              {checkFaktorDikendalikan(
                drainasePopulate(formik.values.drainase),
                formik.values.mediaPerakaran,
                formik.values.retensi
              )}
            </b>
          </div>
          <div class="col-span-6 sm:col-span-3 mb-8">
            <label
              htmlFor="drainase"
              class="block text-base font-medium text-gray-700 space-x-4"
            >
              <b>Drainase</b>
              <b>{drainasePopulate(formik.values.drainase)}</b>
            </label>

            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("drainase", value.value)
              }
              value={formik.values.drainase}
              options={drainaseOptions}
            />
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="drainase"
              class="block text-base font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Media Perakaran</b>
              <b>
                {checkMedia(teksturTanahPopulate(formik.values.teksturTanah))}
              </b>
            </label>
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="teksturTanah"
              class="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Tekstur Tanah</b>
              <b>{teksturTanahPopulate(formik.values.teksturTanah)}</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("teksturTanah", value.value)
              }
              value={formik.values.teksturTanah}
              options={teksturTanahOptions}
            />
          </div>
          <div class="col-span-6 sm:col-span-3 mt-8">
            <label
              htmlFor="retensi"
              class="block text-base font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Retensi Hara</b>
              <b>
                {checkRetensi(
                  ktkPopulate(formik.values.ktk),
                  kemasamanPopulate(formik.values.kemasaman)
                )}
              </b>
            </label>
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="ktk"
              class="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Kapasitas Tukar Kation</b>
              <b>{ktkPopulate(formik.values.ktk)}</b>
            </label>
            <CustomSelect
              onChange={(value) => formik.setFieldValue("ktk", value.value)}
              value={formik.values.ktk}
              options={ktkOptions}
            />
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="teksturTanah"
              class="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Kemasaman Tanah</b>
              <b>{kemasamanPopulate(formik.values.kemasaman)}</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("kemasaman", value.value)
              }
              value={formik.values.kemasaman}
              options={kemasamanOptions}
            />
          </div>
        </>
        {/* Faktor Yang dapat dikoreksi */}
        <>
          <div class="col-span-full flex space-x-4 text-lg mt-8">
            <b>Faktor yang dapat dikoreksi</b>
            <b>
              {checkFaktorDikoreksi(
                kedalamanPopulate(formik.values.kedalaman),
                kejenuhanPopulate(formik.values.kejenuhan)
              )}
            </b>
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="kedalaman"
              class="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Kedalaman Mineral Tanah</b>
              <b>{kedalamanPopulate(formik.values.kedalaman)}</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("kedalaman", value.value)
              }
              value={formik.values.kedalaman}
              options={kedalamanOptions}
            />
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="kejenuhan"
              class="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Kejenuhan Basa</b>
              <b>{kejenuhanPopulate(formik.values.kejenuhan)}</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("kejenuhan", value.value)
              }
              value={formik.values.kejenuhan}
              options={kejenuhanOptions}
            />
          </div>
        </>
        {/* Faktor yang tidak dapat dikendalikan dan tidak dapat dikoreksi */}
        <div class="mb-16">
          <div class="col-span-full flex space-x-4 text-lg mt-8">
            <b>
              Faktor yang tidak dapat dikendalikan dan tidak dapat dikoreksi
            </b>
            <b>
              {checkFaktorTidakDapat(
                formik.values.cuaca,
                formik.values.faktorRelief
              )}
            </b>
          </div>
          <div class="col-span-6 sm:col-span-3 ">
            <label
              htmlFor="cuaca"
              class="block text-base font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Cuaca</b>
              <b>
                {checkCuaca(
                  curahHujanPopulate(formik.values.curahHujan),
                  lamaSinarPopulate(formik.values.lamaSinar)
                )}
              </b>
            </label>
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="curahHujan"
              class="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Curah Hujan</b>
              <b>{curahHujanPopulate(formik.values.curahHujan)}</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("curahHujan", value.value)
              }
              value={formik.values.curahHujan}
              options={curahHujanOptions}
            />
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="lamaSinar"
              class="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Lama Penyinaran</b>
              <b>{lamaSinarPopulate(formik.values.lamaSinar)}</b>
            </label>
            <CustomSelect
              onChange={(value) =>
                formik.setFieldValue("lamaSinar", value.value)
              }
              value={formik.values.curahHujan}
              options={lamaSinarOptions}
            />
          </div>
          <div class="col-span-6 sm:col-span-3 mt-8">
            <label
              htmlFor="faktorRelief"
              class="block text-base font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Faktor Relief</b>
              <b>
                {checkAllRelief(
                  elevasiPopulate(formik.values.evelasi),
                  reliefPopulate(formik.values.relief)
                )}
              </b>
            </label>
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="evelasi"
              class="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Elevasi</b>
              <b>{elevasiPopulate(formik.values.evelasi)}</b>
            </label>
            <CustomSelect
              onChange={(value) => formik.setFieldValue("evelasi", value.value)}
              value={formik.values.evelasi}
              options={elevasiOptions}
            />
          </div>
          <div class="col-span-6 sm:col-span-3 my-2">
            <label
              htmlFor="relief"
              class="block text-sm font-medium text-gray-700 space-x-4 my-2"
            >
              <b>Relief</b>
              <b>{reliefPopulate(formik.values.relief)}</b>
            </label>
            <CustomSelect
              onChange={(value) => formik.setFieldValue("relief", value.value)}
              value={formik.values.relief}
              options={reliefOptions}
            />
          </div>
        </div>
        <button
          type="submit"
          class="w-full mt-8 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormikInput;
