// List of layers and relative functionalities

var confineComunale = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'confine_comunale_istat2021',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 99,
    opacity: 1.00
});
map.addLayer(confineComunale);

var antenne = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'Antenne',
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

var interesseStoricoArtistico = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'Beni_di_interesse_storico_artistico',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#interesseStoricoArtistico').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(interesseStoricoArtistico);
        getElementLegendImg('legendinteresseStoricoArtistico', interesseStoricoArtistico, wmsSourceStabiae, 'Beni_di_interesse_storico_artistico');
        layerOpacity(interesseStoricoArtistico, 'interesseStoricoArtisticoslider', 'OUTPUTinteresseStoricoArtistico');
        layerZIndex(interesseStoricoArtistico, 'interesseStoricoArtisticozIndex', 'OUTPUTinteresseStoricoArtistico');
        getElementInfo("layerInfo", interesseStoricoArtistico);
    } else {
        map.removeLayer(interesseStoricoArtistico);
    }
});

var prgVigente = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'PRG_vigente_2007',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#prgVigente').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(prgVigente);
        getElementLegendImg('legendprgVigente', prgVigente, wmsSourceStabiae, 'PRG_vigente_2007');
        layerOpacity(prgVigente, 'prgVigenteslider', 'OUTPUTprgVigente');
        layerZIndex(prgVigente, 'prgVigentezIndex', 'OUTPUTprgVigente');
        getElementInfo("layerInfo", prgVigente);
    } else {
        map.removeLayer(prgVigente);
    }
});

var pucProposta = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'Proposta_PUC_CdS_2022',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#pucProposta').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(pucProposta);
        getElementLegendImg('legendpucProposta', pucProposta, wmsSourceStabiae, 'Proposta_PUC_CdS_2022');
        layerOpacity(pucProposta, 'pucPropostaslider', 'OUTPUTpucProposta');
        layerZIndex(pucProposta, 'pucPropostazIndex', 'OUTPUTpucProposta');
        getElementInfo("layerInfo", pucProposta);
    } else {
        map.removeLayer(pucProposta);
    }
});

var beniVincolati = new ol.layer.Tile({
    source: new ol.source.TileWMS({
    url: wmsSourceStabiae,
    params: {
        'LAYERS': 'Beni_vincolati',
    }
    }),
    minZoom: 0,
    maxZoom: 28,
    zIndex: 1,
    opacity: 1.00
});
$('#beniVincolati').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {
        map.addLayer(beniVincolati);
        getElementLegendImg('legendbeniVincolati', beniVincolati, wmsSourceStabiae, 'Beni_vincolati');
        layerOpacity(beniVincolati, 'beniVincolatislider', 'OUTPUTbeniVincolati');
        layerZIndex(beniVincolati, 'beniVincolatizIndex', 'OUTPUTbeniVincolati');
        getElementInfo("layerInfo", beniVincolati);
    } else {
        map.removeLayer(beniVincolati);
    }
});
