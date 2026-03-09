import { Routes, Route } from "react-router-dom";

import AnnouncementManager from "../pages/admin/AnnouncementManager";


function AdminRoutes () {
  return (
    <>
      <Routes>
        <Route path="/announcementmanager" element={<AnnouncementManager />} />
      </Routes>    
    </>
  )
}

export default AdminRoutes;