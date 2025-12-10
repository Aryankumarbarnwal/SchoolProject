import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/saraswati_logo.png";
import { useAuthContext } from "../Context/useAuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const { pathname } = useLocation(); // <-- active route detection

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Admission", path: "/admission" },
    { name: "Gallery", path: "/gallery" },
    { name: "Sports", path: "/sports" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 
        shadow-lg py-4 px-6 md:px-10 backdrop-blur-md bg-opacity-90">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">

          {/* Logo */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
            <div>
              <h1 className="text-2xl font-extrabold text-yellow-700">
                Adarsh Vidya Mandir
              </h1>
              <p className="text-base text-gray-600">Tilokari, Jainagar, Koderma</p>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center space-x-6 font-semibold text-lg text-gray-800">

            {navLinks.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.path} className="relative group">
                  
                  <Link
                    to={item.path}
                    className={`px-1 transition-all duration-300 ${
                      isActive ? "text-yellow-700 scale-105 font-bold" : "hover:text-yellow-700"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {/* TOP underline */}
                  <span
                    className={`absolute left-0 -top-1 h-[3px] rounded-full bg-yellow-600 transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />

                  {/* BOTTOM underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-yellow-600 transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />

                </li>
              );
            })}

            {/* Conditional Login / Logout */}
            {user ? (
              <>
                {(user.role === "principal" ||
                  user.role === "teacher" ||
                  user.role === "student") && (
                  <li className="relative group">
                    <Link
                      to={`/${user.role}-dashboard`}
                      className={`px-1 transition-all duration-300 ${
                        pathname.includes("dashboard")
                          ? "text-yellow-700 scale-105 font-bold"
                          : "hover:text-yellow-700"
                      }`}
                    >
                      Dashboard
                    </Link>

                    {/* Top & Bottom underline */}
                    <span className={`absolute left-0 -top-1 h-[3px] bg-yellow-600 rounded-full transition-all duration-300 
                      ${pathname.includes("dashboard") ? "w-full" : "w-0 group-hover:w-full"}`} />
                    <span className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-600 rounded-full transition-all duration-300 
                      ${pathname.includes("dashboard") ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </li>
                )}

                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 font-semibold hover:text-red-800 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="hover:text-yellow-700 transition-transform">
                <Link to="/login">Login</Link>
                <span className="text-gray-500 mx-1">/</span>
                <Link to="/signup">Signup</Link>
              </li>
            )}

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
