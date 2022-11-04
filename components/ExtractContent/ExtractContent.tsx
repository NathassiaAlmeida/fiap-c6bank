import React from 'react'
import styled from '@emotion/styled';
import ExtractHeader from '../ExtractHeader';
import ExtractData from '../ExtractData';
import ExtractTotal from '../ExtractTotal';
import db from '../utils/db';

const ExtractContentContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
` 

export default function ExtractContent() {
  return (
    <ExtractContentContainer>
        <ExtractHeader/>
        <ExtractTotal/>
        <ExtractData db={db} />
        <ExtractTotal/>
    </ExtractContentContainer>

  )
}
