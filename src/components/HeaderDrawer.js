export default function Header(){
    return (
        <div class={`flex cursor-pointer`}>
        <img src="logo2.png" class="w-20 h-20 relative"/>
        <div>
          <div class="text-2xl mx-5 mt-2  text-white">
            INA GARLIC
          </div>
          <div class="mx-5  text-white text-xs">
            Agroecological Assessment of Land Suitability for Garlic
          </div>
        </div>
      </div>
    )
}