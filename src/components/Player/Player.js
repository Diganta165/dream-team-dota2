import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKey } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {image,name,gaming_name,position,team,price} = props.player;
    return (
        <div className="player">
            <div>
                <img src={image} />
            </div>
            <div className="player-information">
                <h3>Ingame Name: <span>{gaming_name}</span></h3>
                <h3>Full Name: <span>{name}</span></h3>
                <h3>Position: <span>{position}</span></h3>
                <h3>Team: <span>{team}</span></h3>
                <h2>Price:$ {price}</h2>
                <button className="buy-button"
                    onClick={() => props.handleAddPlayers(props.player)}
                    >
                    <FontAwesomeIcon icon={faKey} />  Buy Player</button>



            </div>
                        
        </div>
    );
};

export default Player;