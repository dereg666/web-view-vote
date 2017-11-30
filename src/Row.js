import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Row extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="rowItem">
        <div className="rowText">
          {this.props.data.isCheck ?
            <i
              className="material-icons checked"
              onClick={() => this.props.check(this.props.index)}
              onKeyDown={() => this.props.check(this.props.index)}
            >check_circle
            </i> :
            <i
              className="material-icons unChecked"
              onClick={() => this.props.check(this.props.index)}
              onKeyDown={() => this.props.check(this.props.index)}
            >radio_button_unchecked
            </i>
          }
          <span className="checkName">{this.props.data.itemName}</span>
        </div>
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
