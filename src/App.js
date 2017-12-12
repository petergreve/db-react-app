import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    isValid: false,
  }
  
  render() {
    return (
      <div className="App">
        <input type="text" />      
        <button
          disabled={this.state.isValid}
          type="button"
          onClick="alert('Hello World!')"
        >
          Klik her
        </button>      
      </div>
    );
  }
}

export default App;
