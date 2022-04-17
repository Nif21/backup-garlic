import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import styles from "../../styles/EsriMap.module.css";
import storage from "../../redux/storage";

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
  const auth = storage.get("auth", {
    token: "",
    user: {
      nama: "",
    },
  });
  return (
    <div className="flex font-display flex-col h-screen bg-white">
      <Head>
        <title>INA Agro-GARLIC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`flex-shrink-0 w-64 h-full flex  flex-col border-r transition-all duration-300 ${
            !active ? "-ml-64" : ""
          } `}
        >
          <NavigationDrawer token={auth.token} nama={auth.user.nama} />
        </aside>
        <div className="flex flex-1 flex-col ">
          <div className="shadow-xl">
            <header className="flex items-center text-semibold text-gray-100 bg-primary-white ">
              <button className="p-1 mx-4" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </header>
          </div>
          <div className="  overflow-y-auto paragraph">
            <main>
              <div className="flex-grow bg-white">
                <EsriMapWithNoSSR />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
