import React from "react";
//import M from "materialize-css";
import "../styles/ImageArea.css";
import { Card } from 'reactstrap';
  
  

const styles = {
    imageAreaStyles: {
      background: "lightgrey",
    }
  };
  

function imageArea() {
    return (
        <section style={styles.imageAreaStyles} className="sectionTest">
            <div className="container">
            </div>
            <div className="rons">
          <ul>
            <li><img src="./ron1.jpg" alt="1"/></li>
            <li><img src="./ron2.jpg" alt="2" /></li>
          </ul>
         </div>

         <Card className="bg-dark text-white">

        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>


        </section>
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