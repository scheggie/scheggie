import React from 'react';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.debouncedSearch = _.debounce(
      this.props.actions.updateSearchTerm,
      500
    );
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm(event) {
    this.debouncedSearch(event.target.value);
    this.setState({searchTerm: event.target.value});
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
            <FlatButton
              label="Favorites"
              hoverColor='rgb(40, 130, 150)'
              rippleColor='#E1F5FE'
              onClick={this.props.actions.updateSearchType}
            />
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
              onChange={this.updateSearchTerm}
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
            src="http://i.imgur.com/3RjUCdI.png"
            alt="Scheggie: The vegetarian's meal planner"
          />
        </div>
      </div>
    );
  }
}

export default Search;

// <FlatButton
//   label="Search"
//   hoverColor='rgb(40, 130, 150)'
//   rippleColor='#E1F5FE'
// />
