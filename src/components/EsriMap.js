
import React, { useRef, useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Legend from "@arcgis/core/widgets/Legend";
import Graphic from "@arcgis/core/Graphic"

import styles from "../styles/EsriMap.module.css";

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

      const view =new MapView({
        map: map,
        container: mapDiv.current,
        ui: {
          components: ["attribution"]
        },
      });
 

   

      const legend = new Legend({
        view: view
      });
      view.ui.add(legend, "bottom-left");
      
      (async () => {
        const data = await fetch("http://40bb-180-245-81-100.ngrok.io/v1/show")
        const dataJSON = await data.json();
 
        const simpleFillSymbol = {
          type: "simple-fill",
          color: [255, 0, 0, 0.8],  // Orange, opacity 80%
          outline: {
            color: [255, 255, 255],
            width: 1
          }
        };
        let polygon ;
        const graphicsNormal = dataJSON.map((v)=>{
          polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0]
          };
          const popupTrailheads = {
            "title": "No SPT : " + v.spt.toString() + " (Proporsi " + v.proporsi + " )",
            "content":  "<h1><b>Kelas Faktor Landscape:</b> " + v.kelasfaktorlandscape + "</h1>" + 
                        "<br><b>Bahan Induk:</b> " + v.bahaninduk + 
                        "<br><b>Kedalam Mineral Tanah : </b>"+ v.kedalamanmineraltanah + 
                        "<br><b>Drainase: </b> " + v.drainase +
                        "<br><b>Tekstur Tanah:</b> " + v.teksturtanah + 
                        "<br><b>Kemasaman Tanah: </b> " + v.kemasamantanah +
                        "<br><b>Kapasitas Tukar Kation: </b> " + v.kapasitastukarkation +
                        "<br><b>Kejenuhan Basa: </b> " + v.kejenuhanbasa +
                        "<br><b>Land Form: </b> " + v.landform +
                        "<br><b>Bahan Induk: </b> " + v.bahaninduk +
                        "<br><b>Relief: </b> " + v.relief +
                        "<br><b>Luas: </b> " + v.luas +
                        "<br><b>Persentase Luas: </b> " + v.persentaseluas
          }
          return new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol,
            attributes: v,
            popupTemplate: popupTrailheads
          });
        })

        const graphicsS3 = dataJSON.map((v)=>{
          if(v.kelasfaktorlandscape == "S3"){
              polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0]
          };
          }
        
          const popupTrailheads = {
            "title": "No SPT : " + v.spt.toString() + " (Proporsi " + v.proporsi + " )",
            "content":  "<h1><b>Kelas Faktor Landscape:</b> " + v.kelasfaktorlandscape + "</h1>" + 
                        "<br><b>Bahan Induk:</b> " + v.bahaninduk + 
                        "<br><b>Kedalam Mineral Tanah : </b>"+ v.kedalamanmineraltanah + 
                        "<br><b>Drainase: </b> " + v.drainase +
                        "<br><b>Tekstur Tanah:</b> " + v.teksturtanah + 
                        "<br><b>Kemasaman Tanah: </b> " + v.kemasamantanah +
                        "<br><b>Kapasitas Tukar Kation: </b> " + v.kapasitastukarkation +
                        "<br><b>Kejenuhan Basa: </b> " + v.kejenuhanbasa +
                        "<br><b>Land Form: </b> " + v.landform +
                        "<br><b>Bahan Induk: </b> " + v.bahaninduk +
                        "<br><b>Relief: </b> " + v.relief +
                        "<br><b>Luas: </b> " + v.luas +
                        "<br><b>Persentase Luas: </b> " + v.persentaseluas
          }
          return new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol,
            attributes: v,
            popupTemplate: popupTrailheads
          });
        })

        const graphicsS2 = dataJSON.map((v)=>{
          if(v.kelasfaktorlandscape == "S2"){
            polygon = {
              type: "polygon",
              rings: v.geom.coordinates[0][0]
            };
          }      
          const popupTrailheads = {
            "title": "No SPT : " + v.spt.toString() + " (Proporsi " + v.proporsi + " )",
            "content":  "<h1><b>Kelas Faktor Landscape:</b> " + v.kelasfaktorlandscape + "</h1>" + 
                        "<br><b>Bahan Induk:</b> " + v.bahaninduk + 
                        "<br><b>Kedalam Mineral Tanah : </b>"+ v.kedalamanmineraltanah + 
                        "<br><b>Drainase: </b> " + v.drainase +
                        "<br><b>Tekstur Tanah:</b> " + v.teksturtanah + 
                        "<br><b>Kemasaman Tanah: </b> " + v.kemasamantanah +
                        "<br><b>Kapasitas Tukar Kation: </b> " + v.kapasitastukarkation +
                        "<br><b>Kejenuhan Basa: </b> " + v.kejenuhanbasa +
                        "<br><b>Land Form: </b> " + v.landform +
                        "<br><b>Bahan Induk: </b> " + v.bahaninduk +
                        "<br><b>Relief: </b> " + v.relief +
                        "<br><b>Luas: </b> " + v.luas +
                        "<br><b>Persentase Luas: </b> " + v.persentaseluas
          }
          return new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol,
            attributes: v,
            popupTemplate: popupTrailheads
          });
        })

        const graphicsS1 = dataJSON.map((v)=>{
          if(v.kelasfaktorlandscape == "S1"){
              polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0]
          };
          }
        
          const popupTrailheads = {
            "title": "No SPT : " + v.spt.toString() + " (Proporsi " + v.proporsi + " )",
            "content":  "<h1><b>Kelas Faktor Landscape:</b> " + v.kelasfaktorlandscape + "</h1>" + 
                        "<br><b>Bahan Induk:</b> " + v.bahaninduk + 
                        "<br><b>Kedalam Mineral Tanah : </b>"+ v.kedalamanmineraltanah + 
                        "<br><b>Drainase: </b> " + v.drainase +
                        "<br><b>Tekstur Tanah:</b> " + v.teksturtanah + 
                        "<br><b>Kemasaman Tanah: </b> " + v.kemasamantanah +
                        "<br><b>Kapasitas Tukar Kation: </b> " + v.kapasitastukarkation +
                        "<br><b>Kejenuhan Basa: </b> " + v.kejenuhanbasa +
                        "<br><b>Land Form: </b> " + v.landform +
                        "<br><b>Bahan Induk: </b> " + v.bahaninduk +
                        "<br><b>Relief: </b> " + v.relief +
                        "<br><b>Luas: </b> " + v.luas +
                        "<br><b>Persentase Luas: </b> " + v.persentaseluas
          }
          return new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol,
            attributes: v,
            popupTemplate: popupTrailheads
          });
        })

        const normalLayer = new FeatureLayer({
          fields: [
            {
              name: "ObjectID",
              alias: "ObjectID",
              type: "oid"
            },
            {
              name: "spt",
              alias: "spt",
              type: "string"
            },
            {
              name: "proporsi",
              alias: "proporsi",
              type: "string"
            }
          ],
          objectIdField: "ObjectID",
          geometryType: "polygon",
          source: graphicsNormal,
          renderer: {
            type: "simple",
            "symbol": {
              "color": "#FF4500",
              "type": "simple-fill",
              "style": "solid",
              "outline": {
                color: [255, 255, 255],
                width: 1

              }
            },
            "label": "Normal"
          },
          popupTemplate: {
            title: "{spt}",
            proporsi: "{proporsi}"
          }
        });
      

        const s1Layer = new FeatureLayer({
          title: "Layer Kesesuain Lahan",
          fields: [
            {
              name: "ObjectID",
              alias: "ObjectID",
              type: "oid"
            },
            {
              name: "spt",
              alias: "spt",
              type: "string"
            },
            {
              name: "proporsi",
              alias: "proporsi",
              type: "string"
            }
          ],
          objectIdField: "ObjectID",
          geometryType: "polygon",
          source: graphicsS1,
          renderer: {
            type: "simple",
            "symbol": {
              "color": "#F0E68C",
              "type": "simple-fill",
              "style": "solid",
              "outline": {
                color: [255, 255, 255],
                width: 1

              }
            },
            "label": "S1"
          },
          popupTemplate: {
            title: "{spt}",
            proporsi: "{proporsi}"
          }
        });
      
        const s3Layer = new FeatureLayer({
          fields: [
            {
              name: "ObjectID",
              alias: "ObjectID",
              type: "oid"
            },
            {
              name: "spt",
              alias: "spt",
              type: "string"
            },
            {
              name: "proporsi",
              alias: "proporsi",
              type: "string"
            }
          ],
          objectIdField: "ObjectID",
          geometryType: "polygon",
          source: graphicsS3,
          renderer: {
            type: "simple",
            "symbol": {
              "color": "#800000",
              "type": "simple-fill",
              "style": "solid",
              "outline": {
                color: [255, 255, 255],
                width: 1

              }
            },
            "label": "S3"
          },
          popupTemplate: {
            title: "{spt}",
            proporsi: "{proporsi}"
          }
        });
        const s2Layer = new FeatureLayer({
          fields: [
            {
              name: "ObjectID",
              alias: "ObjectID",
              type: "oid"
            },
            {
              name: "spt",
              alias: "spt",
              type: "string"
            },
            {
              name: "proporsi",
              alias: "proporsi",
              type: "string"
            }
          ],
          objectIdField: "ObjectID",
          geometryType: "polygon",
          source: graphicsS2,
          renderer: {
            type: "simple",
            "symbol": {
              "color": "#00FF7F",
              "type": "simple-fill",
              "style": "solid",
              "outline": {
                color: [255, 255, 255],
                width: 1

              }
            },
            "label": "S2"
          },
          popupTemplate: {
            title: "{spt}",
            proporsi: "{proporsi}"
          }
        });
        map.add(normalLayer);
        map.add(s3Layer);
        map.add(s2Layer);
        map.add(s1Layer);
      })()
    }
  }, []);
  
  return <div className={styles.mapDiv} ref={mapDiv}></div>;
}

export default EsriMap;