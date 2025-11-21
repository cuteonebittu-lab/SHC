const GoogleMap = ({ className = '' }: { className?: string }) => {
  // Allow an embed URL via env (preferred), otherwise default to the exact
  // embed URL provided by the user so the place is correct.
  const embedUrl = (import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL as string | undefined) ||
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d965258.4185074486!2d71.7759364!3d19.0839215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c11beda85711%3A0xa324137ba3c1c4da!2sSaanvi%20Healthcare%20Centre!5e0!3m2!1sen!2sus!4v1763657636683!5m2!1sen!2sus';

  return (
    <div className={`w-full h-96 ${className} bg-gray-100 rounded-lg overflow-hidden`}>
      <iframe
        title="Saanvi Healthcare Location"
        src={embedUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="p-4 text-center bg-white">
        <a
          href="https://maps.app.goo.gl/m1qetsREyBZhYUcb7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
        >
          <span className="mr-2">📍</span>
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
