import { useState, useEffect } from 'react';

const GetUserLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lon: '', lat: '' },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lon: location.coords.longitude,
        lat: location.coords.latitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default GetUserLocation;
