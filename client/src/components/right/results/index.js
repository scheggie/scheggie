import React from 'react';
import Entry from './entry';

class Results extends React.Component {
  constructor(props) {
    console.log('full data', props.data);
    super(props);
  };

  render() {
    return (
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'center',
          alignContent: 'center',
          padding: '0px 30px 0px 30px'
        }}>
        
        {
          this.props.data.map(recipe => 
            <div>
              <Entry recipe={recipe}/>
              <span style={{
                height: '5px'
              }}></span>
            </div>
          )
        } 

      </div>
    )
  }
}

export default Results;


