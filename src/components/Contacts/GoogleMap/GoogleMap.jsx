import { useState } from 'react';
import {
  GoogleMap as GMap,
  useJsApiLoader,
  Marker,
  InfoBox,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';

import { containerStyle, MarkerWrp } from './GoogleMap.styled';

const { VITE_VERCEL_GOOGLE_MAP_API_KEY } = import.meta.env;
const options = { closeBoxURL: '', enableEventPropagation: true };

const center = {
  lat: 50.44761398765202,
  lng: 30.537882224742855,
};

export const GoogleMap = ({ cities }) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: VITE_VERCEL_GOOGLE_MAP_API_KEY,
  });

  const handleOnLoad = map => {
    const bounds = new google.maps.LatLngBounds();

    cities.forEach(({ coords }) => {
      if (coords.lat && coords.lng) {
        bounds.extend(coords);
        map.fitBounds(bounds);
      }
    });
  };

  const handleActiveMarker = marker => {
    if (marker === activeMarker) {
      return setActiveMarker(null);
    }
    setActiveMarker(marker);
  };

  if (isLoaded && cities.length > 0) {
    return (
      <GMap
        onLoad={handleOnLoad}
        mapContainerStyle={containerStyle}
        zoom={10}
        onClick={() => setActiveMarker(null)}
        center={center}
      >
        {cities.map(({ id, coords, address }) => (
          <Marker
            key={id}
            position={coords}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id && (
              <InfoBox options={options}>
                <MarkerWrp>
                  <p>{address}</p>
                </MarkerWrp>
              </InfoBox>
            )}
          </Marker>
        ))}
      </GMap>
    );
  }
};

GoogleMap.propTypes = {
  cities: PropTypes.array.isRequired,
};
