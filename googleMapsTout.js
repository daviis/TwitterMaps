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

function addMarkers(){
    var latList = Array()
    latList.push(-33)
    latList.push(-34)
    latList.push(-35)
    latList.push(-36)

    for (i=0;i<latList.length;i++) {
        var myLatlng = new google.maps.LatLng(latList[i],150);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });
        marker.setMap(map);
    }
}
//addMarkers()
setTimeout(function() {addMarkers();},1250);