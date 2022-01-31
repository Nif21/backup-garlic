import React, { useRef, useEffect, useState } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Legend from "@arcgis/core/widgets/Legend";
import Graphic from "@arcgis/core/Graphic";
import Zoom from "@arcgis/core/widgets/Zoom";
import styles from "../styles/EsriMap.module.css";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
function FilterEsriMap({ title }) {
  const mapDiv = useRef(null);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const map = new ArcGISMap({
        basemap: "gray-vector",
      });

      const view = new MapView({
        map: map,
        container: mapDiv.current,
        ui: {
          components: ["attribution"],
        },
        extent: {
          // autocasts as new Extent()
          xmin: 11467704.3,
          ymin: -1008101.35,
          xmax: 14285478.91,
          ymax: 608393.1,
          spatialReference: 102100,
        },
      });
      var zoom = new Zoom({
        view: view,
      });
      const legend = new Legend({
        view: view,
        container: document.createElement("div"),
      });
      let basemapGallery = new BasemapGallery({
        view: view,
        container: document.createElement("div"),
      });

      // Add widget to the top right corner of the view

      var bgExpandLegend = new Expand({
        view: view,
        content: legend.container,
        expandIconClass: "esri-icon-layer-list",
      });
      var bgExpandBasemap = new Expand({
        view: view,
        content: basemapGallery.container,
        expandIconClass: "esri-icon-basemap",
      });

      const seasonsElement = document.getElementById("seasons-filter");
      document
        .getElementById("query-parks")
        .addEventListener("click", async () => {
          map.removeAll();
          getNormalMap(map, topCountSelect.selectedOption.value);
        });
      // Add widget to the top right corner of the view
      view.ui.add(seasonsElement, "top-right");
      view.ui.add(bgExpandLegend, "bottom-left");
      view.ui.add(bgExpandBasemap, "bottom-left");
      view.ui.add(zoom, "bottom-right");
      getNormalMap(map, "");
    }
  }, []);
  return (
    <div>
      <div id="seasons-filter" className={styles.filter}>
        <label>
          Pilih variabel untuk di filter.
          <calcite-select id="topCountSelect" scale="s" width="auto">
            <calcite-option label="Default" value=""></calcite-option>
            <calcite-option
              label="Drainase"
              value="KelasDrainase"
            ></calcite-option>
            <calcite-option
              label="Tekstur Tanah"
              value="KelasTeksturTanah"
            ></calcite-option>
            <calcite-option
              label="Kedalamanan Mineral Tanah"
              value="KelasKedalamanMineralTanah"
            ></calcite-option>
            <calcite-option
              label="Kapasitas Tukar Kation"
              value="KelasKapasitasTukarKation"
            ></calcite-option>
            <calcite-option
              label="Kemasaman Tanah"
              value="KelasKemasamanTanah"
            ></calcite-option>
            <calcite-option
              label="Kejenuhan Basa"
              value="KelasKejenuhanBasa"
            ></calcite-option>
            <calcite-option
              label="Temperatur"
              value="KelasTemperatur"
            ></calcite-option>
            <calcite-option
              label="Curah Hujan"
              value="KelasCurahHujan"
            ></calcite-option>
            <calcite-option
              label="Lama Penyinaran"
              value="KelasLamaPenyinaran"
            ></calcite-option>
            <calcite-option
              label="Elevasi"
              value="KelasElevasi"
            ></calcite-option>
            <calcite-option label="Relief" value="KelasRelief"></calcite-option>
            <calcite-option
              label="Faktor Cuaca"
              value="KelasFaktorCuaca"
            ></calcite-option>
          </calcite-select>
        </label>
        <br />
        <div>
          <button id="query-parks" className={styles.buttonSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className={styles.mapDiv} ref={mapDiv}></div>
    </div>
  );
}

