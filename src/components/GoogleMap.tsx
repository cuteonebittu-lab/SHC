import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useEffect, useRef } from 'react';

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  className?: string;
}

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div className="flex items-center justify-center h-full">Loading map...</div>;
    case Status.FAILURE:
      return <div className="flex items-center justify-center h-full text-red-600">Error loading map</div>;
    case Status.SUCCESS:
      return <MapComponent center={{ lat: 19.0443, lng: 73.0252 }} zoom={15} />;
  }
};

const MapComponent: React.FC<MapProps> = ({ center, zoom }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new google.maps.Map(ref.current, {
        center,
        zoom,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [{ color: '#c8c8c8' }]
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#bdbdbd' }]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#dadada' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9c9c9' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          }
        ]
      });

      // Add a marker for the clinic location
      new google.maps.Marker({
        position: center,
        map: map,
        title: 'Saanvi Healthcare Centre',
        icon: {
          url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNy41ODIgMiA0IDUuNTgyIDQgMTBDNCAxNi4wOCAxMS4wNCAyMS41NDcgMTIgMjJDMTIuOTYgMjEuNTQ3IDIwIDE2LjA4IDIwIDEwQzIwIDUuNTgyIDE2LjQxOCAyIDEyIDJaTTEyIDEzQzEwLjM0MzEgMTMgOSAxMS42NTY5IDkgMTBDOSA4LjM0MzEgMTAuMzQzMSA3IDEyIDdDMTMuNjU2OSA3IDE1IDguMzQzMSAxNSAxMEMxNSAxMS42NTY5IDEzLjY1NjkgMTMgMTIgMTNaIiBmaWxsPSIjMTZhMzQ2Ii8+Cjwvc3ZnPgo=',
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 40)
        }
      });
    }
  }, [center, zoom]);

  return <div ref={ref} className="w-full h-full rounded-lg" />;
};

const GoogleMap: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Check if API key is configured
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  if (!apiKey || apiKey === 'your_google_maps_api_key_here') {
    return (
      <div className={`w-full h-96 ${className} bg-gray-100 rounded-lg flex flex-col items-center justify-center p-8 text-center`}>
        <div className="text-4xl mb-4">🗺️</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
        <p className="text-gray-600 mb-4">
          To enable the interactive map, please configure your Google Maps API key.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md">
          <h4 className="font-semibold text-yellow-800 mb-2">Setup Instructions:</h4>
          <ol className="text-sm text-yellow-700 list-decimal list-inside space-y-1">
            <li>Get API key from Google Cloud Console</li>
            <li>Enable Maps JavaScript API & Places API</li>
            <li>Add key to .env.local file</li>
            <li>Restart development server</li>
          </ol>
        </div>
        <a 
          href="https://maps.google.com/?q=19.0443,73.0252"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
        >
          <span className="mr-2">📍</span>
          Open in Google Maps
        </a>
      </div>
    );
  }

  return (
    <div className={`w-full h-96 ${className}`}>
      <Wrapper
        apiKey={apiKey}
        render={render}
        libraries={['places']}
      />
    </div>
  );
};

export default GoogleMap;
