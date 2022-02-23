import dynamic from "next/dynamic";
 import { useState } from "react";
import Header from "../../components/Header";

const EsriMapWithNoSSR = dynamic(() => import("../../components/EsriMap"), {
  ssr: false,
});

function Map() {
  const [active, setActive] = useState(false);
  return (
    <div className=" shadow bg-base-200 drawer">
      <div className={`p-2 ${active ? "" : ""}`}>
        <Header />
      </div>
      <EsriMapWithNoSSR />
    </div>
  );
}

export default Map;
