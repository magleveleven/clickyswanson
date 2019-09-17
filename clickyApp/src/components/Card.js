import React from 'react';

    
function CardImages(props) {
        return (
            <div className="row" style={{ width: '10rem'}}>
              <img src={props.image} onClick={ () => {props.cardClick(props.id)} } alt={props.id} className="row"/>
            </div>
              );
    }

export default CardImages;