import Image from "next/Image";
export default function Header() {
  return (
    <div className={`flex cursor-pointer`}>
      <Image src="../logo.png" className="w-16 h-16 relative" alt="" />
      <div>
        <div className="text-2xl mx-5 mt-2  text-white">INA GARLIC</div>
        <div className="mx-5  text-white text-xs">
          Agroecological Assessment of Land Suitability for Garlic
        </div>
      </div>
    </div>
  );
}
