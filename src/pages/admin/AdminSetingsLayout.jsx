import { Outlet } from "react-router-dom";
import AdminSettingsSidebar from "@/components/admin/AdminSettingsSidebar";

const AdminSettingsLayout = () => {
  return (
    <main className="relative flex flex-col w-full h-screen overflow-hidden bg-gray-50">
      {/* Top Header */}
      <header className="w-full h-fit border-b px-6 py-8 bg-white z-10">
        <h1 className="text-2xl font-semibold text-black">
          Admin Settings
        </h1>
      </header>

      {/* Body Area: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        <AdminSettingsSidebar />
        
        <section className="flex-1 h-full overflow-y-auto p-6">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default AdminSettingsLayout;