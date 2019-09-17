import React from 'react';

    
function CardImages(props) {
        return (
            <div className="card" style={{ width: '10rem'}}>
              <img src={props.image} onClick={ () => {props.handleCardClick(props.id)} } alt={props.id} className="image"/>
              </div>
              );
    }

export default CardImages;