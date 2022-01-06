import Image from "next/image";

export default function Pengembang({ name, role, image }) {
  return (
    <>
      <div className="container justify-center mx-auto pb-40">
        <div className="mt-16 py-16 px-8 w-96 bg-primary-coco rounded-xl ">
          <div className="w-sm">
            <img
              src={image}
              className="w-64 h-64 mx-auto rounded-full bg-primary-krem object-scale-down"
              alt=""
            />
            <div className="mt-16 text-black text-center">
              <h1 className="text-xl font-bold">{name}</h1>
              <p className="mt-4 text-white">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
