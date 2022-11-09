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
    var legendImg = url + "?REQUEST=GetLegendGraphic&VERSION=2.0.0&FORMAT=image/png&LAYER=" + layer
    // console.log(legendImg);
    $("#imgLegend"+elementID).html('');
    $("#imgLegend"+elementID).append('<img class="legend-img" src=' + legendImg + '>')
  };

  var viewResolution = view.getResolution();
  updateLegend(viewResolution);

};

function getElementInfo(elementID, layerName){
  map.on('singleclick', function (event) {
    var viewResolution = view.getResolution();
    var coordinates = event.coordinate;
    var epsg = 'EPSG:3857';
    var params = {
        'INFO_FORMAT': 'application/json'
      };
    var url = layerName.getSource().getFeatureInfoUrl(
      coordinates,
      viewResolution,
      epsg,
      params,
    );
    // console.log(url);
    async function getFeatureProperties() {
      try {
        var response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error!\n Status: ${response.status}\n Type: ${response.type}\n URL: ${response.url}`);
        } else {
          var data = await response.text();
          var json = JSON.parse(data).features[0]
          var layer_id = json.id;
          var layer_properties = json.properties;
          console.log(typeof(layer_properties));
          console.log(layer_properties);

          $(".modal-title").text(layer_id);
          // $(".modal-body").text("prova prova");
          $("#clickOnPixelModal").modal('show');

          var tableHeadContents = '<thead></thead>';
          var tableHead = $(tableHeadContents).attr("id","thead");
          $("#"+elementID).html('');
          $("#"+elementID).append(tableHead);
          var tableBodyContents = '<tbody></tbody>';
          var tableBody = $(tableBodyContents).attr("id","tbody"+elementID);
          $("#"+elementID).append(tableBody);
          for (const [key, value] of Object.entries(layer_properties)) {
            // console.log(key, value);
            tableRow = '<tr><td class="td-head">' + key + '</td><td class="td-body">' + value + '</td></tr>';
            $("#tbody"+elementID).append(tableRow);
          }
          // console.log(tableHeadContents);

        }
      } catch (e) {
        console.log(e);
      }
    }
    getFeatureProperties();
  });
};
