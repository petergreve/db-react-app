import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPerson, hideResultModal } from './actions';
import Input from './components/Input';
import ResultModal from './components/ResultModal';
import './App.css';

class App extends Component {
  render() {
    const { onClick, showResult, hideModal, result } = this.props;
    return (
      <div className="App">
        <Input handleClick={onClick}/>
        {showResult && 
          <ResultModal
            close={hideModal}
            content={result}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    showResult: state.showResult,
    result: state.val3 && state.val5 ? state.val3 * state.val5 : 0
  }
)

const mapDispatchToProps = dispatch => (
  {
    onClick: id => dispatch(fetchPerson(id)),
    hideModal: () => dispatch(hideResultModal()),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
