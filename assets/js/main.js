// Main functions and basemap
var map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults({
        attribution: false
    }),
});
var scaleLine = new ol.control.ScaleLine({
    className: 'ol-scale-line',
    target: document.getElementById('scale-line')
});
map.addControl(scaleLine);
var attribution = new ol.control.Attribution({
    className: 'ol-attribution',
    label: 'a',
    collapsible: true,
    collapsed: true,
    target: document.getElementById('map-attribution'),
});
map.addControl(attribution);
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
$('#BASEMAP_OSM').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(osm);
        map.removeLayer(outdoors);
        map.removeLayer(monocromeGray);
        map.removeLayer(satellite);
    } else {
        map.removeLayer(osm);
    }
});
var mapAttribution = '<a href="https://massimilianomoraca.it/" target="_blank">Massimiliano Moraca</a> has created this map using <a href="https://openlayers.org/" target="_blank">OpenLayers</a>'
var userMapBox = 'maxdragonheart'
var tokenMapBox = 'pk.eyJ1IjoibWF4ZHJhZ29uaGVhcnQiLCJhIjoiY2p4a2k3a2twMmF2aDN4czhwMzBoZ2x1eCJ9.upAxT3LK0NCiP_jBcErzNw'
var outdoors = new ol.layer.Tile({
    title: 'Topographic',
    source: new ol.source.XYZ({
    attributions: mapAttribution,
        url: 'https://api.mapbox.com/styles/v1/' + userMapBox + '/'
            + 'cjxkimp5j5s0o1ct4b68n4x1p/tiles/256/{z}/{x}/{y}?'
            + 'access_token=' + tokenMapBox + ''
        }),
    zIndex: 0,
});
$('#BASEMAP_OUTDOORS').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(outdoors);
        map.removeLayer(osm);
        map.removeLayer(monocromeGray);
        map.removeLayer(satellite);
    } else {
        map.removeLayer(outdoors);
    }
});
var monocromeGray = new ol.layer.Tile({
    title: 'MonocromeGray',
    source: new ol.source.XYZ({
        attributions: mapAttribution,
        url: 'https://api.mapbox.com/styles/v1/' + userMapBox + '/'
            + 'ckcqb7nu809mu1inv9lfuj2ut/tiles/256/{z}/{x}/{y}?'
            + 'access_token=' + tokenMapBox + ''
    }),
    zIndex: 0,
});
$('#BASEMAP_MONOCROMEGRAY').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(monocromeGray);
        map.removeLayer(osm);
        map.removeLayer(outdoors);
        map.removeLayer(satellite);
    } else {
        map.removeLayer(monocromeGray);
    }
});
var satellite = new ol.layer.Tile({
    title: 'Satellite',
    source: new ol.source.XYZ({
        attributions: mapAttribution,
        url: 'https://api.mapbox.com/styles/v1/' + userMapBox + '/'
            + 'ck0l7j9cx27df1clhcyok70mk/tiles/256/{z}/{x}/{y}?'
            + 'access_token=' + tokenMapBox + ''
    }),
    zIndex: 0,
});
$('#BASEMAP_SATELLITE').on('change', function() {
let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(satellite);
        map.removeLayer(osm);
        map.removeLayer(outdoors);
        map.removeLayer(monocromeGray);
    } else {
        map.removeLayer(satellite);
    }
});

var mainUrl = 'http://0.0.0.0:8300/geoserver/'
var workspace = 'CastellammarediStabia'
var wmsSourceStabiae = mainUrl + workspace +'/wms'