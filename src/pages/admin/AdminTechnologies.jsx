import {LayersPlus,Trash2, Pencil, ImagePlus, X, Globe, LockKeyhole, CircleEllipsis, Ungroup, Users, UsersRound, Landmark, History, Info } from "lucide-react";
import { useState } from "react";
import { sileo } from "sileo";
import Certificate from "../../assets/certificate.png";

const announcementData = [
  {
    id: 1,
    applicationNo: "APP-2026-0001",
    registrationNo: "REG-2026-0001",
    title: "Eco-Friendly Biodegradable Polymer",
    abstract: "A novel polymer derived from agricultural waste that decomposes within 90 days in soil conditions. This material utilizes cellulose fibers extracted from discarded corn husks to enhance structural integrity. The production process significantly reduces carbon emissions compared to traditional petroleum-based plastics. Extensive testing confirms that the polymer remains stable under standard storage conditions but triggers rapid degradation when exposed to microbial activity. This innovation offers a sustainable alternative for single-use packaging industries globally.",
    otherDetails: "Prototype tested in tropical climates. High tensile strength relative to traditional plastics.",
    ipType: "patent",
    inventors: "Elena Rodriguez, Samuel Tan",
    campus: "UP Los Baños",
    agency: "IPHOPHIL",
    agents: "LegalLink IP Firm",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2024-05-12",
    registrationDate: "2026-01-15",
    expirationDate: "2044-05-12"
  },
  {
    id: 2,
    applicationNo: "APP-2026-0002",
    registrationNo: "REG-2026-0002",
    title: "Smart Traffic Management Algorithm",
    abstract: "This AI-driven system is designed for optimizing urban traffic flow using real-time sensor data and predictive modeling. The algorithm processes inputs from traffic cameras, road sensors, and GPS data to identify bottlenecks before they occur. It dynamically adjusts signal timings across a network of intersections to minimize idle time and fuel consumption. Furthermore, the system incorporates a machine learning layer that adapts to seasonal changes in commuter behavior. Implementation of this technology aims to reduce urban congestion by up to twenty-five percent during peak hours.",
    otherDetails: "Currently in pilot phase at the Main Campus intersection.",
    ipType: "copyright",
    inventors: "Marcus Chen",
    campus: "Main Campus",
    agency: "national-library",
    agents: "Self-Represented",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "filed",
    applicationDate: "2026-02-20",
    registrationDate: "To be determined",
    expirationDate: "2076-02-20"
  },
  {
    id: 3,
    applicationNo: "APP-2026-0003",
    registrationNo: "REG-2026-0003",
    title: "Lumina-Soft Logo Design",
    abstract: "This visual identity for the Lumina-Soft software suite utilizes minimalist geometric patterns to convey efficiency and modernism. The design features a stylized prism that symbolizes the refraction of data into actionable insights. Each element was crafted using golden ratio proportions to ensure aesthetic balance across all digital and print mediums. The color palette consists of deep cobalt and vibrant cyan to evoke feelings of trust and technological advancement. This branding asset serves as the primary visual anchor for the university's technical innovation hub.",
    otherDetails: "Primary brand asset for the University Tech Hub.",
    ipType: "trademark",
    inventors: "Sarah Jenkins",
    campus: "Tech Park",
    agency: "IPHOPHIL",
    agents: "BrandGuard Associates",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2025-08-10",
    registrationDate: "2025-11-05",
    expirationDate: "2035-11-05"
  },
  {
    id: 4,
    applicationNo: "APP-2026-0004",
    registrationNo: "REG-2026-0004",
    title: "Drought-Resistant Rice Hybrid 'V-12'",
    abstract: "The 'V-12' is a new variety of rice specifically bred for low-water environments without sacrificing overall grain yield. It incorporates specific genetic markers associated with deep root penetration and efficient osmotic adjustment. During three years of multi-locational trials, this hybrid maintained eighty percent productivity even in severe drought conditions. The grains produced are categorized as Grade A for their texture and high nutritional content. This development is crucial for ensuring food security in regions heavily affected by changing climate patterns.",
    otherDetails: "Successful trials completed in arid regions.",
    ipType: "plant-variety",
    inventors: "Dr. Aris Mendoza, Lila Santos",
    campus: "Agricultural College",
    agency: "IPHOPHIL",
    agents: "AgriLaw Group",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2023-11-20",
    registrationDate: "2026-03-01",
    expirationDate: "2048-03-01"
  },
  {
    id: 5,
    applicationNo: "APP-2026-0005",
    registrationNo: "REG-2026-0005",
    title: "Compact Urban Vertical Garden Housing",
    abstract: "This industrial design proposes modular housing units that integrate automated hydroponic systems directly into the building facade. The structure is optimized for high-density metropolitan areas where traditional gardening space is non-existent. Each module features a self-sustaining irrigation network powered by harvested rainwater and solar energy. Residents can grow a variety of microgreens and vegetables within the ergonomic balcony enclosures provided. The design emphasizes natural light penetration and improved air quality for all urban inhabitants.",
    otherDetails: "Designed for high-density metropolitan areas.",
    ipType: "industrial-design",
    inventors: "Chloe Dela Cruz",
    campus: "College of Architecture",
    agency: "IPHOPHIL",
    agents: "Pacific IP",
    visibility: "private",
    visibilityIcon: <LockKeyhole size={18} />,
    status: "withdrawn",
    applicationDate: "2025-01-15",
    registrationDate: "Not Applicable",
    expirationDate: "Not Applicable"
  },
  {
    id: 6,
    applicationNo: "APP-2026-0006",
    registrationNo: "REG-2026-0006",
    title: "High-Efficiency Solar Distillation Kit",
    abstract: "A low-cost utility model designed for purifying brackish or contaminated water using only solar thermal energy. The unit features a high-transmittance polycarbonate cover that maximizes heat absorption within the evaporation chamber. Contaminants and salts are left behind as pure vapor condenses on the slanted ceiling for collection. It is constructed from recycled materials to ensure affordability for disaster relief and remote coastal communities. Daily yields exceed five liters per unit under typical tropical sun exposure.",
    otherDetails: "Targeted for disaster relief and remote coastal communities.",
    ipType: "utility-model",
    inventors: "Roberto Gomez",
    campus: "Engineering Annex",
    agency: "IPHOPHIL",
    agents: "GreenTech Patents",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2025-06-30",
    registrationDate: "2026-02-12",
    expirationDate: "2032-06-30"
  },
  {
    id: 7,
    applicationNo: "APP-2026-0007",
    registrationNo: "REG-2026-0007",
    title: "Proprietary Fermentation Catalyst Formula",
    abstract: "This chemical compound is engineered to accelerate ethanol production by fifteen percent in industrial fermentation tanks. It works by stabilizing the yeast cell membranes against high alcohol concentrations during the final stages of the process. The formula includes a unique blend of trace minerals and organic acids that optimize enzymatic pathways. Significant reductions in batch processing time have been recorded during internal pilot tests. The exact chemical composition is maintained as a restricted trade secret to protect the university's competitive advantage.",
    otherDetails: "Strictly confidential manufacturing process.",
    ipType: "trade-secret",
    inventors: "Dr. Henry Sy",
    campus: "Science Research Center",
    agency: "IPHOPHIL",
    agents: "Internal Legal Counsel",
    visibility: "private",
    visibilityIcon: <LockKeyhole size={18} />,
    status: "filed",
    applicationDate: "2026-03-10",
    registrationDate: "TBD",
    expirationDate: "Not Applicable"
  },
  {
    id: 8,
    applicationNo: "APP-2026-0008",
    registrationNo: "REG-2026-0008",
    title: "Wireless Power Transfer Module",
    abstract: "This hardware innovation utilizes inductive charging techniques capable of a one-meter range for small IoT devices. The module employs a resonant coupling system that minimizes energy loss over distance compared to traditional induction pads. Advanced shielding prevents electromagnetic interference with surrounding electronic components. It is specifically designed to power low-energy environmental sensors in smart building applications. The device supports multi-node charging, allowing one transmitter to serve several receivers simultaneously.",
    otherDetails: "Includes detailed circuit schematics and thermal logs.",
    ipType: "patent",
    inventors: "Julian Lee, Amara Okafor",
    campus: "Main Campus",
    agency: "IPHOPHIL",
    agents: "TechBound IP",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "expired",
    applicationDate: "2006-05-05",
    registrationDate: "2008-09-12",
    expirationDate: "2026-05-05"
  },
  {
    id: 9,
    applicationNo: "APP-2026-0009",
    registrationNo: "REG-2026-0009",
    title: "Healthcare Information System Manual",
    abstract: "This comprehensive manual outlines the deployment and maintenance of regional health tracking software. It provides step-by-step instructions for data migration, user authentication, and emergency recovery protocols. The text includes detailed case studies on privacy compliance and patient data anonymization. Collaboration with the Department of Health ensured that all administrative workflows are standardized. This document serves as the primary training resource for all medical personnel participating in the digital health initiative.",
    otherDetails: "Written in collaboration with the Department of Health.",
    ipType: "copyright",
    inventors: "Patricia Ramos",
    campus: "Medical Plaza",
    agency: "national-library",
    agents: "Self-Represented",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "filed",
    applicationDate: "2026-01-22",
    registrationDate: "Under Review",
    expirationDate: "2076-12-31"
  },
  {
    id: 10,
    applicationNo: "APP-2026-0010",
    registrationNo: "REG-2026-0010",
    title: "Foldable Electric Commuter Bike",
    abstract: "This ergonomic frame design describes a lithium-ion powered bicycle that fits within a standard commuter backpack when folded. The design features a patented hinge mechanism that ensures structural rigidity while in use. High-strength aluminum alloys are used to keep the total weight under eight kilograms. It includes an integrated lighting system and a digital display for monitoring battery life and speed. This product addresses the 'last mile' transportation challenge for urban professionals.",
    otherDetails: "Winner of the 2025 Design Excellence Award.",
    ipType: "industrial-design",
    inventors: "Leo Vance",
    campus: "Design Institute",
    agency: "IPHOPHIL",
    agents: "Vance & Associates",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2025-04-18",
    registrationDate: "2026-03-15",
    expirationDate: "2031-04-18"
  },
  {
    id: 11,
    applicationNo: "APP-2026-0011",
    registrationNo: "REG-2026-0011",
    title: "Anti-Fungal Soil Enrichment Mixture",
    abstract: "This utility model focuses on an organic compound mixture designed to prevent root rot in commercial plant nurseries. The formula combines beneficial microbes with slow-release nutrients to strengthen plant immune systems. It specifically targets the Pythium and Phytophthora species which are common threats to young seedlings. Field tests indicate a forty percent increase in seedling survival rates across various soil types. The mixture is easily applied through existing drip irrigation systems without clogging emitters.",
    otherDetails: "Awaiting final field test results.",
    ipType: "utility-model",
    inventors: "Nina Flores",
    campus: "Agricultural College",
    agency: "IPHOPHIL",
    agents: "BioProtect Law",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "filed",
    applicationDate: "2026-02-01",
    registrationDate: "To be determined",
    expirationDate: "2033-02-01"
  },
  {
    id: 12,
    applicationNo: "APP-2026-0012",
    registrationNo: "REG-2026-0012",
    title: "Titan-Build Cement Additive",
    abstract: "Titan-Build is the brand name for a specialized high-stress concrete reinforcement chemical used in large-scale infrastructure. The trademark covers the unique blue-and-orange logo and the specific font used in industrial marketing. This additive significantly improves the compressive strength of cement while reducing curing time. It has been successfully implemented in high-profile projects like the new University Stadium. The trademark is currently protected under international intellectual property classifications for construction materials.",
    otherDetails: "Used in the new University Stadium construction.",
    ipType: "trademark",
    inventors: "Gordon Ramsey (Corp Lead)",
    campus: "Engineering Annex",
    agency: "IPHOPHIL",
    agents: "Corporate IP Solvers",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2024-11-11",
    registrationDate: "2025-03-22",
    expirationDate: "2035-03-22"
  },
  {
    id: 13,
    applicationNo: "APP-2026-0013",
    registrationNo: "REG-2026-0013",
    title: "Self-Healing Asphalt Composition",
    abstract: "This asphalt surfacing material is embedded with micro-capsules that automatically repair cracks through a thermal reaction. When a crack forms, the capsules rupture and release a binding agent that seals the fissure. This technology potentially doubles the lifespan of urban roads by preventing water ingress into the sub-base. The material was tested for various temperature ranges to ensure it does not activate prematurely during heatwaves. Despite the withdrawal of the initial patent, the research provides a foundation for future road maintenance innovations.",
    otherDetails: "Initial proposal rejected due to missing chemical citations.",
    ipType: "patent",
    inventors: "Simon Peter, Wanda Maximoff",
    campus: "Main Campus",
    agency: "IPHOPHIL",
    agents: "Strategic Patenting Inc.",
    visibility: "private",
    visibilityIcon: <LockKeyhole size={18} />,
    status: "withdrawn",
    applicationDate: "2025-12-05",
    registrationDate: "Not Applicable",
    expirationDate: "Not Applicable"
  },
  {
    id: 14,
    applicationNo: "APP-2026-0014",
    registrationNo: "REG-2026-0014",
    title: "Sweet-Purple Yam Mutation 'P-99'",
    abstract: "The 'P-99' represents a high-sugar variant of the purple yam developed through targeted mutation breeding. This variety possesses a shorter harvest cycle, reaching maturity thirty days faster than traditional yams. It has been specifically optimized for the volcanic soil types found in the Bicol region. The mutation also results in a deeper violet color, which is highly prized in the food processing industry. Extensive nutritional analysis shows elevated levels of antioxidants compared to standard varieties.",
    otherDetails: "Optimized for volcanic soil types.",
    ipType: "plant-variety",
    inventors: "Felipe Buencamino",
    campus: "Science Research Center",
    agency: "IPHOPHIL",
    agents: "AgriLaw Group",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2024-02-28",
    registrationDate: "2026-01-10",
    expirationDate: "2046-01-10"
  },
  {
    id: 15,
    applicationNo: "APP-2026-0015",
    registrationNo: "REG-2026-0015",
    title: "Secure-Pass Biometric Gateway",
    abstract: "A hardware-software hybrid system designed for dual-factor facial and fingerprint recognition in secure facilities. The gateway utilizes an infrared-based camera system that remains accurate even in near-zero light environments. It features an anti-spoofing algorithm that can distinguish between high-resolution photographs and a living person. The hardware is encased in a tamper-proof housing with integrated alarm triggers. This utility model is intended for use in high-security research laboratories and data centers.",
    otherDetails: "Optimized for low-light environments.",
    ipType: "utility-model",
    inventors: "Alan Turing Jr., Grace Hopper II",
    campus: "Tech Park",
    agency: "IPHOPHIL",
    agents: "Digital Defense IP",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2025-09-14",
    registrationDate: "2026-03-20",
    expirationDate: "2032-09-14"
  },
  {
    id: 16,
    applicationNo: "APP-2026-0016",
    registrationNo: "REG-2026-0016",
    title: "The History of Digital Ethics",
    abstract: "This textbook explores the philosophical implications of artificial intelligence and the use of big data in modern society. It provides a historical overview of ethical theories from antiquity through the digital revolution. The text includes specific chapters on the ethics of surveillance, algorithmic bias, and the right to be forgotten. Case studies are used to illustrate real-world moral dilemmas faced by software engineers and policymakers. It is currently a mandatory reading for undergraduate students enrolled in the Ethics 101 course.",
    otherDetails: "Mandatory reading for Ethics 101 students.",
    ipType: "copyright",
    inventors: "Dr. Catherine Sia",
    campus: "Main Campus",
    agency: "national-library",
    agents: "Academic Press Agents",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2023-05-05",
    registrationDate: "2023-08-12",
    expirationDate: "2073-12-31"
  },
  {
    id: 17,
    applicationNo: "APP-2026-0017",
    registrationNo: "REG-2026-0017",
    title: "Modular Drone Propeller Guard",
    abstract: "This industrial design focuses on a lightweight, impact-resistant guard for commercial delivery drones. The modular nature of the guard allows for quick replacement of damaged sections without requiring a full overhaul. It uses a lattice-structured polymer to provide maximum strength with minimal weight penalties. The design also incorporates aerodynamic features that help reduce prop noise during flight. These guards are intended to improve safety in residential areas where drone deliveries are active.",
    otherDetails: "Patent search suggested high similarity to existing models.",
    ipType: "industrial-design",
    inventors: "Kevin Flynn",
    campus: "Tech Park",
    agency: "IPHOPHIL",
    agents: "SkyHigh IP",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "filed",
    applicationDate: "2026-03-05",
    registrationDate: "Final Review",
    expirationDate: "2031-03-05"
  },
  {
    id: 18,
    applicationNo: "APP-2026-0018",
    registrationNo: "REG-2026-0018",
    title: "Gen-1 Filtration Membrane",
    abstract: "This first-generation ceramic filter was developed for the treatment of industrial wastewater in heavy manufacturing. It utilizes a porous alumina structure capable of removing ninety-nine percent of heavy metal particulates. The membrane was designed to operate under high-pressure conditions and extreme pH levels. Though currently superseded by newer models, it set the standard for durability in industrial water reclamation. This technology remains a significant milestone in the university's environmental engineering history.",
    otherDetails: "No longer in active production.",
    ipType: "patent",
    inventors: "Victor Von Doom",
    campus: "Engineering Annex",
    agency: "IPHOPHIL",
    agents: "Global Patents",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "expired",
    applicationDate: "2006-01-01",
    registrationDate: "2010-01-01",
    expirationDate: "2026-01-01"
  },
  {
    id: 19,
    applicationNo: "APP-2026-0019",
    registrationNo: "REG-2026-0019",
    title: "Optimized Logistics Route Matrix",
    abstract: "This trade secret involves a mathematical weighting system used for university-wide supply distribution and procurement. It calculates optimal delivery routes based on varying fuel costs, traffic patterns, and vehicle capacities. The algorithm has been credited with reducing the university's central logistics expenses by twelve percent annually. Access to the core logic is restricted to senior administrators within the procurement office. The system is regularly updated with real-world performance data to maintain its efficiency.",
    otherDetails: "Used by the central procurement office.",
    ipType: "trade-secret",
    inventors: "Linda Lovelace",
    campus: "Main Campus",
    agency: "IPHOPHIL",
    agents: "Self-Represented",
    visibility: "private",
    visibilityIcon: <LockKeyhole size={18} />,
    status: "registered",
    applicationDate: "2025-10-10",
    registrationDate: "2025-12-01",
    expirationDate: "No Expiry"
  },
  {
    id: 20,
    applicationNo: "APP-2026-0020",
    registrationNo: "REG-2026-0020",
    title: "Blue-Flame Fusion Logo",
    abstract: "The logomark for the Fusion Energy project features a distinctive blue and silver gradient design. It symbolizes the intense heat and clean energy generation associated with experimental physics research. The mark was designed to maintain legibility across various scales, from small digital icons to large exterior signage. This trademark ensures the project’s branding is consistent during international research collaborations. It represents the university’s commitment to pioneering sustainable energy solutions for the future.",
    otherDetails: "Distinctive blue and silver gradient design.",
    ipType: "trademark",
    inventors: "Natasha Romanoff",
    campus: "Science Research Center",
    agency: "IPHOPHIL",
    agents: "Shield Legal",
    visibility: "public",
    visibilityIcon: <Globe size={18} />,
    status: "registered",
    applicationDate: "2026-01-05",
    registrationDate: "2026-03-22",
    expirationDate: "2036-03-22"
  }
];

