// List of layers from Città Metropolitana di Napoli
var wmsSource = 'http://sit.cittametropolitana.na.it/geoserver/sit/ows?service=wms'

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

var emergenzeArche = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'aree_emergenza_archeol',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#emergenzeArche').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(emergenzeArche);
        getElementLegendImg('legendemergenzeArche', emergenzeArche, wmsSource, 'emergenzeArche');
        layerOpacity(emergenzeArche, 'emergenzeArcheslider', 'OUTPUTemergenzeArche');
        layerZIndex(emergenzeArche, 'emergenzeArchezIndex', 'OUTPUTemergenzeArche');
        getElementInfo("layerInfo", emergenzeArche);
    } else {
        map.removeLayer(emergenzeArche);
    }
});

var interessePaesaggistico = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'aree_interesse_paesaggi_ptm',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#interessePaesaggistico').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(interessePaesaggistico);
        getElementLegendImg('legendinteressePaesaggistico', interessePaesaggistico, wmsSource, 'interessePaesaggistico');
        layerOpacity(interessePaesaggistico, 'interessePaesaggisticoslider', 'OUTPUTinteressePaesaggistico');
        layerZIndex(interessePaesaggistico, 'interessePaesaggisticozIndex', 'OUTPUTinteressePaesaggistico');
        getElementInfo("layerInfo", interessePaesaggistico);
    } else {
        map.removeLayer(interessePaesaggistico);
    }
});

var naturaliPregio = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'aree_naturali_pregio_ptm',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#naturaliPregio').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(naturaliPregio);
        getElementLegendImg('legendnaturaliPregio', naturaliPregio, wmsSource, 'naturaliPregio');
        layerOpacity(naturaliPregio, 'naturaliPregioslider', 'OUTPUTnaturaliPregio');
        layerZIndex(naturaliPregio, 'naturaliPregiozIndex', 'OUTPUTnaturaliPregio');
        getElementInfo("layerInfo", naturaliPregio);
    } else {
        map.removeLayer(naturaliPregio);
    }
});

var naturaliProtette = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'aree_naturali_protette',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#naturaliProtette').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(naturaliProtette);
        getElementLegendImg('legendnaturaliProtette', naturaliProtette, wmsSource, 'naturaliProtette');
        layerOpacity(naturaliProtette, 'naturaliProtetteslider', 'OUTPUTnaturaliProtette');
        layerZIndex(naturaliProtette, 'naturaliProtettezIndex', 'OUTPUTnaturaliProtette');
        getElementInfo("layerInfo", naturaliProtette);
    } else {
        map.removeLayer(naturaliProtette);
    }
});

var zes = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'aree_zes',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#zes').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(zes);
        getElementLegendImg('legendzes', zes, wmsSource, 'zes');
        layerOpacity(zes, 'zesslider', 'OUTPUTzes');
        layerZIndex(zes, 'zeszIndex', 'OUTPUTzes');
        getElementInfo("layerInfo", zes);
    } else {
        map.removeLayer(zes);
    }
});
