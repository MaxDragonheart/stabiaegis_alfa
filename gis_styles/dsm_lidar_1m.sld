<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" version="1.0.0" xmlns:gml="http://www.opengis.net/gml" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>dsm_lidar_1m</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry label="0" quantity="0" color="#050603"/>
              <sld:ColorMapEntry label="0,2300" quantity="0.2299541923034938" color="#333724"/>
              <sld:ColorMapEntry label="4,7822" quantity="4.782236970607433" color="#1e472f"/>
              <sld:ColorMapEntry label="8,1650" quantity="8.165031058544884" color="#37744b"/>
              <sld:ColorMapEntry label="22,9800" quantity="22.98003296377328" color="#52955d"/>
              <sld:ColorMapEntry label="96,6598" quantity="96.65979178208808" color="#8cb06a"/>
              <sld:ColorMapEntry label="313,7697" quantity="313.7697242301668" color="#d1cc76"/>
              <sld:ColorMapEntry label="492,5497" quantity="492.549701813832" color="#ceb163"/>
              <sld:ColorMapEntry label="759,7697" quantity="759.7697358460169" color="#b37d3e"/>
              <sld:ColorMapEntry label="1229,8096" quantity="1229.809565762494" color="#d77f3f"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
