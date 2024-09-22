"use client";
import { GoogleMap } from "@react-google-maps/api";
import classNames from "classnames";

const defaultMapCenter = {
  lat: 37.547623,
  lng: 126.993439,
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
  height: "50vh",
  borderRadius: "15px 0px 0px 15px",
};

interface Props {
  className?: string;
  defaultCountry?: "kr" | "jp";
}

export default function Map({ className }: Props) {
  return (
    <div className={classNames("", className)}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        options={defaultMapOptions}
      />
    </div>
  );
}
