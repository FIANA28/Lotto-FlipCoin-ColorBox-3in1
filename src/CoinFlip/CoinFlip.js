import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin'
import './CoinFlip.css'

class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: 'https://images.freeimages.com/images/large-previews/4fc/silver-quarter-1240791.jpg'},
            {side: 'tails', imgSrc: 'https://images.freeimages.com/images/large-previews/7b6/silver-quarter-1240798.jpg'}
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                numFlips: st.numFlips + 1,
                numHeads: st.numHeads + (newCoin.side === 'heads' ? 1 : 0 ),
                numTails: st.numTails + (newCoin.side === 'tails' ? 1 : 0)
            };
        });
    }
    handleClick(e) {
        this.flipCoin();
    }
    render() {
        return (
            <div className="CoinFlip">
                <h2>Let's Flip A Coin!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin} /> }
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.numFlips} flips, there have been {this.state.numHeads}{" "} heads and {this.state.numTails}{" "} tails.</p>
            </div>
        )
    }
}

export default CoinFlip;