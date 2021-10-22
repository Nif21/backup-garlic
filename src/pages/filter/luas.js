import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import styles from "../../styles/EsriMap.module.css";
import { useRouter } from 'next/router'

// The ArcGIS JSAPI does not currently work with SSR, so we need to disable it for the map component
const EsriMapWithNoSSR = dynamic(() => import("../../components/FilterEsriMap"), {
  ssr: false,
});


function Filter() {
  const router = useRouter()
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div class=" shadow bg-base-200 drawer">
      <Head>
        <title>INA Garlic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side flex-none hidden lg:block">
        <NavigationDrawer handleClick={handleClick} expand={true} title="Luas"/>
      </div>
      <div class="flex flex-col drawer-content  h-screen w-screen">
        <div class="flex-grow ">
          <div>
            <div className={styles.nav}>
              <label for="my-drawer" >
                <img src="../circle.png" class={` w-32 h-32 cursor-pointer mx-auto`} onClick={handleClick} />
              </label>
            </div>
          </div>

          <EsriMapWithNoSSR title="Luas"/>
        </div>
      </div>
    </div>

  );
}

export default Filter;