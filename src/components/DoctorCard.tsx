import { Link } from 'react-router-dom';

interface DoctorProps {
  name: string;
  specialization: string;
  qualifications: string[];
  availability: string;
  experience: string;
}
const DoctorCard = ({ name, specialization, qualifications, availability, experience }: DoctorProps) => {
  return (
    <div className="reveal bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden flex items-center justify-center bg-gray-50">
        <img 
          src={`/assets/images/shc_logo_exact.svg`}
          alt={`Dr. ${name}`}
          className="w-40 h-40 object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h3 className="text-xl font-bold text-white">Dr. {name}</h3>
          <p className="text-emerald-300">{specialization}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Qualifications</h4>
          <div className="flex flex-wrap gap-2">
            {qualifications.map((qual, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full"
              >
                {qual}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Experience</h4>
          <p className="text-gray-600">{experience}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Availability</h4>
          <p className="text-gray-600">{availability}</p>
        </div>
        <Link 
          to="/" 
          className="block w-full py-3 text-center text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors mb-2"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="block w-full py-3 text-center text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors"
        >
          About
        </Link>
        <Link 
          to="/appointment" 
          className="block w-full py-3 text-center text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors mt-2"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
