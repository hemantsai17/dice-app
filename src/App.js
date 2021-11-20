import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import RollDice from './RollDice'

class App extends Component{
  render() {
    return (
      <div className="App">
       <RollDice />
      </div>
    )
  }
}

export default App;
