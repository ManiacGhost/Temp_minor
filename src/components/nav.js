import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainform from './Mainform.js';
class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Jaypee Institute of Infomation Technology</li>
          </ul>
          <ul>
              <li><a href="MainForm.html">Form</a></li>
              <BrowserRouter>
              <Routes>
                <Route path ="FORMS" element={<Mainform/>}/>
              </Routes>
              </BrowserRouter>
              <li><a href="https://webportal.jiit.ac.in:6010/employeeportal/">Webportal</a></li>
              <li><a href="#contact">Creators</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
