import styled from "styled-components";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapCenter from "./MapCenter";

const Container = styled.div`
  margin-top: 3rem;
`;

const Map = ({ latlng }) => {
  return (
    <Container>
      <MapContainer
        center={latlng}
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MapCenter coords={latlng} />
        <Marker position={latlng}></Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
