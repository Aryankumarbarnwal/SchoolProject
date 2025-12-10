import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, Info, LayoutDashboard, Star, PlusCircle, FileText, Image, ImagePlus, Settings } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const navItems = [
    { name: "Home", path: "/admin", icon: <Home size={20} /> },
    { name: "About", path: "/admin/about", icon: <Info size={20} /> },
    { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Add Achievement", path: "/admin/add-achievement", icon: <PlusCircle size={20} /> },
    { name: "View Achievements", path: "/admin/view-achievements", icon: <Star size={20} /> },
    { name: "Add Notice", path: "/admin/add-notice", icon: <PlusCircle size={20} /> },
    { name: "View Notices", path: "/admin/view-notices", icon: <FileText size={20} /> },
    { name: "Manage Achievements", path: "/admin/manage-achievements", icon: <Settings size={20} /> },
    { name: "Manage Notices", path: "/admin/manage-notices", icon: <Settings size={20} /> },
    { name: "Manage Gallery", path: "/admin/manage-gallery", icon: <ImagePlus size={20} /> },
    { name: "Gallery", path: "/admin/gallery", icon: <Image size={20} /> },
    { name: "Admissions", path: "/admin/admission", icon: <FileText size={20} /> },
    { name: "Contact-Queries", path: "/admin/ContactQuerries", icon: <FileText size={20} /> },
  ];

  return (
    <div className="flex">
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-yellow-500 text-white shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl p-6 md:static transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo / Header */}
        <div className="flex items-center mb-10">
          <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 shadow">
            AV
          </div>
          <h1 className="text-2xl font-bold text-yellow-700">Admin</h1>
        </div>

        {/* Navigation */}
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all duration-300
                  ${isActive 
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg" 
                    : "text-gray-700 hover:text-yellow-700 hover:bg-yellow-50"}`
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Optional footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-sm text-gray-400">&copy; 2025 AVM Admin</p>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
