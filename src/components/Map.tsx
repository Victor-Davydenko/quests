'use client';

import { FC } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Loading from '@/app/[locale]/loading';
import {
  defaultMapOptions, mapContainerStyle, location, LOCATION_ICON_URL,
} from '@/contstants/constants';
import useMap from '@/hooks/useMap';

const Map: FC = () => {
  const isLoaded = useMap();
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={location}
      zoom={18}
      options={defaultMapOptions}
    >
      <Marker position={location} icon={{ url: LOCATION_ICON_URL }} />
    </GoogleMap>
  ) : <Loading />;
};

export default Map;
