import illustationImage from "../assets/illustrationImage.png";
import { useState, useEffect } from "react";

const About = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imageUrls = [
            "/Assets/gallery1.jpg",
            "/Assets/gallery2.jpg",
            "/Assets/gallery3.jpg",
            "/Assets/gallery4.jpg",
            "/Assets/gallery5.jpg",
        ];

        let loadedCount = 0;

        imageUrls.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === imageUrls.length) {
                    setImagesLoaded(true);
                }
            };
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#e8f3f3] to-white px-4 md:px-8 py-10">

            {/* Main Container */}
            <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl p-6 md:p-12 rounded-3xl shadow-xl border border-white/40 transition-all">

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-700 mb-10">
                    About Adarsh Vidya Mandir
                </h2>

                {/* INTRO SECTION */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4 text-gray-800 text-lg leading-relaxed md:text-xl">
                        <p>
                            ADARSH VIDYA MANDIR, located in Tilokari, Jainagar (Koderma),
                            is a growing centre of learning founded in 1998 by
                            <strong> Shri Neelkanth Kumar</strong>.
                        </p>

                        <p>
                            The school was created with a clear vision —
                            <strong> affordable, value-based education for every rural child</strong>.
                        </p>

                        <p>
                            From Nursery to Class 10 (expanding to Class 12), we aim to build a space
                            where discipline, culture, and modern learning come together.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={illustationImage}
                            alt="School Illustration"
                            className="w-full max-w-sm rounded-2xl shadow-xl hover:scale-[1.02] transition"
                        />
                    </div>
                </section>

                {/* QUOTE BOX */}
                <div className="my-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 md:p-10 rounded-3xl shadow-md border-l-8 border-green-600">
                    <p className="text-xl md:text-2xl italic leading-relaxed text-gray-900">
                        “Education is not a privilege. It is a responsibility we carry for the next generation.”
                    </p>
                    <p className="mt-4 text-lg md:text-xl font-semibold text-green-800">
                        — Shri Neelkanth Kumar
                    </p>
                </div>

                {/* CAMPUS GALLERY STRIP */}
                <section className="my-16">
                    <h3 className="text-3xl font-bold text-[#14532d] mb-6">Campus Glimpses</h3>

                    {!imagesLoaded ? (
                        <p className="text-gray-600 text-center py-10">
                            Loading campus photos...
                        </p>
                    ) : (
                        <div className="flex gap-4 overflow-x-auto pb-4">
                            {[
                                "/Assets/gallery1.jpg",
                                "/Assets/gallery2.jpg",
                                "/Assets/gallery3.jpg",
                                "/Assets/gallery4.jpg",
                                "/Assets/gallery5.jpg",
                            ].map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt="Campus"
                                    className="w-64 h-40 object-cover rounded-xl shadow-lg hover:scale-105 transition"
                                />
                            ))}
                        </div>
                    )}
                </section>


                {/* TIMELINE */}
                <section className="mt-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#14532d] mb-8">
                        Our Journey Through the Years
                    </h3>

                    <div className="relative border-l-4 border-green-700 ml-2 md:ml-4 space-y-10">
                        {[
                            { year: "1998", text: "School established with only 20 students." },
                            { year: "2002", text: "First dedicated staff team formed." },
                            { year: "2010", text: "Science & Digital Learning introduced." },
                            { year: "2016", text: "Achieved record board results." },
                            { year: "2022", text: "Began expansion towards Class 12." },
                            { year: "2024", text: "Modernized labs, sports & digital classrooms." },
                        ].map((item, i) => (
                            <div key={i} className="ml-6">
                                <div className="absolute -left-3 w-6 h-6 bg-green-600 rounded-full"></div>
                                <h4 className="text-xl font-bold text-green-800">{item.year}</h4>
                                <p className="text-gray-700">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CORE VALUES */}
                <section className="mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#14532d] mb-8">
                        Our Core Values
                    </h3>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { title: "Honesty", color: "from-green-400 to-green-600" },
                            { title: "Discipline", color: "from-blue-400 to-blue-600" },
                            { title: "Respect", color: "from-purple-400 to-purple-600" },
                            { title: "Dedication", color: "from-orange-400 to-orange-600" },
                            { title: "Curiosity", color: "from-pink-400 to-pink-600" },
                            { title: "Integrity", color: "from-red-400 to-red-600" },
                        ].map((value, i) => (
                            <div
                                key={i}
                                className={`p-6 rounded-2xl bg-gradient-to-r ${value.color} text-white text-center font-bold shadow-lg hover:scale-105 transition`}
                            >
                                {value.title}
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="py-16 mt-12 bg-gradient-to-b from-white to-green-50 rounded-3xl">
                    <h3 className="text-2xl md:text-3xl text-center font-bold text-green-800 mb-12">
                        Why Choose Us?
                    </h3>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: "🎓", title: "Experienced Teachers", desc: "Dedicated faculty shaping future leaders." },
                            { icon: "📘", title: "Quality Education", desc: "Proven academic performance every year." },
                            { icon: "💰", title: "Affordable Fees", desc: "Accessible learning for rural families." },
                            { icon: "🌱", title: "Values + Discipline", desc: "Building strong character & ethics." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-2xl text-center shadow-md border hover:shadow-lg hover:scale-[1.03] transition"
                            >
                                <div className="text-5xl mb-3">{item.icon}</div>
                                <h4 className="font-bold text-green-800 text-lg">{item.title}</h4>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PRINCIPAL MESSAGE */}
                <section className="py-16">
                    <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                        <img
                            src="/Assets/principal.jpg"
                            className="rounded-3xl shadow-xl w-full object-cover"
                        />

                        <div>
                            <h3 className="text-3xl font-bold text-green-800 mb-4">
                                Message from the Principal
                            </h3>

                            <p className="text-gray-700 leading-relaxed text-lg">
                                “At Adarsh Vidya Mandir, our goal is not only to educate,
                                but to shape disciplined, confident, and responsible individuals.”
                            </p>

                            <p className="mt-4 font-semibold text-gray-800">
                                — Mr. Neelkanth Kumar <br /> Founder & Principal
                            </p>

                            <a
                                href="#"
                                className="inline-block mt-6 px-8 py-3 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition"
                            >
                                Read Full Message →
                            </a>
                        </div>
                    </div>
                </section>

                {/* CAMPUS LIFE GRID */}
                <section className="py-16 bg-green-50 rounded-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-10">
                        Glimpses of Campus Life
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {[
                            "/Assets/p1.jpg",
                            "/Assets/p2.jpg",
                            "/Assets/p3.jpg",
                            "/Assets/p4.jpg",
                            "/Assets/p5.jpg",
                            "/Assets/p6.jpg",
                            "/Assets/p7.jpg",
                            "/Assets/p8.jpg",
                        ].map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className="rounded-xl shadow-md object-cover w-full h-40 hover:scale-105 transition"
                            />
                        ))}
                    </div>
                </section>

                {/* FOUNDER CARD */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-100 to-white p-10 rounded-3xl shadow-xl text-center">
                        <div className="w-35 h-35 mx-auto rounded-full bg-gradient-to-br from-green-600 to-blue-600
    flex items-center justify-center shadow-xl text-white text-6xl font-bold select-none">
                            {(() => {
                                const name = "Neelkanth Kumar";  // Founder name
                                const initials = name.split(" ").map(n => n[0]).join("").toUpperCase();
                                return initials;
                            })()}
                        </div>


                        <h3 className="text-3xl font-bold text-green-800">Shri Neelkanth Kumar</h3>
                        <p className="text-gray-600 text-lg">Founder & Visionary Leader</p>

                        <p className="mt-6 text-gray-700 leading-relaxed">
                            “Education is the greatest tool for transformation.
                            My dream has always been to make quality learning accessible for every child,
                            especially those from rural backgrounds.”
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;
