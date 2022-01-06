import React, { useRef, useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Legend from "@arcgis/core/widgets/Legend";
import Graphic from "@arcgis/core/Graphic";
import Zoom from "@arcgis/core/widgets/Zoom";
import styles from "../styles/EsriMap.module.css";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import Print from "@arcgis/core/widgets/Print";
import Extent from "@arcgis/core/geometry/Extent";
function FilterEsriMap({ title }) {
  const mapDiv = useRef(null);
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
      var print = new Print({
        view: view,
        // specify your own print service
        printServiceUrl:
          "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
        container: document.createElement("div"),
      });

      // Add widget to the top right corner of the view
      var bgExpandPrint = new Expand({
        view: view,
        content: print.container,
        expandIconClass: "esri-icon-printer",
      });

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
      // Add widget to the top right corner of the view
      view.ui.add(bgExpandLegend, "top-right");
      view.ui.add(bgExpandBasemap, "top-right");
      view.ui.add(bgExpandPrint, "top-right");
      view.ui.add(zoom, "bottom-right");

      (async () => {
        let judulKelas = spesifikasiKelas(title.replace(/ /g, ""));
        const data = await fetch(
          "https://garlic-backend.herokuapp.com/v1?select=spt&select=proporsi&select=geom&select=" +
            judulKelas
        );
        const dataJSON = await data.json();
        console.log(dataJSON);
        for (let d in dataJSON) {
          let dt = dataJSON[d].data;
          let polygon;
          const graphicsNormal = dt.map((v) => {
            v.dataKelas = v[judulKelas];
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
            if (v.dataKelas.Kelas == 3 || v.dataKelas.Kelas == 3) {
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
            if (v.dataKelas.Kelas < 3 || v.dataKelas.Kelas < 3) {
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
            if (v.dataKelas.Kelas < 2 || v.dataKelas.Kelas < 2) {
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
      })();
    }
  }, []);

  return <div className={styles.mapDiv} ref={mapDiv}></div>;
}

function spesifikasiKelas(kelas) {
  if (kelas == "Drainase") return "KelasDrainase";
  else if (kelas == "TeksturTanah") return "KelasTeksturTanah";
  else if (kelas == "KedalamanMineralTanah")
    return "KelasKedalamanMineralTanah";
  else if (kelas == "KapasitasTukarKation") return "KelasKapasitasTukarKation";
  else if (kelas == "KemasamanTanah") return "KelasKemasamanTanah";
  else if (kelas == "KejenuhanBasa") return "KelasKejenuhanBasa";
  else if (kelas == "Relief") return "KelasRelief";
  return "";
}

export default FilterEsriMap;
