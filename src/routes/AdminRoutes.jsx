import { Routes, Route } from "react-router-dom";

import AnnouncementManager from "../pages/admin/AnnouncementManager";
import SideBarAdmin from "@/components/admin/SideBarAdmin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminTechnologies from "@/pages/admin/AdminTechnologies";
import AdminAnnouncement from "@/pages/admin/AdminAnnouncement";
import AdminAwards from "@/pages/admin/AdminAwards";
import AdminSettingsLayout from "@/pages/admin/AdminSetingsLayout";
import AdminSettingsSidebar from "@/components/admin/AdminSettingsSidebar";
import AdminSettingsProfile from "@/pages/admin/AdminSettingsProfile";
import AdminSettingsDisplay from "@/pages/admin/AdminSettingsDisplay";
import AdminSettingsContacts from "@/pages/admin/AdminSettingsTestimonials";
import AdminSettingsDatamanagement from "@/pages/admin/AdminSettingsDatamanagement";


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
          
          <Route path="adminsettings" element={<AdminSettingsLayout />}>
            <Route index element={<AdminSettingsProfile />} />
            <Route path="display" element={<AdminSettingsDisplay />} />
            <Route path="contacts" element={<AdminSettingsContacts />} />
            <Route path="datamanagement" element={<AdminSettingsDatamanagement />} />
          </Route>
        </Route>

        
      </Routes>    
    </>
  )
}

export default AdminRoutes;