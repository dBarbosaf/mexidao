$(document).on("click","#camera",function(){

  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true,
});

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});

function editImage() {
              
  var escala  = $("#escala").val();
  var blur 	  = $("#blur").val();
  var opaci   = $("#opaci").val();
  var saturacao = $("#saturacao").val();

  var filter = 'grayscale(' + escala+ '%) blur(' + blur + 'px) opacity(' + opaci + '%) saturate(' + saturacao + '%)';

$("#imagem").css("filter", filter);

}
$("input[type=range]").change(editImage).mousemove(editImage);

  $(document).on("click", ".mostrarMapa", function(){



   var onSuccess = function(position) {

   L.mapquest.key = 'jYWjOOwllSutJAYQBJGkV3vtH5pH7dmd';

        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15,

        });
};

      navigator.geolocation.getCurrentPosition(onSuccess);

});
 $(document).on("click", "#alert", function(){
 alert('Daniel Fofo');
 
 });