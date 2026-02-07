import React from 'react';

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center mb-4">
        {icon && <div className="text-blue-500 text-3xl">{icon}</div>}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
