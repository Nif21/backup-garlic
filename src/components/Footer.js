import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-white shadow-xl">
      <div className="container mx-auto ">
        <div className="flex flex-wrap m-4">
          <img src="/ipb.png" className="w-16 h-16 m-4" alt="" />
          <div className="flex flex-col m-4 ">
            <h1>
              INA Agro-GARLIC - Agroecological Assessment of Land Suitability
              for Garlic
            </h1>
            <h1> Departemen Ilmu Komputer FMIPA IPB</h1>
            <h1> Tahun 2021</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
