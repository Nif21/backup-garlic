import Head from "next/head";
import { useState } from "react";
import HomeHeader from "../../components/HeaderNotSticky";
import NavigationDrawer from "../../components/NavigationDrawer";
import Footer from "../../components/Footer";
import FormikInput from "../../components/input/FormikInput";
import storage from "../../redux/storage";

function Index() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(true);
  const [modal, setModal] = useState(false);
  const auth = storage.get("auth", {
    token: "",
    user: {
      nama: "",
    },
  });
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setActive(!active);
  };

  const showModalParent = (modal) => {
    setModal(modal);
  };
  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        <Head>
          <title>INA Agro-GARLIC</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-1 overflow-hidden">
          <aside
            className={`flex-shrink-0 w-64 h-full flex  flex-col border-r transition-all duration-300 ${
              !active ? "-ml-64" : ""
            } `}
          >
            <NavigationDrawer token={auth.token} nama={auth.user.nama} />
          </aside>
          <div className="flex flex-1 flex-col ">
            <header className="flex items-center text-semibold text-gray-100 bg-primary-white ">
              <HomeHeader active={active} handleClick={handleClick} />
            </header>
            <div className="  overflow-y-auto paragraph bg-primary-dark">
              <main>
                <div className="container mx-auto my-16 ">
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div className="flex">
                      <div className="flex-grow px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Profil Pengguna
                      </h3>
                    </div>
                    <div className="flex-none px-4 py-5 sm:px-6 cursor-auto">
                      <button className=" leading-6 font-medium text-gray-900 hover:underline">
                        Edit Profil
                      </button>
                    </div>
                      </div>
                   
                    <div className="border-t border-gray-200">
                      <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Nama Lengkap
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Margot Foster
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Email
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Backend Developer
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Nomor Telepon
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            margotfoster@example.com
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Alamat
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            $120,000
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Kebutuhan
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Fugiat ipsum ipsum deserunt culpa aute sint do
                            nostrud anim incididunt cillum culpa consequat.
                            Excepteur qui ipsum aliquip consequat sint. Sit id
                            mollit nulla mollit nostrud in ea officia proident.
                            Irure nostrud pariatur mollit ad adipisicing
                            reprehenderit deserunt qui eu.
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Jenis Unit IPB
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul
                              role="list"
                              className="border border-gray-200 rounded-md divide-y divide-gray-200"
                            >
                              <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                <div className="w-0 flex-1 flex items-center">
                                  <svg
                                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="ml-2 flex-1 w-0 truncate">
                                    {" "}
                                    resume_back_end_developer.pdf{" "}
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    {" "}
                                    Download{" "}
                                  </a>
                                </div>
                              </li>
                              <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                <div className="w-0 flex-1 flex items-center">
                                  <svg
                                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="ml-2 flex-1 w-0 truncate">
                                    {" "}
                                    coverletter_back_end_developer.pdf{" "}
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    {" "}
                                    Download{" "}
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </dd>
                        
                        </div>
                        
                      </dl>
                      <div className="flex m-4">
                            <div className="flex-grow"> </div>
                            <div className="flex-none">
                              {" "}
                              <button
                                type="submit"
                                className={`bg-primary-coco flex-none hover:bg-primary-darkcoco text-white group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md`}
                              >
                                Logout
                              </button>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
                <Footer background="bg-white" textColor="text-black" />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
