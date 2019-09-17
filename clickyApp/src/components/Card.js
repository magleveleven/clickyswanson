import React from 'react';

    
function CardImages(props) {
        return (
            <div className="container" style={{ width: '10rem'}}>
              <img src={props.image} onClick={ () => {props.cardClick(props.id)} } alt={props.id} className="rowform"/>
            </div>
              );
    }

export default CardImages;