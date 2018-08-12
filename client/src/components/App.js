import React, { Component } from 'react';
import '../styles/App.css';

import Header from './Header';
import MountainList from '../containers/MountainList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <MountainList />
      </div>
    );
  }
}

export default App;
