import { Map } from "mapbox-gl";

interface ZoneProperties {
    id: number;
    temperature: number;
    humidite: number;
    force_moyenne_du_vecteur_de_vent: number;
    force_du_vecteur_de_vent_max: number;
    pluie_intensite_max: number;
    date: string;
    quartier: string;
    sismicite: number;
    concentration_gaz: number;
}

export const drawPolygon = (
    mapRef: Map, 
    coordinates: number[][], 
    color: string, 
    opacity: number,
    id: string,
    properties: ZoneProperties
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
                Zone: id,
                ...properties
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