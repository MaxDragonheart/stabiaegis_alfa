// List of layers and relative functionalities

var confineComunale = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'confine_comunale_istat2021',
        //'STYLES': null,
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 99,
    opacity: 1.00
});
map.addLayer(confineComunale);
// getElementInfo(""layerInfo"", confineComunale);

var antenne = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'antenne',
        //'STYLES': null,
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#antenne').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(antenne);
        getElementLegendImg('legendantenne', antenne, wmsSourceStabiae, 'antenne');
        layerOpacity(antenne, 'antenneslider', 'OUTPUTantenne');
        layerZIndex(antenne, 'antennezIndex', 'OUTPUTantenne');
        getElementInfo("layerInfo", antenne);
    } else {
        map.removeLayer(antenne);
    }
});

var reteTelefonica = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'rete_telefonica',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#reteTelefonica').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(reteTelefonica);
        getElementLegendImg('legendreteTelefonica', reteTelefonica, wmsSourceStabiae, 'rete_telefonica');
        layerOpacity(reteTelefonica, 'reteTelefonicaslider', 'OUTPUTreteTelefonica');
        layerZIndex(reteTelefonica, 'reteTelefonicazIndex', 'OUTPUTreteTelefonica');
        getElementInfo("layerInfo", reteTelefonica);
    } else {
        map.removeLayer(reteTelefonica);
    }
});

var collettoreFognario = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'collettore_fognario',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#collettoreFognario').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(collettoreFognario);
        getElementLegendImg('legendcollettoreFognario', collettoreFognario, wmsSourceStabiae, 'collettore_fognario');
        layerOpacity(collettoreFognario, 'collettoreFognarioslider', 'OUTPUTcollettoreFognario');
        layerZIndex(collettoreFognario, 'collettoreFognariozIndex', 'OUTPUTcollettoreFognario');
        getElementInfo("layerInfo", collettoreFognario);
    } else {
        map.removeLayer(collettoreFognario);
    }
});

var depuratore = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'depuratore',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#depuratore').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(depuratore);
        getElementLegendImg('legenddepuratore', depuratore, wmsSourceStabiae, 'depuratore');
        layerOpacity(depuratore, 'depuratoreslider', 'OUTPUTdepuratore');
        layerZIndex(depuratore, 'depuratorezIndex', 'OUTPUTdepuratore');
        getElementInfo("layerInfo", depuratore);
    } else {
        map.removeLayer(depuratore);
    }
});

var elettrodottoLocale = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'elettrodotto_locale',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#elettrodottoLocale').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(elettrodottoLocale);
        getElementLegendImg('legendelettrodottoLocale', elettrodottoLocale, wmsSourceStabiae, 'elettrodotto_locale');
        layerOpacity(elettrodottoLocale, 'elettrodottoLocaleslider', 'OUTPUTelettrodottoLocale');
        layerZIndex(elettrodottoLocale, 'elettrodottoLocalezIndex', 'OUTPUTelettrodottoLocale');
        getElementInfo("layerInfo", elettrodottoLocale);
    } else {
        map.removeLayer(elettrodottoLocale);
    }
});

var retePubblicaIlluminazione = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'rete_pubblica_illuminazione',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#retePubblicaIlluminazione').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(retePubblicaIlluminazione);
        getElementLegendImg('legendretePubblicaIlluminazione', retePubblicaIlluminazione, wmsSourceStabiae, 'rete_pubblica_illuminazione');
        layerOpacity(retePubblicaIlluminazione, 'retePubblicaIlluminazioneslider', 'OUTPUTretePubblicaIlluminazione');
        layerZIndex(retePubblicaIlluminazione, 'retePubblicaIlluminazionezIndex', 'OUTPUTretePubblicaIlluminazione');
        getElementInfo("layerInfo", retePubblicaIlluminazione);
    } else {
        map.removeLayer(retePubblicaIlluminazione);
    }
});

var edificiPubbliciCensiti = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'stima_produzione_da_fotovoltaico',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#edificiPubbliciCensiti').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(edificiPubbliciCensiti);
        getElementLegendImg('legendedificiPubbliciCensiti', edificiPubbliciCensiti, wmsSourceStabiae, 'edifici_pubblici_censiti');
        layerOpacity(edificiPubbliciCensiti, 'edificiPubbliciCensitislider', 'OUTPUTedificiPubbliciCensiti');
        layerZIndex(edificiPubbliciCensiti, 'edificiPubbliciCensitizIndex', 'OUTPUTedificiPubbliciCensiti');
        getElementInfo("layerInfo", edificiPubbliciCensiti);
    } else {
        map.removeLayer(edificiPubbliciCensiti);
    }
});

var dividenteDemaniale = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'dividente_demaniale',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#dividenteDemaniale').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(dividenteDemaniale);
        getElementLegendImg('legenddividenteDemaniale', dividenteDemaniale, wmsSourceStabiae, 'dividente_demaniale');
        layerOpacity(dividenteDemaniale, 'dividenteDemanialeslider', 'OUTPUTdividenteDemaniale');
        layerZIndex(dividenteDemaniale, 'dividenteDemanialezIndex', 'OUTPUTdividenteDemaniale');
        getElementInfo("layerInfo", dividenteDemaniale);
    } else {
        map.removeLayer(dividenteDemaniale);
    }
});

var proprietaPubbliche = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'proprieta_pubbliche',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#proprietaPubbliche').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(proprietaPubbliche);
        getElementLegendImg('legendproprietaPubbliche', proprietaPubbliche, wmsSourceStabiae, 'proprieta_pubbliche');
        layerOpacity(proprietaPubbliche, 'proprietaPubblicheslider', 'OUTPUTproprietaPubbliche');
        layerZIndex(proprietaPubbliche, 'proprietaPubblichezIndex', 'OUTPUTproprietaPubbliche');
        getElementInfo("layerInfo", proprietaPubbliche);
    } else {
        map.removeLayer(proprietaPubbliche);
    }
});

var dsmLidar = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'dsm_1m',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#dsmLidar').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(dsmLidar);
        getElementLegendImg('legenddsmLidar', dsmLidar, wmsSourceStabiae, 'dsm_lidar_1m');
        layerOpacity(dsmLidar, 'dsmLidarslider', 'OUTPUTdsmLidar');
        layerZIndex(dsmLidar, 'dsmLidarzIndex', 'OUTPUTdsmLidar');
        getElementInfo("layerInfo", dsmLidar);
    } else {
        map.removeLayer(dsmLidar);
    }
});

var dtmLidar = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'dtm_1m',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#dtmLidar').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(dtmLidar);
        getElementLegendImg('legenddtmLidar', dtmLidar, wmsSourceStabiae, 'dtm_lidar_1m');
        layerOpacity(dtmLidar, 'dtmLidarslider', 'OUTPUTdtmLidar');
        layerZIndex(dtmLidar, 'dtmLidarzIndex', 'OUTPUTdtmLidar');
        getElementInfo("layerInfo", dtmLidar);
    } else {
        map.removeLayer(dtmLidar);
    }
});
