const map = L.map('map').setView([53.505, -0.09], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Cluster group logic start
var markers = L.markerClusterGroup();

exampleLocations.forEach((location) => {
    console.log(location)
    const title = location.location.key
    const marker = L.marker(new L.LatLng(location.location.lat, location.location.lng), {
        title: title
      })
    marker.bindPopup(title);

    markers.addLayer(marker);
})

map.addLayer(markers)
// cluster group logic end

// user location logic
map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);