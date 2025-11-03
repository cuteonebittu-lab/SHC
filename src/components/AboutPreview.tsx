import React from 'react';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:flex items-center">
        <div className="md:w-1/2">
          <img
            src="assets/clinic-interior.jpg"
            alt="Saanvi Healthcare Centre"
            className="rounded-2xl shadow-lg w-full object-cover h-96"
          />
        </div>
        <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
          <h3 className="text-3xl font-bold text-green-800 mb-4">Welcome to Saanvi Healthcare Centre</h3>
          <p className="text-gray-700 mb-4">
            Led by <b>Dr. Dhirendra Yadav (MD, Internal Medicine)</b> and <b>Dr. Sunitha Yadav (MD, Ayurveda Medicine)</b>,
            Saanvi Healthcare Centre brings together the strengths of <b>modern diagnostics</b> and <b>Ayurvedic wisdom</b> to
            offer holistic, patient-focused care.
          </p>
          <p className="text-gray-700 mb-6">
            Our mission is to heal both body and mind — through compassion, experience, and a blend of science and tradition.
          </p>
          <a
            href="about.html"
            className="bg-green-700 text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition"
          >
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
