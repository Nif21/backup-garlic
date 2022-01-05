import Image from "next/Image";
export default function Footer() {
  return (
    <div className="bg-white shadow-xl">
      <div className="container mx-auto ">
        <div className="flex flex-wrap m-4">
          <Image src="/ipb.png" className="w-16 h-16 m-4" alt="" />
          <div className="flex flex-col m-4 ">
            <h1> Projek INA Garlic</h1>
            <h1> Departemen Ilmu Komputer</h1>
            <h1> Institut Pertanian Bogor</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
