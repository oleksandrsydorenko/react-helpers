import { useEffect, useState } from 'react';

type GeolocationState = {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
};

const useGeolocation = (): GeolocationState => {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  const handleSuccess = (position: GeolocationPosition): void => {
    setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      error: null,
    });
  };

  const handleError = (error: GeolocationPositionError): void => {
    setState({
      latitude: null,
      longitude: null,
      error: error.message,
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({
        latitude: null,
        longitude: null,
        error: 'Geolocation is not supported',
      });

      return;
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return state;
};

export default useGeolocation;
