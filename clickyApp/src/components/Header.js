import React from "react";
import "../styles/Header.css";

const styles = {
    headerStyle: {
      color: "orange"
    },
    headingStyle: {
      fontSize: 10
    }
  };

function Header() {
    return (
      <header style={styles.headingStyle} id="header">
        <h1>Clicky Swanson</h1>
        <nav styles={styles.headingStyle} id="navi">- - -</nav>
      </header> 

    );
  }

export default Header;



