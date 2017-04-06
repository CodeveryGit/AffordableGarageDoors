var map1;
function initMap() {
    map1 = new google.maps.Map(document.getElementById('google-map-1'), {
        center: {lat: -31.8932299, lng: 116.0323094},
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    });
    var marker1 = new google.maps.Marker({
        position: {lat: -31.8932299, lng: 116.0323094},
        title:"1/26 Elliott Street",
    });
    marker1.setMap(map1);
}
