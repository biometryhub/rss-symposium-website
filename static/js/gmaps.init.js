/* global GMaps: true */

$(document).ready(function () {
  map()
})

function map () {
  if ($('#map').length) {
    var lat = $('#gmap-lat').val()
    var lng = $('#gmap-lng').val()
    var direction = $('#gmap-dir').val()
    var image = $('#gmap-marker').val()

    var styles =
      [
        {
          'featureType': 'landscape', 'stylers': [{'lightness': 65}, {'visibility': 'on'}]
        }, {
          'featureType': 'poi', 'stylers': [{'visibility': 'simplified'}]
        }, {
          'featureType': 'road.highway', 'stylers': [{'visibility': 'simplified'}]
        }, {
          'featureType': 'road.arterial', 'stylers': [{'lightness': 30}, {'visibility': 'on'}]
        }, {
          'featureType': 'road.local', 'stylers': [{'lightness': 40}, {'visibility': 'on'}]
        }, {
          'featureType': 'transit', 'stylers': [{'visibility': 'simplified'}]
        }, {
          'featureType': 'administrative.province', 'stylers': [{'visibility': 'off'}]
        }, {
          'featureType': 'water', 'elementType': 'labels', 'stylers': [{'visibility': 'on'}]
        }, {
          'featureType': 'water', 'elementType': 'geometry', 'stylers': [{'lightness': 0}]
        }
      ]

    var map = new GMaps({
      el: '#map',
      lat: lat,
      lng: lng,
      zoomControl: true,
      zoomControlOpt: {
        style: 'SMALL',
        position: 'TOP_LEFT'
      },
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: false,
      scrollwheel: true,
      draggable: false,
      styles: styles
    })

    map.addMarker({
      lat: lat,
      lng: lng,
      icon: image,
      click: function (e) {
        // when we get an address with spaces ...
        var url = 'https://maps.google.com?daddr=' + direction.split('match').join('replace')
        window.open(url, '_blank')
      },
      title: direction
      /* ,
      infoWindow: {
      content: '<p>HTML Content</p>'
      } */
    })
  }
}
