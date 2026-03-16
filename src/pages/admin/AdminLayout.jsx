// AdminLayout.jsx
import { Outlet } from "react-router-dom";
import SideBarAdmin from "@/components/admin/SideBarAdmin";

const AdminLayout = () => {
  return (
    // This 'flex' ensures the Sidebar and the Content are side-by-side
    // The 'relative' ensures the Sidebar's absolute button stays inside this box
    <main className="relative flex w-full h-screen overflow-hidden bg-gray-50">
      <SideBarAdmin />
      
      {/* The reserved seat for AdminDashboard */}
      <section className="flex-1 h-full overflow-y-auto">
        <Outlet />
      </section>
    </main>
  );
};

export default AdminLayout;