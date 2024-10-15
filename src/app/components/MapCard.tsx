"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapCard = () => {
  const { theme } = useTheme();
  const [viewport, setViewport] = useState({
    latitude: 52.2297,
    longitude: 21.0122,
    zoom: 8,
  });

  useEffect(() => {
    const mapStyle = theme === "dark" ? "mapbox://styles/mapbox/dark-v10" : "mapbox://styles/mapbox/light-v10";

    setViewport((prevViewport) => ({ ...prevViewport, mapStyle }));
  }, [theme]);

  return (
    <div className="base-card-wo-padding border-none max-container:order-5">
      <Map
        {...viewport}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        attributionControl={false}
        logoPosition="bottom-right"
      >
        <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
          <div className="flex items-center justify-center w-10 h-10  bg-primary rounded-full">
            <p className="text-xl">📍</p>
          </div>
        </Marker>
      </Map>
    </div>
  );
};

export default MapCard;
