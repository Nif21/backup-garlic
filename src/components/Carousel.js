import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/Image";

export default function Carousels() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-full opacity-50 ">
      <Carousel
        responsive={responsive}
        ontainerClass="container-with-dots"
        autoPlay
        infinite
        autoPlaySpeed={3000}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="">
          <Image src="/test_caro_1.jpg" className="w-screen" alt="" />
        </div>
        <div className="">
          <Image src="/test_caro_2.jpg" className="w-screen" alt="" />
        </div>
        <div className="">
          <Image src="/test_caro_3.jpg" className="w-screen" alt="" />
        </div>
        <div className="">
          <Image src="/test_caro_4.jpg" className="w-screen" alt="" />
        </div>
      </Carousel>
    </div>
  );
}
