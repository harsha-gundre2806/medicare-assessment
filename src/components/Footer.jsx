import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} MediCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
