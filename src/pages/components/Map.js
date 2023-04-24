import { React, useState, useCallback } from 'react';
import Map, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import { MarkerDragEvent, LngLat } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmFoYWRoYXNtaTEyIiwiYSI6ImNsZ3V4b2czcDJpZngzbW1ta3JmYjFmbmwifQ.sQyEX9TxZxa_Mt8ZgsUkLw'; // Set your mapbox token here

export default function SimpleMap() {
    const [marker, setMarker] = useState({
        latitude: 19.8,
        longitude: 72.4,
    });
    const [events, logEvents] = useState({});

    const onMarkerDragStart = useCallback((event) => {
        logEvents(_events => ({ ..._events, onDragStart: event.lngLat }));
    }, []);

    const onMarkerDrag = useCallback((event) => {
        logEvents(_events => ({ ..._events, onDrag: event.lngLat }));

        setMarker({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat
        });
    }, []);

    const onMarkerDragEnd = useCallback((event) => {
        logEvents(_events => ({ ..._events, onDragEnd: event.lngLat }));
    }, []);

    console.log(events.onDragEnd)
    return (
        <div>
            <Map
                initialViewState={{
                    latitude: 19.8,
                    longitude: 72.4,
                    zoom: 4
                }}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                <Marker
                    color='red'
                    longitude={marker.longitude}
                    latitude={marker.latitude}
                    anchor="bottom"
                    draggable
                    onDragStart={onMarkerDragStart}
                    onDrag={onMarkerDrag}
                    onDragEnd={onMarkerDragEnd}
                />
                <NavigationControl />
                <GeolocateControl />
            </Map>
        </div>
    );
}