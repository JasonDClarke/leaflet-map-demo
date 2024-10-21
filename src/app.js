const map = L.map('map').setView([53.505, -0.09], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



exampleLocations.forEach((location) => {
    console.log(location)
    const marker = L.marker([location.location.lat, location.location.lng]).addTo(map);
})
