import React, { Component } from 'react';
import signform from './signform';

class Main extends Component {
  render() {
    return (
      <main>
       
     
        

        
        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>  
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>
         
        </div>

       

        <section id="contact">
            
            <signform />
          
        </section>

       
      </main>
    );
  }
}

export default Main;
