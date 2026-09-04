"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { company } from "@/data/site-data";

// Marqueur personnalisé rouge Mandiba (couleur du logo)
const mandibaIcon = L.divIcon({
  className: "mandiba-marker",
  html: `<div style="
    width: 28px;
    height: 28px;
    background: #e31e24;
    border: 3px solid #ffffff;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 4px 12px rgba(227, 30, 36, 0.5);
  "></div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

export function MapInner() {
  const { lat, lng, zoom, label } = company.map;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ height: "100%", width: "100%" }}
      aria-label={`Carte indiquant l'emplacement de ${label}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={mandibaIcon}>
        <Popup>
          <div className="p-1">
            <strong className="text-primary">MANDIBA GROUP</strong>
            <br />
            <span className="text-sm">{label}</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
