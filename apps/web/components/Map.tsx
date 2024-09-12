"use client";
import { GoogleMap } from "@react-google-maps/api";

const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  zoom: 10,
  maxZoom: 100,
  minZoom: 0,
  mapTypeControl: false,
};

const defaultMapContainerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
};

export default function Map({}: {}) {
  return (
    <div>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        options={defaultMapOptions}
      />
    </div>
  );
}
