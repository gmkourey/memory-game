import React from "react";
import "../css/style.css";
const Card = props => (
    props.players.map(items =>
        <img className="playerImage" key={items.key} data-id={items.key} src={items.url} alt={items.name} onClick={() => props.handlerFunction(items.key)}/>
));

export default Card;