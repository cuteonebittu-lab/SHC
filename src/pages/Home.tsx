import React from 'react';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <div className="bg-cream text-gray-800 font-sans">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-green-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Holistic Healing through <br /> Modern Medicine & Ayurveda</h2>
          <p className="text-lg text-gray-700 mb-6">Experience the best of both worlds — <b>scientific precision</b> with <b>natural wellness</b>.</p>
          <a href="appointment.html" className="inline-block bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition">Book Appointment</a>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:flex items-center">
          <div className="md:w-1/2">
            <img src="assets/clinic-interior.jpg" alt="Saanvi Healthcare Centre" className="rounded-2xl shadow-lg w-full object-cover h-96" />
          </div>
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Welcome to Saanvi Healthcare Centre</h3>
            <p className="text-gray-700 mb-4">
              Led by <b>Dr. Dhirendra Yadav (MD, Internal Medicine)</b> and <b>Dr. Sunitha Yadav (MD, Ayurveda Medicine)</b>,  
              Saanvi Healthcare Centre brings together the strengths of <b>modern diagnostics</b> and <b>Ayurvedic wisdom</b> to offer holistic, patient-focused care.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is to heal both body and mind — through compassion, experience, and a blend of science and tradition.
            </p>
            <a href="about.html" className="bg-green-700 text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition">Know More</a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-10">Our Key Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="fa-user-md"
              title="General Medicine"
              description="Comprehensive care for diabetes, hypertension, thyroid, and lifestyle disorders."
            />
            <ServiceCard
              icon="fa-leaf"
              title="Ayurveda Consultation"
              description="Authentic Ayurvedic treatments for holistic wellness and disease prevention."
            />
            <ServiceCard
              icon="fa-spa"
              title="Panchakarma & Detox"
              description="Rejuvenate your body and mind with traditional cleansing and detox therapies."
            />
            <ServiceCard
              icon="fa-heartbeat"
              title="Cardio & Lifestyle Care"
              description="Specialized management for heart, blood pressure, and metabolic conditions."
            />
            <ServiceCard
              icon="fa-female"
              title="Women’s Health"
              description="Comprehensive solutions for PCOD, thyroid, hormonal balance, and wellness."
            />
            <ServiceCard
              icon="fa-hand-sparkles"
              title="Skin & Hair Care"
              description="Natural therapies for radiant skin, healthy hair, and inner vitality."
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
};

export default Home;
