import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    // need to look shorhten number of times and make a bunch of boxes
    static defaultProps = {
        numBoxes: 18,
        allColors: [
            'red', 'green', 'pink', 'yellow', 'blue', 'smokewhite', 'black', 'brown', 'white'
        ]
    }
    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (
                <Box colors={this.props.allColors} />
        ));
        return <div className="BoxContainer">{ boxes } </div>
    }
}

export default BoxContainer;