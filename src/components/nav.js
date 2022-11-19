import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Jaypee Institute of Infomation Technology</li>
          </ul>
          <ul>
              <li><a href="#contact">Form</a></li>
              <li><a href="https://webportal.jiit.ac.in:6010/employeeportal/">Webportal</a></li>
              <li><a href="creators.html">Creators</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
