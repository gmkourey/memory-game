import React from "react";
import Card from "./card";

class GameContainer extends React.Component {

    state = {
        score: 0,
        highScore: 0,
        pickedArray: []
    };

    handlerFunction = (id) => {
        if(this.state.pickedArray.includes(id)) {
            alert("Game Over");
            this.setState({score: this.state.score + 1, pickedArray: []});
        } else {
            this.state.pickedArray.push(id);
            this.setState({score: this.state.score + 1, pickedArray: this.state.pickedArray});
        }

        console.log(this.state.pickedArray);
    }

    render() {

    return (
        <div className="container">
            <Card handlerFunction={this.handlerFunction} players={this.props.players}/>
        </div>
    )
    }
}

export default GameContainer;