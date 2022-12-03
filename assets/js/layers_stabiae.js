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
        'LAYERS': 'Antenne',
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
        getElementLegendImg('legendantenne', antenne, wmsSourceStabiae, 'Antenne');
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
        'LAYERS': 'Rete_Infr_telefonica',
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
        getElementLegendImg('legendreteTelefonica', reteTelefonica, wmsSourceStabiae, 'Rete_Infr_telefonica');
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
        'LAYERS': 'Rete_Fognatura_Collettori',
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
        getElementLegendImg('legendcollettoreFognario', collettoreFognario, wmsSourceStabiae, 'Rete_Fognatura_Collettori');
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
        'LAYERS': 'Depuratore',
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
        getElementLegendImg('legenddepuratore', depuratore, wmsSourceStabiae, 'Depuratore');
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
        'LAYERS': 'Rete_Elettrodotti',
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
        getElementLegendImg('legendelettrodottoLocale', elettrodottoLocale, wmsSourceStabiae, 'Rete_Elettrodotti');
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
        'LAYERS': 'Rete_Pubb_illuminazione',
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
        getElementLegendImg('legendretePubblicaIlluminazione', retePubblicaIlluminazione, wmsSourceStabiae, 'Rete_Pubb_illuminazione');
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
        getElementLegendImg('legendedificiPubbliciCensiti', edificiPubbliciCensiti, wmsSourceStabiae, 'stima_produzione_da_fotovoltaico');
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
        'LAYERS': 'Dividente_demaniale',
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
        getElementLegendImg('legenddividenteDemaniale', dividenteDemaniale, wmsSourceStabiae, 'Dividente_demaniale');
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
        getElementLegendImg('legenddsmLidar', dsmLidar, wmsSourceStabiae, 'dsm_1m');
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
        getElementLegendImg('legenddtmLidar', dtmLidar, wmsSourceStabiae, 'dtm_1m');
        layerOpacity(dtmLidar, 'dtmLidarslider', 'OUTPUTdtmLidar');
        layerZIndex(dtmLidar, 'dtmLidarzIndex', 'OUTPUTdtmLidar');
        getElementInfo("layerInfo", dtmLidar);
    } else {
        map.removeLayer(dtmLidar);
    }
});

var alberiMonumentali = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'Alberi_monumentali',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#alberiMonumentali').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(alberiMonumentali);
        getElementLegendImg('legendalberiMonumentali', alberiMonumentali, wmsSourceStabiae, 'Alberi_monumentali');
        layerOpacity(alberiMonumentali, 'alberiMonumentalislider', 'OUTPUTalberiMonumentali');
        layerZIndex(alberiMonumentali, 'alberiMonumentalizIndex', 'OUTPUTalberiMonumentali');
        getElementInfo("layerInfo", alberiMonumentali);
    } else {
        map.removeLayer(alberiMonumentali);
    }
});

var mareggiate = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'Aree_attenzione_mareggiate',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#mareggiate').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(mareggiate);
        getElementLegendImg('legendmareggiate', mareggiate, wmsSourceStabiae, 'Aree_attenzione_mareggiate');
        layerOpacity(mareggiate, 'mareggiateslider', 'OUTPUTmareggiate');
        layerZIndex(mareggiate, 'mareggiatezIndex', 'OUTPUTmareggiate');
        getElementInfo("layerInfo", mareggiate);
    } else {
        map.removeLayer(mareggiate);
    }
});

var areeBoscate = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'Aree_boscate',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#areeBoscate').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(areeBoscate);
        getElementLegendImg('legendareeBoscate', areeBoscate, wmsSourceStabiae, 'Aree_boscate');
        layerOpacity(areeBoscate, 'areeBoscateslider', 'OUTPUTareeBoscate');
        layerZIndex(areeBoscate, 'areeBoscatezIndex', 'OUTPUTareeBoscate');
        getElementInfo("layerInfo", areeBoscate);
    } else {
        map.removeLayer(areeBoscate);
    }
});

var beniReligiosi = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'Beni_Religiosi',
        //'STYLES': 'CLC2018',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#beniReligiosi').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(beniReligiosi);
        getElementLegendImg('legendbeniReligiosi', beniReligiosi, wmsSourceStabiae, 'Beni_Religiosi');
        layerOpacity(beniReligiosi, 'beniReligiosislider', 'OUTPUTbeniReligiosi');
        layerZIndex(beniReligiosi, 'beniReligiosizIndex', 'OUTPUTbeniReligiosi');
        getElementInfo("layerInfo", beniReligiosi);
    } else {
        map.removeLayer(beniReligiosi);
    }
});
