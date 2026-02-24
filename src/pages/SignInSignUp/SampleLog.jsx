import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, ArrowRight, Bell, Calendar, Trophy, 
  BrushCleaning, Handshake, Rss, Newspaper 
} from "lucide-react";

// Components
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

// Data Constant (Consider moving this to a separate data file in a real project)
const announcementData = [
  {
    Icon: <Calendar />,
    label: "Event",
    date: "March 15, 2026",
    bgColor: "bg-blue-600",
    title: "Blockchain Security",
    desc: "Immutable records and tamper-proof documentation for your intellectual property assets using distributed ledger technology.",
  },
  {
    Icon: <Trophy />,
    label: "Achievement",
    date: "February 10, 2026",
    bgColor: "bg-emerald-600",
    title: "AI-Powered Analysis",
    desc: "Advanced machine learning algorithms to analyze, categorize, and monitor your IP portfolio for potential infringements.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "February 01, 2026",
    bgColor: "bg-amber-600",
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud-based platform ensuring your data is accessible anywhere while maintaining enterprise-grade security.",
  },
  {
    Icon: <Handshake />,
    label: "Partnership",
    date: "January 20, 2026",
    bgColor: "bg-indigo-600",
    title: "Secure Data Storage",
    desc: "End-to-end encrypted storage solutions with redundant backups and compliance with international data protection standards.",
  },
  {
    Icon: <Rss />,
    label: "Update",
    date: "January 05, 2026",
    bgColor: "bg-cyan-600",
    title: "Real-Time Monitoring",
    desc: "Continuous monitoring of your IP assets with instant alerts for potential violations or unauthorized usage worldwide.",
  },
  {
    Icon: <Newspaper />,
    label: "News",
    date: "December 15, 2025",
    bgColor: "bg-slate-500",
    title: "API Integration",
    desc: "Seamless integration with existing systems through our robust API, enabling automated workflows and data synchronization.",
  },
  {
    Icon: <Newspaper />,
    label: "News",
    date: "December 01, 2025",
    bgColor: "bg-slate-500",
    title: "Smart Contract Automation",
    desc: "Self-executing digital agreements that streamline licensing royalties and automate ownership transfers without intermediaries.",
  },
  {
    Icon: <Handshake />,
    label: "Partnership",
    date: "November 18, 2025",
    bgColor: "bg-indigo-600",
    title: "Biometric Authentication",
    desc: "Multi-factor security layers including facial and fingerprint recognition to ensure only authorized personnel access sensitive IP.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "November 05, 2025",
    bgColor: "bg-amber-600",
    title: "Global Compliance Tracking",
    desc: "Automated updates on international patent laws and regulatory changes to keep your portfolio compliant across all jurisdictions.",
  },
  {
    Icon: <Calendar />,
    label: "Event",
    date: "October 22, 2025",
    bgColor: "bg-blue-600",
    title: "Predictive Analytics",
    desc: "Forecasting market trends and potential IP valuation shifts using historical data and competitive landscape modeling.",
  },
  {
    Icon: <Calendar />,
    label: "Event",
    date: "October 10, 2025",
    bgColor: "bg-blue-600",
    title: "Quantum-Resistant Encryption",
    desc: "Future-proofing your data security with advanced cryptographic protocols designed to withstand next-generation computing threats.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "September 28, 2025",
    bgColor: "bg-amber-600",
    title: "Collaborative Workspaces",
    desc: "Centralized environments for legal teams and creators to review, annotate, and co-author IP documentation in real-time.",
  },
  {
    Icon: <Rss />,
    label: "Update",
    date: "September 15, 2025",
    bgColor: "bg-cyan-600",
    title: "Mobile Management Suite",
    desc: "Comprehensive mobile application allowing you to manage filings, approve licenses, and track IP status on the go.",
  },
  {
    Icon: <Rss />,
    label: "Update",
    date: "September 01, 2025",
    bgColor: "bg-cyan-600",
    title: "Automated Reporting",
    desc: "Customizable reporting tools that generate detailed PDF or Excel summaries of your portfolio's performance and health.",
  },
];

// Extracted Categories for the Filter Bar
const CATEGORIES = ["All", "Event", "Achievement", "Maintenance", "Partnership", "Update", "News"];

const ViewAllAnnouncement = () => {
  // 1. States
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const itemsPerPage = 6;

  // 2. Filtering Logic (Memoized for performance)
  const filteredData = useMemo(() => {
    return announcementData.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.label === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // 3. Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // 4. Handlers
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Auto-scroll on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      <NavBar />
      <main className="w-full min-h-screen py-8 bg-gray-50 flex flex-col items-center gap-8">
        
        {/* Header Section */}
        <header className="flex flex-col items-center gap-6 w-[90%] max-w-6xl">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2 items-center">
              <span className="p-2 rounded-lg bg-blue-100">
                <Bell className="text-blue-700 w-5 h-5"/>
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-blue-700 font-medium tracking-wider">
                Latest Updates
              </span>
            </div>
            <h1 className="text-slate-900 font-bold text-4xl text-center">Announcements</h1>
            <p className="text-gray-500 max-w-2xl text-center leading-relaxed">
              Stay informed with the latest news, events, and updates from IPTBM.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="w-full flex flex-col gap-4">
            {/* Search Bar */}
            <div className="flex items-center w-full bg-white border border-gray-200 p-4 gap-3 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
              <Search className="w-5 h-5 text-gray-400"/>
              <input 
                type="text" 
                placeholder="Search by title or description..." 
                className="w-full focus:outline-none text-sm bg-transparent"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    selectedCategory === cat
                      ? "bg-blue-600 border-blue-600 text-white shadow-md"
                      : "bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Content Section */}
        <section className="w-[90%] max-w-6xl flex flex-col gap-10">
          {currentCards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCards.map((item, index) => (
                <AnnouncementCard key={index} item={item} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-gray-500">
              <p className="text-lg">No announcements found matching your criteria.</p>
            </div>
          )}

          {/* Pagination Component */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pb-10">
              <PaginationButton 
                onClick={() => setCurrentPage(p => p - 1)} 
                disabled={currentPage === 1}
                label="Prev"
              />
              
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-lg border text-sm font-medium transition-colors ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 hover:bg-gray-50 border-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <PaginationButton 
                onClick={() => setCurrentPage(p => p + 1)} 
                disabled={currentPage === totalPages}
                label="Next"
              />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

// Sub-components for cleaner structure
const AnnouncementCard = ({ item }) => (
  <article className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
    <div className={`relative h-32 p-6 ${item.bgColor} transition-colors`}>
      <div className="flex justify-between items-start">
        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-tight">
          {item.label}
        </span>
        <span className="text-xs text-white/80 font-medium">
          {item.date}
        </span>
      </div>
      <div className="absolute -bottom-6 left-6 p-3 bg-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        <div className="text-blue-600 [&_svg]:w-6 [&_svg]:h-6">
          {item.Icon}
        </div>
      </div>
    </div>

    <div className="pt-10 p-6 flex flex-col flex-grow gap-3">
      <h3 className="font-bold text-xl text-slate-800 leading-tight">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
        {item.desc}
      </p>
      <div className="mt-auto pt-4">
        <Link to="#" className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold group/link hover:text-blue-800 transition-colors">
          Read Full Story
          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform"/>
        </Link>
      </div>
    </div>
  </article>
);

const PaginationButton = ({ onClick, disabled, label }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
  >
    {label}
  </button>
);

export default ViewAllAnnouncement;