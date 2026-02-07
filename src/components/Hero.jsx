import React from 'react';

export default function Hero() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to MediCare
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Providing quality healthcare services with compassion and care.
        </p>
        <a
          href="/services"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Explore Our Services
        </a>
      </div>
    </section>
  );
}
