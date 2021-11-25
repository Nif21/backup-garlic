import React, { useCallback, useState } from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";

const initialValues = {
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
      <div class="m-16">
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
  const fileInput1 = React.createRef();
  const fileInput2 = React.createRef();
  const fileInput3 = React.createRef();
  const fileInput4 = React.createRef();
  return (
    <div>
      <Form>
        <div class="m-2 font-bold">File Shp</div>
        <div class="m-2 bg-primary-white rounded-lg border-black border flex mb-8">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(event) => {
              setFieldValue("shp", event.currentTarget.files[0]);
            }}
            ref={fileInput1}
          />

          <button
            class="mr-4 bg-primary-coco p-2 rounded-l-lg"
            type="button"
            onClick={() => fileInput1.current.click()}
          >
            Choose file
          </button>

          <small class="text-base my-auto">
            {values.shp ? values.shp.name || "Error" : "No file chosen"}
          </small>
          <div class="flex-grow"></div>
        </div>

        <div class="m-2 font-bold">File Shx</div>
        <div class="m-2 bg-primary-white rounded-lg border-black border flex mb-8">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(event) => {
              setFieldValue("shx", event.currentTarget.files[0]);
            }}
            ref={fileInput2}
          />

          <button
            class="mr-4 bg-primary-coco p-2 rounded-l-lg"
            type="button"
            onClick={() => fileInput2.current.click()}
          >
            Choose file
          </button>

          <small class="text-base my-auto">
            {values.shx ? values.shx.name || "Error" : "No file chosen"}
          </small>
          <div class="flex-grow"></div>
        </div>

        <div class="m-2 font-bold">File Dpf</div>
        <div class="m-2 bg-primary-white rounded-lg border-black border flex mb-8">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(event) => {
              setFieldValue("dpf", event.currentTarget.files[0]);
            }}
            ref={fileInput3}
          />

          <button
            class="mr-4 bg-primary-coco p-2 rounded-l-lg"
            type="button"
            onClick={() => fileInput3.current.click()}
          >
            Choose file
          </button>

          <small class="text-base my-auto">
            {values.dpf ? values.dpf.name || "Error" : "No file chosen"}
          </small>
          <div class="flex-grow"></div>
        </div>

        <div class="m-2 font-bold">File Xlsx</div>
        <div class="m-2 bg-primary-white rounded-lg border-black border flex mb-8">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(event) => {
              setFieldValue("xlsx", event.currentTarget.files[0]);
            }}
            ref={fileInput4}
          />

          <button
            class="mr-4 bg-primary-coco p-2 rounded-l-lg"
            type="button"
            onClick={() => fileInput4.current.click()}
          >
            Choose file
          </button>

          <small class="text-base my-auto">
            {values.xlsx ? values.xlsx.name || "Error" : "No file chosen"}
          </small>
          <div class="flex-grow"></div>
        </div>

        <button
          type="submit"
          class="w-full mt-8 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco "
        >
          Submit
        </button>
      </Form>
    </div>
  );
}

export default FormikUploadFile;
