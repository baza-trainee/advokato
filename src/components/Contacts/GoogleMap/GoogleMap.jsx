import "leaflet/dist/leaflet.css";

import {
	LeafletContainer,
	containerStyleDesktop,
	containerStyleMobileL,
	containerStyleMobileM,
	containerStyleMobileS,
	containerStyleMobileSPlus,
	containerStyleTablet,
} from "./GoogleMap.styled";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

import L from 'leaflet';
import PropTypes from "prop-types";
import mapMarker from "../../../assets/icons/map-marker.svg";
import { useWindowDimensions } from "../../../hooks";

// import {
//   GoogleMap as GMap,
//   useJsApiLoader,
//   Marker,
//   InfoBox,
// } from '@react-google-maps/api';

// const { VITE_VERCEL_GOOGLE_MAP_API_KEY } = import.meta.env;
// const options = { closeBoxURL: '', enableEventPropagation: true };

const center = {
	lat: 50.44761398765202,
	lng: 30.537882224742855,
};

const customMarkerIcon = new L.Icon({
	iconUrl: mapMarker,
	iconSize: [32, 32], // Размеры вашего изображения
	iconAnchor: [16, 32], // Якорь для центрирования изображения на координатах маркера
	popupAnchor: [0, -32], // Якорь для отображения всплывающего окна выше маркера
});

export const GoogleMap = ({ cities }) => {
	const { height, width } = useWindowDimensions();
	const [mapStyles, setMapStyles] = useState(containerStyleDesktop);
	// const [activeMarker, setActiveMarker] = useState(null);
	// const { isLoaded } = useJsApiLoader({
	//   id: 'google-map-script',
	//   googleMapsApiKey: VITE_VERCEL_GOOGLE_MAP_API_KEY,
	// });

	useEffect(() => {
		if (!width) {
			return;
		}

		if (width >= 1440) {
			return setMapStyles(prev => containerStyleDesktop);
		}

		if (width >= 1024) {
			return setMapStyles(prev => containerStyleTablet);
		}

		if (width >= 768) {
			return setMapStyles(prev => containerStyleMobileL);
		}

		if (width <= 500 && width > 425) {
			return setMapStyles(prev => containerStyleMobileM);
		}

		if (width <= 425 && width >= 375) {
			return setMapStyles(prev => containerStyleMobileSPlus);
		}

		if (width < 375 && width >= 320) {
			return setMapStyles(prev => containerStyleMobileS);
		}
	}, [width]);

	// const handleOnLoad = map => {
	//   const bounds = new google.maps.LatLngBounds();

	//   cities.forEach(({ coords }) => {
	//     if (coords.lat && coords.lng) {
	//       bounds.extend(coords);
	//       map.fitBounds(bounds);
	//     }
	//   });
	// };

	// const handleActiveMarker = marker => {
	//   if (marker === activeMarker) {
	//     return setActiveMarker(null);
	//   }
	//   setActiveMarker(marker);
	// };

	if (cities.length > 0 && mapStyles) {
		console.log(mapStyles);
		return (
			<LeafletContainer>
				<MapContainer
					center={[center.lat, center.lng]}
					zoom={5}
					scrollWheelZoom={false}
					style={{ zIndex: 0, height: "100%", width: "100%" }}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{cities.map(city => {
						const position = [city.coords.lat, city.coords.lng];

						return (
							<Marker
								key={city.id}
								position={position}
                icon={customMarkerIcon}
							>
								<Popup>{city.address}</Popup>
							</Marker>
						);
					})}
				</MapContainer>
			</LeafletContainer>
		);
	}

	// if (isLoaded && cities.length > 0) {
	//   return (
	//     <GMap
	//       onLoad={handleOnLoad}
	//       mapContainerStyle={mapStyles}
	//       zoom={10}
	//       onClick={() => setActiveMarker(null)}
	//       center={center}
	//     >
	//       {cities.map(({ id, coords, address }) => (
	//         <Marker
	//           key={id}
	//           position={coords}
	//           onClick={() => handleActiveMarker(id)}
	//         >
	//           {activeMarker === id && (
	//             <InfoBox options={options}>
	//               <MarkerWrp>
	//                 <p>{address}</p>
	//               </MarkerWrp>
	//             </InfoBox>
	//           )}
	//         </Marker>
	//       ))}
	//     </GMap>
	//   );
	// }
};

GoogleMap.propTypes = {
	cities: PropTypes.array.isRequired,
};
