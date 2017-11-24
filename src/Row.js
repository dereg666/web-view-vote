import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Row.css';

class Row extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="rowItem">
        <input
          className="checkBox"
          type="checkbox"
          onClick={() => this.props.check(this.props.index)}
          checked={this.props.check}
        />
        <span className="checkName">{this.props.data.itemName}</span>
      </div>
    );
  }
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  check: PropTypes.func.isRequired,
};

export default Row;
