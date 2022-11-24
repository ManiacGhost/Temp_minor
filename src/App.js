import React, { Component } from 'react';

import Header from "./components/header";
import Main from "./components/main";


class App extends Component {
  render() {
    return (
      <div className="container">
       
        <Header />
        <Main />
    
      </div>
    );
  }
}

export default App;
