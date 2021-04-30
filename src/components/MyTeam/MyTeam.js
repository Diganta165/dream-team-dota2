import React from 'react';
import BoughtPlayers from '../BoughtPlayers/BoughtPlayers';
import './MyTeam.css';
const MyTeam = (props) => {
    
    const team =props.team;
    const totalPrice = team.reduce((total,player) => total + player.price,0)
    
    return (
        <div className="my-team">
            <h1>My Team</h1>
            <p>Players Bought: {team.length}</p>
            <p>Total Price: ${totalPrice}</p>
            
                {
                    team.map(boughtPlayer => <BoughtPlayers boughtPlayer ={boughtPlayer} key={boughtPlayer.id}></BoughtPlayers>)
                }
            

        </div>
    );
};

export default MyTeam;