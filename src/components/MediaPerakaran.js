import { useState } from "react";
import { HiChevronDown,HiChevronUp } from "react-icons/hi";
import Link from "next/link";
export default function NavigationDrawerChild({ handleClick, expand , title}) {
  
  const [isExpand, setExpand] = useState(expand ? expand : false)
  console.log(isExpand)
  const expanded = () => {
    setExpand(!isExpand);
  };
  

  return (
    <>
      <div class="my-3 mx-3 hover:text-black cursor-pointer px-4 " onClick={expanded}>
          <div class="flex flex-row"> 
          <div>Media Perakaran</div>
          <div class="flex-grow"></div>
          <div>
            {isExpand ? <HiChevronUp/> : <HiChevronDown/>}
          </div>
          </div>
        </div>
        <div class={` ${isExpand ? 'block':'hidden'}  px-4 `}  >
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/tekstur-tanah`}>
            {(title == "Tekstur Tanah") ? <b class="underline"> Tekstur Tanah </b>  : <a>Tekstur Tanah </a> }     
          </Link>
        </div> 
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/kedalaman-mineral-tanah`}>
            {(title == "Kedalaman Mineral Tanah") ? <b class="underline"> Kedalaman Mineral Tanah </b>  : <a>Kedalaman Mineral Tanah </a> }     
          </Link>
        </div> 
        </div>
    </>
  );
}
