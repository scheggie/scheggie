import React from 'react';
import Entry from './entry';

const Results = () => (

  <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignContent: 'center',
      padding: '15px 30px 15px 30px'
    }}>

    <Entry />
      <span style={{
        height: '5px'
      }}></span>
    <Entry />
      <span style={{
        height: '5px'
      }}></span>
    <Entry />
      <span style={{
        height: '5px'
      }}></span>
    <Entry />
      <span style={{
        height: '5px'
      }}></span>
    <Entry />
      <span style={{
        height: '5px'
      }}></span>
    <Entry />
      <span style={{
        height: '5px'
      }}></span>
      
  </div>

)

export default Results;