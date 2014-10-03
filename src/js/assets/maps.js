
var map;
var Markers = {};
var infowindow;
var locations = [
	{
      lat: -22.9977828,
      lng: -43.3673801,
      nome: "Barra da Tijuca",
      id: 0
   },
   {
      lat: -22.931581,
      lng: -43.2411567,
      nome: "Tijuca",
      id: 1
   },
   {
      lat: -22.8877565,
      lng: -43.5488469,
      nome: "Campo Grande",
      id: 2
   },
   {
      lat: -22.9053526,
      lng: -43.1781185,
      nome: "Centro",
      id: 3
   },
   {
      lat: -22.8700153,
      lng: -43.2812369,
      nome: "Inha&uacute;ma",
      id: 4
   },
   {
      lat: -22.938424,
      lng: -43.1766025,
      nome: "Flamengo",
      id: 5
   },
   {
      lat: -22.8456583,
      lng: -43.3094534,
      nome: "Vila da Penha",
      id: 6
   },
   {
      lat: -22.9732708,
      lng: -43.1857553,
      nome: "Copacabana",
      id: 7
   },
   {
      lat: -22.8144105,
      lng: -43.3589035,
      nome: "Pavuna",
      id: 8
   },
   {
      lat: -22.9844357,
      lng: -43.2020038,
      nome: "Ipanema",
      id: 9
   }
];

var origin = new google.maps.LatLng(locations[3]['lat'], locations[3]['lng']);
 
function initialize() {
  var mapOptions = {
  	center: new google.maps.LatLng(-22.9053526, -43.1781185),
    zoom: 10,
    mapTypeId: 'roadmap',
    center: origin
  };
 
  map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
 
	infowindow = new google.maps.InfoWindow();
 
    for(i=0; i<locations.length; i++) {
    	var position = new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']);
  		var marker = new google.maps.Marker({
  			position: position,
  			map: map
		  });

  		google.maps.event.addListener(marker, 'click', (function(marker, i) {
  			return function() {
  				infowindow.setContent('<h4>' + locations[i]['nome'] + '</h4>');
  				infowindow.setOptions({minWidth: 200});
  				infowindow.open(map, marker);
  			}
		}) (marker, i));
		
		Markers[locations[i]['id']] = marker;
	}
 
	locate(0);
 
}
 
function locate(marker_id) {
	var myMarker = Markers[marker_id];
	var markerPosition = myMarker.getPosition();
	map.setCenter(markerPosition);
	google.maps.event.trigger(myMarker, 'click');
}
 
google.maps.event.addDomListener(window, 'load', initialize);
