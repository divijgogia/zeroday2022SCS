function initMap() {
      const directionsRenderer = new google.maps.DirectionsRenderer();
      const directionsService = new google.maps.DirectionsService();
      const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: { lat: 27.2046, lng: 77.4977 },
      });
      directionsRenderer.setMap(map);
      calculateAndDisplayRoute(directionsService, directionsRenderer);
      document.getElementById("mode").addEventListener("change", () => {
            calculateAndDisplayRoute(directionsService, directionsRenderer);
      });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
      const selectedMode = document.getElementById("mode").value;

      directionsService
            .route({
                  origin: document.getElementById("from").value,
                  destination: document.getElementById("to").value,
                  // Note that Javascript allows us to access the constant
                  // using square brackets and a string value as its
                  // "property."
                  travelMode: google.maps.TravelMode[selectedMode],
            })
            .then((response) => {
                  directionsRenderer.setDirections(response);
            })
            .catch((e) => window.alert("Directions request failed due to " + status));
}