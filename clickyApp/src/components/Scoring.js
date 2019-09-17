import React from 'react';
import "../styles/Header.css";

function Scoring(props) {
        return (
            <div>
                <h6 id="scoringformat">Current Score: {props.score}  |  Top Score: {props.topscore} </h6>
             </div>
              )
    };

export default Scoring;