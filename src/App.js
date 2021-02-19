import React, { Component } from 'react';
import Lottery from './Lotto/Lottery';
import CoinFlip from './CoinFlip/CoinFlip';
import BoxContainer from './ColorBoxes/BoxContainer';
import './App.css';

class App extends Component {
  render() {
      return (
        <div className="App">
          <div className='Header'><h1>Lotto Exercise</h1></div>
          <div>
            <Lottery />
            <Lottery title="Mini Daily" numBalls={4} maxNum={40} />
          </div>
          <div className='Header'><h1>CoinFlip Exercise</h1></div>
          <div>
            <section><CoinFlip /></section>
          </div>
          <div className='Header'><h1>ColorBoxes Exercise</h1></div>
            <BoxContainer />
        </div>
    );
  }
}

export default App;
