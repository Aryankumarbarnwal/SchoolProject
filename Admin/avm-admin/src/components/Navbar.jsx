import { useAdminAuth } from "../context/AdminAuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { admin, logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-40">
      <h1 className="text-2xl font-bold text-yellow-700 tracking-tight">
        AVM Admin Panel
      </h1>

      <div className="flex items-center gap-4">
        {admin && (
          <p className="font-medium text-gray-700">
            Hello, <span className="font-semibold">{admin.username || "Admin"}</span>
          </p>
        )}

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
