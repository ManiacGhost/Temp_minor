import React, { Component } from 'react';

class Form extends Component {
  constructor(){
      super();
      this.state = {
          name : "",
          email : "",
          desig : "",
          quali : "",
          depart : "",
          doj : "",
          init_desig : "",
          pres_pay : "",
          specialz : "",
          add_quali : "",
          higher : "",
          formError: false
      }
  }

  getName = (e) =>{
    let username = e.target.value; 
    this.setState({
        name: username
    });
    console.log(this.state.name);
  }
  
  
  getEmail = (e) =>{
    let userEmail = e.target.value; 
    //the most important thing is that we use a RegEx
    //in order to manage the input of the email
    //at least we can get a some what valid email
    if(userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
      this.setState({
        email: userEmail
    });
      }else{
        this.setState({
          email: ""
      });
      console.log("Incorrect Email, must match Expression");
    }
  
    console.log(this.state.email);
  }

  
  getDescription = (e) =>{
    let userMessage = e.target.value; 
    this.setState({
        message: userMessage
    });
    console.log(this.state.message);
  }
  //send the form
  submitForm = (e) =>{
    e.preventDefault();

    if(this.state.name === "" || this.state.email === "" || this.state.desig === "" || this.state.quali === "" || this.state.depart === "" || this.state.doj || this.state.init_desig === "" ||this.state.pres_pay===""||this.state.specialz===""||this.state.add_quali===""||this.state.higher===""){
     this.setState({
        formError: true
        
     })
       return false;
    }else{
        this.setState({
            formError: false
         })
        console.log(`UserData: {
            Username: ${this.state.name},
            Email: ${this.state.email},
            
        }`)
    
    
        console.log("form sent")
    
    }
 
  }

  render() {

  

    return (

        <form>
          {/* I am just sending a basic error message */}
              {this.state.formError &&
                <p className="error">
                    Fill all the input fields please.
                </p>
              }
              <p>Fill in the next form to send us a message</p>
              
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getName} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="We will contact you after reviewing your message" onChange={this.getEmail} />
              </div>
              <div>
                <label htmlFor="name">Designation</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getdesig} />
              </div><div>
                <label htmlFor="name">Qualification</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getquali} />
              </div>
              <div>
                <label htmlFor="name">Department</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getdepart} />
              </div>
              <div>
                <label htmlFor="name">Date of Joining</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getdoj} />
              </div>
              <br/>
              <div>
                <label htmlFor="name">Initial Designation</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getinit_desig} />
              </div>
              <div>
                <label htmlFor="name">Present payscale</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getpres_pay} />
              </div>
              <div>
                <label htmlFor="name">Specialization</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getspecialz} />
              </div>
              <div>
                <label htmlFor="name">Additional Qualification</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getadd_quali} />
              </div>
              <div>
                <label htmlFor="name">Pursuing higher Studies</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.gethigher} />
              </div>
              <div>
                <p>Get the PDF</p>
                <input type="submit" name="submit" value="Send" onClick= {this.submitForm} />

              </div>
              
            </form>
    );
  }
}

export default Form;
