import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

// Icons
import { Search, ArrowRight, Bell } from "lucide-react";

// Mock Data
import { Data } from "../../MockData/Data";

const buttonLabel = [
  "All", 
  "Event", 
  "Achievement", 
  "Maintenance", 
  "Partnership", 
  "Update", 
  "News",
];


const ViewAllAnnouncement = () => {
  const navigate = useNavigate();

  // State for Search Input
  const [searchQuery, setSearchQuery] = useState("");

  // State for Selected Category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // State for View Announcement Pop Up Modal
  const [dataVisible, setDataVisible] = useState(null);

  // Function to capture the event object
  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered Data
  const filteredData = Data.filter((item) => {  
    // For Search Filtering
    const query = searchQuery.toLowerCase();
    const dataTitle = item.title.toLowerCase().includes(query);
    const dataDescription = item.desc.toLowerCase().includes(query);

    const searchData = dataTitle || dataDescription; // The Title or Description must Match the User's Input.

    // For Category Filtering
    const category = item.label;
    const categoryData = selectedCategory === "All" || selectedCategory === category; //The Selected Category must be "All" or Labels in selectedCategory.

    return searchData && categoryData; // The User's Search Input and and Filter Button Must be the Same to filter data. 
  });

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentCards = filteredData.slice(startIndex, startIndex + itemsPerPage);
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // To scroll up when visits to page and has a change in the page.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [currentPage]);

  return(
    <>
      <NavBar />
      <main className="w-full min-h-screen py-8 bg-gray-50 flex flex-col items-center gap-4">

        {/* Header */}
        <header className="w-[90%] xl:w-[90%] 2xl:w-[80%] flex flex-col items-center gap-4 overflow-hidden">
          {/* Details */}
          <div className="flex gap-2 items-center">
            <span className="p-2 rounded-lg bg-blue-100">
              <Bell className="text-blue-700"/>
            </span>
            <span className="w-fit h-fit bg-gray-200 px-2 py-1 rounded-lg text-xs font-medium">
              Latest Update
            </span>
          </div>

          <h1 className="text-black font-bold text-4xl break-words text-center">
            Announcement
          </h1>

          <p className="text-gray-500 max-w-2xl leading-relaxed break-words text-center"> 
            Stay informed with the latest news, events, and updates from IPTBM. Browse all announcements and never miss an important update.
          </p>

          {/* Search Bar */}
          <div className="flex items-center w-full border border-gray-300 p-4 gap-2 rounded-lg focus-within:border-blue-500">
            <Search className="w-5 h-5 text-gray-500"/>
            <input 
            type="search" 
            placeholder="Search announcements..."
            className="w-full focus:outline-none text-sm"
            onChange={handleSearchQuery}/>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 w-full justify-start">
            {buttonLabel.map((items) => (
              <button 
                key={items}
                onClick={() => setSelectedCategory(items)}
                className={`px-3 py-1 text-normal border rounded-4xl transition-all cursor-pointer ${
                  selectedCategory === items 
                    ? "bg-blue-700 text-white border-blue-700" // Active Styles
                    : "border-gray-300 text-gray-500 hover:border-blue-700 hover:text-blue-700" // Inactive Styles
                }`}
              >
                {items}
              </button>
            ))}
          </div>
         </header> 

        {/* Pagination Content */}
        <section className="w-[90%] xl:w-[90%] 2xl:w-[80%] flex flex-col gap-4">
          {/* Contents */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCards.map((items) => (
              <article 
              key={items.id} 
              className="rounded-xl cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all gap-4 flex flex-col shadow-md"
              // setSelectedIndex(index)}
              onClick={() => navigate(`/viewselecteditem/${items.id}`)}>
                <section className={`flex flex-col justify-center items-center w-full h-70 rounded-t-xl p-8 min-h-30 bg-cover bg-center`}
                  style={{backgroundImage: `url(${items.image})`}}
                >
                  
                </section>

                {/* Text */}
                <section className="flex flex-col w-full p-6 gap-2">
                  <div className="flex justify-between items-center w-full">
                    <span className={`text-gray-600 w-fit rounded-3xl text-sm font-medium`}>
                      {items.label}
                    </span>

                    <span className="text-sm font-medium text-gray-500">
                      {items.date}
                    </span>
                  </div>

                  <span className="font-semibold">
                    {items.title}
                  </span>

                  <span className="text-gray-600">
                    {items.desc}
                    ..
                  </span>
                </section>

                {/* Link */}
                <button
                className={`flex items-center gap-2 p-4 text-sm hover:underline w-fit cursor-pointer text-blue-600`}
                onClick={() => viewAll(items.id)}>
                  {dataVisible === items.id ? "Read Less" : "Read More"} <ArrowRight className="h-4 w-4"/>
                </button>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-2">

            {/* Prev */}
            <button
              onClick={() => setCurrentPage(p => p - 1)}
              disabled={currentPage === 1}
              className="px-5 py-3 text-sm border rounded-lg hover:bg-black/5 font-semibold cursor-pointer"
            >
              Prev
            </button>

            {/* Numbers */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-5 py-3 text-sm border rounded-lg hover:border-blue-500 font-semibold cursor-pointer ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage(p => p + 1)}
              disabled={currentPage === totalPages}
              className="px-5 py-3 text-sm border rounded-lg hover:bg-black/5 font-semibold cursor-pointer"
            >
              Next
            </button>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ViewAllAnnouncement;