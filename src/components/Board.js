import React from 'react';
import Card from './Card';


export default class Board extends React.Component {

    state = {
        cards: []
    };

    createCard = (event) => {
        //TODO check how to get width and heigth / 2
        const x = event.clientX - 50;
        const y = event.clientY - 75;
        return this.setState(prevState => (
            {
                cards: [...prevState.cards,
                <Card positionX={x} positionY={y} key={prevState.cards.length + 1} >
                    {prevState.cards.length + 1}
                </Card>]
            }
        ));
    }

    render() {
        return (
            <div className="board" onClick={this.createCard}>
                {this.state.cards}
            </div>);
    }
}


