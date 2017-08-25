import React from 'react';
import Panel from './panel.jsx';
import SvgIcon from 'material-ui/SvgIcon';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-drop-up';

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
           <div>
             <span onClick = {this.toggleFilterClick}>Show Filters<ArrowDown/></span>
           </div>


        )
      } else {
        return (
          <div>
            <span onClick = {this.toggleFilterClick}>Hide Filters<ArrowUp/></span>
              <div>
                <span>
                  <Panel
                    choices = {['Italian', 'Mexican', 'Chinese', 'Kid-Friendly', 'Barbeque', 'Thai', 'French', 'Japanese', 'English', 'Korean', 'Indian','American'].sort()}
                    category = 'cuisine'
                    selectCategory = "Cuisine"
                    default =""
                    updateCategoryTerm = {this.updateCategoryTerm}
                  />
                </span>

                <span>
                  <Panel
                    choices = {['900', '1800', '3600', '5400']}
                    category = 'totalTimeInSeconds'
                    selectCategory = "Prep Time (Min)"
                    default = ""
                    updateCategoryTerm = {this.updateCategoryTerm}
                  />
                </span>

                <span>
                  <Panel
                    choices = {['50', '100', '150', '200', '250', '300']}
                    category = 'calories'
                    selectCategory = "Calories / Serving"
                    default = ""
                    updateCategoryTerm = {this.updateCategoryTerm}
                  />
                </span>

              </div>

            </div>
        )
      }
  }
}

export default Filter;
