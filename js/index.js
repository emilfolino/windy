"use strict";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

(function IIFE() {
    let map = L.map('map', {
        center: [56.181932, 15.590525],
        zoom: 11
    });

    const stefan = L.icon({
        iconUrl: 'stefan.jpg',
        iconSize:     [64, 64],
        iconAnchor:   [12, 12],
        popupAnchor:  [0, 0]
    });

    const mos = L.icon({
        iconUrl: 'mikael.jpg',
        iconSize:     [64, 64],
        iconAnchor:   [12, 12],
        popupAnchor:  [0, 0]
    });

    const bth = L.icon({
        iconUrl: 'bth.jpg',
        iconSize:     [64, 64],
        iconAnchor:   [12, 12],
        popupAnchor:  [0, 0]
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);

    L.marker(
        [56.19809, 15.655869],
        {icon: stefan}
    ).addTo(map).bindPopup("Stefan");

    L.marker(
        [56.210042, 15.276036],
        {icon: mos}
    ).addTo(map).bindPopup("mos");

    L.marker(
        [56.181932, 15.590525],
        {icon: bth}
    ).addTo(map).bindPopup("Där de borde vara!");
})();
