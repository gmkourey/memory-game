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
        } else {
            this.state.pickedArray.push(id);
            this.setState({score: this.state.score + 1, pickedArray: this.state.pickedArray});
            //Randomize array
            const currentScore = this.state.score;
            if((currentScore + 1) === this.props.players.length) {
                alert("You Guessed All Of Them Correctly!");
                this.resetGame();
            }
            this.props.players.sort(function() { 
                return 0.5 - Math.random() 
            });


        }
    }

    render() {

    return (
        <div>
        <div className="jumbotron">
            <h1>Time to Play the Action Hero Matching Game!</h1>
            <div className="container">
            <h3>Click on each player only <i>once</i>, if you click on them twice, you lose the game. Can you select all {this.props.players.length}? </h3>
            </div>
        </div>
        <div className="container">
        <h2>Current Score: {this.state.score}</h2>
        <h2>High Score: {this.state.highScore}</h2>
            <Card handlerFunction={this.handlerFunction} players={this.props.players}/>
        </div>
        </div>
    )
    }
}

export default GameContainer;