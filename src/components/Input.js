import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import './Input.css';

class Input extends Component {
  state = {
    value: null,
    isValid: false,
  }
  
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  handleInput = e => {
    const value = e.target.value.trim();
    const isValid = value.match(/^[a-z0-9]+$/i) && value.length < 11;
    this.setState({value, isValid });
  }

  handleClick = () => {
    this.props.handleClick(this.state.value);
  }

  render() {
    return (
      <div>
        <FormGroup bsSize="large" className="input">
          <FormControl
            type="text"
            onChange={this.handleInput}
          />
        </FormGroup>      
        <Button
          bsStyle="primary"
          bsSize="large"
          disabled={!this.state.isValid}
          type="button"
          onClick={this.handleClick}
        >
          Klik her
        </Button>
      </div>
    )
  }
}

export default Input;
