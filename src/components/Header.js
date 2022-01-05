import Image from "next/Image";
export default function Header({ handleClick }) {
  return (
    <div className={`flex `}>
      <Image
        src="logo.png"
        className="w-16 h-16 relative cursor-pointer"
        onClick={handleClick}
        alt=""
      />
      <div>
        <div className="text-2xl mx-5 mt-2  text-black">INA GARLIC</div>
        <div className="mx-5  text-black text-xs">
          Agroecological Assessment of Land Suitability for Garlic
        </div>
      </div>
    </div>
  );
}
