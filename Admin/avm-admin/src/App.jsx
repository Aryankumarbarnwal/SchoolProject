import './App.css'
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddAchievement from "./pages/AddAchievement.jsx";
import ViewAchievements from "./pages/ViewAchievement.jsx"
import EditAchievement from "./pages/EditAchievement.jsx";
import Login from "./pages/Login.jsx";
import ManageAchievements from './pages/ManageAchievements.jsx';
import AddNotice from './pages/AddNotice.jsx';
import ViewNotices from './pages/ViewNotices.jsx';
import ManageNotices from './pages/ManageNotices.jsx';
import EditNotice from './pages/EditNotice.jsx';
import AdminGalleryManager from './components/GalleryManager.jsx';
import GalleryAdminPage from './pages/GalleryAdmin.jsx';
import AdminAdmissions from './pages/Adminssion.jsx';
import ContactQueries from './pages/ContactQuery.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<Login />} />
      
      {/* Admin Panel Routes */}
      <Route path="/admin" element={
        <ProtectedAdminRoute>
          <AdminLayout />
        </ProtectedAdminRoute>
        }>

        {/* Admin Home Page */}
        <Route index element={<Home />} />

        {/* Admin About Page */}
        <Route path="about" element={<About />} />

        {/* Dashboard Page */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Achievement Management */}
        <Route path="add-achievement" element={<AddAchievement />} />
        <Route path="view-achievements" element={<ViewAchievements />} />
        <Route path="/admin/view-achievements" element={<ViewAchievements />} />
        <Route path="edit/:id" element={<EditAchievement />} />
        <Route path="manage-achievements" element={<ManageAchievements />} />
        <Route path="add-notice" element={<AddNotice />} />
        <Route path="view-notices" element={<ViewNotices />} />
        <Route path="edit-notice/:id" element={<EditNotice />} />
        <Route path="manage-notices" element={<ManageNotices />} />
        <Route path="manage-gallery" element={<AdminGalleryManager/>} />
        <Route path="gallery" element={<GalleryAdminPage/>} />
        <Route path="admission" element={<AdminAdmissions />} />
        <Route path="ContactQuerries" element={<ContactQueries />} />

      </Route>

      {/* Handle unknown routes */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}

export default App;

