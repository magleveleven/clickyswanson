import React from "react";


import "../styles/Header.css";
import StartScore from "./StartScore";


const styles = {
  
    headingStyle: {
      fontSize: 30,
      color: "#c96010",
    }
  };

function Header(props) {
    return (
      <div className="headertop">
        <h1 id="mainheader">Clicky Swanson</h1>
        <div styles={styles.headingStyle} id="navi">
          <div className="scoreArea">
            <StartScore />
          </div>
      
          <div className="container" styles={styles.headingStyle} id="playmessage">
          Play and earn points by clicking each image once, careful not to repeat any selection.......... Or don't play, I don't care.  
          </div>
        </div>
      </div> 

    );
  }

export default Header;



