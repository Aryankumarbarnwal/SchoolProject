

const ContactSection = () => {
    return (
        <section className="py-14 sm:py-16 bg-white">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-700 mb-8 sm:mb-10">
                📍 Contact & Location
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 px-5 sm:px-8">

                {/* Left - Contact Info */}
                <div className="space-y-3 sm:space-y-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                        Adarsh Vidya Mandir, Tilokari
                    </h3>

                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        📌 Tilokari, Jainagar, Koderma, Jharkhand – 825109
                    </p>

                    <p className="text-base sm:text-lg text-gray-700">
                        📞 Phone: <span className="font-semibold">+91 98XXXXXXXX</span>
                    </p>

                    <p className="text-base sm:text-lg text-gray-700">
                        📧 Email: <span className="font-semibold">avm.school@gmail.com</span>
                    </p>

                    <p className="text-base sm:text-lg text-gray-700">
                        🕒 Mon – Sat: 8:00 AM – 2:00 PM
                    </p>
                </div>

                {/* Right - Google Map (fully responsive) */}
                <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.492175639137!2d85.68721377448631!3d24.329342478279788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f39b842a6ab385%3A0xc87a25598e6b6fd4!2sAdarsh%20Vidya%20Mandir%20Tilokari!5e0!3m2!1sen!2sin!4v1765111357059!5m2!1sen!2sin"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

