
import React, { useRef, useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import DictionaryRenderer from "@arcgis/core/renderers/DictionaryRenderer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import Graphic from "@arcgis/core/Graphic"
import MapView from "@arcgis/core/views/MapView";
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

    

      new MapView({
        map: map,
        container: mapDiv.current,
        ui: {
          components: ["attribution"]
        },
      });
 

      const graphicsLayer = new GraphicsLayer(
      );
      map.add(graphicsLayer);
      
      (async () => {
        console.log("A");
        const data = await fetch("http://1565-125-165-84-143.ngrok.io/v1/show")
        const dataJSON = await data.json();
 
        const simpleFillSymbol = {
          type: "simple-fill",
          color: [227, 139, 79, 0.8],  // Orange, opacity 80%
          outline: {
            color: [255, 255, 255],
            width: 1
          }
        };
        let polygon, attributes ;
        dataJSON.map((v)=>{
          polygon = {
            type: "polygon",
            rings: v.geom.coordinates[0][0]
          };
          attributes = {
            "name": "Spruce",
            "family": "Pinaceae",
            "count": 126
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
          graphicsLayer.add(new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol,
            attributes: attributes,
            outFields: ["klasifikasitanah","CITY_JUR","X_STREET","PARKING","ELEV_FT"],
            popupTemplate: popupTrailheads
          }));
        })
      })()
    }
  }, []);
  
  return <div className={styles.mapDiv} ref={mapDiv}></div>;
}

export default EsriMap;