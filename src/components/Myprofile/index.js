import React from 'react';
import {MyProfileWrap, MyProfileWrapInner, MyProfileTitle, MyProfileTop, MyProfileBox, MyProfileName, MyProfileMail, MyProfileImg, MyProfileDetail} from './MyprofileElement'
import ButtonLink from '../ButtonLink';

const MyProfile = (props)=>{
	
	return (
    <MyProfileWrap>
      <MyProfileWrapInner>
        <MyProfileTitle>My Profile</MyProfileTitle>
        <MyProfileBox>
          <MyProfileTop>
            <MyProfileImg>
              <img src={process.env.PUBLIC_URL + props.url} alt=""/>
            </MyProfileImg>
            <div>
              <MyProfileName>{props.name}</MyProfileName>
              <MyProfileMail>{props.mail}</MyProfileMail>
            </div>
          </MyProfileTop>
          <MyProfileDetail>
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
          </MyProfileDetail>
        </MyProfileBox>
      </MyProfileWrapInner>
    </MyProfileWrap>
	)
}

export default MyProfile;