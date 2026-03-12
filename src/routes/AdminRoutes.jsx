import { Routes, Route } from "react-router-dom";

import AnnouncementManager from "../pages/admin/AnnouncementManager";
import SideBarAdmin from "@/components/admin/SideBarAdmin";


function AdminRoutes () {
  return (
    <>
      <Routes>
        <Route path="/announcementmanager" element={<AnnouncementManager />} />
        <Route path="/sidebaradmin" element={<SideBarAdmin/>} />
      </Routes>    
    </>
  )
}

export default AdminRoutes;