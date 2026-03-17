import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { LinkNode, AutoLinkNode } from "@lexical/link";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { AutoLinkPlugin } from "@lexical/react/LexicalAutoLinkPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, $getSelection, $isRangeSelection } from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode } from "@lexical/rich-text";
import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND } from "@lexical/list";
import { Bold, Italic, Underline, List, ListOrdered, Heading1, Heading2 } from "lucide-react";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $getRoot } from "lexical"

import { Dot, SquareChartGantt, LayersPlus,Trash2, Pencil, ImagePlus, Paperclip } from "lucide-react";

import NavBar from "../../components/landing/NavBar";
import { useState } from "react";

const announcementData = [
  {
    label: "Event",
    date: "March 15, 2026",
    awardfrom: "Marcus Holloway",
    title: "Blockchain Security",
    desc: "Immutable records and tamper-proof documentation for your intellectual property assets using distributed ledger technology.",
  },
  {
    label: "Achievement",
    date: "February 10, 2026",
    awardfrom: "Dr. Elena Vance",
    title: "AI-Powered Analysis",
    desc: "Advanced machine learning algorithms to analyze, categorize, and monitor your IP portfolio for potential infringements.",
  },
  {
    label: "Maintenance",
    date: "February 01, 2026",
    awardfrom: "Julian Thorne",
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud-based platform ensuring your data is accessible anywhere while maintaining enterprise-grade security.",
  },
  {
    label: "Partnership",
    date: "January 20, 2026",
    awardfrom: "Sarah Jenkins",
    title: "Secure Data Storage",
    desc: "End-to-end encrypted storage solutions with redundant backups and compliance with international data protection standards.",
  },
  {
    label: "Update",
    date: "January 05, 2026",
    awardfrom: "Alistair Reed",
    title: "Real-Time Monitoring",
    desc: "Continuous monitoring of your IP assets with instant alerts for potential violations or unauthorized usage worldwide.",
  },
  {
    label: "News",
    date: "December 15, 2025",
    awardfrom: "Lila Montgomery",
    title: "API Integration",
    desc: "Seamless integration with existing systems through our robust API, enabling automated workflows and data synchronization.",
  },
  {
    label: "News",
    date: "December 01, 2025",
    awardfrom: "Tobias Fletch",
    title: "Smart Contract Automation",
    desc: "Self-executing digital agreements that streamline licensing royalties and automate ownership transfers without intermediaries.",
  },
  {
    label: "Partnership",
    date: "November 18, 2025",
    awardfrom: "Isabella Kwong",
    title: "Biometric Authentication",
    desc: "Multi-factor security layers including facial and fingerprint recognition to ensure only authorized personnel access sensitive IP.",
  },
  {
    label: "Maintenance",
    date: "November 05, 2025",
    awardfrom: "Arthur Penhaligon",
    title: "Global Compliance Tracking",
    desc: "Automated updates on international patent laws and regulatory changes to keep your portfolio compliant across all jurisdictions.",
  },
  {
    label: "Event",
    date: "October 22, 2025",
    awardfrom: "Cassandra Nova",
    title: "Predictive Analytics",
    desc: "Forecasting market trends and potential IP valuation shifts using historical data and competitive landscape modeling.",
  },
  {
    label: "Event",
    date: "October 10, 2025",
    awardfrom: "Victor Draken",
    title: "Quantum-Resistant Encryption",
    desc: "Future-proofing your data security with advanced cryptographic protocols designed to withstand next-generation computing threats.",
  },
  {
    label: "Maintenance",
    date: "September 28, 2025",
    awardfrom: "Naomi Wattson",
    title: "Collaborative Workspaces",
    desc: "Centralized environments for legal teams and creators to review, annotate, and co-author IP documentation in real-time.",
  },
];

// URL Matcher for AutoLink
const URL_REGEX = /((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}))/;

const MATCHERS = [
  (text) => {
    const match = URL_REGEX.exec(text);
    if (match === null) return null;
    const fullMatch = match[0];
    return {
      index: match.index,
      length: fullMatch.length,
      text: fullMatch,
      url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
    };
  },
];

const theme = {
  paragraph: "mb-2 text-gray-700 leading-relaxed",
  heading: {
    h1: "text-3xl font-bold mb-4 text-black",
    h2: "text-2xl font-bold mb-3 text-black",
  },
  list: {
    ul: "list-disc ml-5 mb-2",
    ol: "list-decimal ml-5 mb-2",
    listitem: "mb-1",
  },
  link: "text-blue-600 underline cursor-pointer",
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
  },
};

