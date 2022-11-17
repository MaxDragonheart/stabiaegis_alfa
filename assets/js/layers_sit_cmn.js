// List of layers from Città Metropolitana di Napoli
var wmsSource = 'http://sit.cittametropolitana.na.it/geoserver/sit/ows?service=wms'

/*var ambitiSistemaPorti = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'ambiti_sistema_porti',
        //'STYLES': null,
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 99,
    opacity: 1.00
});
map.addLayer(ambitiSistemaPorti);
// getElementInfo(""layerInfo"", confineComunale);*/

var ambitiSistemaPorti = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'ambiti_sistema_porti',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#ambitiSistemaPorti').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(ambitiSistemaPorti);
        getElementLegendImg('legendambitiSistemaPorti', ambitiSistemaPorti, wmsSource, 'ambitiSistemaPorti');
        layerOpacity(ambitiSistemaPorti, 'ambitiSistemaPortislider', 'OUTPUTambitiSistemaPorti');
        layerZIndex(ambitiSistemaPorti, 'ambitiSistemaPortizIndex', 'OUTPUTambitiSistemaPorti');
        getElementInfo("layerInfo", ambitiSistemaPorti);
    } else {
        map.removeLayer(ambitiSistemaPorti);
    }
});
