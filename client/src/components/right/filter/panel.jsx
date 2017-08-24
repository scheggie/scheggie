import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <select>
          <option>Select {this.props.selectCategory}</option>
          {this.props.choices.map((choice, index) =>
            <option value = {choice} key = {index}>{choice}</option>
          )}
        </select>
      </div>
    )
  }
}

export default Panel;
