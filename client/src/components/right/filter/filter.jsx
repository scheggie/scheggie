import React from 'react';
import Panel from './panel.jsx';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterClicked: false
    }
    this.toggleFilterClick = this.toggleFilterClick.bind(this);
  }

  toggleFilterClick() {
    this.setState({
      filterClicked: !this.state.filterClicked
    })
  }

  render() {

      if (this.state.filterClicked === false) {
        return (
          <button onClick = {this.toggleFilterClick}>Filter Button</button>
        )
      } else {
        return (
          <div>
            <button onClick = {this.toggleFilterClick}>Filter Button</button>
              <div>
                <div>Cuisine</div>
                <Panel choices = {['Italian', 'Mexican']} category = 'cuisine' selectCategory = "Cuisine"/>
              </div>
              <div>
                <div>Total Prep Time</div>
                <Panel choices = {['18000', '250000']} category = 'totalTimeInSeconds' selectCategory = "Prep Time"/>
              </div>
              <div>
                <div>Calories</div>
                <Panel choices = {['400', '250000']} category = 'calories' selectCategory = "# of Calories"/>
              </div>
          </div>
        )
      }
  }
}

export default Filter;

/*

if (this.state.filterClick === false) { // not clicked
  <Button onClick = {this.toggleFilterClick}>Button</Button>
} else if (this.state.filterClick === true){ // clicked
  <div>
    <Button onClick = {this.toggleFilterClick}>Button</Button>
    <div>
      <div>Cuisine</div>
      <Panel choices = {['Italian', 'Mexican']} category = 'cuisine'/>
    </div>
    <div>
      <div>Total Prep Time</div>
      <Panel choices = {['18000', '250000']} category = 'totalTimeInSeconds'/>
    </div>
    <div>
      <div>Calories</div>
      <Panel choices = {['400', '250000']} category = 'calories' />
    </div>
  </div>
}

*/
