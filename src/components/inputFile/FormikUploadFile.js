import React, { useEffect, useState } from "react";
import { Formik, Form, useFormik } from "formik";

const initialValues = {
  province: "",
  kabupaten: "",
  shp: "",
  shx: "",
  dbf: "",
  xlsx: "",
};

const FormikUploadFile = () => {
  const onSubmitFile = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="m-16">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitFile}
          component={UploadFile}
        />
      </div>
    </>
  );
};

function UploadFile({ values, setFieldValue }) {
  const [province, setProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [kabupaten, setKabupaten] = useState([]);
  const [selectedKabupaten, setSelectedKabupaten] = useState(null);
  const fileInput1 = React.createRef();
  const fileInput2 = React.createRef();
  const fileInput3 = React.createRef();
  const fileInput4 = React.createRef();

  useEffect(() => {
    fetchProvince();
  }, []);

  useEffect(() => {
    fetchKabupaten(selectedProvince);
  }, [selectedProvince]);

  const fetchProvince = async () => {
    const data = await fetch(
      "http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    );
    const json = await data.json();
    setProvince(json);
  };

  const fetchKabupaten = async (id) => {
    const data = await fetch(
      `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`
    );
    const json = await data.json();
    setKabupaten(json);
  };

  const handelChangeProvince = (e) => {
    setFieldValue("province", e.target.value);
    setSelectedProvince(e.target.value);
  };

  const handelChangeKabupaten = (e) => {
    setFieldValue("kabupaten", e.target.value);
    setSelectedKabupaten(e.target.value);
  };

  return (
    <div className="mb-8">
      <Form>
        <div className="grid grid-cols-6 gap-6 my-8 mx-2">
          <div className="mb-col-span-6 sm:col-span-3">
            <label htmlFor="Provinsi" className="m-2 font-bold">
              Provinsi
            </label>
            <select
              id="country"
              name="country"
              onChange={handelChangeProvince}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-darkcoco focus:border-primary-darkcoco sm:text-sm"
            >
              {province.map((p) => (
                <option value={p.id} key={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-col-span-6 sm:col-span-3">
            <label htmlFor="Kabupaten" className="m-2 font-bold">
              Kabupaten
            </label>
            <select
              id="country"
              name="country"
              onChange={handelChangeKabupaten}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-darkcoco focus:border-primary-darkcoco sm:text-sm"
            >
              {kabupaten.map((k) => (
                <option value={k.id} key={k.id}>
                  {k.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="m-2 font-bold">File Shp</div>
        <div className="m-2 bg-primary-white rounded-lg border-black border flex mb-8">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(event) => {
              setFieldValue("shp", event.currentTarget.files[0]);
            }}
            ref={fileInput1}
          />

          <button
            className="mr-4 bg-primary-coco p-2 rounded-l-lg"
            type="button"
            onClick={() => fileInput1.current.click()}
          >
            Choose file
          </button>

          <small className="text-base my-auto">
            {values.shp ? values.shp.name || "Error" : "No file chosen"}
          </small>
          <div className="flex-grow"></div>
        </div>

        <div className="m-2 font-bold">File Shx</div>
        <div className="m-2 bg-primary-white rounded-lg border-black border flex mb-8">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(event) => {
              setFieldValue("shx", event.currentTarget.files[0]);
            }}
            ref={fileInput2}
          />

          <button
            className="mr-4 bg-primary-coco p-2 rounded-l-lg"
            type="button"
            onClick={() => fileInput2.current.click()}
          >
            Choose file
          </button>

          <small className="text-base my-auto">
            {values.shx ? values.shx.name || "Error" : "No file chosen"}
          </small>
          <div className="flex-grow"></div>
        </div>

        <div className="m-2 font-bold">File Dpf</div>
        <div className="m-2 bg-primary-white rounded-lg border-black border flex mb-8">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(event) => {
              setFieldValue("dpf", event.currentTarget.files[0]);
            }}
            ref={fileInput3}
          />

          <button
            className="mr-4 bg-primary-coco p-2 rounded-l-lg"
            type="button"
            onClick={() => fileInput3.current.click()}
          >
            Choose file
          </button>

          <small className="text-base my-auto">
            {values.dpf ? values.dpf.name || "Error" : "No file chosen"}
          </small>
          <div className="flex-grow"></div>
        </div>

        <div className="m-2 font-bold">File Xlsx</div>
        <div className="m-2 bg-primary-white rounded-lg border-black border flex mb-8">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(event) => {
              setFieldValue("xlsx", event.currentTarget.files[0]);
            }}
            ref={fileInput4}
          />

          <button
            className="mr-4 bg-primary-coco p-2 rounded-l-lg"
            type="button"
            onClick={() => fileInput4.current.click()}
          >
            Choose file
          </button>

          <small className="text-base my-auto">
            {values.xlsx ? values.xlsx.name || "Error" : "No file chosen"}
          </small>
          <div className="flex-grow"></div>
        </div>

        <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <button
            type="submit"
            className="w-1/2 mt-8 justify-center place-items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco "
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default FormikUploadFile;
