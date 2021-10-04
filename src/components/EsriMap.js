
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
 

      const AllLayer = new FeatureLayer({
        copyright: "BELIIN MEKDI DONG",
        title: "All Layers",
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
        source: [],
        popupTemplate: {
          title: "{spt}",
          proporsi: "{proporsi}"
        }
      });
      map.add(AllLayer);

      const legend = new Legend({
        view: view
      });
      view.ui.add(legend, "bottom-left");
      
      (async () => {
        const data = await fetch("http://localhost:8000/v1/show")
        const dataJSON = await data.json();
 
        const simpleFillSymbol = {
          type: "simple-fill",
          color: [227, 139, 79, 0.8],  // Orange, opacity 80%
          outline: {
            color: [255, 255, 255],
            width: 1
          }
        };
        let polygon ;
        const graphics = dataJSON.map((v)=>{
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
            outFields: ["klasifikasitanah","CITY_JUR","X_STREET","PARKING","ELEV_FT"],
            popupTemplate: popupTrailheads
          });
        })
        AllLayer.applyEdits({addFeatures: graphics})
      })()
    }
  }, []);
  
  return <div className={styles.mapDiv} ref={mapDiv}></div>;
}

export default EsriMap;