import Image from "next/image";
export default function ContentRight({
  title,
  content,
  button,
  image,
  background,
}) {
  const setImage = image ? image : "/circle.png";
  const setBackground = background ? background : "bg-white";

  return (
    <>
      <div className={`${setBackground}`}>
        <div className="container mx-auto pb-40">
          <div className="flex flex-wrap pt-40">
            <div className="w-10/12 md:w-8/12 lg:w-8/12 text-justify break-all">
              <div className="text-5xl m-5 font-semibold text-white">
                {title}
              </div>
              <div className="m-5 text-white">{content}</div>
            </div>
            <Image src={`${setImage}`} className="my-10 mx-10" alt="" />
          </div>
          <div className="m-5 cursor-pointer py-5 w-40 bg-primary-coco text-center text-white rounded-xl hover:bg-primary-darkcoco hover:text-white">
            {button}
          </div>
        </div>
      </div>
    </>
  );
}
