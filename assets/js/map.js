function layerOpacity(layerName, elementID, outputID){
  var control = document.getElementById(elementID);
  var output = document.getElementById(outputID);
  var listener = function () {
    output.innerText = control.value;
    layerName.setOpacity(control.value / 100);
  };
  control.addEventListener('input', listener);
  control.addEventListener('change', listener);
  output.innerText = control.value;
  layerName.setOpacity(control.value / 100);
};

function layerZIndex(layerName, elementID, outputID){
  var control = document.getElementById(elementID);
  var output = document.getElementById(outputID);
  var listener = function () {
    layerName.setZIndex(control.value);
  };
  control.addEventListener('input', listener);
  control.addEventListener('change', listener);
  layerName.setZIndex(control.value);
};

function getElementLegendImg(elementID, layerName, url, layer) {

  var updateLegend = function(resolution) {
    var divLegend = $("<div/>").attr("id","imgLegend"+elementID);
    $("#"+elementID).append(divLegend);
    // var legendImg = "https://geoserver.massimilianomoraca.me/geoserver/MassimilianoMoraca/wms/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=edificicasalnuovo"
    var legendImg = url + "?REQUEST=GetLegendGraphic&VERSION=2.0.0&FORMAT=image/png&LAYER=" + layer
    // console.log(legendImg);
    $("#imgLegend"+elementID).html('');
    $("#imgLegend"+elementID).append('<img class="legend-img" src=' + legendImg + '>')
  };

  var viewResolution = view.getResolution();
  updateLegend(viewResolution);

};
