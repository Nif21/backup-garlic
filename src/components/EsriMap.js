import React, { useRef, useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Legend from "@arcgis/core/widgets/Legend";
import Graphic from "@arcgis/core/Graphic";
import Zoom from "@arcgis/core/widgets/Zoom";
import styles from "../styles/EsriMap.module.css";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import Print from "@arcgis/core/widgets/Print";
function EsriMap() {
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
        const data = await fetch("https://garlic-backend.herokuapp.com/v1");
        const dataJSON = await data.json();
        for (let d in dataJSON) {
          let dt = dataJSON[d].data;
          let polygon;
          const graphicsNormal = dt.map((v) => {
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
                name: "kelasfaktorlandscape",
                alias: "kelasfaktorlandscape",
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
                "<h1><b>Kelas Faktor Landscape:</b> {kelasfaktorlandscape}</h1>" +
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
      })();
    }
  }, []);

  return <div className={styles.mapDiv} ref={mapDiv}></div>;
}

export default EsriMap;
