// List of layers from Città Metropolitana di Napoli
var wmtsSource = 'http://sit.cittametropolitana.na.it/geoserver/gwc/service/wmts'

var raster2021 = new ol.layer.Tile({
    source: new ol.source.WMTS({
        url: wmtsSource,
        layer: 'raster:2021_Worldview3_RGB',
        format: 'image/jpg',
        style: 'default',
        wrapX: true,
    }),
    // minZoom: 0,
    // maxZoom: 28,
    // zIndex: 1,
    // opacity: 1.00
});
map.addLayer(raster2021);
// $('#raster2021').on('change', function() {
//     let isChecked = $(this).is(':checked');
//     if (isChecked) {
//         map.addLayer(raster2021);
//         layerOpacity(raster2021, 'raster2021slider', 'OUTPUTraster2021');
//         layerZIndex(raster2021, 'raster2021zIndex', 'OUTPUTraster2021');
//     } else {
//         map.removeLayer(raster2021);
//     }
// });
