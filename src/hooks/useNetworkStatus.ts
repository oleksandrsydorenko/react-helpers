import { useEffect, useState } from 'react';

type NetworkStatus = {
  isOnline: boolean;
  effectiveType: string;
};

const getConnectionEffectiveType = (): string =>
  navigator.connection ? navigator.connection?.effectiveType : 'unknown';

const useNetworkStatus = (): NetworkStatus => {
  const [status, setStatus] = useState<NetworkStatus>({
    isOnline: navigator.onLine,
    effectiveType: getConnectionEffectiveType(),
  });

  const handleConnectionChange = (): void => {
    if (navigator.connection) {
      setStatus((prev) => ({
        ...prev,
        effectiveType: getConnectionEffectiveType(),
      }));
    }
  };

  const handleOnline = (): void => {
    setStatus((prev) => ({ ...prev, isOnline: true }));
  };

  const handleOffline = (): void => {
    setStatus((prev) => ({ ...prev, isOnline: false }));
  };

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (navigator.connection) {
      navigator.connection.addEventListener('change', handleConnectionChange);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);

      if (navigator.connection) {
        navigator.connection.removeEventListener(
          'change',
          handleConnectionChange,
        );
      }
    };
  }, []);

  return status;
};

export default useNetworkStatus;
