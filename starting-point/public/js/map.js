$(function initializeMap (){

  var fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  var styleArr = [{
    featureType: 'landscape',
    stylers: [{ saturation: -100 }, { lightness: 60 }]
  }, {
    featureType: 'road.local',
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
  }, {
    featureType: 'transit',
    stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
  }, {
    featureType: 'administrative.province',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    stylers: [{ visibility: 'on' }, { lightness: 30 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
  }];

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  var markerArr = [];

  function drawMarker (type, coords, inputName) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng,
      name: inputName,
    });
    marker.setMap(currentMap);
    markerArr.push(marker)
  }

  function removeMarker(name){
    console.log(markerArr)
    console.log('fired')
    for (var i=0; i<markerArr.length; i++){
      if (markerArr[i].name === name) {
        markerArr[i].setMap(null);
        markerArr.splice(i,1);
      }
    }
  }


    $('#addHotel').on('click', function(){
    $('#hotel-item').prepend('<span class="title">' + $('#hotel-choices').val() + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>')
          for (var i = 0; i < hotels.length; i++) {
            if (hotels[i].name === $('#hotel-choices').val()) {
                drawMarker('hotel', hotels[i].place.location, $('#hotel-choices').val());        
            }
          }

      $('.remove').on('click', function() {
      removeMarker($(this).prev().text());
      $(this).prev().remove()
      $(this).remove()
      
    })

 });

    var counter = 2;

    $('#day-add').on('click', function() {
      console.log("firing")
      $('<button class="btn btn-circle day-btn current-day">' + counter + '</button>').insertBefore($(this))
      counter++;
    })




  // drawMarker('restaurant', [40.705137, -74.013940]);
  // drawMarker('activity', [40.716291, -73.995315]);

});