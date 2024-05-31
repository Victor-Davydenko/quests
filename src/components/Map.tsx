'use client';

import { FC } from 'react';
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import { defaultMapOptions, location, LOCATION_ICON_URL } from '@/contstants/constants';

const GoogleMap: FC<{ locale: string }> = ({ locale }: { locale: string }) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY as string} language={locale}>
      <Map center={location} defaultZoom={18} mapId={process.env.NEXT_PUBLIC_MAP_ID} {...defaultMapOptions}>
        <AdvancedMarker position={location}>
          <img src={LOCATION_ICON_URL} alt='location marker' />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
