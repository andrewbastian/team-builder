import React from 'react';

const Cards = props => {

    return (

        <div>

            {props.cards.map(team => {

                return (

                    <div key = {team.id}>

                    <h2>{team.name}</h2>
                    <h3>{team.role}</h3>
                    <p>{team.email}</p>

                    </div>
                )
            })}

        </div>
    )
}
 export default Cards;
