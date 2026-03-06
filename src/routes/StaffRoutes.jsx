import { Routes, Route } from "react-router-dom";

import AnnouncementManager from "../pages/staff/AnnouncementManager";


function StaffRoutes () {
  return (
    <>
      <Routes>
        <Route path="/announcementmanager" element={<AnnouncementManager />} />
      </Routes>    
    </>
  )
}

export default StaffRoutes;





