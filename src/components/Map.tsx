'use client';

import { FC } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Loading from '@/app/loading';
import { defaultMapOptions, mapContainerStyle, location } from '@/contstants/constants';

const Map: FC<{}> = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY as string,
    language: 'uk',
  });
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={location}
      zoom={18}
      options={defaultMapOptions}
    >
      <Marker position={location} icon={{ url: 'location_marker.svg' }} />
    </GoogleMap>
  ) : <Loading />;
};

export default Map;
