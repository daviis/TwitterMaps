var map;

<<<<<<< HEAD
=======

>>>>>>> userLocation
function initialize() {
   var mapOptions = {
   center: findUserLocation(),
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
<<<<<<< HEAD
=======


var findUserLocation = function(){
 if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  }
  // Browser doesn't support Geolocation
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
      initialLocation = newyork;
    } else {
      alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
      initialLocation = siberia;
    }
    return initialLocation;
  }
}
>>>>>>> userLocation
