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
          // console.log(typeof(layer_properties));
          // console.log(layer_properties);

          $(".modal-title").text(layer_id);
          $("#clickOnPixelModal").modal('show');

          var modalBodyId = document.getElementById(elementID);
          // console.log(modalBodyId)

          // Make table and put inside all data
          var tableDefinition = document.createElement("table");
          tableDefinition.classList.add("table");
          tableDefinition.classList.add("table-popup");
          var tableBody = document.createElement("tbody");
          tableDefinition.appendChild(tableBody);

          for (const [key, value] of Object.entries(layer_properties)) {
            var tableRow = document.createElement("tr");
            var rowHead = document.createElement("th");
            rowHead.classList.add("td-head")
            var rowCell = document.createElement("td")
            rowCell.classList.add("td-body")
            // console.log(key, value);

            var headContents = document.createTextNode(key + ": ");
            rowHead.appendChild(headContents);

            if (value == null) {
              var cellContents = document.createTextNode("NoData");
            } else {
              var cellContents = document.createTextNode(value);
            }
            rowCell.appendChild(cellContents);

            tableRow.appendChild(rowHead);
            tableRow.appendChild(rowCell);

            tableBody.appendChild(tableRow);

          }
          // console.log(tableDefinition);
          modalBodyId.innerHTML = ""; // Clear previous contents
          modalBodyId.appendChild(tableDefinition);

        }
      } catch (e) {
        console.log(e);
      }
    }
    getFeatureProperties();
  });
};
