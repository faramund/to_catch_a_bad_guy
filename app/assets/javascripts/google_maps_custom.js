function gmap_show(lat,lng) {
  if ((lat == null) || (lng == null) ) {    // validation check if coordinates are there
    return 0;
  }
  

  handler = Gmaps.build('Google');
  handler.buildMap({ internal: {id: 'map'}}, function(){
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(displayOnMap);

  });

  

};

function displayOnMap(position){
  var marker = handler.addMarker({
    lat: position.coords.latitude,
    lng: position.coords.longitude,
    picture: {
        url: "http://www.fancyicons.com/free-icons/221/modern-anti-malware/png/48/thief_48.png",
        width:  45,
        height: 40
      },
      infowindow: "Tutaj jest poszukiwany!"
  });
  handler.map.centerOn(marker);
};
