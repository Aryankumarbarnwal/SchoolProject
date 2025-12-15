import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/saraswati_logo.png";
import { useAuthContext } from "../Context/useAuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-[100]">
      <nav className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 px-5 md:px-10 shadow-lg backdrop-blur-md">

        {/* NAVBAR CONTAINER */}
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">

          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="w-12 h-12 md:w-14 md:h-14 rounded-full" />
            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-extrabold text-yellow-700">
                Adarsh Vidya Mandir
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                Tilokari, Jainagar, Koderma
              </p>
            </div>
          </div>

          {/* DESKTOP LINKS (unchanged) */}
          <ul className="hidden md:flex items-center space-x-6 font-semibold text-lg text-gray-800">

            {navLinks.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-yellow-700 scale-105 font-bold"
                        : "hover:text-yellow-700"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {/* Underlines */}
                  <span
                    className={`absolute left-0 -top-1 h-[3px] bg-yellow-600 rounded-full transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-600 rounded-full transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </li>
              );
            })}

            {user ? (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-800 transition font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="hover:text-yellow-700">Login</Link>
                <span className="text-gray-500 mx-1">/</span>
                <Link to="/signup" className="hover:text-yellow-700">Signup</Link>
              </li>
            )}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden focus:outline-none z-[101]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className={`block w-7 h-[3px] bg-yellow-700 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-7 h-[3px] bg-yellow-700 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-7 h-[3px] bg-yellow-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden backdrop-blur-xl bg-white/80 shadow-lg rounded-2xl mt-2 mx-3 ${
            menuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col gap-3 text-lg font-semibold px-5 text-gray-800">

            {navLinks.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 ${
                      isActive
                        ? "text-yellow-700 font-bold"
                        : "hover:text-yellow-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

            {/* MOBILE LOGIN / LOGOUT */}
            {user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-600 font-semibold py-2"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <span className="text-gray-500 mx-1">/</span>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>
                  Signup
                </Link>
              </li>
            )}
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
