import React, { createRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { PlayCircleFilledWhite } from '@material-ui/icons';
import covidData from './data.json';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFmbG9yZXNnbyIsImEiOiJja2hjd280MHgwMnBtMnRwanE1eG5uaW01In0.8BLtWeC34m2V9wqi0dZcgQ ';

console.log(covidData);

export const jsToGeoJson = (list) => ({
  type: 'FeatureCollection',
  features: list.map((d, idx) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      description: 'Somewhere',
      coordinates: d.coordinates
    },
    properties: {
      title: d.state,
      positive: d.positive,
      recovered: d.recovered,
      death: d.death
    }
  }))
});

const geoJson = jsToGeoJson(covidData);
console.log(geoJson);

export function Map() {
  const mapRef = createRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-96, 37.8],
      zoom: 3
    });

    map.on('load', () => {
      // Add an image to use as a custom marker
      map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error;
          map.addImage('custom-marker', image);
          // Add a GeoJSON source with 2 points
          map.addSource('points', {
            type: 'geojson',
            data: geoJson

          });
          // Add a symbol layer
          map.addLayer({
            id: 'points',
            type: 'circle',
            source: 'points',
            type: 'circle',
            paint: {
              'circle-radius': 5,
              'circle-color': '#007cbf'
            }
          });

          // Create a popup, but don't add it to the map yet.
          const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
          });

          map.on('mouseenter', 'points', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = `<div class="divTable blueTable"> <div class="divTableBody"> <div class="divTableRow"> <div class="divTableCell">State: </div> <div class="divTableCell">${
              e.features[0].properties.title
            }</div> </div> <div class="divTableRow"> <div class="divTableCell">Positive</div> <div class="divTableCell">${
              e.features[0].properties.positive
            }</div> </div> <div class="divTableRow"> <div class="divTableCell">Recovered</div> <div class="divTableCell">${
              e.features[0].properties.recovered
            }</div> </div> <div class="divTableRow"> <div class="divTableCell">Dead</div> <div class="divTableCell">${
              e.features[0].properties.death
            }</div> </div> </div> </div>`;
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup
              .setLngLat(coordinates)
              .setHTML(description)
              .addTo(map);
          });

          map.on('mouseleave', 'points', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
          });
        }
      );
    });
  }, []);
  return <div ref={mapRef} className="mapContainer" />;
}
