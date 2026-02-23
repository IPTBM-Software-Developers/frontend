import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

// Icons
import { Search } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { X } from "lucide-react";
import { Bell } from "lucide-react";
import { Calendar } from "lucide-react"; // Event Icon
import { Trophy } from "lucide-react"; // Achievement Icon
import { BrushCleaning } from "lucide-react"; //Maintenance Icon
import { Handshake } from "lucide-react"; // Partnership Icon
import { Rss } from "lucide-react"; // Update Icon
import { Newspaper } from "lucide-react"; // News Icon

 
// TYPES OF EVENTS
// Event
// Achievement
// Maintenance
// Partnership
// Update
// News


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


const ViewAllAnnouncement = () => {
  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentCards = announcementData.slice(startIndex, startIndex + itemsPerPage);
  
  const totalPages = Math.ceil(announcementData.length / itemsPerPage);


  return(
    <>
      <NavBar />
      <main className="w-full min-h-screen py-8 bg-gray-50 flex flex-col items-center gap-4">

        {/* Header */}
        <header className="flex flex-col items-center gap-4 w-[90%] overflow-hidden">
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
            <input type="search" placeholder="Search announcements..." className="w-full focus:outline-none text-sm"/>
          </div>
        </header> 

        {/* Pagination Content */}
        <section className="w-[90%] flex flex-col gap-4">

          {/* Contents */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCards.map((items) => (
              <article className="border rounded-xl cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all gap-4 flex flex-col shadow-sm">
                <section className={`flex flex-col w-full h-20 rounded-t-xl p-4 min-h-50 ${items.bgColor}`}>
                  <div className="w-full flex justify-between items-center h-fit">
                    <span className="h-fit px-4 py-1 rounded-4xl bg-white/90 text-sm font-medium mix-blend-screen">
                      {items.label}
                    </span>

                    <span className="text-sm text-white">
                      {items.date}
                    </span>
                  </div>

                  <span className="w-full h-full flex justify-center items-center text-white [&_svg]:w-12 [&_svg]:h-12">
                    {items.Icon}
                  </span>
                </section>

                {/* Text */}
                <section className="flex flex-col w-full p-4 gap-2">
                  <span className="font-semibold">
                    {items.title}
                  </span>

                  <span className="text-gray-600">
                    {items.desc}
                  </span>
                </section>

                {/* Link */}

                <Link to="" className="flex items-center gap-2 p-4 text-blue-700 text-sm hover:underline w-fit">
                Read More
                <ArrowRight className="h-4 w-4"/>
                </Link>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-2">

            {/* Prev */}
            <button
              onClick={() => setCurrentPage(p => p - 1)}
              disabled={currentPage === 1}
              className="px-4 py-1 border rounded hover:bg-black/5"
            >
              Prev
            </button>

            {/* Numbers */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-1 border rounded hover:bg-black/5 ${
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
              className="px-4 py-1 border rounded hover:bg-black/5"
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