import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/adminAPI";

// Create Context
const AdminAuthContext = createContext();

// Provider Component
export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);      // Stores admin details
  const [loading, setLoading] = useState(true);  // Prevents flicker on refresh

  // Check login status on page refresh
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/me");
        setAdmin(res.data);
      } catch {
        setAdmin(null);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  // Login
  const login = async (username, password) => {
    const res = await api.post("/login", { username, password });
    if (res.status === 200) {
      const me = await api.get("/me");
      setAdmin(me.data);
    }
  };

  // Logout
  const logout = async () => {
    await api.post("/logout");
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);