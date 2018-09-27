import React from 'react';
import Card from "./components/card.js";
import GameContainer from "./components/gameContainer.js";
import players from "./players.json";


const App = () => (
<GameContainer>
<Card players={players}/>
</GameContainer>
)

export default App;
