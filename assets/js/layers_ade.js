// List of layers from Agenzia delle Entrate
var mappeAde = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'CP.CadastralZoning',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#mappeAde').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(mappeAde);
        getElementLegendImg('legendmappeAde', mappeAde, wmsSourceStabiae, 'mappeAde');
        layerOpacity(mappeAde, 'mappeAdeslider', 'OUTPUTmappeAde');
        layerZIndex(mappeAde, 'mappeAdezIndex', 'OUTPUTmappeAde');
        getElementInfo("layerInfo", mappeAde);
    } else {
        map.removeLayer(mappeAde);
    }
});

var particelleAde = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'ParticelleComplete',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#particelleAde').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(particelleAde);
        getElementLegendImg('legendparticelleAde', particelleAde, wmsSourceStabiae, 'particelleAde');
        layerOpacity(particelleAde, 'particelleAdeslider', 'OUTPUTparticelleAde');
        layerZIndex(particelleAde, 'particelleAdezIndex', 'OUTPUTparticelleAde');
        getElementInfo("layerInfo", particelleAde);
    } else {
        map.removeLayer(particelleAde);
    }
});