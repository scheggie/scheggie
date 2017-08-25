import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('the value clicked is ', event.target.value)
    //var selected = ''
    if (event.target.value.includes('Select')) {
      this.setState({
        selected: this.props.default
      }, function() {
        this.props.updateCategoryTerm(this.props.category, this.state.selected);
      })
      //selected = this.props.default
    } else {
        this.setState({
          selected:event.target.value
        }, function() {
          this.props.updateCategoryTerm(this.props.category, this.state.selected);
        })
      //selected = event.target.value
    }

  }

  render() {
    if (this.props.category === 'totalTimeInSeconds') {
      return (
        <div>
          <select onChange = {this.handleClick}>
            <option>Select {this.props.selectCategory}</option>
            {this.props.choices.map((choice, index) =>
              <option value = {choice} key = {index}>{choice/60} Min</option>
            )}
          </select>
        </div>
      )
    } else {
      return (
        <div>
          <select onChange = {this.handleClick}>
            <option>Select {this.props.selectCategory}</option>
            {this.props.choices.map((choice, index) =>
              <option value = {choice} key = {index}>{choice}</option>
            )}
          </select>
        </div>
      )
    }
  }
}

export default Panel;
