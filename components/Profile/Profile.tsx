import React from 'react'
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';


const ProfileContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
color: #f8f8f8;
font-family: sans-serif;
background-color: #242424;
width: 100%;
padding-bottom: 20px;
h2, h3 {
  margin: 0;
  font-weight: 500;
}
h2 {
  margin-top: 10%;
}
`
const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`

export default function Profile() {
  return (
    <ProfileContainer>
        <AvatarContainer>
          <Avatar alt="Nathássia Almeida" src="https://avatars.githubusercontent.com/u/97567583?s=400&u=b97255161729f780e96b868eb2a28d373427ebb8&v=4" sx={{width: 200, height: 200}}/>
             <h2>Nathássia Almeida</h2>
             <h3>Assoc | Intern</h3>
        </AvatarContainer>
    </ProfileContainer>
  )
}
