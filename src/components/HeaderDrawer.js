export default function Header() {
  return (
    <div className={`flex cursor-pointer`}>
      <img src="logo2.png" className="w-20 h-20 relative" />
      <div>
        <div className="text-2xl mx-5 mt-2  text-white">INA GARLIC</div>
        <div className="mx-5  text-white text-xs">
          Agroecological Assessment of Land Suitability for Garlic
        </div>
      </div>
    </div>
  );
}
