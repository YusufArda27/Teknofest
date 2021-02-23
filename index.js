var map = L.map('mapid').setView([41.015137, 28.979530], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
}).addTo(map);
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Haritaya Dokunduğunuz Nokta: " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

L.Routing.control({
    waypoints: [
        L.latLng(41.168834, 28.923225),
        L.latLng(41.054243, 29.236336)
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim(),
    lineOptions: {
        styles: [{color: 'red', opacity: 0.5, weight: 5}]
    },
    altLineOptions: {
        styles: [
            {color: 'black', opacity: 0.15, weight: 9},
            {color: 'white', opacity: 0.8, weight: 6},
            {color: 'blue', opacity: 0.5, weight: 2}
        ]
    }
}).addTo(map);

console.log($(".leaflet-routing-geocoder")[0].text)
