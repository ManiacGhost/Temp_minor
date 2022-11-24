import React, { Component } from 'react';
class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Jaypee Institute of Infomation Technology</li>
          </ul>
          <ul>
              <li><a href="MainForm.html">Form</a></li>
              <li><a href="https://webportal.jiit.ac.in:6010/employeeportal/">Webportal</a></li>
              <li><a href="#contact">Creators</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
