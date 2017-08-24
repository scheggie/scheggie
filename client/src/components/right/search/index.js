import React from 'react';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Filter from '../filter/filter.jsx'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filter: {cuisine: '',
               totalTimeInSeconds: 10000,
               calories: 50000
              },
    };
    this.debouncedSearch = _.debounce(
      this.props.actions.updateSearchThunk,
      300
    );
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.debouncedSearch(event.target.value, this.state.filter);
    this.setState({searchTerm: event.target.value});
  }

  updateFilter(filter) {
    this.setState({
      filter: filter
    })
    this.debouncedSearch(this.state.searchTerm, filter);
  }

  getFavoritesButton() {
    let toggled = this.props.searchType === 'FAVORITES';

    return (
      toggled ?
        <RaisedButton
          label="Favorites"
          labelColor='white'
          backgroundColor='rgb(40, 130, 150)'
          rippleColor='#E1F5FE'
          onClick={this.props.actions.updateSearchType}
        /> :
        <RaisedButton
          label="Favorites"
          onClick={this.props.actions.updateSearchType}
        />
    )
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '15px'
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
        }}>
          <div style={{
            paddingLeft: '30px'
          }}>
            { this.getFavoritesButton() }
          </div>
          <div style={{
            paddingLeft: '30px'
          }}>
            <TextField
              hintText="Find recipes..."
              textareaStyle={{
                backgroundColor: 'gray'
              }}
              underlineFocusStyle={{
                borderColor: 'rgb(40, 130, 150)',
                borderBottomStyle: 'solid',
                borderBottomWidth: 2,
                transform: 'scaleX(0)',
              }}
              style={{
                width: '500px'
              }}
              value={this.state.searchTerm}
              onChange={this.updateSearch}
            />
            <span style={{width: '30px'}}></span>
          </div>
        </div>
        <div style={{
          paddingRight: '30px'
        }}>
          <img
            style={{
              height: '100px'
            }}
            src="https://i.imgur.com/3RjUCdI.png"
            alt="Scheggie: The vegetarian's meal planner"
          />
        </div>
        <Filter options = {this.state.filter}/>
      </div>
    );
  }
}

export default Search;
