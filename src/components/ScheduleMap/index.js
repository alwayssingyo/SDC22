import React from 'react';
import { MapContainer, MapInner, MapWrap, MapText, MapTitle, MapDesc, MapLink, MapImage } from './ScheduleMapElements'
import Section from '../Section';
import Button from '../Button';

const ScheduleMap = ()=>{
	return (
    <MapContainer>
      <MapInner>
        <Section title="Offline Map">
          <MapWrap>
            <MapText>
              <MapTitle>SDC22 @ Moscone North</MapTitle>
              <MapDesc>
                Join us to lead the future of new experiences, directly from Moscone North.
              </MapDesc>
            </MapText>
            <MapImage>
              <img src={process.env.PUBLIC_URL + '/images/img-map.png'} alt=""></img>
            </MapImage>
            <MapLink>
              <Button color="white" size="medium" outline="outline">View Detailed Map</Button>
            </MapLink>
          </MapWrap>
        </Section>
      </MapInner>
    </MapContainer>
	)
}

export default ScheduleMap;