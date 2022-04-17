import { useState, useEffect } from "react";
import ContentLeft from "../components/ContentLeft";
import ContentRight from "../components/ContentRight";
import HomeHeader from "../components/HomeHeader";
import NavigationDrawer from "../components/NavigationDrawer";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import storage from "../redux/storage";

export default function Home() {
  const [active, setActive] = useState(false);
  const auth = storage.get("auth", {
    token: "",
    user: {
      nama: "",
    },
  });

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-col h-screen font-display bg-white">
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
          <header className="flex items-center text-semibold text-gray-100 bg-primary-white ">
            <HomeHeader active={active} handleClick={handleClick} />
          </header>
          <div className="flex-1 flex-col   overflow-y-auto paragraph">
            <main className="flex-grow bg-white">
              <ContentRight />
              <ContentLeft />
            </main>
            <Footer background="bg-primary-dark" textColor="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
