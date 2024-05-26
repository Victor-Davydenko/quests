import { useJsApiLoader } from '@react-google-maps/api';

const useMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY as string,
    language: 'uk',
  });
  return isLoaded;
};

export default useMap;