const initialConfig = {
    namespace: "AnnouncementEditor",
    theme,
    onError: (error) => console.error(error),
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      LinkNode,
      AutoLinkNode
    ]
  };

  const ToolbarPlugin = () => {
    const [editor] = useLexicalComposerContext();

    const formatHeading = (level) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(level));
        }
      });
    };

    return (
      <div className="flex items-center gap-1 p-2 border-b bg-gray-50/50 flex-wrap">
        {/* Formatting */}
        <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Bold"><Bold size={18} /></button>
        <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Italic"><Italic size={18} /></button>
        <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Underline"><Underline size={18} /></button>
        
        <div className="w-[1px] h-6 bg-gray-300 mx-1" />

        {/* Headings */}
        <button onClick={() => formatHeading("h1")} className="p-2 hover:bg-gray-200 rounded transition-colors" title="H1"><Heading1 size={18} /></button>
        <button onClick={() => formatHeading("h2")} className="p-2 hover:bg-gray-200 rounded transition-colors" title="H2"><Heading2 size={18} /></button>

        <div className="w-[1px] h-6 bg-gray-300 mx-1" />

        {/* Lists */}
        <button onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Bullet List"><List size={18} /></button>
        <button onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)} className="p-2 hover:bg-gray-200 rounded transition-colors" title="Numbered List"><ListOrdered size={18} /></button>
      </div>
    );
  };

  const button = [
    {
      label: "Manage Announcement",
      icon: <SquareChartGantt size={22} />
    },
    {
      label: "Create New",
      icon: <LayersPlus size={22}/>
    },
  ];

