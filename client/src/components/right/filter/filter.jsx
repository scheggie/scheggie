import React from 'react';
import Panel from './panel.jsx';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterClicked: false
    }
    this.toggleFilterClick = this.toggleFilterClick.bind(this);
    this.updateCategoryTerm = this.updateCategoryTerm.bind(this);
  }

  toggleFilterClick() {
    this.setState({
      filterClicked: !this.state.filterClicked
    })
  }

  updateCategoryTerm(category, term) {
    this.props.updateCategoryTerm(category, term);
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
                <Panel
                  choices = {['Italian', 'Mexican', 'Chinese', 'Kid-Friendly', 'Barbeque', 'Thai', 'French', 'Japanese', 'English', 'Korean', 'American']}
                  category = 'cuisine'
                  selectCategory = "Cuisine"
                  default =""
                  updateCategoryTerm = {this.updateCategoryTerm}
                />
              </div>
              <div>
                <div>Total Prep Time</div>
                <Panel
                  choices = {[900, 1800, 3600, 5400]}
                  category = 'totalTimeInSeconds'
                  selectCategory = "Prep Time"
                  default = {10000}
                  updateCategoryTerm = {this.updateCategoryTerm}
                />
              </div>
              <div>
                <div>Calories</div>
                <Panel
                  choices = {[50, 100, 150, 200, 250, 300]}
                  category = 'calories'
                  selectCategory = "# of Calories per serving"
                  default = ""
                  updateCategoryTerm = {this.updateCategoryTerm}
                />
              </div>
          </div>
        )
      }
  }
}

export default Filter;
