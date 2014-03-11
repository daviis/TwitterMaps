function initialize() {
   var mapOptions = {
   center: new google.maps.LatLng(-34.397, 150.644),
   zoom: 8
   };
   var map = new google.maps.Map(document.getElementById("map-canvas"),
   mapOptions);

   var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-33, 150),
      map: map,
      title: 'Hello World!'
   })
}
google.maps.event.addDomListener(window, 'load', initialize);
