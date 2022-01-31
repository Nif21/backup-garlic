import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import styles from "../../styles/EsriMap.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../../components/Header";

const EsriMapWithNoSSR = dynamic(() => import("../../components/EsriMap"), {
  ssr: false,
});

function Map() {
  const router = useRouter();

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
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
