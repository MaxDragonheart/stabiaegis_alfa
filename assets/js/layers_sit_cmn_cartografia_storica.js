// List of layers from Città Metropolitana di Napoli
proj4.defs('EPSG:32633', '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs +type=crs');
ol.proj.proj4.register(proj4);

var wmtsSource = 'http://sit.cittametropolitana.na.it/geoserver/gwc/service/wmts'

var raster2021 = new ol.layer.Tile();
$('#raster2021').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2021_Worldview3_RGB',
            });
            raster2021.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(raster2021);
        layerOpacity(raster2021, 'raster2021slider', 'OUTPUTraster2021');
        layerZIndex(raster2021, 'raster2021zIndex', 'OUTPUTraster2021');
    } else {
        map.removeLayer(raster2021);
    }
});

var igm1860 = new ol.layer.Tile();
$('#igm1860').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:1860_IGM',
            });
            igm1860.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(igm1860);
        layerOpacity(igm1860, 'igm1860slider', 'OUTPUTigm1860');
        layerZIndex(igm1860, 'igm1860zIndex', 'OUTPUTigm1860');
    } else {
        map.removeLayer(igm1860);
    }
});

var igm1936 = new ol.layer.Tile();
$('#igm1936').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:1936_IGM',
            });
            igm1936.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(igm1936);
        layerOpacity(igm1936, 'igm1936slider', 'OUTPUTigm1936');
        layerZIndex(igm1936, 'igm1936zIndex', 'OUTPUTigm1936');
    } else {
        map.removeLayer(igm1936);
    }
});

var ctp1965 = new ol.layer.Tile();
$('#ctp1965').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:1965_CTP_RGB',
            });
            ctp1965.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(ctp1965);
        layerOpacity(ctp1965, 'ctp1965slider', 'OUTPUTctp1965');
        layerZIndex(ctp1965, 'ctp1965zIndex', 'OUTPUTctp1965');
    } else {
        map.removeLayer(ctp1965);
    }
});

var alisud1974 = new ol.layer.Tile();
$('#alisud1974').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:1974_ALISUD',
            });
            alisud1974.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(alisud1974);
        layerOpacity(alisud1974, 'alisud1974slider', 'OUTPUTalisud1974');
        layerZIndex(alisud1974, 'alisud1974zIndex', 'OUTPUTalisud1974');
    } else {
        map.removeLayer(alisud1974);
    }
});

var alisud1974_89 = new ol.layer.Tile();
$('#alisud1974_89').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:1974_ALISUD_AGG_STR_89',
            });
            alisud1974_89.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(alisud1974_89);
        layerOpacity(alisud1974_89, 'alisud1974_89slider', 'OUTPUTalisud1974_89');
        layerZIndex(alisud1974_89, 'alisud1974_89zIndex', 'OUTPUTalisud1974_89');
    } else {
        map.removeLayer(alisud1974_89);
    }
});

var agea1997 = new ol.layer.Tile();
$('#agea1997').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:1997_AGEA',
            });
            agea1997.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(agea1997);
        layerOpacity(agea1997, 'agea1997slider', 'OUTPUTagea1997');
        layerZIndex(agea1997, 'agea1997zIndex', 'OUTPUTagea1997');
    } else {
        map.removeLayer(agea1997);
    }
});

var it2k1998 = new ol.layer.Tile();
$('#it2k1998').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:1998_IT2K',
            });
            it2k1998.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(it2k1998);
        layerOpacity(it2k1998, 'it2k1998slider', 'OUTPUTit2k1998');
        layerZIndex(it2k1998, 'it2k1998zIndex', 'OUTPUTit2k1998');
    } else {
        map.removeLayer(it2k1998);
    }
});

var agea1999 = new ol.layer.Tile();
$('#agea1999').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2000_AGEA',
            });
            agea1999.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(agea1999);
        layerOpacity(agea1999, 'agea1999slider', 'OUTPUTagea1999');
        layerZIndex(agea1999, 'agea1999zIndex', 'OUTPUTagea1999');
    } else {
        map.removeLayer(agea1999);
    }
});

var agea2000 = new ol.layer.Tile();
$('#agea2000').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2000_AGEA',
            });
            agea2000.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(agea2000);
        layerOpacity(agea2000, 'agea2000slider', 'OUTPUTagea2000');
        layerZIndex(agea2000, 'agea2000zIndex', 'OUTPUTagea2000');
    } else {
        map.removeLayer(agea2000);
    }
});

var agea2001 = new ol.layer.Tile();
$('#agea2001').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2001_AGEA',
            });
            agea2001.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(agea2001);
        layerOpacity(agea2001, 'agea2001slider', 'OUTPUTagea2001');
        layerZIndex(agea2001, 'agea2001zIndex', 'OUTPUTagea2001');
    } else {
        map.removeLayer(agea2001);
    }
});