var map;

function initialize() {
   var mapOptions = {
   center: new google.maps.LatLng(-34.397, 150.644),
   zoom: 8
   };
   map = new google.maps.Map(document.getElementById("map-canvas"),
   mapOptions);

   var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-33, 150),
      map: map,
      title: 'Hello World!'
   })
}
google.maps.event.addDomListener(window, 'load', initialize);

var addMarkers = funciton(anArray){
    for (i=0;i<anArray.length;i++) {
        var myLatlng = new google.maps.LatLng(latList[i].lat,latList[i].lon);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });
        marker.setMap(map);
    }
}
//addMarkers()
setTimeout(function() {addMarkers();},1250);
