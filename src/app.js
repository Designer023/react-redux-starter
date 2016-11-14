import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Test</h1>
        <p>contents</p>
      </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);
