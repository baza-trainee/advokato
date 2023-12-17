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

export const GoogleMap = ({ data }) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: VITE_VERCEL_GOOGLE_MAP_API_KEY,
  });

  const handleOnLoad = map => {
    const bounds = new google.maps.LatLngBounds();

    data.forEach(({ coords: { position } }) => bounds.extend(position));

    map.fitBounds(bounds);
  };

  const handleActiveMarker = marker => {
    if (marker === activeMarker) {
      return setActiveMarker(null);
    }
    setActiveMarker(marker);
  };

  if (isLoaded && data.length > 0) {
    return (
      <GMap
        onLoad={handleOnLoad}
        mapContainerStyle={containerStyle}
        zoom={10}
        onClick={() => setActiveMarker(null)}
      >
        {data.map(({ id, coords: { position, description } }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id && (
              <InfoBox options={options}>
                <MarkerWrp>
                  <p>{description}</p>
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
  data: PropTypes.array.isRequired,
};
