import React from 'react';


    
function Card (props) {
        return (
            <div className="card" style={{ width: '12rem'}}>
              <img className="image" onClick={() => props.clickedCard(props.id)} src={props.image} alt={props.id}/>
              </div>
              )
    };

export default Card;