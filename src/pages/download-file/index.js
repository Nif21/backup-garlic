import Head from "next/head";
import React, { useEffect, useState } from "react";
import HomeHeader from "../../components/HeaderNotSticky";
import NavigationDrawer from "../../components/NavigationDrawer";
import Footer from "../../components/Footer";
import { useTable } from "react-table";
import storage from "../../redux/storage";
import Table from "../../components/Table";

const getData = () => {
  const data = [
    {
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      status: "Active",
      role: "Admin",
      age: 27,
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cody Fisher",
      email: "cody.fisher@example.com",
      title: "Product Directives Officer",
      department: "Intranet",
      status: "Inactive",
      role: "Owner",
      age: 43,
      imgUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Esther Howard",
      email: "esther.howard@example.com",
      title: "Forward Response Developer",
      department: "Directives",
      status: "Active",
      role: "Member",
      age: 32,
      imgUrl:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
      title: "Central Security Manager",
      department: "Program",
      status: "Offline",
      role: "Member",
      age: 29,
      imgUrl:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Kristin Watson",
      email: "kristin.watson@example.com",
      title: "Lean Implementation Liaison",
      department: "Mobility",
      status: "Inactive",
      role: "Admin",
      age: 36,
      imgUrl:
        "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
      title: "Internal Applications Engineer",
      department: "Security",
      status: "Active",
      role: "Member",
      age: 24,
      imgUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return [...data, ...data, ...data];
};

function Index() {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [daerah, setDaerah] = useState([]);
  const auth = storage.get("auth", {
    token: "",
    user: {
      nama: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(
      "https://garlic-backend.herokuapp.com/api/v1/download/listDaerah"
    );
    const data = await response.json();
    for (const d in data) {
      data[d].link = data[d]["kabupaten/kota"];
    }
    console.log(data);
    if (data) {
      setLoading(false);
      setDaerah(data);
    }
  }

  const handleDownload = (value) => {
    fetch(
      "https://garlic-backend.herokuapp.com/api/v1/download/karakteristikDaerah?kabupaten/kota=" +
        value
    )
      .then((response) => response.text())
      .then((data) => {
        window.location.href = data;
      });
  };

  const handleClick = () => {
    setActive(!active);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama Daerah",
        accessor: "kabupaten/kota",
      },
      {
        accessor: "link",
        Cell: ({ value }) => {
          return (
            <div className="text-right ">
              <button onClick={() => handleDownload(value)}>donwload</button>
            </div>
          );
        },
      },
    ],
    []
  );

  const data = React.useMemo(() => daerah, [daerah]);

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
            <div className="flex-grow  overflow-y-auto paragraph bg-primary-dark">
              <main>
                <div className=" container mx-auto my-16 ">
                  <div className=" flex-grow bg-white mx-40 p-8 rounded">
                    <div className="mt-6">
                      {loading && <div>loading</div>}
                      {!loading && <Table columns={columns} data={data} />}
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <Footer background="bg-white" textColor="text-black" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
