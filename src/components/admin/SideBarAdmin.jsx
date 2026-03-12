import { useState } from "react";

import { Menu } from "lucide-react";

const SideBarAdmin = () => {
  const [sideBar, setSideBar] = useState(true);

  return(
    <>
      <main className="relative flex flex-col xl:flex-row w-full h-screen">

        <button
          className="absolute top-3 left-3 text-white cursor-pointer rounded-sm p-2 hover:bg-blue-100 transition-all duration-300"
          onClick={() => setSideBar(!sideBar)}          
        >
          <Menu className="text-blue-700"/>
        </button>
        
        <aside
          className={`bg-blue-100 transition-all duration-400 ${sideBar ? "w-0 xl:w-[70px] h-screen" : "w-[300px] h-screen"}`}
        >

        </aside>

        
      </main>
      
    </>
  );
};

export default SideBarAdmin;