import React from "react";
import "../styles/Header.css";

const styles = {
    headerStyle: {
      color: "pink"
    },
    headingStyle: {
      fontSize: 10
    }
  };

function Header() {
    return (
      <header style={styles.headingStyle} className="header">
        <h1>Clicky Swanson</h1>
        <nav styles={styles.headingStyle} className="navi">score box area</nav>
      </header> 

    );
  }

export default Header;



