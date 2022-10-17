import React from 'react';
import * as S from './style'
import Section from '../Section';
import Button from '../Button';

const ScheduleMap = ()=>{
	return (
    <S.MapContainer>
      <S.MapInner>
        <Section title="Offline Map">
          <S.MapWrap>
            <S.MapText>
              <S.MapTitle>SDC22 @ Moscone North</S.MapTitle>
              <S.MapDesc>
                Join us to lead the future of new experiences, directly from Moscone North.
              </S.MapDesc>
            </S.MapText>
            <S.MapImage>
              <img src={process.env.PUBLIC_URL + '/images/img-map.png'} alt=""></img>
            </S.MapImage>
            <S.MapLink>
              <Button color="white" size="medium" outline="outline">View Detailed Map</Button>
            </S.MapLink>
          </S.MapWrap>
        </Section>
      </S.MapInner>
    </S.MapContainer>
	)
}

export default ScheduleMap;