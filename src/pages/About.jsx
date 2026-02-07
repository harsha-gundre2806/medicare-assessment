import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          MediCare is committed to providing exceptional healthcare services with a focus on patient care and well-being. Our team of experienced healthcare professionals is dedicated to ensuring that you receive the best care possible.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We offer a wide range of services, from general checkups to specialized treatments, all designed to meet your unique needs.
        </p>
      </div>
    </section>
  );
}
