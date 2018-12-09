import React, { Component } from 'react';
import './App.css';
import Header from './components/main/Header';
import Menu from './components/menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
