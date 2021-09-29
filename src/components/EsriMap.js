
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

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      const point = { //Create a point
        type: "point",
        longitude: 110.93698189040987,
        latitude: -7.521354251461899
      };
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],  // Orange
        outline: {
          color: [255, 255, 255], // White
          width: 1
        }
      };

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
      });
      graphicsLayer.add(pointGraphic);
      
      (async () => {
        console.log("A");
        const data = await fetch("http://localhost:4000/v1/show")
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
          graphicsLayer.add(new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol,
            attributes: attributes
          }));
        })
      })()
    }
  }, []);
  
  return <div className={styles.mapDiv} ref={mapDiv}></div>;
}

export default EsriMap;