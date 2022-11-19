// For test ONLY
var map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults({
        attribution: false
    }),
});
var view = new ol.View({
    center: ol.proj.fromLonLat([14.483733304611981, 40.69930245824812]),
    zoom: 14,
    maxZoom: 20,
    minZoom: 12
});
map.setView(view);

var osm = new ol.layer.Tile({
    source: new ol.source.OSM(),
    zIndex: 0
});
map.addLayer(osm);

proj4.defs('EPSG:32633', '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs +type=crs');
ol.proj.proj4.register(proj4);

var wmtsSource = 'http://sit.cittametropolitana.na.it/geoserver/gwc/service/wmts'

var raster2021 = new ol.layer.Tile();
map.addLayer(raster2021);

fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    var result = new ol.format.WMTSCapabilities().read(text);
    var options = ol.source.WMTS.optionsFromCapabilities(result, {
      layer: 'raster:2021_Worldview3_RGB',
    });
    raster2021.setSource(new ol.source.WMTS(options));
  });

// function getElementInfo(elementID, layerName){
//   map.on('singleclick', function (event) {
//     var viewResolution = view.getResolution();
//     var coordinates = event.coordinate;
//     var epsg = 'EPSG:3857';
//     var params = {
//         'INFO_FORMAT': 'application/json'
//       };
//     var url = layerName.getSource().getFeatureInfoUrl(
//       coordinates,
//       viewResolution,
//       epsg,
//       params,
//     );
//     // console.log(url);
//     async function getFeatureProperties() {
//       try {
//         var response = await fetch(url);
//
//         if (!response.ok) {
//           throw new Error(`HTTP error!\n Status: ${response.status}\n Type: ${response.type}\n URL: ${response.url}`);
//         } else {
//           var data = await response.text();
//           var json = JSON.parse(data).features[0]
//           var layer_id = json.id;
//           var layer_properties = json.properties;
//           // console.log(typeof(layer_properties));
//           // console.log(layer_properties);
//
//           $(".modal-title").text(layer_id);
//           $("#clickOnPixelModal").modal('show');
//
//           var modalBodyId = document.getElementById(elementID);
//           // console.log(modalBodyId)
//
//           // Make table and put inside all data
//           var tableDefinition = document.createElement("table");
//           tableDefinition.classList.add("table");
//           tableDefinition.classList.add("table-popup");
//           var tableBody = document.createElement("tbody");
//           tableDefinition.appendChild(tableBody);
//
//           for (const [key, value] of Object.entries(layer_properties)) {
//             var tableRow = document.createElement("tr");
//             var rowHead = document.createElement("th");
//             rowHead.classList.add("td-head")
//             var rowCell = document.createElement("td")
//             rowCell.classList.add("td-body")
//             // console.log(key, value);
//
//             var headContents = document.createTextNode(key + ": ");
//             rowHead.appendChild(headContents);
//
//             if (value == null) {
//               var cellContents = document.createTextNode("NoData");
//             } else {
//               var cellContents = document.createTextNode(value);
//             }
//             rowCell.appendChild(cellContents);
//
//             tableRow.appendChild(rowHead);
//             tableRow.appendChild(rowCell);
//
//             tableBody.appendChild(tableRow);
//
//           }
//           // console.log(tableDefinition);
//           modalBodyId.appendChild(tableDefinition);
//
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     }
//     getFeatureProperties();
//   });
// };
//
// var mainUrl = 'http://0.0.0.0:8300/geoserver/'
// var workspace = 'CastellammarediStabia'
// var wmsSource = mainUrl + workspace +'/wms'
//
// var antenne = new ol.layer.Tile({
//     source: new ol.source.TileWMS({
//     url: wmsSource,
//     params: {
//         'LAYERS': 'antenne',
//     }
//     }),
//     minZoom: 0,
//     maxZoom: 28,
//     zIndex: 1,
//     opacity: 1.00
// });
// map.addLayer(antenne);
// getElementInfo("layerInfo", antenne);
