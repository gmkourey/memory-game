import React from "react";
import Card from "./card";

class GameContainer extends React.Component {

    state = {
        score: 0,
        highScore: 0,
        pickedArray: []
    };

    resetGame = () => {
        const zero = 0;
        this.setState({score: zero, pickedArray: []});

        if(this.state.score > this.state.highScore) {
            this.setState({highScore: this.state.score});
        }
    }

    handlerFunction = (id) => {
        if(this.state.pickedArray.includes(id)) {
            alert("Game Over");
            this.resetGame();
            console.log(this.state.highScore);
        } else {
            this.state.pickedArray.push(id);
            this.setState({score: this.state.score + 1, pickedArray: this.state.pickedArray});
            //Randomize array
            this.props.players.sort(function() { 
                return 0.5 - Math.random() 
            });


        }

        console.log(this.state.pickedArray, this.state.highScore);
    }

    render() {

    return (
        <div className="container">
        <h2>Current Score: {this.state.score}</h2>
        <h2>High Score: {this.state.highScore}</h2>
            <Card handlerFunction={this.handlerFunction} players={this.props.players}/>
        </div>
    )
    }
}

export default GameContainer;