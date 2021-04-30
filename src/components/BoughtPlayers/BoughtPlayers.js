import React from 'react';

const BoughtPlayers = (props) => {
    
    const {name,gaming_name,price} =props.boughtPlayer;
    return (
        <div>
            <h4>{name}({gaming_name})</h4>
            <h4>Price: $ {price}</h4>
        </div>
    );
};

export default BoughtPlayers;