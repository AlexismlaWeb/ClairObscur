import { useState, useEffect } from 'react';

function useWindowSize() {
  const [deviceType, setDeviceType] = useState("desktop"); // Valeur par défaut

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if(width < 768) {
        setDeviceType("mobile");
      } else if(width >= 768 && width < 1024) {
        setDeviceType("tablette");
      } else {
        setDeviceType("laptop");
      }
    }
    
    window.addEventListener('resize', handleResize);
    // Appel initial pour définir le type d'appareil lors du chargement de la page
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}

export default useWindowSize;
