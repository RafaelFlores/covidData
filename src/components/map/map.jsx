import React, { createRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import covidData from './data.json';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFmbG9yZXNnbyIsImEiOiJja2hjd280MHgwMnBtMnRwanE1eG5uaW01In0.8BLtWeC34m2V9wqi0dZcgQ ';

console.log( covidData )

export function Map() {
  const mapRef = createRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5, 34],
      zoom: 2
    });
  }, []);

  
  return <div ref={mapRef} className="mapContainer" />;
}