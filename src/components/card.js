import React from "react";
import "../css/style.css";
const Card = props => (
    props.players.map(items => 
        <img className="playerImage" key={items.key} src={items.url} alt={items.name}/>
));;

export default Card;