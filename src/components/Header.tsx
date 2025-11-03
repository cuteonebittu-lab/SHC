import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800">Saanvi Healthcare Centre</h1>
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="index.html" className="text-green-700 font-semibold">Home</a>
          <a href="about.html" className="hover:text-green-700">About</a>
          <a href="services.html" className="hover:text-green-700">Services</a>
          <a href="appointment.html" className="hover:text-green-700">Appointment</a>
          <a href="blog.html" className="hover:text-green-700">Blog</a>
          <a href="contact.html" className="hover:text-green-700">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
