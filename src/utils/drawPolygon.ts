import { Map } from "mapbox-gl";

export const drawPolygon = (
    mapRef: Map, 
    coordinates: number[][], 
    color: string, 
    opacity: number,
    id: string
) => {
    const sourceId = `polygon-source-${id}`;
    const layerId = `polygon-layer-${id}`;

    mapRef.addSource(sourceId, {
        type: 'geojson',
        data: {
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: coordinates
            },
            properties: {
                Zone: id
            }
        }
    });

    mapRef.addLayer({
        id: layerId,
        type: 'fill',
        source: sourceId,
        layout: {},
        paint: {
            'fill-color': color,
            'fill-opacity': opacity
        }
    });
} 