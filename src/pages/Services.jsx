import React from 'react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const services = [
    {
      title: 'General Checkup',
      description: 'Comprehensive health examinations to keep you in top condition.',
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency services for urgent medical needs.',
    },
    {
      title: 'Pharmacy',
      description: 'On-site pharmacy with a wide range of medications and health products.',
    },
    {
      title: 'Lab Tests',
      description: 'Accurate and quick laboratory tests for all your diagnostic needs.',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
