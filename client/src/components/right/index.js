import React from 'react';
import Search from './search';
import Results from './results';


class Right extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (

      <div style={{flexGrow: 2, flexBasis: '67%'}}>
        <Search />
        <div style={{
          height: '87%',
          overflowY: 'scroll'
        }}>
          <Results />
        </div>
      </div>

    )

  }

} 


export default Right;