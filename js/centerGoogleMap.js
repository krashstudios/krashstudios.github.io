var mapOptions = {
zoom: 2,
center: new google.maps.LatLng(0,0), mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

// this is our gem
google.maps.event.addDomListener(window, "resize", function() {
var center = map.getCenter();
google.maps.event.trigger(map, "resize");
map.setCenter(center);
});
