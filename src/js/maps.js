var map;

$(window).on('load', function() {
	var cords = {lat: 59.984473, lng: 30.257418}
	map = new google.maps.Map(document.getElementById('find-us__map'), {
	  center: cords,
	  zoom: 16
	});
  var marker = new google.maps.Marker({
	  position: cords, 
    map: map
  });
});

