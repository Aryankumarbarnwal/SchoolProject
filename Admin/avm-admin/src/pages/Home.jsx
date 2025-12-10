import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-4xl font-extrabold text-yellow-700 mb-4">
        Welcome to AVM Admin Home
      </h1>

      <p className="text-gray-700 mb-8 leading-relaxed">
        This is the central control area for updating and managing school activities,
        academic achievements, sessions, images, and important announcements.
      </p>

      {/* Quick Access Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Dashboard Redirect */}
          <div
            onClick={() => navigate("/admin/dashboard")}
            className="p-6 bg-gradient-to-br from-purple-300 to-purple-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              Admin Dashboard
            </h3>
            <p className="text-gray-700 text-sm">
              View overall statistics and admin controls.
            </p>
          </div>

          {/* Add Achievement Redirect */}
          <div
            onClick={() => navigate("/admin/add-achievement")}
            className="p-6 bg-gradient-to-br from-yellow-300 to-yellow-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              Add Achievement
            </h3>
            <p className="text-gray-700 text-sm">
              Upload new student achievements for any session.
            </p>
          </div>

          {/* View All Achievements Redirect */}
          <div
            onClick={() => navigate("/admin/view-achievements")}
            className="p-6 bg-gradient-to-br from-green-300 to-green-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              View All Achievements
            </h3>
            <p className="text-gray-700 text-sm">
              View, edit or manage achievements session-wise.
            </p>
          </div>

        </div>
      </div>

      {/* Normal Feature Section (existing) */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Admin Features</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div
          onClick={() => navigate("/admin/manage-achievements")}
          className="p-6 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">
            Manage Achievements
          </h2>
          <p className="text-gray-700 text-sm">
            Add, edit or view school achievements of students.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            Manage Sessions
          </h2>
          <p className="text-gray-700 text-sm">
            Organize achievements session by session.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-br from-green-200 to-green-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            User Controls
          </h2>
          <p className="text-gray-700 text-sm">
            Manage admin access and users.
          </p>
        </div>
      </div>

      {/* Notice Section */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
        Notice Management
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Add Notice */}
        <div
          onClick={() => navigate("/admin/add-notice")}
          className="p-6 bg-gradient-to-br from-red-300 to-red-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold text-red-800 mb-2">
            Add Notice
          </h2>
          <p className="text-gray-700 text-sm">
            Create a new notice with text or image for students & public.
          </p>
        </div>

        {/* View Notices */}
        <div
          onClick={() => navigate("/admin/view-notices")}
          className="p-6 bg-gradient-to-br from-blue-300 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            View Notices
          </h2>
          <p className="text-gray-700 text-sm">
            View all posted notices, edit or delete them.
          </p>
        </div>

        {/* Manage Notices */}
        <div
          onClick={() => navigate("/admin/manage-notices")}
          className="p-6 bg-gradient-to-br from-teal-300 to-teal-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold text-teal-800 mb-2">
            Manage Notices
          </h2>
          <p className="text-gray-700 text-sm">
            Organized list for notice control and updates.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
        Gallery Management
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Upload / Manage Gallery */}
        <div
          onClick={() => navigate("/admin/manage-gallery")}
          className="p-6 bg-gradient-to-br from-pink-300 to-pink-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold text-pink-800 mb-2">
            Manage Gallery
          </h2>
          <p className="text-gray-700 text-sm">
            Upload images, videos, and manage school event gallery.
          </p>
        </div>

        {/* View Gallery */}
        <div
          onClick={() => navigate("/admin/gallery")}
          className="p-6 bg-gradient-to-br from-indigo-300 to-indigo-100 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold text-indigo-800 mb-2">
            View Gallery (Public)
          </h2>
          <p className="text-gray-700 text-sm">
            See how the gallery appears on public website.
          </p>
        </div>

        <div>

        </div>
        {/* Admissions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            Admissions
          </h2>
          <div
            onClick={() => navigate("/admin/admission")}
            className="text-xl font-semibold text-pink-800 mb-2 p-6 bg-gradient-to-br from-pink-300 to-pink-50 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">
              Admissions
            </h2>
            <p className="text-gray-700 text-sm">
              Manage student admissions and applications.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            Contact Queries
          </h2>
          <div
            onClick={() => navigate("/admin/ContactQuerries")}
            className="p-6 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-indigo-800 mb-2">
              Contact Queries
            </h2>
            <p className="text-gray-700 text-sm">
              Manage and respond to contact form queries.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
