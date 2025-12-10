import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

const ProtectedAdminRoute = ({ children }) => {
  const { admin, loading } = useAdminAuth();

  if (loading) return <div className="p-10">Checking authentication...</div>;

  if (!admin) return <Navigate to="/admin/login" replace />;

  return children;
};

export default ProtectedAdminRoute;
