// List of layers from Città Metropolitana di Napoli
proj4.defs('EPSG:32633', '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs +type=crs');
ol.proj.proj4.register(proj4);

var wmtsSource = 'http://sit.cittametropolitana.na.it/geoserver/gwc/service/wmts'

var raster2021 = new ol.layer.Tile();
//map.addLayer(raster2021);

// fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (text) {
//     var result = new ol.format.WMTSCapabilities().read(text);
//     var options = ol.source.WMTS.optionsFromCapabilities(result, {
//       layer: 'raster:2021_Worldview3_RGB',
//     });
//     raster2021.setSource(new ol.source.WMTS(options));
//   });

$('#raster2021').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

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

        map.addLayer(raster2021);
        layerOpacity(raster2021, 'raster2021slider', 'OUTPUTraster2021');
        layerZIndex(raster2021, 'raster2021zIndex', 'OUTPUTraster2021');
    } else {
        map.removeLayer(raster2021);
    }
});
