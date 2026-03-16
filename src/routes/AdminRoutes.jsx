import { Routes, Route } from "react-router-dom";

import AnnouncementManager from "../pages/admin/AnnouncementManager";
import SideBarAdmin from "@/components/admin/SideBarAdmin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminTechnologies from "@/pages/admin/AdminTechnologies";
import AdminAnnouncement from "@/pages/admin/AdminAnnouncement";
import AdminAwards from "@/pages/admin/AdminAwards";


function AdminRoutes () {
  return (
    <>
      <Routes>
        <Route path="/announcementmanager" element={<AnnouncementManager />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="technologies" element={<AdminTechnologies />} />
          <Route path="announcement" element={<AdminAnnouncement />} />
          <Route path="awards" element={<AdminAwards />} />
        </Route>
      </Routes>    
    </>
  )
}

export default AdminRoutes;