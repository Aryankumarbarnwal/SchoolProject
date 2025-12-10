import { useState } from "react";
import { useAdminAuth } from "../context/AdminAuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      // 🔥 REAL BACKEND LOGIN
      await login(form.username, form.password);

      // 🔥 Redirect to Dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-white to-blue-200 p-5">
      <div className="w-full max-w-md bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-extrabold text-center text-yellow-800 mb-4">
          AVM Admin Login
        </h2>

        <p className="text-center text-gray-700 mb-6">
          Sign in to access the admin panel.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter admin username"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