const AdminTechnologies = () => {
  const [visible, isVisible] = useState(true); 
  const [popup, setPopup] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [certificatePreview, setCertificatePreview] = useState(null);

  const handleCertificateChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setCertificatePreview(imageUrl);
  }
};

  return(
    <>
      <main
        className="w-full min-h-screen px-6 py-14 flex flex-col items-center gap-8 bg-gray-50"
      >
        <header 
            className="flex flex-col gap-2 w-full md:max-w-2xl xl:max-w-7xl"
          >
            <section className="flex w-full justify-between items-center">
              <h1 className="flex flex-col font-semibold text-4xl">
                <span className="text-base">Hola!</span>Technologies
              </h1>
            </section>
  
            <section className="flex flex-col xl:flex-row justify-between xl:items-center w-full text-gray-500 text-justify text-sm space-y-4">
              <p
                className="xl:w-[70%] 2xl:w-[80%]"
              >
                Create, publish, and manage technologies to keep your community informed about important updates, events, and news.
              </p>
              <button
                className="w-fit flex gap-2 items-center pl-4 pr-5 py-2 rounded-lg cursor-pointer border text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all"
                onClick={() => isVisible(!visible)}
              >
                <LayersPlus size={22}/>
                {visible ? "Create New " : "Manage Technologies"}
              </button>
            </section>
          </header>

          {visible ? 
            <section className="flex flex-col w-full md:max-w-2xl xl:max-w-7xl h-[670px] bg-gray-50 border rounded-4xl overflow-hidden">
              <table className="flex flex-col overflow-y-auto border-collapse">
                <thead className="w-full text-left sticky top-0 z-10 bg-white border-b text-gray-800 text-sm">
                  <tr className="flex px-8 py-6">
                    <th className="flex-2 font-semibold ">TITLE</th>
                    <th className="flex-1 font-semibold">IP TYPE</th>
                    <th className="flex-1 font-semibold">AGENCY</th>
                    <th className="flex-1 font-semibold">STATUS</th>
                    <th className="flex-1 font-semibold">ACTIONS</th>
                  </tr>
                </thead>
  
                <tbody className="w-full bg-white">
                  {announcementData.map((data) => (
                    <tr 
                      key={data.id} 
                      className="flex text-left px-8 py-6 text-sm font-semibold border-b cursor-pointer hover:bg-gray-50 transition-all"
                      onClick={() => {
                        setSelectedData(data);
                        setPopup(true);
                      }}
                    >
                      <td className="flex-2 flex flex-col gap-2">
                        <span className="font-semibold">{data.title}</span>
                      </td>

  
                      <td className="flex-1 items-center flex text-gray-600 font-normal">
                        {data.ipType}
                      </td>
  
                      <td className="flex-1 items-center flex">
                        <span className="flex-1 items-center flex text-gray-600 font-normal">{data.agency}</span>
                      </td>

                      <td className="flex-1 items-center flex">
                        <span className="flex-1 items-center flex text-gray-600 font-normal">{data.status}</span>
                      </td>
  
                      <td className="flex-1 items-center flex gap-1 text-xs">
                        <button 
                          className="flex gap-2 p-2 p-2 rounded-md cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            // edit logic
                          }}
                        >
                          {<Pencil size={20}/>}
                        </button>
  
                        <button 
                          className="flex gap-2 p-2 items-center p-2 rounded-md cursor-pointer text-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            // edit logic
                          }}
                        >
                          {<Trash2 size={20}/>}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section> 
            // Create Technologies
          : <section className="flex flex-col w-full md:max-w-2xl xl:max-w-7xl h-[670px] bg-white border rounded-4xl overflow-hidden p-8 overflow-y-auto">
              <form 
                action="" 
                className="w-full flex flex-col gap-8"
                onSubmit={(e) => {
                  e.preventDefault(); 

                  sileo.info({
                    title: "Confirm",
                    description: "Are you sure you want to submit this?",
                    autopilot: {
                      expand: 100,
                      collapse: 7000,
                    },
                    button: {
                      title: "Submit",
                      onClick: () => console.log("Submitted"),
                    },
                  });
                }}
              >
                <div className="flex flex-col gap-3">
                  <label className="text-base font-medium">Certificate</label>

                  <label className="w-full h-40 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                    <span className="text-sm text-gray-500">Click to upload certificate</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleCertificateChange}
                      className="hidden"
                    />
                  </label>

                  {certificatePreview && (
                    <div className="w-full h-60 border rounded-lg overflow-hidden">
                      <img
                        src={certificatePreview}
                        alt="Certificate Preview"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-base font-medium">Title</label>
                  <input type="text" placeholder="e.g., Eco-Friendly Biodegradable Polymer" className="border px-6 py-4 rounded-md text-sm"/>
                </div>

                {/* Inventors & Agents */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Inventors */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Investors</label>
                    <input type="text" placeholder="Enter investors here" className="border px-6 py-4 rounded-md  text-sm"/>
                  </div>

                  {/* Agents */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Agents</label>
                    <input type="text" placeholder="Enter agents here" className="border px-6 py-4 rounded-md  text-sm"/>
                  </div>
                </div>
                
                {/* Institutions & Agency */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Inventors */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Institutions</label>
                    <input type="text" placeholder="Enter institutions here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>

                  {/* Agents */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Agency</label>
                    <input type="text" placeholder="Enter agency here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>
                </div>

                {/* Visibility, Status, and Ip type */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Inventors */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Visibility</label>
                    <input type="text" placeholder="Enter institutions here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>

                  {/* Agents */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Status</label>
                    <input type="text" placeholder="Enter agency here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>

                  {/* Agents */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">IP Type</label>
                    <input type="text" placeholder="Enter agency here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>
                </div>

                {/* Abstract */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-medium">Abstract</label>
                  <textarea placeholder="Enter abstract here"  className="border px-6 py-4 rounded-md text-sm field-sizing min-h-[200px]"></textarea>
                </div>

                {/* Other Details */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-medium">Other Details</label>
                  <textarea placeholder="Enter abstract here"  className="border px-6 py-4 rounded-md text-sm field-sizing min-h-[100px]"></textarea>
                </div>

                {/* Application & Registration No. */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Inventors */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Application No.</label>
                    <input type="text" placeholder="Enter application no. here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>

                  {/* Agents */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Registration No.</label>
                    <input type="text" placeholder="Enter registration no. here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>
                </div>

                {/* App, Reg, Exp Date */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Inventors */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Application Date</label>
                    <input type="date" placeholder="Enter application date here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>

                  {/* Agents */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Registration Date</label>
                    <input type="date" placeholder="Enter registration date here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>

                  {/* Agents */}
                  <div className="flex flex-col gap-2 w">
                    <label className="text-base font-medium">Expiration Date</label>
                    <input type="date" placeholder="Enter expiration date here" className="border px-6 py-4 rounded-md text-sm"/>
                  </div>
                </div>
                
                <div className="flex w-full justify-end">
                  <input 
                    type="submit" 
                    className=" px-4 py-2 rounded-sm text-sm font-medium bg-blue-500 text-white hover:opacity-90 active:opacity-80 cursor-pointer transition-all"
                  />

                </div>
              </form>
            </section>}
      </main>

      {popup && selectedData && (
      <section className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
        
        {/* Modal Content */}
        <div className="flex flex-col w-4xl h-[90%] bg-white relative rounded-lg">
          <header className="w-full px-8 py-16 bg-blue-800 text-white space-y-4 overflow-y-auto rounded-t-lg">
            <h1 className="font-semibold text-4xl">
              {selectedData.title}
            </h1>

            <div className="w-full flex gap-3">
              <span className="border w-fit flex items-center gap-1 pl-2 pr-3 py-1 rounded-full text-sm">
                {selectedData.visibilityIcon}
                {selectedData.visibility}
              </span>

              <span className="border w-fit flex items-center gap-1 pl-2 pr-3 py-1 rounded-full text-sm">
                <CircleEllipsis size={18}/>
                {selectedData.status}
              </span>

               <span className="border w-fit flex items-center gap-1 pl-2 pr-3 py-1 rounded-full text-sm">
                <Ungroup size={18}/>
                {selectedData.ipType}
              </span>
            </div>
          </header>

          <button
            className="absolute top-6 right-6 text-gray-300 hover:text-gray-500 text-xl cursor-pointer"
            onClick={() => setPopup(false)}
          >
            <X />
          </button>

          {/* Content */}
          <section className="w-full h-full flex flex-col p-8 gap-12 overflow-y-auto">            
            <div className="w-full flex justify-center items-center">
              <img src={Certificate} alt="" className=" rounded-xl w-[70%]"/>

            </div>

            {/* Abstract */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm text-gray-500 font-semibold">ABSTRACT</h2>
              <p className="text-gray-500 text-justify">{selectedData.abstract}</p>
            </div>

            {/* Other Details */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm text-gray-500 font-semibold">ADDITIONAL DETAILS</h2>
              <p className="text-gray-500 text-justify">{selectedData.otherDetails}</p>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-8 flex-1 rounded-lg p-8 flex flex-col">
                <span className="flex flex-col gap-4">
                  <h2 className="flex gap-2 items-center text-sm text-blue-800 font-semibold"> <Users size={20}/> INVENTORS</h2>
                    <ul className="list-disc list-inside">
                      {selectedData.inventors.split(', ').map((name, index) => (
                        <li key={index} className="text-gray-500 text-sm">
                          {name}
                        </li>
                      ))}
                    </ul>
                </span>

                <span className="flex flex-col gap-4">
                  <h2 className="flex gap-2 items-center text-sm text-blue-800 font-semibold"> <UsersRound size={20} /> AGENTS</h2>
                    <ul className="list-disc list-inside">
                      {selectedData.agents.split(', ').map((name, index) => (
                        <li key={index} className="text-gray-500 text-sm">
                          {name}
                        </li>
                      ))}
                    </ul>
                </span>
              </div>

              <div className="flex flex-col gap-8 flex-1 rounded-lg p-8 flex flex-col">
                <span className="flex flex-col gap-4">
                  <h2 className="flex gap-2 items-center text-sm text-blue-800 font-semibold"> <Landmark size={20}/> INSTITUTIONS</h2>
                    <ul className="list-disc list-inside">
                      {selectedData.campus.split(', ').map((name, index) => (
                        <li key={index} className="text-gray-500 text-sm">
                          {name}
                        </li>
                      ))}
                    </ul>
                </span>

                <span className="flex flex-col gap-4">
                  <h2 className="flex gap-2 items-center text-sm text-blue-800 font-semibold"> <UsersRound size={20} /> AGENCY</h2>
                    <ul className="list-disc list-inside">
                      {selectedData.agency.split(', ').map((name, index) => (
                        <li key={index} className="text-gray-500 text-sm">
                          {name}
                        </li>
                      ))}
                    </ul>
                </span>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="w-full flex flex-col gap-2">
              <span>
                <h1 className="flex gap-2 items-center text-sm text-blue-700 font-semibold"> <History /> TIMELINE</h1>
              </span>

              <div className="w-full grid grid-cols-2 px-2">
                <span className="w-full flex flex-col gap-2 py-2">
                  <h1 className="text-sm text-gray-500 font-semibold">APPLICATION DATE</h1>
                  <p className="text-sm font-normal text-gray-500">{selectedData.applicationDate}</p>
                </span>

                <span className="w-full flex flex-col gap-2 py-2">
                  <h1 className="text-sm text-gray-500 font-semibold">REGISTRATION DATE</h1>
                  <p className="text-sm font-normal text-gray-500">{selectedData.registrationDate}</p>
                </span>

                <span className="w-full flex flex-col gap-2 py-2">
                  <h1 className="text-sm text-gray-500 font-semibold">EXPIRATION DATE</h1>
                  <p className="text-sm font-normal text-gray-500">{selectedData.expirationDate}</p>
                </span>
              </div>
            </div>

            {/* App & Reg Information */}
            <div className="w-full flex flex-col gap-2">
              <span>
                <h1 className="flex gap-2 items-center text-sm text-blue-700 font-semibold"> <Info /> APPLICATION & REGISTRATION DETAILS</h1>
              </span>

              <div className="w-full grid grid-cols-2 px-2">
                <span className="w-full flex flex-col gap-2 py-2">
                  <h1 className="text-sm text-gray-500 font-semibold">APPLICATION NUMBER</h1>
                  <p className="text-sm font-normal text-gray-500">{selectedData.applicationNo}</p>
                </span>

                <span className="w-full flex flex-col gap-2 py-2">
                  <h1 className="text-sm text-gray-500 font-semibold">REGISTRATION NUMBER</h1>
                  <p className="text-sm font-normal text-gray-500">{selectedData.registrationNo}</p>
                </span>
              </div>
            </div>
           
          </section>

        </div>
      </section>
    )}
    </>
  );
};

export default AdminTechnologies;