export default function Header({handleClick}){
    return (
        <div class={`flex `}>
        <img src="logo.png" class="w-16 h-16 relative cursor-pointer" onClick={handleClick}/>
        <div>
          <div class="text-2xl mx-5 mt-2  text-black">
            INA GARLIC
          </div>
          <div class="mx-5  text-black text-xs">
            Agroecological Assessment of Land Suitability for Garlic
          </div>
        </div>
      </div>
    )
}