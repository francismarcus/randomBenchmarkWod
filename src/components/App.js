import React, { Component } from 'react';
import './App.css';
import ListContainer from './ListContainer';
import DetailsContainer from './DetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContainer />
        <DetailsContainer />
      </div>
    );
  }
}

export default App;
