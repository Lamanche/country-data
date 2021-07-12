import styled from "styled-components";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Container = styled.div``;

const Map = ({ latlng }) => {
  return (
    <Container>
      <MapContainer
        center={latlng}
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "300px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={latlng}></Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
