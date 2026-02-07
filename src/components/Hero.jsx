import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Quality Healthcare <br /> You Can Trust
          </h1>

          <p className="text-lg text-blue-100 mb-8">
            MediCare provides trusted medical services with modern facilities
            and experienced doctors focused on your well-being.
          </p>

          <a
            href="/services"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Explore Services
          </a>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df"
            alt="Healthcare"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
