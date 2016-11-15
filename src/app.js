import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Page headline</h1>
        <p>Demo clicks: { this.props.example.count }</p>
        <button onClick={ this.props.actions.incrementCounter }>Click me!</button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    example: state.example
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
