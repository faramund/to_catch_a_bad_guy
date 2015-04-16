function gmapShowMap() {
  var mapOptions = {
          zoom: 20
        };
  var map = new google.maps.Map(document.getElementById('map'),mapOptions);
  return map;
};
function gmapDrawMarkerBadGuy(map, position){
  var marker = new google.maps.Marker({
    position: position,
    icon:  "http://www.fancyicons.com/free-icons/221/modern-anti-malware/png/48/thief_48.png",
    infowindow: "Tutaj jest poszukiwany!",
    map: map
  });
  return marker;
};

function gmapDrawMarkerYou(map){
  var marker = new google.maps.Marker({
    infowindow: "Tutaj jesteś.",
    map: map
  });
  gmapSetMarkerOnCurrentPosition(map,marker);
  return marker;
};

function gmapRefreshMarkers(marker, position){
  marker.setPosition(position);
};

function gmapSetMarkerOnCurrentPosition(map,marker){
  var browserSupportFlag =  new Boolean();
  var initialLocation;
  var siberia = new google.maps.LatLng(60, 105);
  var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
  // Try W3C Geolocation (Preferred)
  if(navigator.geolocation) {
    
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      marker.setPosition(initialLocation);
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
    
  }
      
  return initialLocation;
};

function gmapRefreshBadGuyMarker(marker){
  $.ajax({
        type: "GET",
        dataType: "json",
        url: "/get_bad_guy",
        success: function(data){
          var lat = parseFloat(data.lat);
          var lng = parseFloat(data.lng);
          var position = new google.maps.LatLng(lat,lng);
          marker.setPosition(position);
        }
  });
};
