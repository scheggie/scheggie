import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterClicked: false
    }
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleFilterClick = function() {
    this.setState({
      filterClicked: !this.state.filterClicked
    })
  }

  render() {
    if (this.state.filterClick === false) { // not clicked
      <Button onClick = {this.toggleFilterClick}>Button</Button>
    } else if (this.state.filterClick === true){ // clicked
      <Button onClick = {this.toggleFilterClick}>Button</Button>
      <div>Cuisine</div>
      <div>Total Prep Time</div>
      <div>Number of Calories</div>
    }
  }
}

export default Filter;
