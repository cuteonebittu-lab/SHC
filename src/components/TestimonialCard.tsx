interface TestimonialProps {
  name: string;
  title: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, title, content, rating }: TestimonialProps) => {
  return (
    <div className="reveal bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-gray-600 mb-6">
        "{content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <img
            src={'/assets/images/shc_logo_exact.svg'}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;