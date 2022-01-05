import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import styles from "../../styles/EsriMap.module.css";
import { useRouter } from "next/router";

// The ArcGIS JSAPI does not currently work with SSR, so we need to disable it for the map component
const EsriMapWithNoSSR = dynamic(() => import("../../components/EsriMap"), {
  ssr: false,
});

function Map() {
  const router = useRouter();
  console.log(router.query.name);

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className=" shadow bg-base-200 drawer">
      <Head>
        <title>INA Garlic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side flex-none hidden lg:block">
        <NavigationDrawer
          handleClick={handleClick}
          expand={true}
          title={router.query.name}
        />
      </div>
      <div className="flex flex-col drawer-content  h-screen w-screen">
        <div className="flex-grow ">
          <div>
            <div classNameName={styles.nav}>
              <label for="my-drawer">
                <img
                  src="logo2.png"
                  className={` w-32 h-32 cursor-pointer mx-auto`}
                  onClick={handleClick}
                />
              </label>
            </div>
          </div>

          <EsriMapWithNoSSR />
        </div>
      </div>
    </div>
  );
}

export default Map;
