
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import AdminFooter from "./AdminFooter";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      {/* Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        {/* Topbar */}
        <AdminTopbar toggleSidebar={toggleSidebar} />
        
        {/* Main Content Container */}
        <main className="flex-1 p-6 overflow-x-hidden overflow-y-auto bg-gradient-to-b from-[#13151a] to-[#121212]">
          <Outlet />
        </main>
        
        {/* Footer */}
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
