import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#c8d4d4] to-white px-6 py-9">

            {/* MAIN CONTAINER */}
            <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/40">

                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent p-1
        bg-gradient-to-r from-green-700 to-blue-700 tracking-wide mb-8">
                    About Adarsh Vidya Mandir
                </h2>

                {/* ⭐ SIDE-BY-SIDE INTRO SECTION */}
                <section className="grid md:grid-cols-2 gap-10 items-center mt-10">
                    <div>
                        <p className="text-gray-900 text-lg leading-relaxed mb-4">
                            ADARSH VIDYA MANDIR, located in Tilokari, Jainagar (Koderma),
                            is a growing centre of learning founded in 1997 by
                            <strong> Shri Neelkanth Kumar</strong>.
                        </p>
                        <p className="text-gray-900 text-lg leading-relaxed mb-4">
                            The school was created with one clear mission —
                            <strong> affordable, value-based education for every rural child</strong>.
                        </p>
                        <p className="text-gray-900 text-lg leading-relaxed">
                            From Nursery to Class 10 (soon Class 12),
                            we continue to build an environment where discipline,
                            dedication, culture, and modern learning come together.
                        </p>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center">
                        <img
                            src="/Assets/about-illustration.png"
                            alt="School Illustration"
                            className="w-full max-w-sm rounded-2xl shadow-lg"
                        />
                    </div>
                </section>

                {/* ⭐ FOUNDER QUOTE */}
                <div className="my-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl shadow-md border-l-8 border-green-600">
                    <p className="text-2xl italic text-gray-800 leading-relaxed">
                        “Education is not a privilege. It is a responsibility we carry for the next generation.”
                    </p>
                    <p className="mt-4 text-xl font-semibold text-green-800">
                        — Shri Neelkanth Kumar
                    </p>
                </div>

                {/* ⭐ GALLERY STRIP */}
                <div className="my-16">
                    <h2 className="text-3xl font-bold text-[#14532d] mb-6">Campus Glimpses</h2>
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
                </div>

                {/* ⭐ TIMELINE SECTION */}
                <h2 className="text-3xl font-bold text-[#14532d] mt-12 mb-8">
                    Our Journey Through the Years
                </h2>

                <div className="relative border-l-4 border-green-700 ml-4 space-y-12">
                    {[
                        { year: "1997", text: "School established with only 20 students." },
                        { year: "2002", text: "First dedicated staff team formed." },
                        { year: "2010", text: "Science & Digital Learning introduced." },
                        { year: "2016", text: "Achieved record board results." },
                        { year: "2022", text: "Began expansion towards Class 12." },
                        { year: "2024", text: "Modernized labs, sports & digital classrooms." },
                    ].map((item, i) => (
                        <div key={i} className="ml-6">
                            <div className="absolute -left-3 w-6 h-6 bg-green-600 rounded-full"></div>
                            <h3 className="text-xl font-bold text-green-800">{item.year}</h3>
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* ⭐ Animated Core Values */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-[#14532d] mb-6">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
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
                                className={`p-6 rounded-2xl bg-gradient-to-r ${value.color} text-white font-bold text-center shadow-lg hover:scale-105 transition transform`}
                            >
                                {value.title}
                            </div>
                        ))}
                    </div>
                </div>
                <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
                    <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
                        Why Choose Us?
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">

                        {/* Feature Card */}
                        {[
                            { title: "Experienced Teachers", icon: "🎓", desc: "Qualified and dedicated faculty guiding every student." },
                            { title: "Quality Education", icon: "📘", desc: "Strong academic structure with proven results every year." },
                            { title: "Affordable Fees", icon: "💰", desc: "Education made accessible for rural and semi-urban families." },
                            { title: "Discipline + Values", icon: "🌱", desc: "We focus on character-building, ethics, and self-confidence." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-green-100"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-green-800">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                            </div>
                        ))}

                    </div>
                </section>

                {/* 🟧 Stats Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

                        {[
                            { label: "Students Enrolled", value: 600 },
                            { label: "Years of Excellence", value: 27 },
                            { label: "Teachers", value: 20 },
                            { label: "Board Toppers", value: 25 },
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-xl bg-green-50 shadow-lg">
                                <h3 className="text-5xl font-extrabold text-green-700 counter" data-target={item.value}>
                                    {item.value}
                                </h3>
                                <p className="mt-2 text-lg font-medium text-gray-700">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <script>
                        {`
                            const counters = document.querySelectorAll(".counter");
                            counters.forEach(counter => {
                                const target = +counter.getAttribute("data-target");
                                let count = 0;
                                const update = () => {
                                if(count < target) {
                                    counter.innerText = ++count;
                                    requestAnimationFrame(update);
                                }
                                };
                                update();
                            });
                        `}
                    </script>
                </section>

                {/* 🟫 School Prayer & National Anthem */}
                <section className="mt-20 bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/40">

                    <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                        School Prayer & National Anthem
                    </h2>

                    {/* Prayer Title */}
                    <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                        🕊️ विद्यालय प्रार्थना — “ऐ मालिक तेरे बंदे हम”
                    </h3>

                    <div className="bg-green-50 p-6 rounded-2xl shadow-inner text-gray-800 leading-relaxed text-lg space-y-3">
                        <p>ऐ मालिक तेरे बंदे हम, ऐसे हों हमारे करम
                            नेकी पर चलें और बदी से टलें
                            ताकि हँसते हुए निकले दम — ऐ मालिक...</p>

                        <p>भूले हम जो राहें, उनको तू भुला देना
                            ग़लतियों को हमारी तू माफ़ करना
                            दुष्ट मन को भ्रष्ट न कर दे,
                            अच्छा ही सदा करना — ऐ मालिक...</p>

                        <p>दुनिया में अगर हम बुरे पड़ गये
                            खुद बचेंगे तो क्या, दुनिया से कहेंगे
                            तू भी चल मेरे संग, बस यही कहते रहेंगे
                            अपना हमसफ़र बना ले — ऐ मालिक...</p>

                        <p>जो दिल को हों अच्छे, दौलत से हों सच्चे
                            ऐसे मन की तू पहचान कर दे
                            तूने दिया है हमें नाम अपना
                            नाम वो भी ऊँचा कर दे — ऐ मालिक...</p>
                    </div>


                    {/* National Anthem */}
                    <h3 className="text-2xl font-semibold text-center text-gray-800 mt-12 mb-4">
                        🇮🇳 राष्ट्रगान — “जन गण मन”
                    </h3>

                    <div className="bg-blue-50 p-6 rounded-2xl shadow-inner text-gray-800 leading-relaxed text-lg space-y-3">
                        <p>जन गण मन अधिनायक जय हे, भारत भाग्य विधाता
                            पंजाब, सिंध, गुजरात, मराठा, द्राविड़, उत्कल, बंग</p>

                        <p>विंध्य, हिमाचल, यमुना, गंगा
                            उच्छल जलधि तरंग
                            तव शुभ नामे जागे,
                            तव शुभ आशीष मागे
                            गाहे तव जय गाथा</p>

                        <p>जन गण मंगलदायक जय हे
                            भारत भाग्य विधाता
                            जय हे, जय हे, जय हे
                            जय जय जय जय हे</p>
                    </div>
                </section>

                {/* 🟫 Principal Message Preview */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                        {/* Image */}
                        <div>
                            <img
                                src="/Assets/principal.jpg"
                                alt="Principal"
                                className="rounded-3xl shadow-xl w-full object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-4xl font-bold text-green-800 mb-4">Message from the Principal</h2>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                “At Adarsh Vidya Mandir, our mission is not only to educate but to
                                shape individuals who are disciplined, confident, and ready to take on
                                the world with integrity and purpose.”
                            </p>

                            <p className="mt-4 font-semibold text-gray-800">
                                — Mr. Neelkanth Kumar
                                <br /> Founder & Principal
                            </p>

                            <a
                                href="/about#principal"
                                className="inline-block mt-6 px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition"
                            >
                                Read Full Message →
                            </a>
                        </div>

                    </div>
                </section>

                {/* 🟩 Photo Mosaic Strip */}
                <section className="py-20 bg-green-50">
                    <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
                        Glimpses of Campus Life
                    </h2>

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

                {/* 🟦 Founder Card */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-white p-10 rounded-3xl shadow-2xl text-center">

                        <img
                            src="/Assets/founder.jpg"
                            alt="Founder"
                            className="w-40 h-40 mx-auto rounded-full shadow-xl mb-6 object-cover"
                        />

                        <h2 className="text-3xl font-bold text-green-800">Shri Neelkanth Kumar</h2>
                        <p className="text-gray-600 text-lg">Founder & Visionary Leader</p>

                        <p className="mt-6 text-gray-700 leading-relaxed">
                            “Education is the greatest tool for transformation.
                            My dream has always been to make quality learning accessible for every child,
                            especially those from rural backgrounds.”
                        </p>

                    </div>
                </section>


            </div>

            {/* Animations */}
            <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-section {
          animation: slideUp 0.7s ease-out forwards;
        }
      `}</style>

        </div>
    );
};

export default About;
