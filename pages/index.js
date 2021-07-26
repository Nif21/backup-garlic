import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import ContentRight from '../components/ContentRight'
import ContentLeft from '../components/ContentLeft'
import Header from '../components/Header'
import Carousel from '../components/Carousel'

export default function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
  <div class=" shadow bg-base-200 drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle"/> 
    <div class="drawer-side flex-none hidden lg:block">      
      <label for="my-drawer" class="drawer-overlay"/>
      <ul class="menu p-4 overflow-y-auto w-80 bg-black text-white ">
        <li>
          <label for="my-drawer" onClick={handleClick}>
          <Header/>
          </label>
        </li> 
        <li>
         <div class="my-5 hover:text-gray-500 cursor-pointer">Home</div>
        </li>
        <li>
         <div class="my-5 hover:text-gray-500 cursor-pointer">About</div>
        </li>
        <li>
         <div class="my-5 hover:text-gray-500 cursor-pointer">Peta Bawang Putih</div>
        </li>
        <li>
         <div class="my-5 hover:text-gray-500 cursor-pointer">Input Pengguna</div>
        </li>
      </ul>
    </div>
    <div class="flex flex-col drawer-content">
    <div class="md:hidden lg:hidden">
        <label for="my-drawer" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div> 
      <label for="my-drawer" >      
        <div class={`${active ? 'bg-gray-400': 'bg-black'} bg-black w-full cursor-pointer hover:bg-gray-900 hidden md:block lg:block `} onClick={handleClick}>  
          <div class="container p-5">
            <Header/>
          </div>
        </div>  
      </label>  
      <Carousel/>
       <ContentLeft 
        title="About Garlic"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
        button="more info"
        />  
        <ContentRight 
        title="About Garlic"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
        button="more info"
        />   
  </div> 
</div>
 

    

  )
}