function kelasFaktor(a, b) {
  if (a == 3 || b == 3) return "Kelas S1 Sangat Sesuai";
  else if (a < 3 && b < 3) return "Kelas S2, Cukup Sesuai";
  else if (a < 2 && b < 2) return "Kelas S3, Sesuai Marginal";
  return "Kelas N, Tidak Sesuai";
}
const getNormalMap = async (map, filter) => {
  let data;
  if (filter == "") {
    alert("in no filter");
    data = await fetch("https://garlic-backend.herokuapp.com/v1");
    const dataJSON = await data.json();
    for (let d in dataJSON) {
      let dt = dataJSON[d].data;
      let polygon;
      const graphicsNormal = dt.map((v) => {
        let kelas = kelasFaktor(
          v.KelasFaktorYangDapatDikendalikan.Kelas,
          v.KelasFaktorYangEfeknyaDapatDikoreksi.Kelas
        );
        v.kelas = kelas;
        polygon = {
          type: "polygon",
          rings: v.geom.coordinates[0][0],
        };
        return new Graphic({
          geometry: polygon,
          attributes: v,
        });
      });

      const graphicsS3 = dt.map((v) => {
        if (
          v.KelasFaktorYangDapatDikendalikan.Kelas == 3 ||
          v.KelasFaktorYangEfeknyaDapatDikoreksi.Kelas == 3
        ) {
          polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0],
          };
        }

        return new Graphic({
          geometry: polygon,
          // attributes: v,
        });
      });

      const graphicsS2 = dt.map((v) => {
        if (
          v.KelasFaktorYangDapatDikendalikan.Kelas < 3 ||
          v.KelasFaktorYangEfeknyaDapatDikoreksi.Kelas < 3
        ) {
          polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0],
          };
        }
        return new Graphic({
          geometry: polygon,
          //attributes: v,
        });
      });

      const graphicsS1 = dt.map((v) => {
        if (
          v.KelasFaktorYangDapatDikendalikan.Kelas < 2 ||
          v.KelasFaktorYangEfeknyaDapatDikoreksi.Kelas < 2
        ) {
          polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0],
          };
        }

        return new Graphic({
          geometry: polygon,
          //attributes: v,
        });
      });
      const normalLayer = new FeatureLayer({
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid",
          },
          {
            name: "spt",
            alias: "spt",
            type: "string",
          },
          {
            name: "proporsi",
            alias: "proporsi",
            type: "string",
          },
          {
            name: "kelas",
            alias: "kelas",
            type: "string",
          },
          {
            name: "kedalamanmineraltanah",
            alias: "kedalamanmineraltanah",
            type: "string",
          },
          {
            name: "drainase",
            alias: "drainase",
            type: "string",
          },
          {
            name: "teksturtanah",
            alias: "teksturtanah",
            type: "string",
          },
          {
            name: "kemasamantanah",
            alias: "kemasamantanah",
            type: "string",
          },
          {
            name: "kapasitastukarkation",
            alias: "kapasitastukarkation",
            type: "string",
          },
          {
            name: "kejenuhanbasa",
            alias: "kejenuhanbasa",
            type: "string",
          },
          {
            name: "landform",
            alias: "landform",
            type: "string",
          },
          {
            name: "bahaninduk",
            alias: "bahaninduk",
            type: "string",
          },
          {
            name: "relief",
            alias: "relief",
            type: "string",
          },
          {
            name: "luas",
            alias: "luas",
            type: "string",
          },
          {
            name: "persentaseluas",
            alias: "persentaseluas",
            type: "string",
          },
        ],
        objectIdField: "ObjectID",
        geometryType: "polygon",
        source: graphicsNormal,
        renderer: {
          type: "simple",
          symbol: {
            color: "#F70400",
            type: "simple-fill",
            style: "solid",
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          label: "N",
        },
        popupTemplate: {
          title: "No SPT : {spt} (Proporsi {proporsi} )",
          content:
            "<h1><b>Kelas Faktor Landscape:</b> {kelas}</h1>" +
            "<br><b>Kedalam Mineral Tanah : </b> {kedalamanmineraltanah}" +
            "<br><b>Drainase: </b> {drainase}" +
            "<br><b>Tekstur Tanah:</b> {teksturtanah}" +
            "<br><b>Kemasaman Tanah: </b> {kemasamantanah}" +
            "<br><b>Kapasitas Tukar Kation: </b> {kapasitastukarkation}" +
            "<br><b>Kejenuhan Basa: </b> {kejenuhanbasa}" +
            "<br><b>Land Form: </b> {landform}" +
            "<br><b>Bahan Induk: </b> {bahaninduk}" +
            "<br><b>Relief: </b> {relief}" +
            "<br><b>Luas: </b> {luas}" +
            "<br><b>Persentase Luas: </b> {persentaseluas}",
        },
      });

      const s1Layer = new FeatureLayer({
        title: "Layer Kesesuain Lahan",
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid",
          },
        ],
        objectIdField: "ObjectID",
        geometryType: "polygon",
        source: graphicsS1,
        renderer: {
          type: "simple",
          symbol: {
            color: "#00FF7F",
            type: "simple-fill",
            style: "solid",
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          label: "S1",
        },
      });

      const s2Layer = new FeatureLayer({
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid",
          },
        ],
        objectIdField: "ObjectID",
        geometryType: "polygon",
        source: graphicsS2,
        renderer: {
          type: "simple",
          symbol: {
            color: "#FFE600",
            type: "simple-fill",
            style: "solid",
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          label: "S2",
        },
      });

      const s3Layer = new FeatureLayer({
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid",
          },
        ],
        objectIdField: "ObjectID",
        geometryType: "polygon",
        source: graphicsS3,
        renderer: {
          type: "simple",
          symbol: {
            color: "#FF4400",
            type: "simple-fill",
            style: "solid",
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          label: "S3",
        },
      });
      map.add(normalLayer);
      map.add(s3Layer);
      map.add(s2Layer);
      map.add(s1Layer);
    }
  } else {
    data = await fetch(
      "https://garlic-backend.herokuapp.com/v1?select=spt&select=proporsi&select=geom&select=" +
        filter
    );
    alert("in filter");
    const dataJSON = await data.json();
    for (let d in dataJSON) {
      let dt = dataJSON[d].data;
      let polygon;
      const graphicsNormal = dt.map((v) => {
        v.dataKelas = v[filter];
        v.kelas = v.dataKelas.NamaKelas;
        v.variabel = v.dataKelas.Variabel;
        v.keterangan = v.dataKelas.Keterangan;
        v.rekomendasi = v.dataKelas.Rekomendasi;
        polygon = {
          type: "polygon",
          rings: v.geom.coordinates[0][0],
        };
        return new Graphic({
          geometry: polygon,
          attributes: v,
        });
      });

      const graphicsS3 = dt.map((v) => {
        if (v.dataKelas.Kelas == 3) {
          polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0],
          };
        }

        return new Graphic({
          geometry: polygon,
          // attributes: v,
        });
      });

      const graphicsS2 = dt.map((v) => {
        if (v.dataKelas.Kelas < 3) {
          polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0],
          };
        }
        return new Graphic({
          geometry: polygon,
          //attributes: v,
        });
      });

      const graphicsS1 = dt.map((v) => {
        if (v.dataKelas.Kelas < 2) {
          polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0],
          };
        }

        return new Graphic({
          geometry: polygon,
          //attributes: v,
        });
      });
      const normalLayer = new FeatureLayer({
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid",
          },
          {
            name: "spt",
            alias: "spt",
            type: "string",
          },
          {
            name: "proporsi",
            alias: "proporsi",
            type: "string",
          },
          {
            name: "kelas",
            alias: "kelas",
            type: "string",
          },
          {
            name: "variabel",
            alias: "variabel",
            type: "string",
          },
          {
            name: "keterangan",
            alias: "keterangan",
            type: "string",
          },
          {
            name: "rekomendasi",
            alias: "rekomendasi",
            type: "string",
          },
        ],
        objectIdField: "ObjectID",
        geometryType: "polygon",
        source: graphicsNormal,
        renderer: {
          type: "simple",
          symbol: {
            color: "#F70400",
            type: "simple-fill",
            style: "solid",
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          label: "N",
        },
        popupTemplate: {
          title: "No SPT : {spt} (Proporsi {proporsi} )",
          content:
            "<h1><b>Kelas:</b> {kelas}</h1>" +
            "<br><b>Variabel : </b> {variabel}" +
            "<br><b>Keterangan : </b> {keterangan}" +
            "<br><b>Rekomendasi: </b> {rekomendasi}",
        },
      });

      const s1Layer = new FeatureLayer({
        title: "Layer Kesesuain Lahan",
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid",
          },
        ],
        objectIdField: "ObjectID",
        geometryType: "polygon",
        source: graphicsS1,
        renderer: {
          type: "simple",
          symbol: {
            color: "#00FF7F",
            type: "simple-fill",
            style: "solid",
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          label: "S1",
        },
      });

      const s2Layer = new FeatureLayer({
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid",
          },
        ],
        objectIdField: "ObjectID",
        geometryType: "polygon",
        source: graphicsS2,
        renderer: {
          type: "simple",
          symbol: {
            color: "#FFE600",
            type: "simple-fill",
            style: "solid",
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          label: "S2",
        },
      });

      const s3Layer = new FeatureLayer({
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid",
          },
        ],
        objectIdField: "ObjectID",
        geometryType: "polygon",
        source: graphicsS3,
        renderer: {
          type: "simple",
          symbol: {
            color: "#FF4400",
            type: "simple-fill",
            style: "solid",
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          label: "S3",
        },
      });
      map.add(normalLayer);
      map.add(s3Layer);
      map.add(s2Layer);
      map.add(s1Layer);
    }
  }
};

export default FilterEsriMap;
