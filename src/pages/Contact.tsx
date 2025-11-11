import { Helmet } from 'react-helmet-async';
import EditableText from '../components/EditableText';

const contactInfo = {
  address: "No.6 Saraswati Sadan CHS, Sec: 23, Plot- 211, Juinagar, Navi Mumbai",
  phone: "+91 98765 43210",
  email: "contact@saanvihealthcare.com",
  timings: "Monday–Saturday: 9 AM – 8 PM",
  whatsapp: "+919876543210"
};

const Contact = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Contact Us | Saanvi Healthcare Centre</title>
        <meta 
          name="description" 
          content="Get in touch with Saanvi Healthcare Centre. Visit our clinic or contact us for appointments and consultations." 
        />
      </Helmet>

      <section className="pt-24 pb-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <EditableText
            page="contact"
            section="hero"
            field="title"
            defaultValue="Contact Us"
            tag="h2"
            className="text-4xl font-bold text-green-800 mb-6"
          />
          <EditableText
            page="contact"
            section="hero"
            field="description"
            defaultValue="We're here to assist you with your health journey. Reach us anytime during working hours."
            tag="p"
            className="text-gray-700 mb-8"
          />

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="mb-4 text-lg text-gray-800">
              <span role="img" aria-label="location">📍</span> Address: {contactInfo.address}
            </p>
            <p className="mb-4 text-lg text-gray-800">
              <span role="img" aria-label="phone">📞</span> Phone: {contactInfo.phone}
            </p>
            <p className="mb-4 text-lg text-gray-800">
              <span role="img" aria-label="email">✉️</span> Email: {contactInfo.email}
            </p>
            <p className="mb-4 text-lg text-gray-800">
              <span role="img" aria-label="time">⏰</span> Timings: {contactInfo.timings}
            </p>
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`}
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
