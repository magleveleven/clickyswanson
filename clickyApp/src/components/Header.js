import React from "react";
import "../styles/Header.css";

const styles = {
    headerStyle: {
      background: "red"
    },
    headingStyle: {
      fontSize: 100
    }
  };

function Header() {
    return (
      <header style={styles.headingStyle} className="header">
        <h1 style={styles.headingStyle}>Clicky Swanson</h1>
      </header> 
    );
  }

export default Header;
