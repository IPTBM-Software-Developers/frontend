import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/landing/Home";
import About from "../pages/landing/About";
import Announcement from "../pages/landing/Announcement";
import Technologies from "../pages/landing/Technologies";
import Contact from "../pages/landing/Contact";
import Landing from "../pages/landing/Landing";
import ViewAllAnnouncement from "@/pages/landing/ViewAllAnnouncement";

// Components
import NavBar from "../components/landing/NavBar";

function LandingRoutes() {
  return (
    <>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing" element={<Landing />} /> 
        <Route path="/viewallannouncement" element={<ViewAllAnnouncement />} />
      </Routes> 
    </>  
  );
}

export default LandingRoutes;
