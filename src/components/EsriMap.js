
import React, { useRef, useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import DictionaryRenderer from "@arcgis/core/renderers/DictionaryRenderer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import Graphic from "@arcgis/core/Graphic"
import MapView from "@arcgis/core/views/MapView";
import Zoom from "@arcgis/core/widgets/Zoom";
import LayerList from "@arcgis/core/widgets/LayerList";
import styles from "../styles/EsriMap.module.css";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";

function EsriMap() {
  const mapDiv = useRef(null);

  console.log(webMercatorUtils.lngLatToXY(-0.789596, 100.656751))
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
          components: ["attribution"]
        },
        extent: {
          spatialReference: {
            wkid: 102100,
          },
          xmax: -13581772,
          xmin: -13584170,
          ymax: 4436367,
          ymin: 4435053,
        },
      });

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      const point = { //Create a point
        type: "point",
        longitude: -118.80657463861,
        latitude: 34.0005930608889
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

      // Create a line geometry
      const polyline = {
        type: "polyline",
        paths: [
          [-118.821527826096, 34.0139576938577], //Longitude, latitude
          [-118.814893761649, 34.0080602407843], //Longitude, latitude
          [-118.808878330345, 34.0016642996246]  //Longitude, latitude
        ]
      };
      const simpleLineSymbol = {
        type: "simple-line",
        color: [226, 119, 40], // Orange
        width: 2
      };

      const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: simpleLineSymbol
      });
      graphicsLayer.add(polylineGraphic);
      // Create a polygon geometry
      const polygon = {
        type: "polygon",
        rings: [
          [-118.818984489994, 34.0137559967283], //Longitude, latitude
          [-118.806796597377, 34.0215816298725], //Longitude, latitude
          [-118.791432890735, 34.0163883241613], //Longitude, latitude
          [-118.79596686535, 34.008564864635],   //Longitude, latitude
          [-118.808558110679, 34.0035027131376]  //Longitude, latitude
        ]
      };

      const simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.8],  // Orange, opacity 80%
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      };
      const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol,

      });
      graphicsLayer.add(polygonGraphic);
    }
  }, []);

  return <div className={styles.mapDiv} ref={mapDiv}></div>;
}

export default EsriMap;