
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitContactQuery } from "../utils/contactAPI";

const faqs = [
    {
        q: "How can I take admission in Adarsh Vidya Mandir?",
        a: "You can fill the admission enquiry form on this page or visit the school office between 9:00 AM – 1:00 PM with your ward’s previous report card.",
    },
    {
        q: "What documents are required for admission?",
        a: "Birth certificate, Aadhaar card, 2 passport size photos, previous school TC (if applicable), and last class mark sheet.",
    },
    {
        q: "How do I talk to a teacher regarding my child?",
        a: "You can write your concern in the contact form under 'Student Query' or visit on PTM days. For urgent matters, contact the class teacher via school office.",
    },
    {
        q: "What are the school office hours?",
        a: "Monday to Saturday, 8:00 AM – 3:00 PM. Fee counter timings may vary during exam periods.",
    },
    {
        q: "How can I request Transfer Certificate (TC)?",
        a: "Submit a written application in the office or use the 'Document Request' option in the contact form. You will be contacted by the office staff.",
    },
    {
        q: "Is there hostel or transport facility available?",
        a: "Yes, limited hostel facility is available. For transport and hostel seats, please choose 'Admission / Transport' in the form and we will call you back.",
    },
];

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: "",
        file: null,
    });

    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "file") {
            setForm({ ...form, file: files[0] || null });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const fd = new FormData();
        Object.keys(form).forEach((key) => {
            if (form[key]) fd.append(key, form[key]);
        });

        await submitContactQuery(fd);

        setTimeout(() => {
            alert("Thank you! Your message has been received by the school office.");
            setSubmitting(false);
            setForm({
                name: "",
                email: "",
                phone: "",
                category: "",
                message: "",
                file: null,
            });
        }, 700);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fffde7] via-white to-[#e8f5e9] px-4 sm:px-6 lg:px-10 py-10">
            <div className="max-w-6xl mx-auto space-y-10 pb-10">
                {/* 🔶 HERO SECTION */}
                <section className="grid lg:grid-cols-[2fr,1.4fr] gap-8 items-stretch">
                    {/* Left hero */}
                    <div className="bg-[#ffe082] rounded-3xl shadow-xl border border-yellow-200 px-6 sm:px-10 py-8">
                        <p className="uppercase tracking-[0.25em] text-xs text-yellow-800 mb-3">
                            Contact • Adarsh Vidya Mandir
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f2937] leading-tight mb-4">
                            Let&apos;s Connect
                            <span className="block mt-2 text-[#111827]">
                                Parents, Students & Visitors are always welcome.
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base text-[#374151] mb-6 max-w-2xl">
                            Have a question about admissions, academics, fees, transport or
                            events? Use the form, call us directly, or visit our campus.
                            We&apos;ll be happy to help.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            <button className="px-5 py-3 bg-black text-[#facc15] rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_#f97316] text-sm sm:text-base font-semibold hover:translate-x-[2px] 
                            hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#f97316] transition-all"
                                onClick={() => navigate('/admission')}>
                                🎓 Admission Enquiry
                            </button>
                            <button className="px-5 py-3 bg-white text-yellow-800 rounded-full text-sm sm:text-base font-semibold shadow-md border border-yellow-300 hover:bg-yellow-50 transition">
                                📞 Call Office: +91-XXXXXXXXXX
                            </button>
                        </div>
                    </div>

                    {/* Right quick info */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5">
                            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2 text-gray-800">
                                🏫 School Address
                            </h2>
                            <p className="text-sm text-gray-700">
                                Adarsh Vidya Mandir,
                                <br />
                                Tilokari, Jainagar, Koderma, Jharkhand
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                                Landmark: Near Tilokari village, Jainagar block, Koderma
                                district.
                            </p>
                            <button className="px-4 py-2 bg-[#1d4ed8] text-white text-sm rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_#1f2937] hover:translate-x-[1px] 
                            hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#1f2937] transition-all"
                                onClick={() => window.open('https://maps.app.goo.gl/zeYffgPEQ7e4455a8', '_blank')}>
                                🗺 Open in Google Maps
                            </button>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5">
                            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2 text-gray-800">
                                ⏰ Office Timings
                            </h2>
                            <p className="text-sm text-gray-700">
                                Monday – Saturday: <strong>8:00 AM – 3:00 PM</strong>
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                                Fee Counter: 9:00 AM – 1:00 PM (working days)
                            </p>
                            <p className="text-xs text-red-500 mt-2">
                                Visitors are requested to carry a valid ID card and check in at
                                the school gate.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 🔷 CONTACT INFO CARDS */}
                <section className="grid md:grid-cols-3 gap-6">
                    {/* Phones */}
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-800">
                            📞 Phone Contacts
                        </h3>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">School Office:</span>{" "}
                            +91-98XXXXXX01
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Principal:</span>{" "}
                            +91-98XXXXXX02
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Hostel / Transport:</span>{" "}
                            +91-98XXXXXX03
                        </p>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-800">
                            ✉ Email IDs
                        </h3>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">General:</span>{" "}
                            info@avmschool.in
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Admissions:</span>{" "}
                            admission@avmschool.in
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Support:</span>{" "}
                            support@avmschool.in
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-800">
                            🌐 Quick Links
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li onClick={() => navigate("/admission")} className="cursor-pointer text-blue-600">📄 Online Admission Form</li>
                            <li onClick={() => window.open('../Assets/Prospectus.docx', '_blank')} className="cursor-pointer text-blue-600">📘 School Prospectus (PDF)</li>
                            <li onClick={() => navigate("/achievements")} className="cursor-pointer text-blue-600">🏅 Academic Achievements</li>
                            <li>🎉 Upcoming Events & Notices</li>
                        </ul>
                    </div>
                </section>

                {/* 🗺 MAP SECTION */}
                <section>
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5">
                        <h2 className="font-semibold text-xl mb-3 flex items-center gap-2 text-gray-800">
                            🗺 Find Us on Map
                        </h2>
                        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
                            {/* TODO: replace src with actual embed link */}
                            <iframe
                                title="School Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.492175639137!2d85.68721377448631!3d24.329342478279788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f39b842a6ab385%3A0xc87a25598e6b6fd4!2sAdarsh%20Vidya%20Mandir%20Tilokari!5e0!3m2!1sen!2sin!4v1765111357059!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* 📝 FORM + LEADERSHIP */}
                <section className="grid lg:grid-cols-[2fr,1.1fr] gap-8 items-start">
                    {/* Contact form */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-7">
                        <h2 className="text-2xl font-extrabold mb-2 text-gray-800">
                            Write to Us
                        </h2>
                        <p className="text-sm text-gray-600 mb-5">
                            Fill this form and our office will get back to you within{" "}
                            <span className="font-semibold">24 working hours.</span>
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                                        placeholder="Parent / Guardian Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                                        placeholder="Whatsapp / Contact Number"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                                        Email ID
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                                        Select Category
                                    </label>
                                    <select
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                                        required
                                    >
                                        <option value="">Choose an option</option>
                                        <option value="admission">Admission / Transport</option>
                                        <option value="student">Student Academic Query</option>
                                        <option value="teacher">Meeting with Teacher</option>
                                        <option value="document">Document / TC Request</option>
                                        <option value="general">General Enquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                                    placeholder="Write your query in brief. Please mention class / student name if applicable."
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">
                                    Attach Document (Optional)
                                </label>
                                <input
                                    type="file"
                                    name="file"
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-dashed border-gray-300 px-3 py-2 text-sm"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    You may attach previous mark sheet / TC application / any
                                    supporting file.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="mt-3 w-full py-3 bg-yellow-600 text-white rounded-full font-semibold text-base shadow-md hover:bg-yellow-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {submitting ? "Sending..." : "Submit Your Query"}
                            </button>
                        </form>
                    </div>

                    {/* Leadership + Emergency */}
                    <div className="space-y-5">
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-5">
                            <h2 className="font-semibold text-xl mb-3 text-gray-800">
                                School Leadership
                            </h2>
                            <div className="space-y-3 text-sm text-gray-700">
                                <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-3">
                                    <p className="font-semibold">Principal</p>
                                    <p>Shri Neelkanth Kumar</p>
                                    <p className="text-xs mt-1">
                                        Office Hours: 9:30 AM – 12:30 PM (working days)
                                    </p>
                                    <p className="text-xs">
                                        For appointments, please contact school office.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-green-200 bg-green-50 p-3">
                                    <p className="font-semibold">
                                        Vice Principal / Academic Incharge
                                    </p>
                                    <p>To be updated by school</p>
                                    <p className="text-xs mt-1">
                                        Academic and examination related queries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 rounded-3xl shadow-lg border border-red-100 p-5">
                            <h2 className="font-semibold text-xl mb-2 text-red-700">
                                🚨 Emergency Contacts
                            </h2>
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">School Gate Security:</span>{" "}
                                +91-98XXXXXX10
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Medical / First Aid Room:</span>{" "}
                                +91-98XXXXXX11
                            </p>
                            <p className="text-xs text-red-600 mt-2">
                                These numbers are for emergency use only (student safety, health
                                or urgent school-related matters).
                            </p>
                        </div>
                    </div>
                </section>

                {/* ❓ FAQ SECTION */}
                <section>
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
                        <h2 className="text-2xl font-extrabold mb-4 text-gray-800 flex items-center gap-2">
                            ❓ Frequently Asked Questions
                        </h2>
                        <div className="space-y-3">
                            {faqs.map((item, idx) => (
                                <details
                                    key={idx}
                                    className="group rounded-2xl border border-gray-200 px-4 py-3 bg-[#fffbeb]"
                                >
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <span className="font-semibold text-sm sm:text-base text-gray-800">
                                            {item.q}
                                        </span>
                                        <span className="ml-4 text-lg text-yellow-600 group-open:rotate-90 transition-transform">
                                            ➕
                                        </span>
                                    </summary>
                                    <p className="mt-2 text-sm text-gray-700">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
