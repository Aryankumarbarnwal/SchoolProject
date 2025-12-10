const About = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-yellow-700">About This Admin Panel</h1>

      <p className="mt-4 text-gray-700 leading-relaxed">
        The AVM (Adarsh Vidya Mandir) Admin Panel is designed to make school management
        faster and smarter. Administrators can manage:
      </p>

      <ul className="mt-4 space-y-2 text-gray-700">
        <li>✔ Academic Achievements</li>
        <li>✔ Student Performance & Toppers</li>
        <li>✔ Sessions & Board Result Updates</li>
        <li>✔ School Gallery & Image Uploads</li>
        <li>✔ User Roles and Authentication</li>
      </ul>

      <p className="mt-6 text-gray-600 italic">
        Built with ❤️ using React, TailwindCSS, Node.js & MongoDB
      </p>
    </div>
  );
};

export default About;
