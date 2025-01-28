import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'
import FilterNavbar from './components/filterNavbar';
import { drawPolygon } from '../utils/drawPolygon';

//import json data
import zones from '../public/csvjson.json'

export const features = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Zone 5",
      },
      geometry: {
        coordinates: [
          [
            [1.447745526085356, 43.58270864310518],
            [1.4258591197929036, 43.583345553235915],
            [1.4154293621057548, 43.5717311271965],
            [1.4257372014430132, 43.556213939293144],
            [1.448143596901474, 43.556026366140514],
            [1.4573913698511944, 43.571331792960734],
            [1.447745526085356, 43.58270864310518],
          ],
        ],
        type: "Polygon",
      },
      id: 0,
    },
    {
      type: "Feature",
      properties: {
        name: "Zone 3",
      },
      geometry: {
        coordinates: [
          [
            [1.4255247969704499, 43.61216008885535],
            [1.4153669916463514, 43.597557491096836],
            [1.4258864996845944, 43.583388116707454],
            [1.447757204881384, 43.582755359390575],
            [1.4591196915476417, 43.59724200912933],
            [1.4481851666747616, 43.611863003831985],
            [1.4255247969704499, 43.61216008885535],
          ],
        ],
        type: "Polygon",
      },
      id: 1,
    },
    {
      type: "Feature",
      properties: {
        name: "Zone 1",
      },
      geometry: {
        coordinates: [
          [
            [1.4481170609940364, 43.611900195735785],
            [1.4598297546292542, 43.625808587714204],
            [1.4500034458710331, 43.638525656843456],
            [1.4252826183958405, 43.63892377085176],
            [1.4149103794275106, 43.62608667881378],
            [1.4254879563905263, 43.612174112981876],
            [1.4481170609940364, 43.611900195735785],
          ],
        ],
        type: "Polygon",
      },
      id: 2,
    },
    {
      type: "Feature",
      properties: {
        name: "Zone 4",
      },
      geometry: {
        coordinates: [
          [
            [1.4154202261200908, 43.571863842125936],
            [1.4256779694842976, 43.58340590228798],
            [1.4152435778605366, 43.59761587768833],
            [1.3920542413161172, 43.597520280013015],
            [1.3828015109739624, 43.58398310064047],
            [1.392441062033015, 43.57158938541269],
            [1.4154202261200908, 43.571863842125936],
          ],
        ],
        type: "Polygon",
      },
      id: 3,
    },
    {
      type: "Feature",
      properties: {
        name: "Zone 2",
      },
      geometry: {
        coordinates: [
          [
            [1.4254493222618692, 43.61237792006827],
            [1.4148596161231524, 43.62598102040232],
            [1.3912690250973299, 43.62549568210986],
            [1.3814826259334723, 43.61272213375119],
            [1.3917525408151903, 43.59773900859474],
            [1.4154968052367565, 43.5975015824869],
            [1.4254493222618692, 43.61237792006827],
          ],
        ],
        type: "Polygon",
      },
      id: 4,
    },
  ],
};

function App() {

  const mapRef = useRef<mapboxgl.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    console.log(zones)
    mapboxgl.accessToken = import.meta.env.VITE_MAP_API_KEY
    
    if (!mapContainerRef.current) return
    
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [1.433333, 43.6],
      zoom: 12
    });

    mapRef.current.on('click', (e) => {
      console.log(e)
    });

    mapRef.current.on('load', () => {
        zones.forEach((feature) => {
            let coordinates;
            switch(feature.quartier) {
                case 'Zone 1':
                    coordinates = [features.features[2].geometry.coordinates[0]]; // id: 2
                    break;
                case 'Zone 2':
                    coordinates = [features.features[4].geometry.coordinates[0]]; // id: 4
                    break;
                case 'Zone 3':
                    coordinates = [features.features[1].geometry.coordinates[0]]; // id: 1
                    break;
                case 'Zone 4':
                    coordinates = [features.features[3].geometry.coordinates[0]]; // id: 3
                    break;
                case 'Zone 5':
                    coordinates = [features.features[0].geometry.coordinates[0]]; // id: 0
                    break;
                default:
                    break;
            }

            if (coordinates) {
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                console.log(coordinates)
                drawPolygon(
                    mapRef.current!,
                    coordinates,
                    '#000000',
                    0.5,
                    feature.quartier
                )
            }
        });
    });
    return () => {
      mapRef.current?.remove()
    }
  }, [])
  

  return (
    <>
      <FilterNavbar />
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default App;