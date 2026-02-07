import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MediCare
        </Link>
        <div>
          <Link to="/" className="text-gray-700 hover:text-blue-500 px-3">
            Home
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-500 px-3">
            Services
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 px-3">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 px-3">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
