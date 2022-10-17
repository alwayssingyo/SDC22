import React from 'react';
import * as S from './style'
import ButtonLink from '../ButtonLink';

const MyProfile = (props)=>{
	
	return (
    <S.MyProfileWrap>
      <S.MyProfileWrapInner>
        <S.MyProfileTitle>My Profile</S.MyProfileTitle>
        <S.MyProfileBox>
          <S.MyProfileTop>
            <S.MyProfileImg>
              <img src={process.env.PUBLIC_URL + props.url} alt=""/>
            </S.MyProfileImg>
            <div>
              <S.MyProfileName>{props.name}</S.MyProfileName>
              <S.MyProfileMail>{props.mail}</S.MyProfileMail>
            </div>
          </S.MyProfileTop>
          <S.MyProfileDetail>
            <ButtonLink className='btn-edit' url={props.editLink} color="border" size="small">Edit</ButtonLink>
            <table>
              <colgroup className='col'>
                <col width="30%"/>
                <col width="70%"/>
              </colgroup>
              <thead><span>Registered Information</span></thead>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{props.registerName}</td>
                </tr>
                <tr>
                  <th>Registration Type</th>
                  <td>{props.type}</td>
                </tr>
                <tr>
                  <th>Information</th>
                  <td>
                    <span>{props.country}</span>
                    <span>{props.company}</span>
                    <span>{props.occupation}</span>
                    <span>{props.jobLevel}</span>
                    <span>{props.phone}</span>
                  </td>
                </tr>
                <tr>
                  <th>Which topic are you most excited about?</th>
                  <td>{props.topic}</td>
                </tr>
              </tbody>
            </table>
          </S.MyProfileDetail>
        </S.MyProfileBox>
      </S.MyProfileWrapInner>
    </S.MyProfileWrap>
	)
}

export default MyProfile;