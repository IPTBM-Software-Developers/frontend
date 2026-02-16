import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import NavBar from "@/components/landing/NavBar";

// Icons
import { Search } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { X } from "lucide-react";

// Mock Data
const announcementData = [
    {
      title: "Blockchain Security",
      desc: "Immutable records and tamper-proof documentation for your intellectual property assets using distributed ledger technology.",
    },
    {
      title: "AI-Powered Analysis",
      desc: "Advanced machine learning algorithms to analyze, categorize, and monitor your IP portfolio for potential infringements.",
    },
    {
      title: "Cloud Infrastructure",
      desc: "Secure, scalable cloud-based platform ensuring your data is accessible anywhere while maintaining enterprise-grade security.",
    },
    {
      title: "Secure Data Storage",
      desc: "End-to-end encrypted storage solutions with redundant backups and compliance with international data protection standards.",
    },
    {
      title: "Real-Time Monitoring",
      desc: "Continuous monitoring of your IP assets with instant alerts for potential violations or unauthorized usage worldwide.",
    },
    {
      title: "API Integration",
      desc: "Seamless integration with existing systems through our robust API, enabling automated workflows and data synchronization.",
    },
    {
      title: "Smart Contract Automation",
      desc: "Self-executing digital agreements that streamline licensing royalties and automate ownership transfers without intermediaries.",
    },
    {
      title: "Biometric Authentication",
      desc: "Multi-factor security layers including facial and fingerprint recognition to ensure only authorized personnel access sensitive IP.",
    },
    {
      title: "Global Compliance Tracking",
      desc: "Automated updates on international patent laws and regulatory changes to keep your portfolio compliant across all jurisdictions.",
    },
    {
      title: "Predictive Analytics",
      desc: "Forecasting market trends and potential IP valuation shifts using historical data and competitive landscape modeling.",
    },
    {
      title: "Quantum-Resistant Encryption",
      desc: "Future-proofing your data security with advanced cryptographic protocols designed to withstand next-generation computing threats.",
    },
    {
      title: "Collaborative Workspaces",
      desc: "Centralized environments for legal teams and creators to review, annotate, and co-author IP documentation in real-time.",
    },
    {
      title: "Mobile Management Suite",
      desc: "Comprehensive mobile application allowing you to manage filings, approve licenses, and track IP status on the go.",
    },
    {
      title: "Automated Reporting",
      desc: "Customizable reporting tools that generate detailed PDF or Excel summaries of your portfolio's performance and health.",
    },
  ];


const ViewAllAnnouncement = () => {
  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentCards = announcementData.slice(startIndex, startIndex + itemsPerPage);
  
  const totalPages = Math.ceil(announcementData.length / itemsPerPage);


  return(
    <>
      <main className="w-full h-auto py-16 lg:h-screen bg-gray-50 flex flex-col items-center gap-4">

        {/* Header */}
        <header className="flex flex-col gap-4 w-[90%] overflow-hidden">
          <span className="w-full flex justify-end">
            <Link to="/landing" className="hover:bg-red-200 p-2">
              <X className="h-10 w-10 text-red-500"/>
            </Link>
          </span>

          <span className="w-fit bg-gray-200 px-2 py-1 rounded-lg text-xs font-medium">
            Latest Update
          </span>

          <h1 className="text-black font-bold text-4xl break-words">
            All Announcement
          </h1>

          <p className="text-gray-500 max-w-xl leading-relaxed break-words"> 
            Stay informed with the latest news, events, and updates from IPTBM. Browse all announcements and never miss an important update.
          </p>

          {/* Search Bar */}
          <div className="flex items-center w-full border border-gray-300 p-4 gap-2 rounded-lg focus-within:border-blue-500">
            <Search className="w-5 h-5 text-gray-500"/>
            <input type="text" placeholder="Search announcements..." className="w-full focus:outline-none"/>
          </div>
        </header> 

        {/* Pagination Content */}
        <section className="w-[90%] flex flex-col gap-4">

          {/* Contents */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {currentCards.map((items) => (
              <span className="border-2 border-gray-300 px-4 py-8 rounded-xl hover:border-blue-500 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all gap-4 flex flex-col">
                <h1 className="text-lg font-semibold hover:text-blue-500">
                  {items.title}
                </h1>

                <p className="text-gray-500">
                  {items.desc}
                </p>

                <div className="flex items-center gap-2">
                  <Link className="text-blue-700 font-medium hover:underline">
                  Read More
                </Link>
                <ArrowRight className="text-blue-700 h-5 w-5"/>
                </div>
              </span>
            ))}

          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-2">

            {/* Prev */}
            <button
              onClick={() => setCurrentPage(p => p - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded"
            >
              Prev
            </button>

            {/* Numbers */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
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
              className="px-3 py-1 border rounded"
            >
              Next
            </button>

          </div>
        </section>
      </main>
    </>
  );
};

export default ViewAllAnnouncement;