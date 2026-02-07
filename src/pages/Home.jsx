import React from 'react';
import Hero from '../components/Hero';
import Stats from "../components/Stats";
export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to MediCare
          </h2>
          <p className="text-lg text-gray-600">
            Your health is our priority. Explore our comprehensive healthcare services designed to meet all your needs.
          </p>
        </div>
      </section>
    </div>
  );
}
