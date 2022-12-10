<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" version="1.0.0" xmlns:gml="http://www.opengis.net/gml" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>dtm_lidar_1m</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry label="0,0000" quantity="0" color="#050603"/>
              <sld:ColorMapEntry label="0,2081" quantity="0.2081156745341062" color="#333724"/>
              <sld:ColorMapEntry label="3,4341" quantity="3.434114259342145" color="#1e472f"/>
              <sld:ColorMapEntry label="6,0691" quantity="6.069086401772172" color="#37744b"/>
              <sld:ColorMapEntry label="17,1811" quantity="17.18108060105617" color="#52955d"/>
              <sld:ColorMapEntry label="93,5400" quantity="93.54000404146464" color="#8cb06a"/>
              <sld:ColorMapEntry label="310,6100" quantity="310.6100248837486" color="#d1cc76"/>
              <sld:ColorMapEntry label="488,0698" quantity="488.069822015792" color="#ceb163"/>
              <sld:ColorMapEntry label="754,4096" quantity="754.4096394260533" color="#b37d3e"/>
              <sld:ColorMapEntry label="1222,9995" quantity="1222.999502083873" color="#d77f3f"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
