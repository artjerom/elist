import React, { Component } from 'react';
import { RecordPlayer } from './components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecordPlayer />
      </div>
    );
  }
}

export default App;
