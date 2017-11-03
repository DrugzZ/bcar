import React, { Component } from 'react';
import Header from './Header';
import TopBar from './TopBar';
import Main from './Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<TopBar />
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
