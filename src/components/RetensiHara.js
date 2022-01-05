import { useState } from "react";
import { HiChevronDown,HiChevronUp } from "react-icons/hi";
import Link from "next/link";
export default function NavigationDrawerChild({ handleClick, expand , title}) {
  
  const [isExpand, setExpand] = useState(expand ? expand : false)
  const expanded = () => {
    setExpand(!isExpand);
  };
  

  return (
    <>
      <div class="my-3 mx-3 hover:text-black cursor-pointer px-4 " onClick={expanded}>
          <div class="flex flex-row"> 
          <div>Retensi Hara</div>
          <div class="flex-grow"></div>
          <div>
            {isExpand ? <HiChevronUp/> : <HiChevronDown/>}
          </div>
          </div>
        </div>
        <div class={` ${isExpand ? 'block':'hidden'}  px-4 `}  >
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/kejenuhan-basa`}>
            {(title == "Kejenuhan Basa") ? <b class="underline"> Kejenuhan Basa </b>  : <a>Kejenuhan Basa </a> }     
          </Link>
        </div> 
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/kapasitas-tukar-kation`}>
            {(title == "Kapasitas Tukar Kation") ? <b class="underline"> Kapasitas Tukar Kation </b>  : <a>Kapasitas Tukar Kation </a> }     
          </Link>
        </div>   
        <div class="my-3  mx-3 hover:text-black cursor-pointer px-4 ">
          <Link href={`/filter/kemasaman-tanah`}>
            {(title == "Kemasaman Tanah") ? <b class="underline"> Kemasaman Tanah </b>  : <a>Kemasaman Tanah </a> }     
          </Link>
        </div>
        </div>
    </>
  );
}
