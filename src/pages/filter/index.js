import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NavigationDrawer from "../../components/NavigationDrawer";
import styles from "../../styles/EsriMap.module.css";

const EsriMapWithNoSSR = dynamic(
  () => import("../../components/FilterEsriMap"),
  {
    ssr: false,
  }
);

function Index() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className=" shadow bg-base-200 drawer">
      <Head>
        <title>INA Agro-GARLIC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side flex-none hidden lg:block">
        <NavigationDrawer
          handleClick={handleClick}
          expand={true}
          title="Drainase"
        />
      </div>
      <div className="flex flex-col drawer-content  h-screen w-screen">
        <div className="flex-grow ">
          <div>
            <div className={styles.nav}>
              <label htmlFor="my-drawer">
                <img
                  src="../logo_ipb.png"
                  className={` w-32 h-32 cursor-pointer mx-auto`}
                  onClick={handleClick}
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>
        <EsriMapWithNoSSR />
      </div>
    </div>
  );
}

export default Index;
