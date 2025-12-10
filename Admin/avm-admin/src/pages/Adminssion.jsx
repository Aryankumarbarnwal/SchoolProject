import { useEffect, useState } from "react";
import {
  getAllAdmissions,
  deleteAdmission,
  verifyAdmission,
} from "../utils/admissionAPI";
import { FiSearch, FiTrash, FiEye, FiCheckCircle } from "react-icons/fi";
import AdmissionModal from "../components/AdmissionModal";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";

const AdminAdmissions = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    const res = await getAllAdmissions();
    setList(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter by search
  const filtered = list.filter(
    (item) =>
      item.studentName.toLowerCase().includes(search.toLowerCase()) ||
      item.classApplied.toLowerCase().includes(search.toLowerCase()) ||
      item.parentPhone.includes(search)
  );

  // Export to Excel
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(list);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Admissions");
    XLSX.writeFile(wb, "admissions.xlsx");
  };

  // Export to PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Admission Records", 10, 10);
    let y = 20;

    list.forEach((item) => {
      doc.text(
        `Name: ${item.studentName} | Class: ${item.classApplied} | Phone: ${item.parentPhone}`,
        10,
        y
      );
      y += 10;
    });

    doc.save("admissions.pdf");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this admission?")) return;
    await deleteAdmission(id);
    fetchData();
  };

  const handleVerify = async (id) => {
    await verifyAdmission(id);
    fetchData();
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admission Records</h1>

        <div className="flex gap-3">
          <button
            onClick={exportExcel}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Export Excel
          </button>

          <button
            onClick={exportPDF}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4 flex items-center gap-2 bg-white p-2 rounded-lg shadow border">
        <FiSearch />
        <input
          placeholder="Search name, class, phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Class</th>
              <th className="p-3">Parent Phone</th>
              <th className="p-3">Submitted</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((a) => (
              <tr key={a._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{a.studentName}</td>
                <td className="p-3">{a.classApplied}</td>
                <td className="p-3">{a.parentPhone}</td>
                <td className="p-3">{new Date(a.createdAt).toLocaleDateString()}</td>

                <td className="p-3">
                  {a.verified ? (
                    <span className="text-green-600 font-semibold flex items-center gap-1">
                      <FiCheckCircle /> Verified
                    </span>
                  ) : (
                    <button
                      onClick={() => handleVerify(a._id)}
                      className="text-blue-600 underline"
                    >
                      Mark Verified
                    </button>
                  )}
                </td>

                <td className="p-3 flex gap-3">
                  <FiEye
                    className="text-blue-600 text-xl cursor-pointer"
                    onClick={() => setSelected(a)}
                  />
                  <FiTrash
                    className="text-red-600 text-xl cursor-pointer"
                    onClick={() => handleDelete(a._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="text-center py-6 text-gray-500">No results found.</p>
        )}
      </div>

      {/* Modal */}
      {selected && <AdmissionModal data={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default AdminAdmissions;
