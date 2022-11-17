import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>Automation of <br/> Teacher's appraisal form</h1>
            <div>
              <p><h2>EASE OF ACCESS , JUST A CLICK AWAY</h2><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
              
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
