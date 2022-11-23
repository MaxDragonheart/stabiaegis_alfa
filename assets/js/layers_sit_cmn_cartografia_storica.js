// List of layers from Città Metropolitana di Napoli
proj4.defs('EPSG:32633', '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs +type=crs');
ol.proj.proj4.register(proj4);

var wmtsSource = 'http://sit.cittametropolitana.na.it/geoserver/gwc/service/wmts'

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

var ctrn2004 = new ol.layer.Tile();
$('#ctrn2004').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2004_CTRN',
            });
            ctrn2004.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(ctrn2004);
        layerOpacity(ctrn2004, 'ctrn2004slider', 'OUTPUTctrn2004');
        layerZIndex(ctrn2004, 'ctrn2004zIndex', 'OUTPUTctrn2004');
    } else {
        map.removeLayer(ctrn2004);
    }
});

var orca2004_5 = new ol.layer.Tile();
$('#orca2004_5').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2004-5_ORCA',
            });
            orca2004_5.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(orca2004_5);
        layerOpacity(orca2004_5, 'orca2004_5slider', 'OUTPUTorca2004_5');
        layerZIndex(orca2004_5, 'orca2004_5zIndex', 'OUTPUTorca2004_5');
    } else {
        map.removeLayer(orca2004_5);
    }
});

var agea2006 = new ol.layer.Tile();
$('#agea2006').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2006_AGEA',
            });
            agea2006.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(agea2006);
        layerOpacity(agea2006, 'agea2006slider', 'OUTPUTagea2006');
        layerZIndex(agea2006, 'agea2006zIndex', 'OUTPUTagea2006');
    } else {
        map.removeLayer(agea2006);
    }
});

var avioriprese2007 = new ol.layer.Tile();
$('#avioriprese2007').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2007_AVIORIPRESE',
            });
            avioriprese2007.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(avioriprese2007);
        layerOpacity(avioriprese2007, 'avioriprese2007slider', 'OUTPUTavioriprese2007');
        layerZIndex(avioriprese2007, 'avioriprese2007zIndex', 'OUTPUTavioriprese2007');
    } else {
        map.removeLayer(avioriprese2007);
    }
});

var agea2008 = new ol.layer.Tile();
$('#agea2008').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2008_AGEA',
            });
            agea2008.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(agea2008);
        layerOpacity(agea2008, 'agea2008slider', 'OUTPUTagea2008');
        layerZIndex(agea2008, 'agea2008zIndex', 'OUTPUTagea2008');
    } else {
        map.removeLayer(agea2008);
    }
});

var agea2011 = new ol.layer.Tile();
$('#agea2011').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2011_AGEA',
            });
            agea2011.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(agea2011);
        layerOpacity(agea2011, 'agea2011slider', 'OUTPUTagea2011');
        layerZIndex(agea2011, 'agea2011zIndex', 'OUTPUTagea2011');
    } else {
        map.removeLayer(agea2011);
    }
});

var ctr2011 = new ol.layer.Tile();
$('#ctr2011').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2011_CTR_5k',
            });
            ctr2011.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(ctr2011);
        layerOpacity(ctr2011, 'ctr2011slider', 'OUTPUTctr2011');
        layerZIndex(ctr2011, 'ctr2011zIndex', 'OUTPUTctr2011');
    } else {
        map.removeLayer(ctr2011);
    }
});

var agea2014 = new ol.layer.Tile();
$('#agea2014').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2014_AGEA',
            });
            agea2014.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(agea2014);
        layerOpacity(agea2014, 'agea2014slider', 'OUTPUTagea2014');
        layerZIndex(agea2014, 'agea2014zIndex', 'OUTPUTagea2014');
    } else {
        map.removeLayer(agea2014);
    }
});

var agea2017 = new ol.layer.Tile();
$('#agea2017').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2017_AGEA',
            });
            agea2017.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(agea2017);
        layerOpacity(agea2017, 'agea2017slider', 'OUTPUTagea2017');
        layerZIndex(agea2017, 'agea2017zIndex', 'OUTPUTagea2017');
    } else {
        map.removeLayer(agea2017);
    }
});

var pleiades2018 = new ol.layer.Tile();
$('#pleiades2018').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

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

        map.addLayer(pleiades2018);
        layerOpacity(pleiades2018, 'pleiades2018slider', 'OUTPUTpleiades2018');
        layerZIndex(pleiades2018, 'pleiades2018zIndex', 'OUTPUTpleiades2018');
    } else {
        map.removeLayer(pleiades2018);
    }
});

var worldview3_2019 = new ol.layer.Tile();
$('#worldview3_2019').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2019_Worldview3_rgb',
            });
            worldview3_2019.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(worldview3_2019);
        layerOpacity(worldview3_2019, 'worldview3_2019slider', 'OUTPUTworldview3_2019');
        layerZIndex(worldview3_2019, 'worldview3_2019zIndex', 'OUTPUTworldview3_2019');
    } else {
        map.removeLayer(worldview3_2019);
    }
});

var pleiades2020 = new ol.layer.Tile();
$('#pleiades2020').on('change', function() {
    let isChecked = $(this).is(':checked');
    if (isChecked) {

        fetch(wmtsSource + '?SERVICE=WMTS&request=GetCapabilities')
          .then(function (response) {
            return response.text();
          })
          .then(function (text) {
            var result = new ol.format.WMTSCapabilities().read(text);
            var options = ol.source.WMTS.optionsFromCapabilities(result, {
              layer: 'raster:2020_Pleiades-Superview1_RGB',
            });
            pleiades2020.setSource(new ol.source.WMTS(options));
          });

        map.addLayer(pleiades2020);
        layerOpacity(pleiades2020, 'pleiades2020slider', 'OUTPUTpleiades2020');
        layerZIndex(pleiades2020, 'pleiades2020zIndex', 'OUTPUTpleiades2020');
    } else {
        map.removeLayer(pleiades2020);
    }
});

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