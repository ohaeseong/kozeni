import Map from "../../components/Map";
import MapProvider from "../../provider/map-provider";

export default function Home() {
  return (
    <MapProvider>
      <Map />
    </MapProvider>
  );
}
