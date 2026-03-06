import { Dot } from "lucide-react";

const AnnouncementManager = () => {
  return (
    <>
      <main className="w-full min-h-screen px-6 xl:px-[15%] flex flex-col justify-center gap-4">
        <header className="flex flex-col gap-6">
          <section className="flex w-fit border border-blue-300 rounded-4xl bg-blue-50 text-blue-600 font-medium pl-2 pr-5 py-1">
             <span className="text-blue-700">{<Dot />}</span> Content Manager
          </section>

          <section className="flex w-full justify-between items-center">
            <h1 className="font-bold text-4xl">
              Announcement Manager
            </h1>
          </section>

          <section className="w-full xl:w-[50%] text-gray-500 text-justify">
            <p>Create, publish, and manage announcements to keep your community informed about important updates, events, and news.</p>
          </section>

          <section className="flex justify-end w-full">
            <button className="border rounded-lg px-4 py-2 bg-blue-600 text-white font-medium text-sm shadow-sm hover:bg-blue-700 active:bg-blue-800 cursor-pointer">
              Create New
            </button>
          </section>
        </header>

        {/* Container */}
        <section className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="gap-4 col-span-2 lg:col-span-1 flex flex-col p-6 border border-green-300 bg-green-100 rounded-lg">
            <span className="font-medium text-green-800">Total Announcement</span>

            <span className="font-semibold text-5xl text-green-700">15</span>
          </div>

          <div className="gap-4 col-span-2 lg:col-span-1 flex flex-col p-6 border border-blue-300 bg-blue-100 rounded-lg">
            <span className="font-medium text-blue-800">Published</span>

            <span className="font-semibold text-5xl text-blue-700">8</span>
          </div>

          <div className="gap-4 col-span-2 lg:col-span-1 flex flex-col p-6 border border-amber-300 bg-amber-100 rounded-lg">
            <span className="font-medium text-amber-800">Draft</span>

            <span className="font-semibold text-5xl text-amber-700">7</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default AnnouncementManager;