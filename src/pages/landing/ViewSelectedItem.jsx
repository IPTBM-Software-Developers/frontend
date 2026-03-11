import { useParams } from "react-router-dom";

import { useEffect } from "react";

import { Data } from "../../MockData/Data";

import NavBar from "../../components/landing/NavBar";

const ViewSelectedItem = () => {
  
  const {id} = useParams();

  const selectedData = Data.find(item => item.id === Number(id));

   // To scroll up when visits to page.
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, []);
  
  return(
    <>
      <NavBar />
      <main className="w-full min-h-screen flex justify-center py-8 px-5">
        <section className="flex flex-col max-w-4xl gap-8 text-justify">
          <header className="flex flex-col gap-2">
            <span className={`w-fit px-4 py-1 rounded-4xl font-semibold text-sm ${selectedData.labelTextColor} ${selectedData.labelColor}`}>
              {selectedData.label}
            </span>

            <h1 className="text-5xl font-medium">
              {selectedData.title}
            </h1>

            <span className="text-sm text-gray-500">
              {selectedData.date}
            </span>
          </header>

          <img src={selectedData.image} alt="Announcement Image" className="rounded-xl w-full max-w-4xl" />

          <p className="text-gray-600 text-lg">
            {selectedData.desc}
          </p>

          <p className="text-gray-600 text-lg">
            {selectedData.parag1}
          </p>

          <p className="text-gray-600 text-lg">
            {selectedData.parag2}
          </p>

          <p className="text-gray-600 text-lg">
            {selectedData.parag3}
          </p>

        </section>
      </main>
    </>
  )
}

export default ViewSelectedItem;

