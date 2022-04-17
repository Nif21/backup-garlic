import Head from "next/head";
import { useState, useEffect } from "react";
import HomeHeader from "../../components/HomeHeader";
import NavigationDrawer from "../../components/NavigationDrawer";
import Footer from "../../components/Footer";
import Pengembang from "../../components/ProfiePengembang";
import storage from "../../redux/storage";

export default function Glosarium() {
  const [active, setActive] = useState(false);
  const [drainaseOptions, setDrainaseOptions] = useState([]);
  const [teksturTanahOptions, setTeksturTanahOptions] = useState([]);
  const [kapasitasTukarKationOptions, setKapasitasTukarKationOptions] =
    useState([]);
  const [kedalamanMineralTanahOptions, setKedalamanMineralTanahOptions] =
    useState([]);
  const [kejenuhanBasaOptions, setKejenuhanBasaOptions] = useState([]);
  const [kemasamanTanahOptions, setKemasamanTanahOptions] = useState([]);
  const [reliefOptions, setReliefOptions] = useState([]);
  const [curahHujanOptions, setCurahHujanOptions] = useState([]);
  const [lamaPenyinaranOptions, setLamaPenyinaranOptions] = useState([]);
  const [elevasiOptions, setElevasiOptions] = useState([]);
  const [temperaturOptions, setTemperaturOptions] = useState([]);
  const [syaratTumbuh, setSyaratTumbuh] = useState([]);
  const [proporsiOptions, setProporsi] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://garlic-backend.herokuapp.com/api/v1/syaratTumbuh"
    );
    const data = await response.json();
    const proporsi = [];
    data.proporsi.map((p) => {
      proporsi.push({
        label: `${p.proporsi}  (${p.persentase})`,
        value: p.id,
      });
    });
    setProporsi(proporsi);

    const drainase = [];
    data.drainase.map((d) => {
      drainase.push({
        label: d.jenis,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setDrainaseOptions(drainase);
    const teksturTanah = [];
    data.teksturTanah.map((d) => {
      teksturTanah.push({
        label: d.jenis,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setTeksturTanahOptions(teksturTanah);

    const kapasitasTukarKation = [];
    data.kapasitasTukarKation.map((d) => {
      kapasitasTukarKation.push({
        label: `${d.jenis} (${
          d.intervalBawah == null ? " < " : `${d.intervalBawah}  -`
        }  ${d.intervalAtas} cmol)`,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setKapasitasTukarKationOptions(kapasitasTukarKation);

    const kedalamanMineralTanah = [];
    data.kedalamanMineralTanah.map((d) => {
      kedalamanMineralTanah.push({
        label: `${d.jenis} (${
          d.intervalBawah == null
            ? " < "
            : d.intervalAtas == null
            ? ` > ${d.intervalBawah}`
            : d.intervalBawah
        }  ${d.intervalBawah != null && d.intervalAtas != null ? " - " : ""}  ${
          d.intervalAtas == null ? "" : d.intervalAtas
        } cm)`,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setKedalamanMineralTanahOptions(kedalamanMineralTanah);

    const kejenuhanBasa = [];
    data.kejenuhanBasa.map((d) => {
      kejenuhanBasa.push({
        label: `${d.jenis} (${
          d.intervalBawah == null
            ? " < "
            : d.intervalAtas == null
            ? ` > ${d.intervalBawah}`
            : d.intervalBawah
        }  ${d.intervalBawah != null && d.intervalAtas != null ? " - " : ""}  ${
          d.intervalAtas == null ? "" : d.intervalAtas
        } %)`,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setKejenuhanBasaOptions(kejenuhanBasa);

    const kemasamanTanah = [];
    data.kemasamanTanah.map((d) => {
      kemasamanTanah.push({
        label: `${d.jenis} (${
          d.intervalBawah == null
            ? " < "
            : d.intervalAtas == null
            ? ` > ${d.intervalBawah}`
            : d.intervalBawah
        }  ${d.intervalBawah != null && d.intervalAtas != null ? " - " : ""}  ${
          d.intervalAtas == null ? "" : d.intervalAtas
        } pH)`,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setKemasamanTanahOptions(kemasamanTanah);

    const relief = [];
    data.relief.map((d) => {
      relief.push({
        label: `${d.jenis} (${
          d.intervalBawah == null
            ? " < "
            : d.intervalAtas == null
            ? ` > ${d.intervalBawah}`
            : d.intervalBawah
        }  ${d.intervalBawah != null && d.intervalAtas != null ? " - " : ""}  ${
          d.intervalAtas == null ? "" : d.intervalAtas
        } %)`,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setReliefOptions(relief);

    const curahHujan = [];
    data.curahHujan.map((d) => {
      curahHujan.push({
        label: `${d.jenis} (${
          d.intervalBawah == null
            ? " < "
            : d.intervalAtas == null
            ? ` > ${d.intervalBawah}`
            : d.intervalBawah
        }  ${d.intervalBawah != null && d.intervalAtas != null ? " - " : ""}  ${
          d.intervalAtas == null ? "" : d.intervalAtas
        } mm/bulan)`,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setCurahHujanOptions(curahHujan);

    const lamaPenyinaran = [];
    data.lamaPenyinaran.map((d) => {
      lamaPenyinaran.push({
        label: `${d.jenis} (${
          d.intervalBawah == null
            ? " < "
            : d.intervalAtas == null
            ? ` > ${d.intervalBawah}`
            : d.intervalBawah
        }  ${d.intervalBawah != null && d.intervalAtas != null ? " - " : ""}  ${
          d.intervalAtas == null ? "" : d.intervalAtas
        } jam/hari)`,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });
    setLamaPenyinaranOptions(lamaPenyinaran);

    const elevasi = [];
    data.elevasi.map((d) => {
      elevasi.push({
        label: `${d.jenis} (${
          d.intervalBawah == null
            ? " < "
            : d.intervalAtas == null
            ? ` > ${d.intervalBawah}`
            : d.intervalBawah
        }  ${d.intervalBawah != null && d.intervalAtas != null ? " - " : ""}  ${
          d.intervalAtas == null ? "" : d.intervalAtas
        } magl)`,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });

    setElevasiOptions(elevasi);

    const temperatur = [];
    data.temperatur.map((d) => {
      temperatur.push({
        label: ` (${
          d.intervalBawah == null
            ? " < "
            : d.intervalAtas == null
            ? ` > ${d.intervalBawah}`
            : d.intervalBawah
        }  ${d.intervalBawah != null && d.intervalAtas != null ? " - " : ""}  ${
          d.intervalAtas == null ? "" : d.intervalAtas
        } c/bulan)`,
        value: d.jenis,
        rekomendasi: d.rekomendasi,
        kelas: d.kelas,
      });
    });

    setTemperaturOptions(temperatur);
  }

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
    <>
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
                <HomeHeader active={active} handleClick={handleClick} />
              </header>
            </div>
            <div className="flex-grow  overflow-y-auto paragraph">
              <main>
                <div className="flex-grow bg-white">
                  {/* About Garlic */}
                  <div className="px-16 p-4 mt-16 text-2xl font-bold text-black bg-white ">
                    Keterangan nilai parameter pada penilaian kesesuian lahan
                  </div>
                  <div className="p-4 ">
                    <div className="flex flex-wrap">
                      <div className="mx-16 w-12/12 sm:7/12 md:7/12 text-lg text-justify text-black">
                        <b>Faktor yang dapat dikendalikan</b>
                        <br />
                        Drainase
                        <ul className="list-disc	mx-8">
                          {drainaseOptions.map((d) => (
                            <li>{d.value}</li>
                          ))}
                        </ul>
                        <br />
                        Kapasitas Tukar Kation
                        <ul className="list-disc	mx-8">
                          {kapasitasTukarKationOptions.map((d) => (
                            <li>
                              {d.value} {d.label}
                            </li>
                          ))}
                        </ul>
                        <br />
                        Tekstur Tanah
                        <ul className="list-disc	mx-8">
                          {teksturTanahOptions.map((d) => (
                            <li>{d.value}</li>
                          ))}
                        </ul>
                        <br />
                        <b>Faktor yang efeknya dapat dikoreksi</b>
                        <br />
                        Kejenuhan Basa
                        <ul className="list-disc	mx-8">
                          {kejenuhanBasaOptions.map((d) => (
                            <li>
                              {d.value} {d.label}
                            </li>
                          ))}
                        </ul>
                        <br />
                        Kedalaman Mineral Tanah
                        <ul className="list-disc	mx-8">
                          {kedalamanMineralTanahOptions.map((d) => (
                            <li>
                              {d.value} {d.label}
                            </li>
                          ))}
                        </ul>
                        <br />
                        Kemasaman Tanah
                        <ul className="list-disc	mx-8">
                          {kemasamanTanahOptions.map((d) => (
                            <li>{d.label}</li>
                          ))}
                        </ul>
                        <br />
                        <b>
                          Faktor yang tidak dapat dikendalikan dan dikoreksi
                        </b>
                        <br />
                        Faktor cuaca
                        <ul className="list-decimal mx-8">
                          <li>Temperatur</li>
                          <ul className="list-disc	mx-8">
                            {temperaturOptions.map((d) => (
                              <li>
                                {d.value} {d.label}
                              </li>
                            ))}
                          </ul>
                          <li>Curah Hujan</li>
                          <ul className="list-disc	mx-8">
                            {curahHujanOptions.map((d) => (
                              <li>
                                {d.value} {d.label}
                              </li>
                            ))}
                          </ul>
                          <li>Lama Penyinaran</li>
                          <ul className="list-disc	mx-8">
                            {lamaPenyinaranOptions.map((d) => (
                              <li>
                                {d.value} {d.label}
                              </li>
                            ))}
                          </ul>
                          <li>Radiasi Penyinaran</li>
                          <ul className="list-disc	mx-8">
                            {temperaturOptions.map((d) => (
                              <li>
                                {d.value} {d.label}
                              </li>
                            ))}
                          </ul>
                        </ul>
                        <br />
                        Faktor Relief
                        <ul className="list-decimal mx-8">
                          <li>Elevasi</li>
                          <ul className="list-disc	mx-8">
                            {elevasiOptions.map((d) => (
                              <li>
                                {d.value} {d.label}
                              </li>
                            ))}
                          </ul>
                          <li>Relief</li>
                          <ul className="list-disc	mx-8">
                            {reliefOptions.map((d) => (
                              <li>
                                {d.value} {d.label}
                              </li>
                            ))}
                          </ul>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="px-16 p-4 mt-8 text-2xl font-bold text-black bg-white ">
                    Keterangan Proporsi Tanah
                  </div>
                  <div className="p-4 mb-32">
                    <div className="flex flex-wrap">
                      <div className="mx-16 w-12/12 sm:7/12 md:7/12 text-lg text-justify text-black">
                        <ul className="list-disc mx-8 mb-32">
                          {proporsiOptions.map((d) => (
                            <li>
                              {d.value} {d.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <Footer background="bg-primary-dark" textColor="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
