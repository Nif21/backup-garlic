import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Carousels(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return ( 
        <div class="relative w-full opacity-50 ">
            <Carousel responsive={responsive} 
            class="relative"  
            ontainerClass="container-with-dots" 
            autoPlay 
            infinite  
            autoPlaySpeed={3000}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
>
                <div class="">
                    <img src="/test_caro_1.jpg" class="w-screen"/>
                </div>
                <div class="">
                    <img src="/test_caro_2.jpg" class="w-screen"/>
                </div>
                <div class="">
                    <img src="/test_caro_3.jpg" class="w-screen"/>
                </div>
                <div class="">
                    <img src="/test_caro_4.jpg" class="w-screen"/>
                </div>              
            </Carousel>
         
        </div>   
    )
}
