import React from "react";

export default function Stats() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Qualified Doctors" },
    { number: "10k+", label: "Happy Patients" },
    { number: "24/7", label: "Emergency Support" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index} className="p-6 rounded-xl shadow-sm border">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">
              {item.number}
            </h3>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
