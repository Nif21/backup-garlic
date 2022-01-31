import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";

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
      <div className={`p-2 ${active ? "" : ""}`}>
        <Header />
      </div>
      <EsriMapWithNoSSR />
    </div>
  );
}

export default Index;
