import React from "react";
import "../styles/ImageArea.css";
  
  



function imageArea(props) {
    return (
        <div>
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default imageArea; 

//Do I need a component for image arrangement that's different than Image area? 

//Or how do we get the images displayed? 
    //Defalut image click on value to flase, onevent click, if true, 
    //game over (if current score > Top Score, make current score new Top Score, if less than, distregard), 
        // animate cards
        // shuffle cards
    //if false, turn to True, increment point
        // shuffle cards

//Spend some time reviewing JSX.....

//{Math.floor(Math.random() * 10) + 1},{Math.floor(Math.random() * 10) + 1},
//{Math.floor(Math.random() * 10) + 1}