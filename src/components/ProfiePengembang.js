import Image from "next/image";

export default function Pengembang() {
  return (
    <>
      <div className="container mx-auto pb-40">
        <div className="mt-16 py-16 px-8 w-96 bg-primary-coco rounded-xl ">
          <div className="w-sm">
            <Image src="circle.png" className="w-64 h-64  mx-auto" alt="" />
            <div className="mt-16 text-black text-center">
              <h1 className="text-xl font-bold">Muhammad Fauzan Ramadhan</h1>
              <p className="mt-4 text-white">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
