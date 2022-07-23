
function init() {
    const map = new google.maps.Map((mapClass), {
        zoom: 12,
        center:{ lat: 48.445987, lng: 35.0312414 }
    });
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                map.setCenter(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
            });
    }
    else{
        navigator.geolocation.getCurrentPosition(
            function(position) {
                map.setCenter(new google.maps.LatLng(48.445987,35.0312414));
            });
    }

}


setTimeout(()=>{
    init()
})