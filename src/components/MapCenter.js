import { useMap } from "react-leaflet";

const MapCenter = ({ coords }) => {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
};

export default MapCenter;
