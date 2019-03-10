import React, { Component } from 'react';


export default class Card extends Component {

    state = {
        positionX: this.props.positionX,
        positionY: this.props.positionY,
        sideUp: true
    }

    moveCard = (event) => {
        this.setState({
            positionX: event.clientX - 50,
            positionY: event.clientY - 75
        });
    }
    rotateCard = (event) => {
        event.stopPropagation();
        this.setState(prev =>
            ({ ...prev, sideUp: !prev.sideUp })
        );
    }

    render() {
        let style = {
            left: this.state.positionX,
            top: this.state.positionY,
        }
        return (

            <div className={"card " + (!this.state.sideUp ? "flipped" : "")} style={style} onDragEnd={this.moveCard} draggable onClick={this.rotateCard}>
                <div className="face front" >
                    {this.props.children}
                </div >
                <div className="face back" />
            </div>

        )
    }

}