const AdminAwards = () => {
 const [editorContent, setEditorContent] = useState("");
 
   // This function runs every time the user types
   const handleEditorChange = (editorState) => {
     editorState.read(() => {
       const root = $getRoot();
       const text = root.getTextContent();
       setEditorContent(text); // Or use JSON.stringify(editorState) for rich text
     });
   };
 
   const [visible, isVisible] = useState(true); 
 
   const [selectedCategory, setSelectedCategory] = useState("Event");
 
 
 
   return (
     <>
       <main 
         className="w-full min-h-screen px-6 py-14 flex flex-col items-center gap-8 bg-gray-50"
       >
         <header 
           className="flex flex-col gap-2 w-full md:max-w-2xl xl:max-w-7xl"
         >
           <section className="flex w-full justify-between items-center">
             <h1 className="flex flex-col font-semibold text-4xl">
               <span className="text-base">Hola!</span> Awards
             </h1>
           </section>
 
           <section className="flex flex-col xl:flex-row justify-between xl:items-center w-full text-gray-500 text-justify text-sm space-y-4">
             <p
              className="xl:w-[70%] 2xl:w-[80%]"
             >
              Create, publish, and manage announcements to keep your community informed about important updates, events, and news.
            </p>
             <button
               className="w-fit flex gap-2 items-center pl-4 pr-5 py-2 rounded-lg cursor-pointer border text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all"
               onClick={() => isVisible(!visible)}
             >
               <LayersPlus size={22}/>
               {visible ? "Create New " : "Manage Awards"}
             </button>
           </section>
         </header>
 
         {/* Content */}
         {visible ? 
           <section className="flex flex-col w-full md:max-w-2xl xl:max-w-7xl h-[670px] bg-black/2 border rounded-4xl overflow-hidden">
             <table className="flex flex-col overflow-y-auto border-collapse">
               <thead className="w-full text-left sticky top-0 z-10 bg-white border-b text-gray-800 text-sm">
                 <tr className="flex px-8 py-6">
                   <th className="flex-2 font-semibold ">TITLE</th>
                   <th className="flex-1 font-semibold">AWARD FROM</th>
                   <th className="flex-1 font-semibold">EVENT</th>
                   <th className="flex-1 font-semibold" >DATE</th>
                   <th className="flex-1 font-semibold">ACTIONS</th>
                 </tr>
               </thead>
 
               <tbody className="w-full bg-white">
                 {announcementData.map((data, index) => (
                   <tr key={index} className="flex text-left px-8 py-6 text-sm font-semibold border-b cursor-pointer hover:bg-gray-50 transition-all">
                     <td className="flex-2 flex flex-col gap-2">
                       <span className="font-semibold">{data.title}</span>
                       <span className="text-gray-600 text-sm font-normal">{data.desc.substring(0, 35)}...</span>
                     </td>
 
                     <td className="flex items-center flex-1">
                       <span className={`text-gray-600 text-sm font-normal`}>{data.awardfrom}</span>
                     </td>                    
 
                     <td className="flex-1 items-center flex">
                       <span className="flex-1 items-center flex text-gray-600 font-normal">{data.label}</span>
                     </td>

                     <td className="flex-1 items-center flex text-gray-600 font-normal">
                       {data.date}
                     </td>
 
                     <td className="flex-1 items-center flex gap-1 text-xs">
                       <button className="flex gap-2 p-2 p-2 rounded-md cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 transition-all">
                         {<Pencil size={20}/>}
                       </button>
 
                       <button className="flex gap-2 p-2 items-center p-2 rounded-md cursor-pointer text-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 transition-all">
                         {<Trash2 size={20}/>}
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </section> 
 
           // Create Announcement Section
           : <section className="flex flex-col w-full md:max-w-2xl xl:max-w-7xl bg-white border rounded-2xl shadow-sm overflow-hidden p-8 gap-8">
               <div className="flex flex-col gap-8">
                 <header className="flex flex-col gap-2 border-b py-4">
                   <h1 className="text-4xl font-semibold text-gray-700">
                     Create Awards
                   </h1>
 
                   <p className="text-gray-500">
                     Fill in the details below to create a new awards for your platform.
                   </p>
                 </header>
 
                 <label className="flex flex-col justify-center items-center text-center border-2 border-dashed rounded-lg p-10 flex flex-col items-center cursor-pointer w-full h-[200px] hover:border-blue-600 hover:bg-blue-50 transition-all">
                   <input 
                     type="file" 
                     accept="image/png, image/jpeg"
                     className="hidden"
                   />
                   
                   <ImagePlus className="text-gray-500"/>
                   <p className="text-gray-700">Click to upload banner image</p>
                   <span className="text-sm text-gray-400 font-medium">PNG, JPG up to 10MB</span>
                 </label>
 
                 <form action="" className="flex flex-col gap-8">
                   {/* Title */}
                   <aside>
                     <label htmlFor="#Announcement-Title" className="font-medium"> Announcement Title</label>
                     <input id="#Announcement-Title" type="text" className="border w-full px-4 py-4 rounded-lg text-sm font-medium mt-2" placeholder="eg., New Security Released" />
                   </aside>
 
                   <aside className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Category */}
                     <div className="flex flex-col w-full w-fit gap-2">
                       <label className="font-medium">Event Name</label>
                       <div className="border px-4 py-2 rounded-lg">
                         <select 
                           value={selectedCategory}
                           onChange={(e) => setSelectedCategory(e.target.value)}
                           className="w-full pr-4 text-sm font-medium text-gray-600 outline-none"
                         >
                           <option>Event</option>
                           <option>Achievement</option>
                           <option>Maintenance</option>
                           <option>Partnership</option>
                           <option>Update</option>
                           <option>News</option>
                         </select>
                       </div>
                     </div>
 
                     {/* Status */}
                     <div className="flex flex-col w-full w-fit gap-2">
                       <label className="font-medium">Award From</label> 
                       <input type="text" className="w-full h-full rounded-lg border px-4 text-sm" placeholder="Enter name" />
                     </div>
 
                     {/* Audience */}
                     <div className="flex flex-col w-full w-fit gap-2">
                       <label className="font-medium">Audience</label>
                       <input type="date" className="w-full h-full rounded-lg border px-4 text-sm" />
                     </div>
                   </aside>
 
                   {/* Moved Lexical Composer inside the form tag */}
                   <div className="w-full border rounded-lg overflow-hidden">
                     <LexicalComposer initialConfig={initialConfig}>
                       <ToolbarPlugin />
                       <div className="relative">
                         <RichTextPlugin
                           contentEditable={
                             <ContentEditable className="min-h-[400px] p-8 outline-none text-gray-800" />
                           }
                           placeholder={
                             <div className="absolute top-8 left-8 text-gray-400 pointer-events-none">
                               Enter the announcement details here...
                             </div>
                           }
                           ErrorBoundary={LexicalErrorBoundary}
                         />
                         <HistoryPlugin />
                         <ListPlugin />
                         <LinkPlugin />
                         <AutoLinkPlugin matchers={MATCHERS} />
 
                         <OnChangePlugin onChange={handleEditorChange} />
                       </div>
                     </LexicalComposer>
                   </div>
 
                   <aside className="w-full flex justify-end">
                     <input type="submit" className="border border-blue-600 rounded-lg text-white bg-blue-600 font-medium text-sm shadow-lg hover:bg-blue-700 active:bg-blue-800 cursor-pointer transition-all px-4 py-2" />
                   </aside>
                 </form>
               </div>
           </section>
         }
       </main>
     </>
   );
};

export default AdminAwards;