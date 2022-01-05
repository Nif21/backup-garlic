import Image from "next/Image";

export default function ContentLeft({ title, content, button }) {
  return (
    <>
      <div className="container mx-auto pb-40">
        <div className="flex flex-wrap pt-40">
          <Image src="/circle.png" className="my-10 mx-10" alt=""/>
          <div className="w-10/12 md:w-6/12 lg:w-6/12 text-justify break-all">
            <div className="text-5xl m-5 font-semibold">{title}</div>
            <div className="m-5">{content}</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-3/12"></div>
          <div className="m-5 cursor-pointer py-5 w-40 bg-primary-coco text-center text-white rounded-xl hover:bg-primary-darkcoco hover:text-white">
            {button}
          </div>
        </div>
      </div>
    </>
  );
}
