import React from 'react';
import _ from 'lodash';
import Search from './search';
import Results from './results';
import data from '../../../../sampleData.js';

const filterFavorites = (favorites, searchTerm) => {
  return _.filter(favorites, (value, key) => {
    return value.fullData.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.prepareResults(props);
  };

  prepareResults(props) {
    if (props.search.searchType === 'FAVORITES') {
      this.results = filterFavorites(props.favorites, props.search.searchTerm);
    } else {
      this.results = data;
    }
  }

  componentWillReceiveProps(nextProps) {
    this.prepareResults(nextProps);
  }

  render() {
    return (
      <div style={{flexGrow: 2, flexBasis: '67%'}}>
        <Search
          actions={this.props.actions}
          searchTerm={this.props.search.searchTerm}
        />
        <div style={{
          height: '87%',
          overflowY: 'scroll'
        }}>
          <Results
            data={this.results}
            actions={this.props.actions}
            favorites={this.props.favorites}
          />
        </div>
      </div>
    )
  }
}

export default Right;
