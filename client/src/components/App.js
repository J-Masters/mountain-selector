import React, { Component } from 'react';
import '../styles/App.css';

import Header from './Header';
import RankingsForm from './RankingsForm';
import MountainList from '../containers/MountainList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RankingsForm />
        <MountainList />
      </div>
    );
  }
}

export default App;
