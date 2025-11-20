import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:flex items-center">
        <div className="md:w-1/2 flex items-center justify-center">
          <img src="/assets/images/shc_logo_exact.svg" alt="Saanvi Healthcare Centre Logo" className="rounded-2xl shadow-lg w-64 h-64 object-contain" />
        </div>
        <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
          <div className="flex items-center mb-4">
            <img src="/assets/images/shc_logo_exact.svg" alt="Saanvi Healthcare Centre Logo" className="h-12 mr-4" />
            <h3 className="text-3xl font-bold text-green-800">Welcome to Saanvi Healthcare Centre</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Led by <b>Dr. Dhirendra Yadav (MD, Internal Medicine)</b> and <b>Dr. Sunitha Yadav (MD, Ayurveda Medicine)</b>,
            our centre brings together the strengths of <b>modern diagnostics</b> and <b>Ayurvedic wisdom</b> to
            offer holistic, patient-focused care.
          </p>
          <p className="text-gray-700 mb-6">
            Our mission is to heal both body and mind — through compassion, experience, and a blend of science and tradition.
          </p>
          <Link
            to="/about"
            className="bg-green-700 text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
