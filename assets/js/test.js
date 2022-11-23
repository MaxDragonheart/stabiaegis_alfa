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

var wmtsSource = 'http://sit.cittametropolitana.na.it/geoserver/gwc/service/wmts'

var pleiades2018 = new ol.layer.Tile();
$('#pleiades2018').on('change', function() {

    fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2018_Pleaides_rgb',
            });
            pleiades2018.setSource(new ol.source.WMTS(options));
        });

});
map.addLayer(pleiades2018);