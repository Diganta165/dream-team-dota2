import React, { useState } from 'react';
import playersData from '../../playersData/playersData.json'
import MyTeam from '../MyTeam/MyTeam';
import Player from '../Player/Player';
import './MakeTeam.css'
const MakeTeam = () => {

    const allData = playersData;
    const [players, setPlayers] = useState(allData);
    const [team, setTeam] = useState([]);

    const handleAddPlayers = (player) =>{
        
        const newTeam =[...team,player];
        setTeam(newTeam);
    }

    return (
        <div className="players-and-myTeam-container">
            <div className="players-container">
            <h1> DOTA2 Players</h1>
            
            
            {
                players.map(gamer => 
                   <Player
                   handleAddPlayers = {handleAddPlayers} key={gamer.id}
                   player ={gamer}></Player> 
                )
            }
            
            </div>
            <div className="myTeam-container">
                
                <MyTeam team ={team}></MyTeam>

            </div>

        </div>
    );
};

export default MakeTeam;