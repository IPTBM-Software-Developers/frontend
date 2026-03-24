import {LayersPlus,Trash2, Pencil, ImagePlus } from "lucide-react";

import { useState } from "react";

import { sileo } from "sileo";

const announcementData = [
  {
    name: "Dr. Aris Thorne",
    position: "Chief Technology Officer",
    company: "Nexus University Research Lab",
  },
  {
    name: "Sarah Jenkins",
    position: "Head of AI Ethics",
    company: "Stanford Innovation Hub",
  },
  {
    name: "Michael Chen",
    position: "Senior Systems Architect",
    company: "MIT Data Systems",
  },
  {
    name: "Elena Rodriguez",
    position: "Director of Partnerships",
    company: "Oxford Global Security",
  },
  {
    name: "David Vane",
    position: "Security Analyst",
    company: "Cyber Defense Academy",
  },
  {
    name: "Julian Frost",
    position: "Lead Software Engineer",
    company: "Tech-Forward University",
  },
  {
    name: "Sophia Loren",
    position: "Legal Tech Consultant",
    company: "Harvard Law Innovation Lab",
  },
  {
    name: "Marcus Aurelius",
    position: "Security Lead",
    company: "Cambridge Biometrics Division",
  },
  {
    name: "Isabella Moretti",
    position: "Compliance Officer",
    company: "International Legal Institute",
  },
  {
    name: "Dr. Robert Lang",
    position: "Data Scientist",
    company: "Princeton Analytics Dept.",
  },
  {
    name: "Astra Vance",
    position: "Quantum Researcher",
    company: "CalTech Physics Lab",
  },
  {
    name: "Liam O'Connell",
    position: "Product Manager",
    company: "Dublin Trinity Tech",
  },
];



const AdminSettingsTestimonials = () => {
  
  const [visible, isVisible] = useState(true); 
    
  
  
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
                Testimonials
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
                {visible ? "Create New " : "Manage Testimonials"}
              </button>
            </section>
          </header>
  
          {/* Content */}
          {visible ? 
            <section className="flex flex-col w-full md:max-w-2xl xl:max-w-7xl h-[670px] bg-gray-50 border rounded-4xl overflow-hidden">
              <table className="flex flex-col overflow-y-auto border-collapse">
                <thead className="w-full text-left sticky top-0 z-10 bg-white border-b text-gray-800 text-sm">
                  <tr className="flex px-8 py-6">
                    <th className="flex-1 font-semibold ">Name</th>
                    <th className="flex-1 font-semibold">Position</th>
                    <th className="flex-1 font-semibold">Campany</th>
                    <th className="flex-1 font-semibold">Action</th>
                  </tr>
                </thead>
  
                <tbody className="w-full bg-white">
                  {announcementData.map((data, index) => (
                    <tr key={index} className="flex text-left px-8 py-6 text-sm font-semibold border-b cursor-pointer hover:bg-gray-50 transition-all">
                      <td className="flex-1 flex flex-col gap-2">
                        <span className="font-semibold">{data.name}</span>
                      </td>

  
                      <td className="flex-1 items-center flex text-gray-600 font-normal">
                        {data.position}
                      </td>
  
                      <td className="flex-1 items-center flex">
                        <span className="flex-1 items-center flex text-gray-600 font-normal">{data.company}</span>
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
                      Create New Testimonials
                    </h1>
  
                    <p className="text-gray-500">
                      Fill in the details below to create a new testimonials for your platform.
                    </p>
                  </header>
  
                  <label className="flex flex-col justify-center items-center text-center border-2 border-dashed rounded-lg p-10 flex flex-col items-center cursor-pointer w-full h-[200px] hover:border-blue-600 hover:bg-blue-50 transition-all">
                    <input 
                      type="file" 
                      accept="image/png, image/jpeg"
                      className="hidden"
                    />
                    
                    <ImagePlus className="text-gray-500"/>
                    <p className="text-gray-700">Click to upload profile image</p>
                    <span className="text-sm text-gray-400 font-medium">PNG, JPG up to 10MB</span>
                  </label>
  
                  <form action="" className="grid grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="flex flex-col text-sm space-y-2">
                      <label className="font-medium">Name</label>
                      <input type="text" placeholder="Enter name" className=" p-4 rounded-md border" />
                    </div>

                    {/* Position */}
                    <div className="flex flex-col text-sm space-y-2">
                      <label className="font-medium">Position</label>
                      <input type="text" placeholder="Enter position" className=" p-4 rounded-md border" />
                    </div>
                    
                    {/* Company */}
                    <div className="flex flex-col text-sm space-y-2">
                      <label className="font-medium">Company</label>
                      <input type="text" placeholder="Enter company" className=" p-4 rounded-md border" />
                    </div>
                   
                  </form>

                  <aside className="w-full flex justify-end">
                    <input type="submit" className="border border-blue-600 rounded-lg text-white bg-blue-600 font-medium text-sm shadow-lg hover:bg-blue-700 active:bg-blue-800 cursor-pointer transition-all px-4 py-2" 
                      onClick={() => {
                          sileo.info({
                            title: "Confirm",
                            description: "Are you sure you want to submit this?",
                            autopilot: {
                              expand: 100,
                              collapse: 7000,
                            },
                            button: {
                              title: "Submit",
                              onClick: () => console.log("Logged out")
                            }
                          });
                        }}
                    />
                  </aside>
                </div>
            </section>
          }
        </main>
      </>
    );
};

export default AdminSettingsTestimonials;