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
      style: 'mapbox://styles/rafloresgo/ckhmepwa801271apawrohme9r',
      center: [0, 0],
      zoom: 3.5
    });
  }, []);

  
  return <div ref={mapRef} className="mapContainer" />;
}