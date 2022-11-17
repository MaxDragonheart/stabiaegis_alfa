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

var art136 = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'art136',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#art136').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(art136);
        getElementLegendImg('legendart136', art136, wmsSource, 'art136');
        layerOpacity(art136, 'art136slider', 'OUTPUTart136');
        layerZIndex(art136, 'art136zIndex', 'OUTPUTart136');
        getElementInfo("layerInfo", art136);
    } else {
        map.removeLayer(art136);
    }
});

var art142_m = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'art142_m',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#art142_m').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(art142_m);
        getElementLegendImg('legendart142_m', art142_m, wmsSource, 'art142_m');
        layerOpacity(art142_m, 'art142_mslider', 'OUTPUTart142_m');
        layerZIndex(art142_m, 'art142_mzIndex', 'OUTPUTart142_m');
        getElementInfo("layerInfo", art142_m);
    } else {
        map.removeLayer(art142_m);
    }
});

var asi = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'asi',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#asi').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(asi);
        getElementLegendImg('legendasi', asi, wmsSource, 'asi');
        layerOpacity(asi, 'asislider', 'OUTPUTasi');
        layerZIndex(asi, 'asizIndex', 'OUTPUTasi');
        getElementInfo("layerInfo", asi);
    } else {
        map.removeLayer(asi);
    }
});

var asi_varianti = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'asi_varianti',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#asi_varianti').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(asi_varianti);
        getElementLegendImg('legendasi_varianti', asi_varianti, wmsSource, 'asi_varianti');
        layerOpacity(asi_varianti, 'asi_variantislider', 'OUTPUTasi_varianti');
        layerZIndex(asi_varianti, 'asi_variantizIndex', 'OUTPUTasi_varianti');
        getElementInfo("layerInfo", asi_varianti);
    } else {
        map.removeLayer(asi_varianti);
    }
});

var cave_prae = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'cave_prae',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#cave_prae').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(cave_prae);
        getElementLegendImg('legendcave_prae', cave_prae, wmsSource, 'cave_prae');
        layerOpacity(cave_prae, 'cave_praeslider', 'OUTPUTcave_prae');
        layerZIndex(cave_prae, 'cave_praezIndex', 'OUTPUTcave_prae');
        getElementInfo("layerInfo", cave_prae);
    } else {
        map.removeLayer(cave_prae);
    }
});

var edifici_scolastici = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSource,
    params: {
        'LAYERS': 'edifici_scolastici',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#edifici_scolastici').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(edifici_scolastici);
        getElementLegendImg('legendedifici_scolastici', edifici_scolastici, wmsSource, 'edifici_scolastici');
        layerOpacity(edifici_scolastici, 'edifici_scolasticislider', 'OUTPUTedifici_scolastici');
        layerZIndex(edifici_scolastici, 'edifici_scolasticizIndex', 'OUTPUTedifici_scolastici');
        getElementInfo("layerInfo", edifici_scolastici);
    } else {
        map.removeLayer(edifici_scolastici);
    }
});