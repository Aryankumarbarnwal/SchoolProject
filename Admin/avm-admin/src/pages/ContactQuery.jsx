import { useEffect, useState } from "react";

const ContactQueries = () => {
  const [queries, setQueries] = useState([]);

  const fetchQueries = async () => {
    const res = await fetch("http://localhost:5000/api/contact");
    const data = await res.json();
    setQueries(data);
  };

  const changeStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/contact/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchQueries();
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Queries</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Message</th>
            <th className="p-2">File</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(queries) && queries.map((q) => (
            <tr key={q._id} className="border-b">
              <td className="p-2">{q.name}</td>
              <td className="p-2">{q.category}</td>
              <td className="p-2">{q.message}</td>
              <td className="p-2">
                {q.fileUrl ? (
                  <a href={q.fileUrl} target="_blank" className="text-blue-600">
                    View
                  </a>
                ) : (
                  "—"
                )}
              </td>
              <td className="p-2 capitalize">{q.status}</td>
              <td className="p-2 space-x-2">
                <button className="px-2 py-1 bg-yellow-300" onClick={() => changeStatus(q._id, "viewed")}>
                  Viewed
                </button>
                <button className="px-2 py-1 bg-green-400" onClick={() => changeStatus(q._id, "resolved")}>
                  Resolved
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ContactQueries;
